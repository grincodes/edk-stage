import { BaseController } from '../../../../core/infra/BaseController';
import { GetShopByIdDTO } from './getShopByIdDTO';
import { GetShopByIdErrors } from './getShopByIdErrors';
import { GetShopByIdUseCase } from './getShopByIdUseCase';

export class GetShopByIdController extends BaseController {
  private useCase: GetShopByIdUseCase;

  constructor(useCase: GetShopByIdUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: GetShopByIdDTO = {
      shopId: this.req.params.shopId
    };

    try {
      const result = await this.useCase.execute(dto);

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case GetShopByIdErrors.ShopDoesNotExistError:
            return this.notFound(error.errorValue().message);
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        const shop = result.value.getValue();
        return this.ok(this.res, shop);
      }
    } catch (err) {
      return this.fail(err);
    }
  }
}
