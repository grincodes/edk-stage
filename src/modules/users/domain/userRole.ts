import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"

export enum RolesType {
  "SHOPPER" = "SHOPPER",
  "BUSINESS" = "BUSINESS",
  "MERCHANT" = "MERCHANT",
  "SUBUSER" = "SUBUSER",
}

export interface IUserRoleProps {
  value: string
}

export class UserRole extends ValueObject<IUserRoleProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: IUserRoleProps) {
    super(props)
  }

  private static isOfTypeRole(roleInput: string): boolean {
    return roleInput.toUpperCase() in RolesType
  }

  public static create(role: string): Result<UserRole> {
    const guardResult = Guard.againstNullOrUndefined(role, "role")

    if (!guardResult.succeeded) {
      return Result.fail<UserRole>(guardResult.message)
    }
    if (!this.isOfTypeRole(role)) {
      return Result.fail<UserRole>("Invalid user role")
    }
    return Result.ok<UserRole>(
      new UserRole({
        value: role,
      }),
    )
  }
}
