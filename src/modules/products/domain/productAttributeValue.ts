import { Entity } from "../../../core/domain/Entity"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { ProductAttributeId } from "./ProductAttributeId"
import { ProductAttributeValueId } from "./productAttributeValueId"

export interface ProductAttributeProps {
  productAttributeId: ProductAttributeId
  attributeValue: string
  attributeSequence: number
}

export class ProductAttributeValue extends Entity<ProductAttributeProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get productAttributeValueId(): ProductAttributeValueId {
    return ProductAttributeValueId.create(this._id).getValue()
  }

  get productAttributeId(): ProductAttributeId {
    return this.props.productAttributeId
  }

  get attributeValue(): string {
    return this.props.attributeValue
  }

  get attributeSequence(): number {
    return this.props.attributeSequence
  }

  private constructor(props: ProductAttributeProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ProductAttributeProps, id?: UniqueEntityID): Result<ProductAttributeValue> {
    const product_attribute_value = new ProductAttributeValue(
      {
        ...props,
      },
      id,
    )

    return Result.ok<ProductAttributeValue>(product_attribute_value)
  }
}
