import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductSubCategoryMap } from "../../mappers/productSubCategoryMap"
import { CreateProductSubCategoryDTO } from "./createProductSubCategoryDTO"
import { CreateProductSubCategoryErrors } from "./createProductSubCategoryError"
import { CreateProductSubCategoryUseCase } from "./createProductSubCategoryUseCase"

export class CreateProductSubCategoryController extends BaseController {
  private useCase: CreateProductSubCategoryUseCase

  constructor(useCase: CreateProductSubCategoryUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductSubCategoryDTO = this.req.body as CreateProductSubCategoryDTO

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateProductSubCategoryErrors.SubCategoryAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateProductSubCategoryErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, ProductSubCategoryMap.toResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
