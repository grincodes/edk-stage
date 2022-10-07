import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { ProductBrand } from "./productBrand"
import { Price } from "./Price"
import { Weight } from "./Weight"
import { ProductInventoryId } from "./productInventoryId"
import { Sku } from "./sku"
import { VariantName } from "./variantName"

export enum Currency {
  "NGN" = "NGN",
}

export interface ProductInventoryProps {
  sku: Sku
  variantName: VariantName
  productId: UniqueEntityID
  productBrandId?: UniqueEntityID
  productBrand?: ProductBrand
  productAttributeValueId?: UniqueEntityID
  isActive: boolean
  storePrice?: Price
  retailPrice: Price
  weight: Weight
  quantity?: number
  currency: Currency
}

export class ProductInventory extends AggregateRoot<ProductInventoryProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get ProductInventoryId(): ProductInventoryId {
    return ProductInventoryId.create(this._id).getValue()
  }

  get productId(): UniqueEntityID {
    return this.props.productId
  }

  get productBrandId(): UniqueEntityID {
    return this.props.productBrandId
  }

  get productAttributeValueId(): UniqueEntityID {
    return this.props.productAttributeValueId
  }

  get sku(): Sku {
    return this.props.sku
  }

  get variantName(): VariantName {
    return this.props.variantName
  }

  get currency(): string {
    return this.props.currency
  }

  get isActive(): boolean {
    return this.props.isActive
  }

  get storePrice(): Price {
    return this.props.storePrice
  }

  get retailPrice(): Price {
    return this.props.retailPrice
  }

  get weight(): Weight {
    return this.props.weight
  }

  get quantity(): number {
    return this.props.quantity
  }

  private constructor(props: ProductInventoryProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ProductInventoryProps, id?: UniqueEntityID): Result<ProductInventory> {
    const product_inventory = new ProductInventory(props, id)

    return Result.ok<ProductInventory>(product_inventory)
  }
}
