import { BaseController } from "../../../../core/infra/BaseController"
import { ProductCategoryMap } from "../../mappers/productCategoryMap"
import { GetAllProductCategoryUseCase } from "./getAllProductCategoryUsecase"

export class GetAllProductCategoryController extends BaseController {
  private useCase: GetAllProductCategoryUseCase

  constructor(useCase: GetAllProductCategoryUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    try {
      const result = await this.useCase.execute()

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res, ProductCategoryMap.toAllResponeDto(result.value.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
