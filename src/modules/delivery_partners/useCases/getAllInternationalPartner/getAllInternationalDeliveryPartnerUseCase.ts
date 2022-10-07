import { UseCase } from "../../../../core/domain/UseCase"
import { Either, Result, left, right } from "../../../../core/logic/Result"
import { GenericAppError } from "../../../../core/logic/AppError"
import { InternationalDeliveryPartner } from "../../domain/internationalDeliveryPartners"
import { IInternationalDeliveryPartnerRepo } from "../../repos/internationalDeliveryPartnerRepo"

type Response = Either<GenericAppError.UnexpectedError, Result<InternationalDeliveryPartner[]>>

export class GetAllInternationalDeliveryPartnerUseCase implements UseCase<any, Promise<Response>> {
  private internationalDeliveryPartnerRepo: IInternationalDeliveryPartnerRepo

  constructor(internationalDeliveryPartnerRepo: IInternationalDeliveryPartnerRepo) {
    this.internationalDeliveryPartnerRepo = internationalDeliveryPartnerRepo
  }

  async execute(): Promise<Response> {
    try {
      const internationalDeliveryPartners = await this.internationalDeliveryPartnerRepo.getAllInternationalDeliveryPartner()

      return right(Result.ok<InternationalDeliveryPartner[]>(internationalDeliveryPartners)) as Response
    } catch (err) {
      return left(new GenericAppError.UnexpectedError(err)) as Response
    }
  }
}
