import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateProductBrandErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class BrandAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The brand name ${name}  already exists`
      } as UseCaseError)
    }
  }
}
