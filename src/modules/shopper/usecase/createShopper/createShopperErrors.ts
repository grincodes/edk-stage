import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateShopperErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`,
      } as UseCaseError)
    }
  }

  export class ShopperAlreadyExists extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `A username already exists on user`,
      } as UseCaseError)
    }
  }
}
