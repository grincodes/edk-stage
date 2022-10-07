import { BaseController } from '../../../../core/infra/BaseController';
import { GenericAppError } from '../../../../core/logic/AppError';
import { LocalDeliveryPartnerMap } from '../../mappers/localDeliveryPartnerMap';
import { CreateLocalDeliveryPartnerDTO } from './createLocalDeliveryPartnerDTO';
import { CreateLocalDeliveryPartnerErrors } from './createLocalDeliveryPartnerErrors';
import { CreateLocalDeliveryPartnerUseCase } from './createLocalDeliveryPartnerUseCase';

export class CreateLocalDeliveryPartnerController extends BaseController {
  private useCase: CreateLocalDeliveryPartnerUseCase;

  constructor(useCase: CreateLocalDeliveryPartnerUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<any> {
    const dto: CreateLocalDeliveryPartnerDTO = this.req.body as CreateLocalDeliveryPartnerDTO;

    try {
      const result = await this.useCase.execute(dto);
      const resultVal = result.value;
      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CreateLocalDeliveryPartnerErrors.LocalDeliveryPartnerAlreadyExists:
            return this.conflict(error.errorValue().message);
          case CreateLocalDeliveryPartnerErrors.GuardError:
            return this.conflict(error.errorValue().message);
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message);
          default:
            return this.fail(error.errorValue());
        }
      } else {
        return this.ok(this.res, LocalDeliveryPartnerMap.toResponeDto(resultVal.getValue()));
      }
    } catch (err) {
      this.fail(err);
    }
  }
}
