import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { ProductCategory } from "../../domain/productCategory"
import { ProductSubCategory } from "../../domain/productSubCategory"
import { IProductCategoryRepo } from "../../repos/productCategoryRepo"
import { IProductSubCategoryRepo } from "../../repos/productSubCategoryRepo"
import { CreateProductSubCategoryDTO } from "./createProductSubCategoryDTO"
import { CreateProductSubCategoryErrors } from "./createProductSubCategoryError"

type Response = Either<GenericAppError.UnexpectedError | CreateProductSubCategoryErrors.SubCategoryAlreadyExists | Result<any>, Result<ProductSubCategory>>

export class CreateProductSubCategoryUseCase implements UseCase<CreateProductSubCategoryDTO, Promise<Response>> {
  private productSubCategoryRepo: IProductSubCategoryRepo

  constructor(productSubCategoryRepo: IProductSubCategoryRepo) {
    this.productSubCategoryRepo = productSubCategoryRepo
  }

  async execute(req: CreateProductSubCategoryDTO): Promise<Response> {
    const productSubCategoryOrError = ProductSubCategory.create({
      categoryId: new UniqueEntityID(req.category_id),
      name: req.name,
      slug: req.slug,
      isActive: true
    })

    if (productSubCategoryOrError.isFailure) {
      return left(Result.fail<void>(productSubCategoryOrError.error)) as Response
    }

    const prodSubCat: ProductSubCategory = productSubCategoryOrError.getValue()

    const prodSubCatAlreadyExists = await this.productSubCategoryRepo.exists(prodSubCat.name)

    if (prodSubCatAlreadyExists) {
      return left(new CreateProductSubCategoryErrors.SubCategoryAlreadyExists(prodSubCat.name)) as Response
    }

    try {
      await this.productSubCategoryRepo.save(prodSubCat)
      console.log(`Product Sub Category Created`)
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<ProductSubCategory>(prodSubCat)) as Response
  }
}
