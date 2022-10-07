import { GetUserByEmailDTO } from "./GetUserByEmailDTO"
import { GetUserByEmailErrors } from "./GetUserByEmailErrors"
import { User } from "../../domain/user"
import { UseCase } from "../../../../core/domain/UseCase"
import { IUserRepo } from "../../repos/userRepo"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserEmail } from "../../domain/userEmail"

type Response = Either<GenericAppError.UnexpectedError, Result<User>>

export class GetUserByEmailUseCase implements UseCase<GetUserByEmailDTO, Promise<Response>> {
  private userRepo: IUserRepo

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  public async execute(req: GetUserByEmailDTO): Promise<Response> {
    try {
      const userEmailOrError = UserEmail.create(req.email)

      if (userEmailOrError.isFailure) {
        return left(Result.fail<any>(userEmailOrError.error)) as Response
      }

      const userEmail: UserEmail = userEmailOrError.getValue()

      const user = await this.userRepo.findUserByEmail(userEmail)
      const userFound = !!user === true

      if (!userFound) {
        return left(new GetUserByEmailErrors.UserNotFoundError(userEmail.value)) as Response
      }

      return right(Result.ok<User>(user))
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err))
    }
  }
}
