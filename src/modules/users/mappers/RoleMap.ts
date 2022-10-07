import { Mapper } from "../../../core/infra/Mapper"
import { Role } from "../domain/role"

export class RoleMap extends Mapper<Role> {
  public static toPersistence(roleProps: Role): any {
    return {
      role_id: roleProps.id.toString(),
      role_user_id: roleProps.userId.id.toValue(),
      role: roleProps.role.value
    }
  }
}
