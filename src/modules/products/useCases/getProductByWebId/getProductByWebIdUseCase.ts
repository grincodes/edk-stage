import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { Product } from "../../domain/product"
import { IProductRepo } from "../../repos/productRepo"

type Response = Either<GenericAppError.UnexpectedError, Result<Product>>

export class GetProductByWebIdUseCase implements UseCase<any, Promise<Response>> {
  private productRepo: IProductRepo

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo
  }

  async execute(req: any): Promise<Response> {
    try {
      const product = await this.productRepo.findProductByWebId(req.shopid, req.productWebId)
      return right(Result.ok<Product>(product)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
