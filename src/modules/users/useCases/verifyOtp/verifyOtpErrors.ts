import { Result } from "../../../../core/logic/Result"
import { UseCaseError } from "../../../../core/logic/UseCaseError"

export namespace VerifyOtpUseCaseErrors {
  export class UserAlreadyVerifiedError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `user already verified`,
      } as UseCaseError)
    }
  }

  export class InvalidOtp extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `incorrect or expired otp code`,
      } as UseCaseError)
    }
  }

  export class InvalidUserError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `user not authenticated`,
      } as UseCaseError)
    }
  }
}
