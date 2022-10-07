import { BaseController } from '../../../../core/infra/BaseController';
import { InternationalDeliveryPartnerMap } from '../../mappers/internationalDeliveryPartnerMap';
import { GetAllInternationalDeliveryPartnerUseCase } from './getAllInternationalDeliveryPartnerUseCase';

export class GetAllInternationalDeliveryPartnerController extends BaseController {
  private useCase: GetAllInternationalDeliveryPartnerUseCase;

  constructor(useCase: GetAllInternationalDeliveryPartnerUseCase) {
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
        return this.ok(this.res, InternationalDeliveryPartnerMap.toAllResponeDto(result.value.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
