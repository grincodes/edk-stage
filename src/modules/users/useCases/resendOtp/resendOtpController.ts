import { BaseController } from "../../../../core/infra/BaseController"
import { ResendOtpDTO } from "./resendOtpDTO"
import { ResendOtpUseCaseErrors } from "./resendOtpErrors"
import { ResendOtpUseCase } from "./resendOtpUseCase"

export class ResendOtpController extends BaseController {
  private useCase: ResendOtpUseCase

  constructor(useCase: ResendOtpUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: ResendOtpDTO = this.authReq

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case ResendOtpUseCaseErrors.InvalidUserError:
            return this.conflict(error.errorValue().message)
          case ResendOtpUseCaseErrors.UserAlreadyVerifiedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, resultVal.getValue())
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
