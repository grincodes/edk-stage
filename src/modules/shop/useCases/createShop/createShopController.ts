import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ShopMap } from "../../mappers/ShopMap"
import { CreateShopDTO } from "./createShopDTO"
import { CreateShopErrors } from "./createShopErrors"
import { CreateShopUseCase } from "./createShopUseCase"

export class CreateShopController extends BaseController {
  private useCase: CreateShopUseCase

  constructor(useCase: CreateShopUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: CreateShopDTO = this.req.body as CreateShopDTO
    dto.owner_id = this.authReq.userId

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateShopErrors.ShopAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateShopErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, ShopMap.toResponseDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
