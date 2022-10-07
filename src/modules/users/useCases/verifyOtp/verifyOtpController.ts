import { BaseController } from "../../../../core/infra/BaseController"
import { VerifyOtpDTO } from "./verifyOtpDTO"
import { VerifyOtpUseCaseErrors } from "./verifyOtpErrors"
import { VerifyOtpUseCase } from "./verifyOtpUseCase"

export class VerifyOtpController extends BaseController {
  private useCase: VerifyOtpUseCase

  constructor(useCase: VerifyOtpUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: VerifyOtpDTO = this.req.body as VerifyOtpDTO
    dto.userId = this.authReq.userId
    dto.isUserVerified = this.authReq.isEmailVerified

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case VerifyOtpUseCaseErrors.InvalidUserError:
            return this.conflict(error.errorValue().message)
          case VerifyOtpUseCaseErrors.UserAlreadyVerifiedError:
            return this.conflict(error.errorValue().message)
          case VerifyOtpUseCaseErrors.InvalidOtp:
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
