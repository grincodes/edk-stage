import { UseCase } from '../../../../core/domain/UseCase';
import { Either, Result, left, right } from '../../../../core/logic/Result';
import { GenericAppError } from '../../../../core/logic/AppError';
import { GetShopByIdErrors } from './getShopByIdErrors';
import { Shop } from '../../domain/shop';
import { GetShopByIdDTO } from './getShopByIdDTO';
import { IShopRepo } from '../../repos/shopRepo';
import { ShopId } from '../../domain/shopId';
import { UniqueEntityID } from '../../../../core/domain/UniqueEntityID';

type Response = Either<GenericAppError.UnexpectedError | GetShopByIdErrors.ShopDoesNotExistError, Result<Shop>>;

export class GetShopByIdUseCase implements UseCase<GetShopByIdDTO, Promise<Response>> {
  private shopRepo: IShopRepo;

  constructor(shopRepo: IShopRepo) {
    this.shopRepo = shopRepo;
  }

  async execute(req: GetShopByIdDTO): Promise<Response> {
    const shopId = req.shopId;

    const shopIdOrError = ShopId.create(new UniqueEntityID(shopId));

    if (shopIdOrError.isFailure) {
      return left(Result.fail<void>(shopIdOrError.error)) as Response;
    }

    try {
      const shop = await this.shopRepo.findShopById(shopId);
      const shopFound = !!shop == true;

      if (!shopFound) {
        return left(new GetShopByIdErrors.ShopDoesNotExistError(shopId)) as Response;
      }

      return right(Result.ok<Shop>(shop)) as Response;
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }
  }
}
