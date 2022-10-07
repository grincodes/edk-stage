import { BaseController } from '../../../../core/infra/BaseController';
import { ProductBrandMap } from '../../mappers/productBrandMap';
import { GetAllProductBrandUseCase } from './getAllProductBrandsUseCase';

export class GetAllProductBrandController extends BaseController {
  private useCase: GetAllProductBrandUseCase;

  constructor(useCase: GetAllProductBrandUseCase) {
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
        return this.ok(this.res, ProductBrandMap.toAllResponeDto(result.value.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
