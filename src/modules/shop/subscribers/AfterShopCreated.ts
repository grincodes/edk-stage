import { IHandle } from "../../../core/domain/events/IHandle"
import { DomainEvents } from "../../../core/domain/events/DomainEvents"
import { ShopCreatedEvent } from "../domain/events/shopCreated"
import { CreateShopLocationUseCase } from "../useCases/createShopLocation/CreateShopLocationUseCase"

export class AfterShopCreated implements IHandle<ShopCreatedEvent> {
  private createShopLocation: CreateShopLocationUseCase

  constructor(createShopLocation: CreateShopLocationUseCase) {
    this.setupSubscriptions()
    this.createShopLocation = createShopLocation
  }

  setupSubscriptions(): void {
    DomainEvents.register(this.onUserCreatedEvent.bind(this), ShopCreatedEvent.name)
  }

  private async onUserCreatedEvent(event: ShopCreatedEvent): Promise<void> {
    const { shop } = event

    this.createShopLocation
      .execute({ shop })
      .then((r) => {
        console.log(r)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
