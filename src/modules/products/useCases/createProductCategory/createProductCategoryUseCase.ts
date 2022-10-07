import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';
import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { ProductCategory } from '../../domain/productCategory';
import { Slug } from '../../domain/slug';
import { IProductCategoryRepo } from '../../repos/productCategoryRepo';
import { CreateProductCategoryDTO } from './createProductCategoryDto';
import { CreateProductCategoryErrors } from './createProductCategoryErrors';

type Response = Either<GenericAppError.UnexpectedError | CreateProductCategoryErrors.CategoryAlreadyExists | Result<any>, Result<ProductCategory>>;

export class CreateProductCategoryUseCase implements UseCase<CreateProductCategoryDTO, Promise<Response>> {
  private productCategoryRepo: IProductCategoryRepo;

  constructor(productCategoryRepo: IProductCategoryRepo) {
    this.productCategoryRepo = productCategoryRepo;
  }

  async execute(req: CreateProductCategoryDTO): Promise<Response> {
    const productCategoryOrError = ProductCategory.create({
      product_type_id: new UniqueEntityID(req.product_type_id),
      name: req.name,
      slug: Slug.create(req.slug).getValue().value,
      isActive: true
    });

    if (productCategoryOrError.isFailure) {
      return left(Result.fail<void>(productCategoryOrError.error)) as Response;
    }

    const prodCat: ProductCategory = productCategoryOrError.getValue();

    const prodCatAlreadyExists = await this.productCategoryRepo.exists(prodCat.name);

    if (prodCatAlreadyExists) {
      return left(new CreateProductCategoryErrors.CategoryAlreadyExists(prodCat.name)) as Response;
    }

    try {
      await this.productCategoryRepo.save(prodCat);
      console.log(`Product Category Created`);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<ProductCategory>(prodCat)) as Response;
  }
}
