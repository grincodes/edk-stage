import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { ProductAttributeValueMap } from '../../mappers/productAttributeValueMap';
import { CreateProductAttributeValueDTO } from './createProductAttributeValueDTO';
import { CreateProductAttributeValueErrors } from './createProductAttributeValueErrors';
import { CreateProductAttributeValueUseCase } from './createProductAttributeValueUseCase';

export class CreateProductAttributeValueController extends BaseController {
  private useCase: CreateProductAttributeValueUseCase;

  constructor(useCase: CreateProductAttributeValueUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductAttributeValueDTO = this.req.body as CreateProductAttributeValueDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateProductAttributeValueErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, ProductAttributeValueMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
