import { BaseController } from '../../../../core/infra/BaseController';
import { ShopMap } from '../../mappers/ShopMap';
import { GetAllShopsDTO, GetPaginatedShopsResponseDTO } from './getAllShopsDto';
import { GetAllShopErrors } from './getAllShopsErrors';
import { GetAllShopsUseCase } from './getAllShopsUseCase';

export class GetAllShopsController extends BaseController {
  private useCase: GetAllShopsUseCase;

  constructor(useCase: GetAllShopsUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: GetAllShopsDTO = {
      page: Number(this.req.query.page),
      size: Number(this.req.query.size)
    };

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case GetAllShopErrors.InvalidQueryPassed:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        const shops = result.value.getValue();
        const paginatedShops = ShopMap.toPagination(shops, dto.page, dto.size);
        return this.ok<GetPaginatedShopsResponseDTO>(this.res, paginatedShops);
      }
    } catch (err) {
      return this.fail(err);
    }
  }
}
