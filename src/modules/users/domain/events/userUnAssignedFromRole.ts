import { Role } from "../role"
import { IDomainEvent } from "../../../../core/domain/events/IDomainEvent"
import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"

export class UserUnAssignedFromRoleEvent implements IDomainEvent {
  public dateTimeOccurred: Date
  public role: Role

  constructor(role: Role) {
    this.dateTimeOccurred = new Date()
    this.role = role
  }

  public getAggregateId(): UniqueEntityID {
    return this.role.id
  }
}
