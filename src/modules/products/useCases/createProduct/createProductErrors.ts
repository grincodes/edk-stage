import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateProductErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`,
      } as UseCaseError)
    }
  }

  export class ProductAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The product name ${name}  already exists`,
      } as UseCaseError)
    }
  }

  export class ProductMustHaveVariants extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Product must have a variant`,
      } as UseCaseError)
    }
  }
}
