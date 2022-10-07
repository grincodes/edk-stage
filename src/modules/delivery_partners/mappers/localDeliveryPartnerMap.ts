import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { DeliveryPartnerName } from '../domain/deliveryPartnerName';
import { LocalDeliveryPartner } from '../domain/localDeliveryPartners';
import { CreateLocalDeliveryPartnerResponseDTO } from '../useCases/createLocalDeliveryPartner/createLocalDeliveryPartnerDTO';
import { GetAllLocalDeliveryResponseDTO } from '../useCases/getAllLocalDeliveryPartner/getAllLocalDeliveryPartnerDTO';

export class LocalDeliveryPartnerMap extends Mapper<LocalDeliveryPartnerMap> {
  public static toPersistence(localDeliveryPartner: LocalDeliveryPartner): any {
    return {
      local_delivery_partner_id: localDeliveryPartner.id.toString(),
      local_delivery_partner_name: localDeliveryPartner.deliveryPartnerName.value,
      is_active: localDeliveryPartner.isActive
    };
  }

  public static toDomain(raw: any): LocalDeliveryPartner {
    const LocalDeliveryPartnerOrError = LocalDeliveryPartner.create(
      {
        delivery_partner_name: DeliveryPartnerName.create(raw.local_delivery_partner_name).getValue(),
        isActive: raw.is_active
      },
      new UniqueEntityID(raw.local_delivery_partner_id)
    );

    LocalDeliveryPartnerOrError.isFailure ? console.log(LocalDeliveryPartnerOrError.error) : '';

    return LocalDeliveryPartnerOrError.isSuccess ? LocalDeliveryPartnerOrError.getValue() : null;
  }

  public static toAllResponeDto(localDeliveryPartners: LocalDeliveryPartner[]): GetAllLocalDeliveryResponseDTO {
    const local_delivery_partners = localDeliveryPartners.map((localdelivery: LocalDeliveryPartner) => {
      return {
        id: localdelivery.id.toString(),
        name: localdelivery.deliveryPartnerName.value,
        isActive: localdelivery.isActive
      };
    });

    return { local_delivery_partners };
  }

  public static toResponeDto(localDeliveryPartner: LocalDeliveryPartner): CreateLocalDeliveryPartnerResponseDTO {
    const response = {
      id: localDeliveryPartner.id.toString(),
      name: localDeliveryPartner.deliveryPartnerName.value
    };

    return response;
  }
}
