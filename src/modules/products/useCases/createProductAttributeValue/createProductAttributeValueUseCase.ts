import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { ProductAttributeId } from "../../domain/ProductAttributeId"
import { ProductAttributeValue } from "../../domain/productAttributeValue"
import { IProductAttributeValueRepo } from "../../repos/productAttributeValueRepo"
import { CreateProductAttributeValueDTO } from "./createProductAttributeValueDTO"
import { CreateProductAttributeValueErrors } from "./createProductAttributeValueErrors"

type Response = Either<GenericAppError.UnexpectedError | CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists | Result<any>, Result<ProductAttributeValue>>

export class CreateProductAttributeValueUseCase implements UseCase<CreateProductAttributeValueDTO, Promise<Response>> {
  private productAttributeValueRepo: IProductAttributeValueRepo

  constructor(productAttributeValueRepo: IProductAttributeValueRepo) {
    this.productAttributeValueRepo = productAttributeValueRepo
  }

  async execute(req: CreateProductAttributeValueDTO): Promise<Response> {
    const productAttributeIdOrError = ProductAttributeId.create(new UniqueEntityID(req.attribute_id))

    if (productAttributeIdOrError.isFailure) {
      return left(Result.fail<void>(productAttributeIdOrError.error)) as Response
    }

    const productAttributValueOrError = ProductAttributeValue.create({
      productAttributeId: productAttributeIdOrError.getValue(),
      attributeValue: req.attribute_value,
      attributeSequence: 1,
    })

    if (productAttributValueOrError.isFailure) {
      return left(Result.fail<void>(productAttributValueOrError.error)) as Response
    }

    const prodAttributeValue: ProductAttributeValue = productAttributValueOrError.getValue()

    const prodAttributeAlreadyExists = await this.productAttributeValueRepo.exists(prodAttributeValue.attributeValue)

    if (prodAttributeAlreadyExists) {
      return left(new CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists(prodAttributeValue.attributeValue)) as Response
    }

    try {
      await this.productAttributeValueRepo.save(prodAttributeValue)
      console.log(`Product Attribute Value Created`)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<ProductAttributeValue>(prodAttributeValue)) as Response
  }
}
