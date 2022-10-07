import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductAttribute } from "../../domain/productAttribute"
import { IProductAttributeRepo } from "../../repos/productAttributeRepo"

type Response = Either<GenericAppError.UnexpectedError, Result<ProductAttribute[]>>

export class GetAllProductAttributeUseCase implements UseCase<any, Promise<Response>> {
  private productAttributeRepo: IProductAttributeRepo

  constructor(productAttributeRepo: IProductAttributeRepo) {
    this.productAttributeRepo = productAttributeRepo
  }

  async execute(): Promise<Response> {
    try {
      const productAttrs = await this.productAttributeRepo.getAllProductAttribute()

      return right(Result.ok<ProductAttribute[]>(productAttrs)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
