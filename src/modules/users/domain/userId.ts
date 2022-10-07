import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Entity } from "../../../core/domain/Entity"
import { Result } from "../../../core/logic/Result"
import { validate as uuidValidate } from "uuid"

export class UserId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  public static create(id?: UniqueEntityID): Result<UserId> {
    if (!UniqueEntityID.isValidId(id.toString())) {
      return Result.fail<UserId>(`Invalid id ${id.toString()}`)
    }
    return Result.ok<UserId>(new UserId(id))
  }
}
