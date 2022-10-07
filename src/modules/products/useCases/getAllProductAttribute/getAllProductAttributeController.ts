import { BaseController } from "../../../../core/infra/BaseController"
import { ProductAttributeMap } from "../../mappers/productAttributeMap"
import { GetAllProductAttributeUseCase } from "./getAllProductAttributeUseCase"

export class GetAllProductAttributeController extends BaseController {
  private useCase: GetAllProductAttributeUseCase

  constructor(useCase: GetAllProductAttributeUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    try {
      const result = await this.useCase.execute()
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res, ProductAttributeMap.toAllResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
