import { WatchedList } from "../../../core/domain/WatchedList"
import { UserRole } from "./userRole"

export class UserRoles extends WatchedList<UserRole> {
  private constructor(initialRoles: UserRole[]) {
    super(initialRoles)
  }

  public compareItems(a: UserRole, b: UserRole): boolean {
    return a.equals(b)
  }

  public static create(initialRoles?: UserRole[]): UserRoles {
    return new UserRoles(initialRoles ? initialRoles : [])
  }
}
