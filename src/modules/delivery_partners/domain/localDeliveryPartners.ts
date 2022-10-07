import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityId"
import { Result } from "../../../core/logic/Result"
import { DeliveryPartnerId } from "./deliveryPartnerId"
import { DeliveryPartnerName } from "./deliveryPartnerName"

export interface LocalDeliveryPartnerProps {
  delivery_partner_name: DeliveryPartnerName
  isActive: boolean
}

export class LocalDeliveryPartner extends AggregateRoot<LocalDeliveryPartnerProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get deliveryPartnerId(): DeliveryPartnerId {
    return DeliveryPartnerId.create(this._id).getValue()
  }

  get deliveryPartnerName(): DeliveryPartnerName {
    return this.props.delivery_partner_name
  }

  get isActive(): boolean {
    return this.props.isActive
  }

  private constructor(props: LocalDeliveryPartnerProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: LocalDeliveryPartnerProps, id?: UniqueEntityID): Result<LocalDeliveryPartner> {
    const local_delivery_partner = new LocalDeliveryPartner(props, id)

    return Result.ok<LocalDeliveryPartner>(local_delivery_partner)
  }
}
