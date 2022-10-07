import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateShopErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class ShopAlreadyExists extends Result<UseCaseError> {
    constructor(email: string) {
      super(false, {
        message: `The email ${email} associated for this account already exists`
      } as UseCaseError)
    }
  }
}
