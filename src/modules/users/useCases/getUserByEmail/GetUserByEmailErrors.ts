import { Result } from "../../../../core/logic/Result"
import { UseCaseError } from "../../../../core/logic/UseCaseError"

export namespace GetUserByEmailErrors {
  export class UserNotFoundError extends Result<UseCaseError> {
    constructor(email: string) {
      super(false, {
        message: `No user with the email ${email} was found`
      } as UseCaseError)
    }
  }
}
