import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductTypeMap } from "../../mappers/productTypeMap"
import { CreateProductTypeDTO } from "./createProductTypeDTO"
import { CreateProductTypeErrors } from "./createProductTypeErrors"
import { CreateProductTypeUseCase } from "./createProductTypeUseCase"

export class CreateProductTypeController extends BaseController {
  private useCase: CreateProductTypeUseCase

  constructor(useCase: CreateProductTypeUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductTypeDTO = this.req.body as CreateProductTypeDTO

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateProductTypeErrors.ProductTypeAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateProductTypeErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, ProductTypeMap.toResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
