import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductAttributeValue } from "../../domain/productAttributeValue"
import { IProductAttributeValueRepo } from "../../repos/productAttributeValueRepo"
import { GetProductAttrValuesByAttrIdDTO } from "./productAttributeValuesByAttrIdDTO"

type Response = Either<GenericAppError.UnexpectedError, Result<ProductAttributeValue[]>>

export class GetAllProductAttributeValueByAttrIdUseCase implements UseCase<any, Promise<Response>> {
  private productAttributeValueRepo: IProductAttributeValueRepo

  constructor(productAttributeValueRepo: IProductAttributeValueRepo) {
    this.productAttributeValueRepo = productAttributeValueRepo
  }

  async execute(req: GetProductAttrValuesByAttrIdDTO): Promise<Response> {
    try {
      const productAttributeValue = await this.productAttributeValueRepo.getProductAttributeValuesByAttrID(req.attributeId)

      return right(Result.ok<ProductAttributeValue[]>(productAttributeValue)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
