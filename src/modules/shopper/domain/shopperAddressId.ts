import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Entity } from "../../../core/domain/Entity"
import { Result } from "../../../core/logic/Result"

export class ShopperAddressId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  public static create(id?: UniqueEntityID): Result<ShopperAddressId> {
    return Result.ok<ShopperAddressId>(new ShopperAddressId(id))
  }
}
