import { UniqueEntityID } from "../../../core/domain/UniqueEntityId"
import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { ShopId } from "./shopId"
import { ShopDocumentUrl } from "./shopDocumentUrl"
import { ShopDocumentId } from "./shopDocumentId"
import { ShopDocumentCreatedEvent } from "./events/shopDocumentCreated"

export enum ShopDocumentType {
  "CAC" = "CAC",
  "INCORPRATION" = "INCORPRATION"
}
interface IShopDocumentProps {
  shopId: ShopId
  documentUrl: ShopDocumentUrl
  documentType: ShopDocumentType
}

export class ShopDocument extends AggregateRoot<IShopDocumentProps> {
  get documentId(): ShopDocumentId {
    return ShopDocumentId.create(this._id).getValue()
  }

  get shopId(): ShopId {
    return this.props.shopId
  }

  get documentUrl(): ShopDocumentUrl {
    return this.props.documentUrl
  }

  get documentType(): ShopDocumentType {
    return this.props.documentType
  }

  private constructor(props: IShopDocumentProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: IShopDocumentProps, id?: UniqueEntityID): Result<ShopDocument> {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.shopId, argumentName: "shopId" },
      { argument: props.documentUrl, argumentName: "businessDocumentUrl" },
      { argument: props.documentUrl, argumentName: "businessDocumentUrl" }
    ])

    if (!guardResult.succeeded) {
      return Result.fail<ShopDocument>(guardResult.message)
    }

    const document = new ShopDocument(props, id)
    const isNewShopDocument = !!id === false

    if (isNewShopDocument) {
      document.addDomainEvent(new ShopDocumentCreatedEvent(document))
    }
    return Result.ok<ShopDocument>(document)
  }
}
