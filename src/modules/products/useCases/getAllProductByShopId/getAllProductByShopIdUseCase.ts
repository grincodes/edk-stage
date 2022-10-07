import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { Product } from "../../domain/product"
import { IProductRepo } from "../../repos/productRepo"
import { GetAllProductsByShopIdDTO } from "./getAllProductByShopIdDTO"

type Response = Either<GenericAppError.UnexpectedError, Result<Product[]>>

export class GetAllProductByShopIdUseCase implements UseCase<any, Promise<Response>> {
  private productRepo: IProductRepo

  constructor(productRepo: IProductRepo) {
    this.productRepo = productRepo
  }

  async execute(req: GetAllProductsByShopIdDTO): Promise<Response> {
    try {
      const allProductsInShop = await this.productRepo.getAllProductByShopId(req.shopid, req.page, req.size)

      return right(Result.ok<Product[]>(allProductsInShop)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
