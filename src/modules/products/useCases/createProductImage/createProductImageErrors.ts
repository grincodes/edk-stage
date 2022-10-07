import { UseCaseError } from "../../../../core/logic/UseCaseError"
import { Result } from "../../../../core/logic/Result"

export namespace CreateProductImageErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError)
    }
  }

  export class InvalidImageUrl extends Result<UseCaseError> {
    constructor(url: string) {
      super(false, {
        message: ` Invalid image url ${url}`
      } as UseCaseError)
    }
  }
}
