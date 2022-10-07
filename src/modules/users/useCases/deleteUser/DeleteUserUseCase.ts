import { UseCase } from "../../../../core/domain/UseCase"
import { DeleteUserDTO } from "./DeleteUserDTO"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { UserEmail } from "../../domain/userEmail"
import { UserPassword } from "../../domain/userPassword"
import { User } from "../../domain/user"
import { IUserRepo } from "../../repos/userRepo"
import { DeleteUserErrors } from "./DeleteUserError"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserRole } from "../../domain/userRole"
import { UserId } from "../../domain/userId"

type Response = Either<GenericAppError.UnexpectedError | DeleteUserErrors.UserNotFoundError | Result<any>, Result<void>>

export class DeleteUserUseCase implements UseCase<DeleteUserDTO, Promise<Response>> {
  private userRepo: IUserRepo

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  async execute(req: DeleteUserDTO): Promise<Response> {
    try {
      const user = await this.userRepo.findUserById(req.userId)
      const userFound = !!user == true

      if (!userFound) {
        return left(new DeleteUserErrors.UserNotFoundError()) as Response
      }

      user.delete()

      await this.userRepo.save(user)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<void>()) as Response
  }
}
