import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateLocalDeliveryPartnerErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class LocalDeliveryPartnerAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The local delivery partner ${name}  already exists`
      } as UseCaseError)
    }
  }
}
