import { UseCase } from '../../../../core/domain/UseCase';
import { Either, Result, left, right } from '../../../../core/logic/Result';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Shop } from '../../domain/shop';
import { IShopRepo } from '../../repos/shopRepo';
import { GetAllShopsDTO } from './getAllShopsDto';
import { GetAllShopErrors } from './getAllShopsErrors';

type Response = Either<GenericAppError.UnexpectedError, Result<Shop[]>>;

export class GetAllShopsUseCase implements UseCase<GetAllShopsDTO, Promise<Response>> {
  private shopRepo: IShopRepo;

  constructor(shopRepo: IShopRepo) {
    this.shopRepo = shopRepo;
  }

  async execute(req: GetAllShopsDTO): Promise<Response> {
    const { page, size } = req;

    if (!(isNaN(req.page) && isNaN(req.size))) {
      try {
        const shops = await this.shopRepo.getAllShops(page, size);

        return right(Result.ok<Shop[]>(shops)) as Response;
      } catch (err) {
        return left(new GenericAppError.UnexpectedError(err)) as Response;
      }
    } else {
      return left(new GetAllShopErrors.InvalidQueryPassed()) as Response;
    }
  }
}
