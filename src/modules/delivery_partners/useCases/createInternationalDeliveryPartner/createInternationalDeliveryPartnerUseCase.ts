import { UseCase } from '../../../../core/domain/UseCase';
import { GenericAppError } from '../../../../core/logic/AppError';
import { Either, left, Result, right } from '../../../../core/logic/Result';
import { DeliveryPartnerName } from '../../domain/deliveryPartnerName';
import { InternationalDeliveryPartner } from '../../domain/internationalDeliveryPartners';
import { IInternationalDeliveryPartnerRepo } from '../../repos/internationalDeliveryPartnerRepo';
import { CreateInternationalDeliveryPartnerDTO } from './createInternationalDeliveryPartnerDTO';
import { CreateInternationalDeliveryPartnerErrors } from './createInternationalDeliveryPartnerErrors';

type Response = Either<GenericAppError.UnexpectedError | CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists | Result<any>, Result<InternationalDeliveryPartner>>;

export class CreateInternationalDeliveryPartnerUseCase implements UseCase<CreateInternationalDeliveryPartnerDTO, Promise<Response>> {
  private internationalDeliveryPartnerRepo: IInternationalDeliveryPartnerRepo;

  constructor(internationalDeliveryPartnerRepo: IInternationalDeliveryPartnerRepo) {
    this.internationalDeliveryPartnerRepo = internationalDeliveryPartnerRepo;
  }

  async execute(req: CreateInternationalDeliveryPartnerDTO): Promise<Response> {
    const deliveryPartnerNameOrError = DeliveryPartnerName.create(req.name);

    if (deliveryPartnerNameOrError.isFailure) {
      return left(Result.fail<void>(deliveryPartnerNameOrError.error)) as Response;
    }

    const internationalDeliveryPartnerOrError = InternationalDeliveryPartner.create({
      delivery_partner_name: deliveryPartnerNameOrError.getValue(),
      isActive: true
    });

    if (internationalDeliveryPartnerOrError.isFailure) {
      return left(Result.fail<void>(internationalDeliveryPartnerOrError.error)) as Response;
    }

    const internationalDeliveryPartner: InternationalDeliveryPartner = internationalDeliveryPartnerOrError.getValue();

    const internationalDeliveryPartnerAlreadyExists = await this.internationalDeliveryPartnerRepo.exists(internationalDeliveryPartner.deliveryPartnerName.value);

    if (internationalDeliveryPartnerAlreadyExists) {
      return left(new CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists(internationalDeliveryPartner.deliveryPartnerName.value)) as Response;
    }

    try {
      await this.internationalDeliveryPartnerRepo.save(internationalDeliveryPartner);
      console.log(`Local Delivery Created`);
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }

    return right(Result.ok<InternationalDeliveryPartner>(internationalDeliveryPartner)) as Response;
  }
}
