import { Entity } from "../../../core/domain/Entity"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { ProductAttributeValueId } from "./productAttributeValueId"
import { ProductInventoryId } from "./productInventoryId"

export interface TagProductAttributeProps {
  productAttributeValueId: UniqueEntityID
  productInventoryId: ProductInventoryId
}

export class TagProductAttributValue extends Entity<TagProductAttributeProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get productAttributeValueId(): UniqueEntityID {
    return this.props.productAttributeValueId
  }

  get productInventoryId(): ProductInventoryId {
    return this.props.productInventoryId
  }

  private constructor(props: TagProductAttributeProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: TagProductAttributeProps, id?: UniqueEntityID): Result<TagProductAttributValue> {
    const tag_product_attr_val = new TagProductAttributValue(props, id)
    return Result.ok<TagProductAttributValue>(tag_product_attr_val)
  }
}
