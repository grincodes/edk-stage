import { Entity } from "../../../core/domain/Entity"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Guard, IGuardArgument } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { ShopperAddressId } from "./shopperAddressId"
import { ShopperId } from "./shopperId"

export interface IShopperAddressProps {
  shopperId?: ShopperId
  address: string
  state: string
  city: string
  country: string
  lng?: number
  lat?: number
  isDefault?: boolean
}

export class ShopperAddress extends Entity<IShopperAddressProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get shopperAddressId(): ShopperAddressId {
    return ShopperAddressId.create(this.id).getValue()
  }

  get shopperId(): ShopperId {
    return this.props.shopperId
  }

  set shopperId(shopperId: ShopperId) {
    this.props.shopperId = shopperId
  }

  get address(): string {
    return this.props.address
  }

  get state(): string {
    return this.props.state
  }

  get country(): string {
    return this.props.country
  }

  get city(): string {
    return this.props.city
  }

  get lng(): number {
    return this.props.lng
  }

  get lat(): number {
    return this.props.lat
  }

  get isDefault(): boolean {
    return this.props.isDefault
  }

  constructor(props: IShopperAddressProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: IShopperAddressProps, id?: UniqueEntityID): Result<ShopperAddress> {
    const guardArgs: IGuardArgument[] = [
      { argument: props.address, argumentName: "address" },
      { argument: props.country, argumentName: "country" },
      { argument: props.state, argumentName: "state" },
      { argument: props.city, argumentName: "city" },
    ]

    const guardAtLeastChars = [
      { numChars: 3, text: props.address, argumentName: "address" },
      { numChars: 3, text: props.state, argumentName: "state" },
      { numChars: 3, text: props.city, argumentName: "city" },
      { numChars: 3, text: props.address, argumentName: "country" },
    ]

    const guardResult = Guard.againstNullOrUndefinedBulk(guardArgs)
    if (!guardResult.succeeded) {
      return Result.fail<ShopperAddress>(guardResult.message)
    }
    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars)

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ShopperAddress>(guardResultAtLeast.message)
    }

    const shopperAddress = new ShopperAddress({ ...props, isDefault: false }, id)
    return Result.ok<ShopperAddress>(shopperAddress)
  }
}
