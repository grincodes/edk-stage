import { UseCase } from "../../../../core/domain/UseCase"
import { User } from "../../domain/user"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { IRoleRepo } from "../../repos/roleRepo"
import { Role } from "../../domain/role"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserId } from "../../domain/userId"

interface Request {
  user: User
}

// type Response = Either<
//   GenericAppError.UnexpectedError |
//   Result<any>,
//   Result<void>
// >

export class AssignUserRole implements UseCase<Request, Result<Role>> {
  private roleRepo: IRoleRepo

  constructor(roleRepo: IRoleRepo) {
    this.roleRepo = roleRepo
  }

  async execute(request: Request): Promise<Result<Role>> {
    const { user } = request

    const userRoleOrError = Role.create({
      userId: UserId.create(user.id).getValue(),
      role: user.props.role,
    })

    if (userRoleOrError.isFailure) {
      return Result.fail<Role>(userRoleOrError.error)
    }

    const role: Role = userRoleOrError.getValue()

    try {
      await this.roleRepo.save(role)

      console.log(`[AssignUserRole]: User ${user.props.email} assigned to ${user.props.role}`)
    } catch (err) {
      return Result.fail<Role>(err)
    }

    return Result.ok<Role>(role)
  }
}
