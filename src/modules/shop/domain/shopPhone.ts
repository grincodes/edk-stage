import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"

export interface IShopPhoneProps {
  value: number
}

export class ShopPhone extends ValueObject<IShopPhoneProps> {
  private constructor(props: IShopPhoneProps) {
    super(props)
  }

  get value(): number {
    return this.props.value
  }

  private static isValidPhone(phone: number) {
    const re = /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/

    // toString removes first zero in a digit so i am adding it back
    const _phone = "0" + phone.toString()

    return re.test(_phone)
  }

  public static create(phone: number): Result<ShopPhone> {
    const shopPhoneResult = Guard.againstNullOrUndefined(phone, "phone")

    if (!shopPhoneResult.succeeded) {
      return Result.fail<ShopPhone>(shopPhoneResult.message)
    }
    if (!this.isValidPhone(phone)) {
      return Result.fail<ShopPhone>("Invalid phone number format")
    }

    return Result.ok<ShopPhone>(new ShopPhone({ value: phone }))
  }
}
