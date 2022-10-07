import { Entity } from "../../../core/domain/Entity"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { ProductTypeId } from "./productTypeId"

export interface ProductTypeProps {
  name: string
}

export class ProductType extends Entity<ProductTypeProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get productTypeId(): ProductTypeId {
    return ProductTypeId.create(this._id).getValue()
  }

  get name(): string {
    return this.props.name
  }

  private constructor(props: ProductTypeProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ProductTypeProps, id?: UniqueEntityID): Result<ProductType> {
    const guardResult = Guard.againstNullOrUndefined(props.name, "brand name")
    if (!guardResult.succeeded) {
      return Result.fail<ProductType>(guardResult.message)
    }

    const guardResultAtLeast = Guard.againstAtLeast(3, props.name, "brand name")

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductType>(guardResultAtLeast.message)
    }
    const brand = new ProductType(props, id)

    return Result.ok<ProductType>(brand)
  }
}
