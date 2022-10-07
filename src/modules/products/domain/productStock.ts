import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { ProductInventoryId } from "./productInventoryId"

export interface ProductStockProps {
  productInventoryId: ProductInventoryId
  units: number
  unitSold: number
}

export class ProductStock extends AggregateRoot<ProductStockProps> {
  get unitsSold(): number {
    return this.props.unitSold
  }

  get units(): number {
    return this.props.units
  }

  get productInventory(): ProductInventoryId {
    return this.props.productInventoryId
  }

  private constructor(props: ProductStockProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ProductStockProps, id?: UniqueEntityID): Result<ProductStock> {
    const guardedProps = [
      { argument: props.units, argumentName: "units" },
      { argument: props.unitSold, argumentName: "units sold" },
    ]

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps)

    if (!guardResult.succeeded) {
      return Result.fail<ProductStock>(guardResult.message)
    } else {
      const prodStock = new ProductStock(props, id)
      return Result.ok<ProductStock>(prodStock)
    }
  }
}
