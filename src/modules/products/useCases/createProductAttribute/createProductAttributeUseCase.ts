import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';
import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { ProductAttribute } from '../../domain/productAttribute';
import { IProductAttributeRepo } from '../../repos/productAttributeRepo';
import { CreateProductAttributeDTO } from './createProductAttributeDTO';
import { CreateProductAttributeErrors } from './createProductAttributeErrors';

type Response = Either<GenericAppError.UnexpectedError | CreateProductAttributeErrors.ProductAttributeAlreadyExists | Result<any>, Result<ProductAttribute>>;

export class CreateProductAttributeUseCase implements UseCase<CreateProductAttributeDTO, Promise<Response>> {
  private productAttributeRepo: IProductAttributeRepo;

  constructor(productAttributeRepo: IProductAttributeRepo) {
    this.productAttributeRepo = productAttributeRepo;
  }

  async execute(req: CreateProductAttributeDTO): Promise<Response> {
    if (!UniqueEntityID.isValidId(req.product_category_id)) {
      return left(Result.fail<void>('invalid category id')) as Response;
    }

    const productAttributeOrError = ProductAttribute.create({
      name: req.name,
      product_category_id: new UniqueEntityID(req.product_category_id),
      description: req.description
    });

    if (productAttributeOrError.isFailure) {
      return left(Result.fail<void>(productAttributeOrError.error)) as Response;
    }

    const prodAttribute: ProductAttribute = productAttributeOrError.getValue();

    const prodAttributeAlreadyExists = await this.productAttributeRepo.exists(prodAttribute.name);

    if (prodAttributeAlreadyExists) {
      return left(new CreateProductAttributeErrors.ProductAttributeAlreadyExists(prodAttribute.name)) as Response;
    }

    try {
      await this.productAttributeRepo.save(prodAttribute);
      console.log(`Product Attribute Created`);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<ProductAttribute>(prodAttribute)) as Response;
  }
}
