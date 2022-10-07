import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"

export interface OtpCodeProps {
  code?: number
  codeType: CodeType
  userId: string
  numberDigits: number
  codeExpiryMinutes?: number
}

export interface VerifyOtpCodeProps {
  code: number
  codeType: CodeType
  userId: string
}

export enum CodeType {
  "EmailVerification" = "email verification",
  "PhoneVerification" = "phone verification"
}

export class Otp extends ValueObject<OtpCodeProps> {
  get code(): number {
    return this.props.code
  }

  get codeType(): CodeType {
    return this.props.codeType
  }

  get userId(): string {
    return this.props.userId
  }

  get codeExpiryMinutes(): number {
    return this.props.codeExpiryMinutes
  }

  get numberDigits(): number {
    return this.props.numberDigits
  }

  private static isValidNumberDigits(digits: number): boolean {
    return digits >= 4 && digits <= 6
  }

  private constructor(props: OtpCodeProps) {
    super(props)
  }

  public static create(props: OtpCodeProps): Result<Otp> {
    const guardResult = Guard.againstAtLeast(3, props.userId, "userId")

    if (!guardResult.succeeded) {
      return Result.fail<Otp>(guardResult.message)
    } else {
      if (!this.isValidNumberDigits(props.numberDigits)) {
        return Result.fail<Otp>("Can only create otp code between 4 to 6 digits")
      }

      // generate random
      const chars = "0123456789"
      let token = ""

      for (let i = props.numberDigits; i > 0; --i) {
        token += chars[Math.round(Math.random() * (chars.length - 1))]
      }

      const code = parseInt(token)

      return Result.ok<Otp>(
        new Otp({
          code,
          codeType: props.codeType,
          userId: props.userId,
          numberDigits: props.numberDigits,
          codeExpiryMinutes: props.codeExpiryMinutes
        })
      )
    }
  }
}
