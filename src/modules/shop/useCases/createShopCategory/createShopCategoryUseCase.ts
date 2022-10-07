import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { ShopCategory } from '../../domain/shopCategory';
import { IShopCategoryRepo } from '../../repos/shopCategoryRepo';
import { CreateShopCategoryDTO } from './createShopCategoryDTO';
import { CreateShopCategoryErrors } from './createShopCategoryErrors';

type Response = Either<GenericAppError.UnexpectedError | CreateShopCategoryErrors.ShopCategoryAlreadyExists | Result<any>, Result<ShopCategory>>;

export class CreateShopCategoryUseCase implements UseCase<CreateShopCategoryDTO, Promise<Response>> {
  private shopCategoryRepo: IShopCategoryRepo;

  constructor(shopCategoryRepo: IShopCategoryRepo) {
    this.shopCategoryRepo = shopCategoryRepo;
  }

  async execute(req: CreateShopCategoryDTO): Promise<Response> {
    // todo Get UserType
    const shopCategoryOrError = ShopCategory.create({
      name: req.name,
      slug: req.slug,
      isActive: true
    });

    if (shopCategoryOrError.isFailure) {
      return left(Result.fail<void>(shopCategoryOrError.error)) as Response;
    }

    const shopCat: ShopCategory = shopCategoryOrError.getValue();

    const shopCatAlreadyExists = await this.shopCategoryRepo.exists(shopCat.name);

    if (shopCatAlreadyExists) {
      return left(new CreateShopCategoryErrors.ShopCategoryAlreadyExists(shopCat.name)) as Response;
    }

    try {
      await this.shopCategoryRepo.save(shopCat);
      console.log(`Shop Category Created`);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<ShopCategory>(shopCat)) as Response;
  }
}
