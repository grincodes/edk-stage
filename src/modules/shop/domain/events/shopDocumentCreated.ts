import { IDomainEvent } from "../../../../core/domain/events/IDomainEvent"
import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { ShopDocument } from "../shopDocument"

export class ShopDocumentCreatedEvent implements IDomainEvent {
  public dateTimeOccurred: Date
  public shopDocument: ShopDocument

  constructor(shopDocument: ShopDocument) {
    this.dateTimeOccurred = new Date()
    this.shopDocument = shopDocument
  }

  getAggregateId(): UniqueEntityID {
    return this.shopDocument.id
  }
}
