import { BaseController } from '../../../../core/infra/BaseController';
import { ProductAttributeValueMap } from '../../mappers/productAttributeValueMap';
import { GetProductAttrValuesByAttrIdDTO } from './productAttributeValuesByAttrIdDTO';
import { GetAllProductAttributeValueByAttrIdUseCase } from './productAttributeValuesByAttrIdUseCase';

export class GetAllProductAttributeValueController extends BaseController {
  private useCase: GetAllProductAttributeValueByAttrIdUseCase;

  constructor(useCase: GetAllProductAttributeValueByAttrIdUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: GetProductAttrValuesByAttrIdDTO = this.req.body as GetProductAttrValuesByAttrIdDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          default:
            return this.fail(error.errorValue().message);
        }
      } else {
        return this.ok(this.res, ProductAttributeValueMap.toAllResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
