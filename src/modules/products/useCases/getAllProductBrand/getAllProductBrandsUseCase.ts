import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductBrand } from "../../domain/productBrand"
import { IProductBrandRepo } from "../../repos/productBrandRepo"

type Response = Either<GenericAppError.UnexpectedError, Result<ProductBrand[]>>

export class GetAllProductBrandUseCase implements UseCase<any, Promise<Response>> {
  private productBrandRepo: IProductBrandRepo

  constructor(productBrandRepo: IProductBrandRepo) {
    this.productBrandRepo = productBrandRepo
  }

  async execute(): Promise<Response> {
    try {
      const productBrands = await this.productBrandRepo.getAllProductBrand()

      return right(Result.ok<ProductBrand[]>(productBrands)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
