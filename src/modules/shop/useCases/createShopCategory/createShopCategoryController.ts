import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { ShopCategoryMap } from '../../mappers/ShopCategoryMap';
import { CreateShopCategoryDTO } from './createShopCategoryDto';
import { CreateShopCategoryErrors } from './createShopCategoryErrors';
import { CreateShopCategoryUseCase } from './createShopCategoryUseCase';

export class CreateShopCategoryController extends BaseController {
  private useCase: CreateShopCategoryUseCase;

  constructor(useCase: CreateShopCategoryUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateShopCategoryDTO = this.req.body as CreateShopCategoryDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateShopCategoryErrors.ShopCategoryAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateShopCategoryErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, ShopCategoryMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
