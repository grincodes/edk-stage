import { BaseController } from '../../../../core/infra/BaseController';
import { ProductTypeMap } from '../../mappers/productTypeMap';
import { GetAllProductTypeUseCase } from './getAllProductTypeUseCase';

export class GetAllProductTypeController extends BaseController {
  private useCase: GetAllProductTypeUseCase;

  constructor(useCase: GetAllProductTypeUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    try {
      const result = await this.useCase.execute();
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        return this.ok(this.res, ProductTypeMap.toAllResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
