import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateProductTypeErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class ProductTypeAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The product type ${name}  already exists`
      } as UseCaseError)
    }
  }
}
