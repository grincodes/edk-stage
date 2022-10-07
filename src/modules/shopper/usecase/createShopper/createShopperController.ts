import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ShopperMap } from "../../mappers/ShopperMap"
import { CreateShopperDTO } from "./createShopperDTO"
import { CreateShopperErrors } from "./createShopperErrors"
import { CreateShopperUseCase } from "./createShopperUseCase"

export class CreateShopperController extends BaseController {
  private useCase: CreateShopperUseCase

  constructor(useCase: CreateShopperUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: CreateShopperDTO = this.req.body as CreateShopperDTO
    dto.decoded = this.authReq
    dto.shopper_user_id = this.authReq.userId

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateShopperErrors.ShopperAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateShopperErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, ShopperMap.toResponseDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
