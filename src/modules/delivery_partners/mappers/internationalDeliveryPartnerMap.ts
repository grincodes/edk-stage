import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { DeliveryPartnerName } from '../domain/deliveryPartnerName';
import { InternationalDeliveryPartner } from '../domain/internationalDeliveryPartners';
import { CreateInternationalDeliveryPartnerResponseDTO } from '../useCases/createInternationalDeliveryPartner/createInternationalDeliveryPartnerDTO';
import { GetAllInternationalDeliveryResponseDTO } from '../useCases/getAllInternationalPartner/getAllInternationalDeliveryPartnerDTO';

export class InternationalDeliveryPartnerMap extends Mapper<InternationalDeliveryPartnerMap> {
  public static toPersistence(internationalDeliveryPartner: InternationalDeliveryPartner): any {
    return {
      international_delivery_partner_id: internationalDeliveryPartner.id.toString(),
      international_delivery_partner_name: internationalDeliveryPartner.deliveryPartnerName.value,
      is_active: internationalDeliveryPartner.isActive
    };
  }

  public static toDomain(raw: any): InternationalDeliveryPartner {
    const InternationalDeliveryPartnerOrError = InternationalDeliveryPartner.create(
      {
        delivery_partner_name: DeliveryPartnerName.create(raw.international_delivery_partner_name).getValue(),
        isActive: raw.is_active
      },
      new UniqueEntityID(raw.international_delivery_partner_id)
    );

    InternationalDeliveryPartnerOrError.isFailure ? console.log(InternationalDeliveryPartnerOrError.error) : '';

    return InternationalDeliveryPartnerOrError.isSuccess ? InternationalDeliveryPartnerOrError.getValue() : null;
  }

  public static toAllResponeDto(internationalDeliveryPartners: InternationalDeliveryPartner[]): GetAllInternationalDeliveryResponseDTO {
    const international_delivery_partners = internationalDeliveryPartners.map((internationaldelivery) => {
      return {
        id: internationaldelivery.id.toString(),
        name: internationaldelivery.deliveryPartnerName.value,
        isActive: internationaldelivery.isActive
      };
    });

    return { international_delivery_partners };
  }

  public static toResponeDto(internationalDeliveryPartner: InternationalDeliveryPartner): CreateInternationalDeliveryPartnerResponseDTO {
    const response = {
      id: internationalDeliveryPartner.id.toString(),
      name: internationalDeliveryPartner.deliveryPartnerName.value
    };

    return response;
  }
}
