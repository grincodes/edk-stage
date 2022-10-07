import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { InternationalDeliveryPartnerMap } from '../../mappers/internationalDeliveryPartnerMap';
import { CreateInternationalDeliveryPartnerDTO } from './createInternationalDeliveryPartnerDTO';
import { CreateInternationalDeliveryPartnerErrors } from './createInternationalDeliveryPartnerErrors';
import { CreateInternationalDeliveryPartnerUseCase } from './createInternationalDeliveryPartnerUseCase';

export class CreateInternationalDeliveryPartnerController extends BaseController {
  private useCase: CreateInternationalDeliveryPartnerUseCase;

  constructor(useCase: CreateInternationalDeliveryPartnerUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateInternationalDeliveryPartnerDTO = this.req.body as CreateInternationalDeliveryPartnerDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateInternationalDeliveryPartnerErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, InternationalDeliveryPartnerMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
