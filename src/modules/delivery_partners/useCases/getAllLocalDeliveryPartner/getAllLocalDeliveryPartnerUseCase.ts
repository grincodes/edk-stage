import { UseCase } from '../../../../core/domain/UseCase';
import { Either, Result, left, right } from '../../../../core/logic/Result';
import { GenericAppError } from '../../../../core/logic/AppError';
import { LocalDeliveryPartner } from '../../domain/localDeliveryPartners';
import { ILocalDeliveryPartnerRepo } from '../../repos/localDeliveryPartnerRepo';

type Response = Either<GenericAppError.UnexpectedError, Result<LocalDeliveryPartner[]>>;

export class GetAllLocalDeliveryPartnerUseCase implements UseCase<any, Promise<Response>> {
  private localDeliveryPartnerRepo: ILocalDeliveryPartnerRepo;

  constructor(localDeliveryPartnerRepo: ILocalDeliveryPartnerRepo) {
    this.localDeliveryPartnerRepo = localDeliveryPartnerRepo;
  }

  async execute(): Promise<Response> {
    try {
      const localDeliveryPartners = await this.localDeliveryPartnerRepo.getAllLocalDeliveryPartner();

      return right(Result.ok<LocalDeliveryPartner[]>(localDeliveryPartners)) as Response;
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response;
    }
  }
}
