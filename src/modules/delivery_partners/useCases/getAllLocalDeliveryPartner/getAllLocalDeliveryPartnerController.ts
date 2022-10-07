import { BaseController } from '../../../../core/infra/BaseController';
import { LocalDeliveryPartnerMap } from '../../mappers/localDeliveryPartnerMap';
import { GetAllLocalDeliveryPartnerUseCase } from './getAllLocalDeliveryPartnerUseCase';

export class GetAllLocalDeliveryPartnerController extends BaseController {
  private useCase: GetAllLocalDeliveryPartnerUseCase;

  constructor(useCase: GetAllLocalDeliveryPartnerUseCase) {
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
        result.value.getValue();
        return this.ok(this.res, LocalDeliveryPartnerMap.toAllResponeDto(result.value.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
