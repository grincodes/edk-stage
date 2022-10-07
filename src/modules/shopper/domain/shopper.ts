import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { NigeriaPhone } from "../../../shared/domain_types/NigeriaPhoneNumber"
import { UserId } from "../../users/domain/userId"
import { ShopperAddress } from "./shopperAddress"
import { ShopperId } from "./shopperId"
import { ShopperUserName } from "./shopperUserName"

export interface ShopperProps {
  shopperUserName: ShopperUserName
  userId: UserId
  shopperAddress?: ShopperAddress
  shopperPhone: NigeriaPhone
  dob: Date
}

export class Shopper extends AggregateRoot<ShopperProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get shopperId(): ShopperId {
    return ShopperId.create(this._id).getValue()
  }

  get userId(): UserId {
    return this.props.userId
  }

  get shopperUserName(): ShopperUserName {
    return this.props.shopperUserName
  }

  get dob(): Date {
    return this.props.dob
  }

  get shopperPhone(): NigeriaPhone {
    return this.props.shopperPhone
  }

  get shopperAddress(): ShopperAddress {
    return this.props.shopperAddress
  }

  private constructor(props: ShopperProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: ShopperProps, id?: UniqueEntityID): Result<Shopper> {
    const shopper = new Shopper(props, id)

    return Result.ok<Shopper>(shopper)
  }
}
