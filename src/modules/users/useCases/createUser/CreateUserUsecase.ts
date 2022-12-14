import { UseCase } from "../../../../core/domain/UseCase"
import { CreateUserDTO } from "./CreateUserDTO"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { UserEmail } from "../../domain/userEmail"
import { UserPassword } from "../../domain/userPassword"
import { User } from "../../domain/user"
import { IUserRepo } from "../../repos/userRepo"
import { CreateUserErrors } from "./CreateUserErrors"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserRole } from "../../domain/userRole"
import { Guard } from "../../../../core/logic/Guard"

type Response = Either<GenericAppError.UnexpectedError | CreateUserErrors.AccountAlreadyExists | Result<any>, Result<User>>

export class CreateUserUseCase implements UseCase<CreateUserDTO, Promise<Response>> {
  private userRepo: IUserRepo

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  async execute(req: CreateUserDTO): Promise<Response> {
    const { firstName, lastName } = req

    const guardedProps = [
      { numChars: 5, text: firstName, argumentName: "firstName" },
      { numChars: 5, text: lastName, argumentName: "lastName" },
    ]

    const nameGuardResult = Guard.againstAtLeastBulk(guardedProps)

    if (!nameGuardResult.succeeded) {
      return left(Result.fail<void>(nameGuardResult.message)) as Response
    }

    const emailOrError = UserEmail.create(req.email)
    const passwordOrError = UserPassword.create({ value: req.password })
    const roleOrError = UserRole.create(req.role)

    const combinedPropsResult = Result.combine([emailOrError, passwordOrError, roleOrError])

    if (combinedPropsResult.isFailure) {
      return left(Result.fail<void>(combinedPropsResult.error)) as Response
    }

    const userOrError = User.create({
      email: emailOrError.getValue(),
      password: passwordOrError.getValue(),
      role: roleOrError.getValue(),
      firstName,
      lastName,
      isEmailVerified: false,
    })

    if (userOrError.isFailure) {
      return left(Result.fail<void>(userOrError.error)) as Response
    }

    const user: User = userOrError.getValue()

    const userAlreadyExists = await this.userRepo.exists(user.email)

    if (userAlreadyExists) {
      return left(new CreateUserErrors.AccountAlreadyExists(user.email.value)) as Response
    }

    try {
      await this.userRepo.save(user)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<User>(user)) as Response
  }
}
