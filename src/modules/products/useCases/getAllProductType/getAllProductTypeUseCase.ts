import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { IProductTypeRepo } from "../../repos/productTypeRepo"
import { ProductType } from "../../domain/productType"

type Response = Either<GenericAppError.UnexpectedError, Result<ProductType[]>>

export class GetAllProductTypeUseCase implements UseCase<any, Promise<Response>> {
  private productTypeRepo: IProductTypeRepo

  constructor(productTypeRepo: IProductTypeRepo) {
    this.productTypeRepo = productTypeRepo
  }

  async execute(): Promise<Response> {
    try {
      const productTypes = await this.productTypeRepo.getAllProductType()

      return right(Result.ok<ProductType[]>(productTypes)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
