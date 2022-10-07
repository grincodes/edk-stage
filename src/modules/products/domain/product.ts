import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { ShopId } from "../../shop/domain/shopId"
import { Product360Video } from "./product360Video"
import { ProductCategoryId } from "./productCategoryId"
import { ProductId } from "./productId"
import { ProductInventory } from "./productInventory"
import { Slug } from "./slug"

export interface ProductProps {
  productName: string
  productDescription: string
  productCategoryId: ProductCategoryId
  product360Video?: Product360Video
  ProductInventory?: ProductInventory[]
  shopId: ShopId
  productWebId: number
  productSlug: Slug
  isActive: boolean
}

export class Product extends AggregateRoot<ProductProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get productName(): string {
    return this.props.productName
  }

  get productId(): ProductId {
    return ProductId.create(this._id).getValue()
  }

  get productCategoryId(): ProductCategoryId {
    return this.props.productCategoryId
  }

  get productDescription(): string {
    return this.props.productDescription
  }

  get shopId(): ShopId {
    return this.props.shopId
  }

  get productWebId(): number {
    return this.props.productWebId
  }

  get productSlug(): Slug {
    return this.props.productSlug
  }

  get isActive(): boolean {
    return this.props.isActive
  }

  private constructor(props: ProductProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ProductProps, id?: UniqueEntityID): Result<Product> {
    const guardedProps = [
      { argument: props.productName, argumentName: "product name" },
      {
        argument: props.productDescription,
        argumentName: "product description",
      },
    ]

    const guardAtLeastChars = [
      {
        numChars: 4,
        text: props.productName,
        argumentName: " product name",
      },
      {
        numChars: 10,
        text: props.productDescription,
        argumentName: "product description",
      },
    ]

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps)
    if (!guardResult.succeeded) {
      return Result.fail<Product>(guardResult.message)
    }

    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars)

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<Product>(guardResultAtLeast.message)
    }
    const product = new Product(props, id)
    return Result.ok<Product>(product)
  }
}
