import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { ProductType } from "../../domain/productType"
import { IProductTypeRepo } from "../../repos/productTypeRepo"
import { CreateProductTypeDTO } from "./createProductTypeDTO"
import { CreateProductTypeErrors } from "./createProductTypeErrors"

type Response = Either<GenericAppError.UnexpectedError | CreateProductTypeErrors.ProductTypeAlreadyExists | Result<any>, Result<ProductType>>

export class CreateProductTypeUseCase implements UseCase<CreateProductTypeDTO, Promise<Response>> {
  private productTypeRepo: IProductTypeRepo

  constructor(productTypeRepo: IProductTypeRepo) {
    this.productTypeRepo = productTypeRepo
  }

  async execute(req: CreateProductTypeDTO): Promise<Response> {
    const productTypeOrError = ProductType.create({
      name: req.name
    })

    if (productTypeOrError.isFailure) {
      return left(Result.fail<void>(productTypeOrError.error)) as Response
    }

    const prodType: ProductType = productTypeOrError.getValue()

    const prodTypeAlreadyExists = await this.productTypeRepo.exists(prodType.name)

    if (prodTypeAlreadyExists) {
      return left(new CreateProductTypeErrors.ProductTypeAlreadyExists(prodType.name)) as Response
    }

    try {
      await this.productTypeRepo.save(prodType)
      console.log(`Product Type Created`)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<ProductType>(prodType)) as Response
  }
}
