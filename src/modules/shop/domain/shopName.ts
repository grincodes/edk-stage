import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"

export interface IShopNameProps {
  value: string
}

export class ShopName extends ValueObject<IShopNameProps> {
  get value(): string {
    return this.props.value
  }

  public static minLength = 2

  private constructor(props: IShopNameProps) {
    super(props)
  }

  public static create(name: string): Result<ShopName> {
    const shopNameResult = Guard.againstNullOrUndefined(name, "shop name")

    if (!shopNameResult.succeeded) {
      return Result.fail<ShopName>(shopNameResult.message)
    }

    const minLengthResult = Guard.againstAtLeast(this.minLength, name, "shop name")
    if (!minLengthResult.succeeded) {
      return Result.fail<ShopName>(minLengthResult.message)
    }

    return Result.ok<ShopName>(new ShopName({ value: name }))
  }
}
