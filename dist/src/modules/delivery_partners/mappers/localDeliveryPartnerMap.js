"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDeliveryPartnerMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const deliveryPartnerName_1 = require("../domain/deliveryPartnerName");
const localDeliveryPartners_1 = require("../domain/localDeliveryPartners");
class LocalDeliveryPartnerMap extends Mapper_1.Mapper {
    static toPersistence(localDeliveryPartner) {
        return {
            local_delivery_partner_id: localDeliveryPartner.id.toString(),
            local_delivery_partner_name: localDeliveryPartner.deliveryPartnerName.value,
            is_active: localDeliveryPartner.isActive
        };
    }
    static toDomain(raw) {
        const LocalDeliveryPartnerOrError = localDeliveryPartners_1.LocalDeliveryPartner.create({
            delivery_partner_name: deliveryPartnerName_1.DeliveryPartnerName.create(raw.local_delivery_partner_name).getValue(),
            isActive: raw.is_active
        }, new UniqueEntityID_1.UniqueEntityID(raw.local_delivery_partner_id));
        LocalDeliveryPartnerOrError.isFailure ? console.log(LocalDeliveryPartnerOrError.error) : '';
        return LocalDeliveryPartnerOrError.isSuccess ? LocalDeliveryPartnerOrError.getValue() : null;
    }
    static toAllResponeDto(localDeliveryPartners) {
        const local_delivery_partners = localDeliveryPartners.map((localdelivery) => {
            return {
                id: localdelivery.id.toString(),
                name: localdelivery.deliveryPartnerName.value,
                isActive: localdelivery.isActive
            };
        });
        return { local_delivery_partners };
    }
    static toResponeDto(localDeliveryPartner) {
        const response = {
            id: localDeliveryPartner.id.toString(),
            name: localDeliveryPartner.deliveryPartnerName.value
        };
        return response;
    }
}
exports.LocalDeliveryPartnerMap = LocalDeliveryPartnerMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEZWxpdmVyeVBhcnRuZXJNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy9tYXBwZXJzL2xvY2FsRGVsaXZlcnlQYXJ0bmVyTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFxRTtBQUNyRSx1REFBb0Q7QUFDcEQsdUVBQW9FO0FBQ3BFLDJFQUF1RTtBQUl2RSxNQUFhLHVCQUF3QixTQUFRLGVBQStCO0lBQ25FLE1BQU0sQ0FBQyxhQUFhLENBQUMsb0JBQTBDO1FBQ3BFLE9BQU87WUFDTCx5QkFBeUIsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzdELDJCQUEyQixFQUFFLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUs7WUFDM0UsU0FBUyxFQUFFLG9CQUFvQixDQUFDLFFBQVE7U0FDekMsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSwyQkFBMkIsR0FBRyw0Q0FBb0IsQ0FBQyxNQUFNLENBQzdEO1lBQ0UscUJBQXFCLEVBQUUseUNBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUM3RixRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVM7U0FDeEIsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQ2xELENBQUM7UUFFRiwyQkFBMkIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUU1RixPQUFPLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxxQkFBNkM7UUFDekUsTUFBTSx1QkFBdUIsR0FBRyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFtQyxFQUFFLEVBQUU7WUFDaEcsT0FBTztnQkFDTCxFQUFFLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksRUFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSztnQkFDN0MsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRO2FBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLG9CQUEwQztRQUNuRSxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3RDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO1NBQ3JELENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUEzQ0QsMERBMkNDIn0=