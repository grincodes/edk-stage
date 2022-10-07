import * as express from "express"
import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { LoginDTO } from "./LoginDTO"
import { LoginUseCaseErrors } from "./LoginErrors"
import { LoginUserUseCase } from "./LoginUseCase"

export class LoginController extends BaseController {
  private useCase: LoginUserUseCase

  constructor(useCase: LoginUserUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: LoginDTO = this.req.body as LoginDTO
    dto.auth_role = this.req.headers["auth_role"]

    try {
      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        const error = result.value
        console.log("error", error)
        switch (error.constructor) {
          case LoginUseCaseErrors.UserEmailDoesntExistError:
            return this.notFound(error.errorValue().message)
          case LoginUseCaseErrors.InvalidUserPermissionError:
            return this.unauthorized(error.errorValue().message)
          case LoginUseCaseErrors.InvalidAuthRoleError:
            return this.unauthorized(error.errorValue().message)
          case LoginUseCaseErrors.PasswordDoesntMatchError:
            return this.unauthorized(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res, result.value.getValue())
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
