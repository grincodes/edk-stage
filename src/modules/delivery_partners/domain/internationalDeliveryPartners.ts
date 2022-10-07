import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityId"
import { Result } from "../../../core/logic/Result"
import { DeliveryPartnerId } from "./deliveryPartnerId"
import { DeliveryPartnerName } from "./deliveryPartnerName"

export interface InternationalDeliveryPartnerProps {
  delivery_partner_name: DeliveryPartnerName
  isActive: boolean
}

export class InternationalDeliveryPartner extends AggregateRoot<InternationalDeliveryPartnerProps> {
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

  private constructor(props: InternationalDeliveryPartnerProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: InternationalDeliveryPartnerProps, id?: UniqueEntityID): Result<InternationalDeliveryPartner> {
    const international_delivery_partner = new InternationalDeliveryPartner(props, id)

    return Result.ok<InternationalDeliveryPartner>(international_delivery_partner)
  }
}
