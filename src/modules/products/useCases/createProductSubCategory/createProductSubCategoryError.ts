import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateProductSubCategoryErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class SubCategoryAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The sub category ame ${name}  already exists`
      } as UseCaseError)
    }
  }
}
