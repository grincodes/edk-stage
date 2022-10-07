"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
class Middleware {
    constructor(authService) {
        this.authService = authService;
    }
    endRequest(status, message, res) {
        return res.status(status).send({ message });
    }
    includeDecodedTokenIfExists() {
        return async (req, res, next) => {
            const token = req.headers["authorization"];
            // Confirm that the token was signed with our signature.
            if (token) {
                const decoded = await this.authService.decodeJWT(token);
                const signatureFailed = !!decoded === false;
                if (signatureFailed) {
                    return this.endRequest(403, "Token signature expired.", res);
                }
                // See if the token was found
                const { email } = decoded;
                const tokens = await this.authService.getTokens(email);
                // if the token was found, just continue the request.
                if (tokens.length !== 0) {
                    req.decoded = decoded;
                    return next();
                }
                else {
                    return next();
                }
            }
            else {
                return next();
            }
        };
    }
    ensureAuthenticated() {
        return async (req, res, next) => {
            const token = req.headers["authorization"];
            // Confirm that the token was signed with our signature.
            if (token) {
                const decoded = await this.authService.decodeJWT(token);
                const signatureFailed = !!decoded === false;
                if (signatureFailed) {
                    return this.endRequest(403, "Token signature expired.", res);
                }
                // See if the token was found
                const { email } = decoded;
                const tokens = await this.authService.getTokens(email);
                // if the token was found, just continue the request.
                if (tokens.length !== 0) {
                    req.decoded = decoded;
                    return next();
                }
                else {
                    return this.endRequest(403, "Auth token not found. User is probably not logged in. Please login again.", res);
                }
            }
            else {
                return this.endRequest(403, "No access token provided", res);
            }
        };
    }
    ensureAuthRole() {
        return async (req, res, next) => {
            const auth_role = req.headers["auth_role"];
            // Confirm that the auth role is specified in header.
            if (auth_role) {
                return next();
            }
            else {
                return this.endRequest(403, "No auth role provided", res);
            }
        };
    }
    static createRateLimit(mins, maxRequests) {
        return (0, express_rate_limit_1.default)({
            windowMs: mins * 60 * 1000,
            max: maxRequests,
            standardHeaders: true,
            legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        });
    }
    isPermitted(role) {
        return async (req, res, next) => {
            if (req.decoded) {
                const { roles } = req.decoded;
                if (roles.length) {
                    return roles.includes(role) ? next() : this.endRequest(403, "Invalid User Permission. User doesn't have permission to access resource", res);
                }
                else {
                    this.endRequest(403, "Invalid User Permission. User doesn't have permission to access resource", res);
                }
            }
            else {
                return this.endRequest(403, "Invalid User Auth", res);
            }
        };
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9pbmZyYS9odHRwL3V0aWxzL01pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsNEVBQTBDO0FBRTFDLE1BQWEsVUFBVTtJQUdyQixZQUFZLFdBQXlCO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0lBQ2hDLENBQUM7SUFFTyxVQUFVLENBQUMsTUFBdUIsRUFBRSxPQUFlLEVBQUUsR0FBUTtRQUNuRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRU0sMkJBQTJCO1FBQ2hDLE9BQU8sS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDOUIsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUMxQyx3REFBd0Q7WUFDeEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDdkQsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUE7Z0JBRTNDLElBQUksZUFBZSxFQUFFO29CQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFBO2lCQUM3RDtnQkFFRCw2QkFBNkI7Z0JBQzdCLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUE7Z0JBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBRXRELHFEQUFxRDtnQkFDckQsSUFB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