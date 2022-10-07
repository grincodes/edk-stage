import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { Entity } from "../../../core/domain/Entity"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { Url } from "../../../shared/domain_types/Url"

export interface Product360VideoProps {
  productId: UniqueEntityID
  url: Url
}

export class Product360Video extends Entity<Product360VideoProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get url(): Url {
    return this.props.url
  }

  get productId(): UniqueEntityID {
    return this.props.productId
  }
  private constructor(props: Product360VideoProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: Product360VideoProps, id?: UniqueEntityID): Result<Product360Video> {
    const prod360Video = new Product360Video(props, id)

    return Result.ok<Product360Video>(prod360Video)
  }
}
