import { isProduction } from "../../../config"
import { IAuthService } from "../../../modules/users/services/authService"

import rateLimit from "express-rate-limit"

export class Middleware {
  private authService: IAuthService

  constructor(authService: IAuthService) {
    this.authService = authService
  }

  private endRequest(status: 400 | 401 | 403, message: string, res: any): any {
    return res.status(status).send({ message })
  }

  public includeDecodedTokenIfExists() {
    return async (req, res, next) => {
      const token = req.headers["authorization"]
      // Confirm that the token was signed with our signature.
      if (token) {
        const decoded = await this.authService.decodeJWT(token)
        const signatureFailed = !!decoded === false

        if (signatureFailed) {
          return this.endRequest(403, "Token signature expired.", res)
        }

        // See if the token was found
        const { email } = decoded
        const tokens = await this.authService.getTokens(email)

        // if the token was found, just continue the request.
        if (tokens.length !== 0) {
          req.decoded = decoded
          return next()
        } else {
          return next()
        }
      } else {
        return next()
      }
    }
  }

  public ensureAuthenticated() {
    return async (req, res, next) => {
      const token = req.headers["authorization"]
      // Confirm that the token was signed with our signature.
      if (token) {
        const decoded = await this.authService.decodeJWT(token)
        const signatureFailed = !!decoded === false

        if (signatureFailed) {
          return this.endRequest(403, "Token signature expired.", res)
        }

        // See if the token was found
        const { email } = decoded

        const tokens = await this.authService.getTokens(email)

        // if the token was found, just continue the request.
        if (tokens.length !== 0) {
          req.decoded = decoded
          return next()
        } else {
          return this.endRequest(403, "Auth token not found. User is probably not logged in. Please login again.", res)
        }
      } else {
        return this.endRequest(403, "No access token provided", res)
      }
    }
  }

  public ensureAuthRole() {
    return async (req, res, next) => {
      const auth_role = req.headers["auth_role"]
      // Confirm that the auth role is specified in header.
      if (auth_role) {
        return next()
      } else {
        return this.endRequest(403, "No auth role provided", res)
      }
    }
  }

  public static createRateLimit(mins: number, maxRequests: number) {
    return rateLimit({
      windowMs: mins * 60 * 1000,
      max: maxRequests,
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
  }

  public isPermitted(role: string) {
    return async (req, res, next) => {
      if (req.decoded) {
        const { roles } = req.decoded
        if (roles.length) {
          return roles.includes(role) ? next() : this.endRequest(403, "Invalid User Permission. User doesn't have permission to access resource", res)
        } else {
          this.endRequest(403, "Invalid User Permission. User doesn't have permission to access resource", res)
        }
      } else {
        return this.endRequest(403, "Invalid User Auth", res)
      }
    }
  }
}
