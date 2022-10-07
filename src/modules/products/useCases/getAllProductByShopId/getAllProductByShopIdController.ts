import { BaseController } from "../../../../core/infra/BaseController"
import { ProductMap } from "../../mappers/productMap"
import { GetPaginatedProductsResponseDTO } from "../getProducts/getProductsDTO"
import { GetAllProductsByShopIdDTO } from "./getAllProductByShopIdDTO"
import { GetAllProductByShopIdUseCase } from "./getAllProductByShopIdUseCase"

export class GetAllProductByShopIdController extends BaseController {
  private useCase: GetAllProductByShopIdUseCase

  constructor(useCase: GetAllProductByShopIdUseCase) {
    super()
    this.useCase = useCase
  }

  protected async executeImpl(): Promise<any> {
    try {
      const dto: GetAllProductsByShopIdDTO = {
        shopid: this.req.params.shopId,
        page: Number(this.req.query.page),
        size: Number(this.req.query.size)
      }

      const result = await this.useCase.execute(dto)

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        const products = result.value.getValue()
        return this.ok<GetPaginatedProductsResponseDTO>(this.res, ProductMap.toPagination(products, dto.page, dto.size))
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
