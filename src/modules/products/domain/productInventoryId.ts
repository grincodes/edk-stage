import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Entity } from "../../../core/domain/Entity"
import { Result } from "../../../core/logic/Result"
import { AggregateRoot } from "../../../core/domain/AggregateRoot"

export class ProductInventoryId extends AggregateRoot<any> {
  get id(): UniqueEntityID {
    return this._id
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  public static create(id?: UniqueEntityID): Result<ProductInventoryId> {
    return Result.ok<ProductInventoryId>(new ProductInventoryId(id))
  }
}
