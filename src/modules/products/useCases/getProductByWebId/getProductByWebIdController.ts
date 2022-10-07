import { BaseController } from "../../../../core/infra/BaseController"
import { Product } from "../../domain/product"
import { ProductMap } from "../../mappers/productMap"
import { GetProductByWebIdDTO } from "./getProductByWebIdDTO"
import { GetProductByWebIdUseCase } from "./getProductByWebIdUseCase"

export class GetProductByWebIdController extends BaseController {
  private useCase: GetProductByWebIdUseCase

  constructor(useCase: GetProductByWebIdUseCase) {
    super()
    this.useCase = useCase
  }

  protected async executeImpl(): Promise<any> {
    try {
      const dto: GetProductByWebIdDTO = {
        shopid: this.req.params.shopId,
        productWebId: this.req.params.productWebId
      }

      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        const product = result.value.getValue()
        return this.ok<Product>(this.res, product)
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
