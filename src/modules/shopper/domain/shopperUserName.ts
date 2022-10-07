import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"

export interface IShopperUserNameProps {
  value: string
}

export class ShopperUserName extends ValueObject<IShopperUserNameProps> {
  get value(): string {
    return this.props.value
  }

  public static minLength = 6

  private constructor(props: IShopperUserNameProps) {
    super(props)
  }

  public static create(name: string): Result<ShopperUserName> {
    const userNameResult = Guard.againstNullOrUndefined(name, "user name")

    if (!userNameResult.succeeded) {
      return Result.fail<ShopperUserName>(userNameResult.message)
    }

    const minLengthResult = Guard.againstAtLeast(this.minLength, name, "user name")
    if (!minLengthResult.succeeded) {
      return Result.fail<ShopperUserName>(minLengthResult.message)
    }

    return Result.ok<ShopperUserName>(new ShopperUserName({ value: name }))
  }
}
