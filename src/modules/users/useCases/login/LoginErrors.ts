import { Result } from "../../../../core/logic/Result"
import { UseCaseError } from "../../../../core/logic/UseCaseError"

export namespace LoginUseCaseErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`,
      } as UseCaseError)
    }
  }

  export class InvalidUserPermissionError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Access Denied Invalid Permission`,
      } as UseCaseError)
    }
  }

  export class InvalidAuthRoleError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Invalid auth role specified in header`,
      } as UseCaseError)
    }
  }

  export class UserEmailDoesntExistError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Email or password incorrect.`,
      } as UseCaseError)
    }
  }

  export class PasswordDoesntMatchError extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Password doesnt match error.`,
      } as UseCaseError)
    }
  }
}
