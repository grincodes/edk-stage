import { UseCase } from '../../../../core/domain/UseCase';
import { Either, Result, left, right } from '../../../../core/logic/Result';
import { GenericAppError } from '../../../../core/logic/AppError';
import { IShopCategoryRepo } from '../../repos/ShopCategoryRepo';
import { ShopCategory } from '../../domain/ShopCategory';

type Response = Either<GenericAppError.UnexpectedError, Result<ShopCategory[]>>;

export class GetAllShopCategoryUseCase implements UseCase<any, Promise<Response>> {
  private ShopCategoryRepo: IShopCategoryRepo;

  constructor(ShopCategoryRepo: IShopCategoryRepo) {
    this.ShopCategoryRepo = ShopCategoryRepo;
  }

  async execute(): Promise<Response> {
    try {
      const shopCats = await this.ShopCategoryRepo.getAllShopCategory();

      return right(Result.ok<ShopCategory[]>(shopCats)) as Response;
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }
  }
}
