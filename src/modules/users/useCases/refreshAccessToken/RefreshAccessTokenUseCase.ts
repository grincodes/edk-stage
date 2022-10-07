import { IAuthService } from "../../services/authService"
import { JWTToken } from "../../domain/jwt"
import { RefreshAccessTokenErrors } from "./RefreshAccessTokenErrors"
import { IUserRepo } from "../../repos/userRepo"
import { User } from "../../domain/user"
import { RefreshAccessTokenDTO } from "./RefreshAccessTokenDTO"
import { UseCase } from "../../../../core/domain/UseCase"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserEmail } from "../../domain/userEmail"

type Response = Either<GenericAppError.UnexpectedError | RefreshAccessTokenErrors.RefreshTokenNotFound | Result<any>, Result<JWTToken>>

export class RefreshAccessToken implements UseCase<RefreshAccessTokenDTO, Promise<Response>> {
  private userRepo: IUserRepo
  private authService: IAuthService

  constructor(userRepo: IUserRepo, authService: IAuthService) {
    this.userRepo = userRepo
    this.authService = authService
  }

  public async execute(req: RefreshAccessTokenDTO): Promise<Response> {
    const { refreshToken } = req
    let user: User
    let email: string

    try {
      try {
        email = await this.authService.getEmailFromRefreshToken(refreshToken)
      } catch (err) {
        return left(new RefreshAccessTokenErrors.RefreshTokenNotFound())
      }

      try {
        user = await this.userRepo.findUserByEmail(UserEmail.create(email).getValue())
      } catch (err) {
        return left(new RefreshAccessTokenErrors.UserNotFoundOrDeletedError())
      }

      const accessToken: JWTToken = this.authService.signJWT({
        email: user.email.value,
        isEmailVerified: user.isEmailVerified,
        userId: user.userId.id.toString(),
        roles: user.roles.getItems() as any,
      })

      // sign a new jwt for that user
      user.setAccessToken(accessToken, refreshToken)

      // save it
      await this.authService.saveAuthenticatedUser(user)

      // return the new access token
      return right(Result.ok<JWTToken>(accessToken))
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err))
    }
  }
}
