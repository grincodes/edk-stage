import { LoginDTO, LoginDTOResponse } from "./LoginDTO"
import { LoginUseCaseErrors } from "./LoginErrors"
import { IUserRepo } from "../../repos/userRepo"
import { IAuthService } from "../../services/authService"
import { User } from "../../domain/user"
import { UserPassword } from "../../domain/userPassword"
import { JWTToken, RefreshToken } from "../../domain/jwt"
import { UseCase } from "../../../../core/domain/UseCase"
import { UserEmail } from "../../domain/userEmail"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { UserRole } from "../../domain/userRole"

type Response = Either<
  | LoginUseCaseErrors.GuardError
  | LoginUseCaseErrors.InvalidUserPermissionError
  | LoginUseCaseErrors.PasswordDoesntMatchError
  | LoginUseCaseErrors.UserEmailDoesntExistError
  | GenericAppError.UnexpectedError,
  Result<LoginDTOResponse>
>

export class LoginUserUseCase implements UseCase<LoginDTO, Promise<Response>> {
  private userRepo: IUserRepo
  private authService: IAuthService

  constructor(userRepo: IUserRepo, authService: IAuthService) {
    this.userRepo = userRepo
    this.authService = authService
  }

  public async execute(request: LoginDTO): Promise<Response> {
    let user: User
    let userEmail: UserEmail
    let password: UserPassword

    try {
      const userEmailOrError = UserEmail.create(request.email)
      const passwordOrError = UserPassword.create({ value: request.password })
      const payloadResult = Result.combine([userEmailOrError, passwordOrError])

      if (payloadResult.isFailure) {
        return left(new LoginUseCaseErrors.GuardError(payloadResult.errorValue()))
      }

      userEmail = userEmailOrError.getValue()
      password = passwordOrError.getValue()

      user = await this.userRepo.findUserByEmail(userEmail)

      const userFound = !!user

      console.log(`userFOund${userFound}`)

      if (!userFound) {
        return left(new LoginUseCaseErrors.UserEmailDoesntExistError())
      }

      const passwordValid = await user.password.comparePassword(password.value)

      console.log(`passwordValid  ${passwordValid}`)

      if (!passwordValid) {
        return left(new LoginUseCaseErrors.PasswordDoesntMatchError())
      }

      const authRoleOrError = UserRole.create(request.auth_role)
      if (authRoleOrError.isFailure) {
        return left(new LoginUseCaseErrors.InvalidAuthRoleError())
      }
      // check user permission
      if (!user.hasPermission(authRoleOrError.getValue())) {
        return left(new LoginUseCaseErrors.InvalidUserPermissionError())
      }

      const accessToken: JWTToken = this.authService.signJWT({
        email: user.email.value,
        isEmailVerified: user.isEmailVerified,
        userId: user.userId.id.toString(),
        roles: user.roles.getItems() as any,
      })

      const refreshToken: RefreshToken = this.authService.createRefreshToken()

      user.setAccessToken(accessToken, refreshToken)

      console.log("before save auth ----user", user.isLoggedIn())

      await this.authService.saveAuthenticatedUser(user)

      return right(
        Result.ok<LoginDTOResponse>({
          accessToken,
          refreshToken,
        }),
      )
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err.toString()))
    }
  }
}
