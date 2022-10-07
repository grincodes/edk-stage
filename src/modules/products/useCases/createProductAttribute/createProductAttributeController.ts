import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { ProductAttributeMap } from '../../mappers/productAttributeMap';
import { CreateProductAttributeDTO } from './createProductAttributeDTO';
import { CreateProductAttributeErrors } from './createProductAttributeErrors';
import { CreateProductAttributeUseCase } from './createProductAttributeUseCase';

export class CreateProductAttributeController extends BaseController {
  private useCase: CreateProductAttributeUseCase;

  constructor(useCase: CreateProductAttributeUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateProductAttributeDTO = this.req.body as CreateProductAttributeDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateProductAttributeErrors.ProductAttributeAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateProductAttributeErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, ProductAttributeMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
