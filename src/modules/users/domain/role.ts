import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { UserAssignedToRoleEvent } from "./events/userAssignedToRole"
import { UserId } from "./userId"
import { UserRole } from "./userRole"

interface RoleProps {
  userId: UserId
  role: UserRole
}

export class Role extends AggregateRoot<RoleProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get role(): UserRole {
    return this.props.role
  }

  get userId(): UserId {
    return this.props.userId
  }

  private constructor(props: RoleProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: RoleProps, id?: UniqueEntityID): Result<Role> {
    const role = new Role(
      {
        ...props
      },
      id
    )

    const idWasProvided = !!id

    if (!idWasProvided) {
      role.addDomainEvent(new UserAssignedToRoleEvent(role))
    }

    return Result.ok<Role>(role)
  }
}
