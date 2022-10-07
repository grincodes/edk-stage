import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { DeliveryPartnerName } from '../../domain/deliveryPartnerName';
import { LocalDeliveryPartner } from '../../domain/localDeliveryPartners';
import { ILocalDeliveryPartnerRepo } from '../../repos/localDeliveryPartnerRepo';
import { CreateLocalDeliveryPartnerDTO } from './createLocalDeliveryPartnerDTO';
import { CreateLocalDeliveryPartnerErrors } from './createLocalDeliveryPartnerErrors';

type Response = Either<GenericAppError.UnexpectedError | CreateLocalDeliveryPartnerErrors.LocalDeliveryPartnerAlreadyExists | Result<any>, Result<LocalDeliveryPartner>>;

export class CreateLocalDeliveryPartnerUseCase implements UseCase<CreateLocalDeliveryPartnerDTO, Promise<Response>> {
  private localDeliveryPartnerRepo: ILocalDeliveryPartnerRepo;

  constructor(localDeliveryPartnerRepo: ILocalDeliveryPartnerRepo) {
    this.localDeliveryPartnerRepo = localDeliveryPartnerRepo;
  }

  async execute(req: CreateLocalDeliveryPartnerDTO): Promise<Response> {
    const deliveryPartnerNameOrError = DeliveryPartnerName.create(req.name);

    if (deliveryPartnerNameOrError.isFailure) {
      return left(Result.fail<void>(deliveryPartnerNameOrError.error)) as Response;
    }

    const localDeliveryPartnerOrError = LocalDeliveryPartner.create({
      delivery_partner_name: deliveryPartnerNameOrError.getValue(),
      isActive: true
    });

    if (localDeliveryPartnerOrError.isFailure) {
      return left(Result.fail<void>(localDeliveryPartnerOrError.error)) as Response;
    }

    const localDeliveryPartner: LocalDeliveryPartner = localDeliveryPartnerOrError.getValue();

    const localDeliveryPartnerAlreadyExists = await this.localDeliveryPartnerRepo.exists(localDeliveryPartner.deliveryPartnerName.value);

    if (localDeliveryPartnerAlreadyExists) {
      return left(new CreateLocalDeliveryPartnerErrors.LocalDeliveryPartnerAlreadyExists(localDeliveryPartner.deliveryPartnerName.value)) as Response;
    }

    try {
      await this.localDeliveryPartnerRepo.save(localDeliveryPartner);
      console.log(`Local Delivery Created`);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<LocalDeliveryPartner>(localDeliveryPartner)) as Response;
  }
}
