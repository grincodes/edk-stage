import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityId"
import { Result } from "../../../core/logic/Result"
import { Email } from "../../../shared/domain_types/Email"
import { InternationalDeliveryPartner } from "../../delivery_partners/domain/internationalDeliveryPartners"
import { LocalDeliveryPartner } from "../../delivery_partners/domain/localDeliveryPartners"
import { ProductCategory } from "../../products/domain/productCategory"
import { ShopCreatedEvent } from "./events/shopCreated"
import { ShopDeletedEvent } from "./events/shopDeleted"
import { ShopVerifiedEvent } from "./events/shopVerified"
import { ShopDocument } from "./shopDocument"
import { ShopId } from "./shopId"
import { ShopLocation } from "./shopLocation"
import { ShopLogo } from "./shopLogo"
import { ShopName } from "./shopName"
import { ShopPhone } from "./shopPhone"

export enum ShopOwnerType {
  "USER" = "USER",
  "BUSINESS" = "BUSINESS",
  "3RDPARTY" = "3RDPARTY",
}

export interface ShopProps {
  shopName: ShopName
  shopCategoryId: UniqueEntityID
  shopCategory?: ProductCategory
  shopPhone: ShopPhone
  shopEmail: Email
  shopLocation: ShopLocation
  shopLogo?: ShopLogo
  shopDocuments?: ShopDocument[]
  shopOwnerType: ShopOwnerType
  ownerId: UniqueEntityID
  localDeliveryPartnerId: UniqueEntityID
  internationalDeliveryPartnerId: UniqueEntityID
  localDeliveryPartner?: LocalDeliveryPartner
  internationalDeliveryPartner?: InternationalDeliveryPartner
  isDeleted?: boolean
  isVerified?: boolean
}

export class Shop extends AggregateRoot<ShopProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get shopId(): ShopId {
    return ShopId.create(this._id).getValue()
  }

  get shopCategoryId(): UniqueEntityID {
    return this.props.shopCategoryId
  }

  get shopCategory(): ProductCategory {
    return this.props.shopCategory
  }

  get shopName(): ShopName {
    return this.props.shopName
  }

  get shopPhone(): ShopPhone {
    return this.props.shopPhone
  }

  get shopEmail(): Email {
    return this.props.shopEmail
  }

  get shopLogo(): ShopLogo {
    return this.props.shopLogo
  }

  get shopLocation(): ShopLocation {
    return this.props.shopLocation
  }

  get shopDocuments(): ShopDocument[] {
    return this.props.shopDocuments
  }

  get shopOwnerType(): ShopOwnerType {
    return this.props.shopOwnerType
  }
  get ownerId(): UniqueEntityID {
    return this.props.ownerId
  }

  get localDeliveryPartner(): LocalDeliveryPartner {
    return this.props.localDeliveryPartner
  }

  get localDeliveryPartnerId(): UniqueEntityID {
    return this.props.localDeliveryPartnerId
  }

  get internationalDeliveryPartnerId(): UniqueEntityID {
    return this.props.internationalDeliveryPartnerId
  }

  get isDeleted(): boolean {
    return this.props.isDeleted
  }

  get isVerified(): boolean {
    return this.isVerified
  }

  public verify(): void {
    if (!this.props.isVerified) {
      this.addDomainEvent(new ShopVerifiedEvent(this))
      this.props.isVerified = true
    }
  }

  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new ShopDeletedEvent(this))
      this.props.isDeleted = true
    }
  }

  private constructor(props: ShopProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ShopProps, id?: UniqueEntityID): Result<Shop> {
    const isNewShop = !!id === false
    const shop = new Shop(
      {
        ...props,
        isDeleted: props.isDeleted ? props.isDeleted : false,
        isVerified: props.isVerified ? props.isVerified : false,
      },
      id,
    )

    if (isNewShop) {
      shop.addDomainEvent(new ShopCreatedEvent(shop))
    }

    return Result.ok<Shop>(shop)
  }
}
