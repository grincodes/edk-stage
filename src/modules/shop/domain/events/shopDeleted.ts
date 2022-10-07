import { IDomainEvent } from "../../../../core/domain/events/IDomainEvent"
import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { Shop } from "../shop"

export class ShopDeletedEvent implements IDomainEvent {
  public dateTimeOccurred: Date
  public shop: Shop

  constructor(shop: Shop) {
    this.dateTimeOccurred = new Date()
    this.shop = shop
  }

  getAggregateId(): UniqueEntityID {
    return this.shop.id
  }
}
