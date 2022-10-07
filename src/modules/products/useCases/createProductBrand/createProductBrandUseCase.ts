import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { ProductBrand } from "../../domain/productBrand"
import { IProductBrandRepo } from "../../repos/productBrandRepo"
import { CreateProductBrandDTO } from "./createProductBrandDTO"
import { CreateProductBrandErrors } from "./createProductBrandErrors"

type Response = Either<GenericAppError.UnexpectedError | CreateProductBrandErrors.BrandAlreadyExists | Result<any>, Result<ProductBrand>>

export class CreateProductBrandUseCase implements UseCase<CreateProductBrandDTO, Promise<Response>> {
  private productBrandRepo: IProductBrandRepo

  constructor(productBrandRepo: IProductBrandRepo) {
    this.productBrandRepo = productBrandRepo
  }

  async execute(req: CreateProductBrandDTO): Promise<Response> {
    const productBrandOrError = ProductBrand.create({
      name: req.name
    })

    if (productBrandOrError.isFailure) {
      return left(Result.fail<void>(productBrandOrError.error)) as Response
    }

    const prodBrand: ProductBrand = productBrandOrError.getValue()

    const prodBrandAlreadyExists = await this.productBrandRepo.exists(prodBrand.name)

    if (prodBrandAlreadyExists) {
      return left(new CreateProductBrandErrors.BrandAlreadyExists(prodBrand.name)) as Response
    }

    try {
      await this.productBrandRepo.save(prodBrand)
      console.log(`Product Brand Created`)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<ProductBrand>(prodBrand)) as Response
  }
}
