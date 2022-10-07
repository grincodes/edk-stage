import { DeleteUserUseCase } from "./DeleteUserUseCase"
import { DeleteUserDTO } from "./DeleteUserDTO"
import * as express from "express"
import { BaseController } from "../../../../core/infra/BaseController"
import { DeleteUserErrors } from "./DeleteUserError"
import { GenericAppError } from "../../../../core/logic/AppError"

export class DeleteUserController extends BaseController {
  private useCase: DeleteUserUseCase

  constructor(useCase: DeleteUserUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: DeleteUserDTO = this.req.body as DeleteUserDTO

    try {
      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case DeleteUserErrors.UserNotFoundError:
            return this.notFound(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res)
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
