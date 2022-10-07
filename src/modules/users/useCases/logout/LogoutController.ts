import { LogoutUseCase } from "./LogoutUseCase"
import * as express from "express"
import { BaseController } from "../../../../core/infra/BaseController"
import { LogoutDTO } from "./LogoutDTO"

export class LogoutController extends BaseController {
  private useCase: LogoutUseCase

  constructor(useCase: LogoutUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: LogoutDTO = this.req.body as LogoutDTO

    try {
      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        return this.fail(result.value.errorValue().message)
      } else {
        return this.ok(this.res)
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
