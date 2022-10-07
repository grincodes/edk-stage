import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Entity } from "../../../core/domain/Entity"
import { Result } from "../../../core/logic/Result"

export class ProductAttributeValueId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  public static create(id?: UniqueEntityID): Result<ProductAttributeValueId> {
    return Result.ok<ProductAttributeValueId>(new ProductAttributeValueId(id))
  }
}
