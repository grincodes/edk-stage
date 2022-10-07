import { BaseController } from '../../../../core/infra/BaseController';
import { ShopCategoryMap } from '../../mappers/ShopCategoryMap';
import { GetAllShopCategoryUseCase } from './getAllShopCategoryUsecase';

export class GetAllShopCategoryController extends BaseController {
  private useCase: GetAllShopCategoryUseCase;

  constructor(useCase: GetAllShopCategoryUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    try {
      const result = await this.useCase.execute();
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        return this.ok(this.res, ShopCategoryMap.toAllResponeDto(result.value.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
