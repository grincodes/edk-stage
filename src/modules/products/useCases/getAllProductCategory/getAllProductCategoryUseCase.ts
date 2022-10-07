import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { IProductCategoryRepo } from "../../repos/productCategoryRepo"
import { ProductCategory } from "../../domain/productCategory"

type Response = Either<GenericAppError.UnexpectedError, Result<ProductCategory[]>>

export class GetAllProductCategoryUseCase implements UseCase<any, Promise<Response>> {
  private productCategoryRepo: IProductCategoryRepo

  constructor(productCategoryRepo: IProductCategoryRepo) {
    this.productCategoryRepo = productCategoryRepo
  }

  async execute(): Promise<Response> {
    try {
      const productCats = await this.productCategoryRepo.getAllProductCategory()

      return right(Result.ok<ProductCategory[]>(productCats)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
