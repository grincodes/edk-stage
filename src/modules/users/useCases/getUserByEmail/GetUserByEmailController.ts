import * as express from "express"
import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { GetUserByEmailDTO } from "./GetUserByEmailDTO"
import { GetUserByEmailErrors } from "./GetUserByEmailErrors"
import { GetUserByEmailUseCase } from "./GetUserByEmailUsecase"

export class GetUserByEmailController extends BaseController {
  private useCase: GetUserByEmailUseCase

  constructor(useCase: GetUserByEmailUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: GetUserByEmailDTO = this.req.body as GetUserByEmailDTO

    try {
      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case GetUserByEmailErrors.UserNotFoundError:
            return this.notFound(error.errorValue().message)
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
