import { ValueObject } from "../../core/domain/ValueObject"
import { Guard } from "../../core/logic/Guard"
import { Result } from "../../core/logic/Result"

export interface INigeriaPhoneProps {
  value: number
}

export class NigeriaPhone extends ValueObject<INigeriaPhoneProps> {
  private constructor(props: INigeriaPhoneProps) {
    super(props)
  }

  get value(): number {
    return this.props.value
  }

  private static isValidPhone(phone: number) {
    const re = /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/
    // toString removes first zero in a digit so i am adding it back
    // const _phone = "0" + phone.toString()

    return re.test(phone.toString())
  }

  public static create(phone: number): Result<NigeriaPhone> {
    const phoneResult = Guard.againstNullOrUndefined(phone, "phone")

    if (!phoneResult.succeeded) {
      return Result.fail<NigeriaPhone>(phoneResult.message)
    }
    if (!this.isValidPhone(phone)) {
      return Result.fail<NigeriaPhone>("Invalid phone number format")
    }

    return Result.ok<NigeriaPhone>(new NigeriaPhone({ value: phone }))
  }
}
