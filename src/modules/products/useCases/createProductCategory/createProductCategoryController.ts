import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { ProductCategoryMap } from '../../mappers/productCategoryMap';
import { CreateProductCategoryDTO } from './createProductCategoryDto';
import { CreateProductCategoryErrors } from './createProductCategoryErrors';
import { CreateProductCategoryUseCase } from './createProductCategoryUseCase';

export class CreateProductCategoryController extends BaseController {
  private useCase: CreateProductCategoryUseCase;

  constructor(useCase: CreateProductCategoryUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductCategoryDTO = this.req.body as CreateProductCategoryDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateProductCategoryErrors.CategoryAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateProductCategoryErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, ProductCategoryMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
