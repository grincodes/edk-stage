import { Result } from "../../../../core/logic/Result"
import { UseCaseError } from "../../../../core/logic/UseCaseError"

export namespace RefreshAccessTokenErrors {
  export class RefreshTokenNotFound extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Refresh token doesn't exist`
      } as UseCaseError)
    }
  }

  export class UserNotFoundOrDeletedError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `User not found or doesn't exist anymore.`
      } as UseCaseError)
    }
  }
}
