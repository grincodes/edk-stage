import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Entity } from "../../../core/domain/Entity"
import { Result } from "../../../core/logic/Result"

export class ProductAttributeId extends Entity<any> {
  get id(): UniqueEntityID {
    return this._id
  }

  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  public static create(id?: UniqueEntityID): Result<ProductAttributeId> {
    return Result.ok<ProductAttributeId>(new ProductAttributeId(id))
  }
}
