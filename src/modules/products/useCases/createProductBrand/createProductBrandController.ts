import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductBrandMap } from "../../mappers/productBrandMap"
import { CreateProductBrandDTO } from "./createProductBrandDTO"
import { CreateProductBrandErrors } from "./createProductBrandErrors"
import { CreateProductBrandUseCase } from "./createProductBrandUseCase"

export class CreateProductBrandController extends BaseController {
  private useCase: CreateProductBrandUseCase

  constructor(useCase: CreateProductBrandUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductBrandDTO = this.req.body as CreateProductBrandDTO

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateProductBrandErrors.BrandAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateProductBrandErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, ProductBrandMap.toResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
