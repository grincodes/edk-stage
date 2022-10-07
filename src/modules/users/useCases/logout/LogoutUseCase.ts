import { IUserRepo } from "../../repos/userRepo"
import { IAuthService } from "../../services/authService"

import { LogoutDTO } from "./LogoutDTO"

import { User } from "../../domain/user"
import { LogoutErrors } from "./LogoutErrors"
import { UseCase } from "../../../../core/domain/UseCase"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"

type Response = Either<GenericAppError.UnexpectedError, Result<void>>

export class LogoutUseCase implements UseCase<LogoutDTO, Promise<Response>> {
  private userRepo: IUserRepo
  private authService: IAuthService

  constructor(userRepo: IUserRepo, authService: IAuthService) {
    this.userRepo = userRepo
    this.authService = authService
  }

  public async execute(request: LogoutDTO): Promise<Response> {
    let user: User
    const { userId } = request

    try {
      try {
        user = await this.userRepo.findUserById(userId)
      } catch (err) {
        return left(new LogoutErrors.UserNotFoundOrDeletedError())
      }

      await this.authService.deAuthenticateUser(user.email.value)

      return right(Result.ok<void>())
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err))
    }
  }
}
