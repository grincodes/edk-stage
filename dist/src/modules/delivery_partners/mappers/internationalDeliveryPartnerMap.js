"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternationalDeliveryPartnerMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const deliveryPartnerName_1 = require("../domain/deliveryPartnerName");
const internationalDeliveryPartners_1 = require("../domain/internationalDeliveryPartners");
class InternationalDeliveryPartnerMap extends Mapper_1.Mapper {
    static toPersistence(internationalDeliveryPartner) {
        return {
            international_delivery_partner_id: internationalDeliveryPartner.id.toString(),
            international_delivery_partner_name: internationalDeliveryPartner.deliveryPartnerName.value,
            is_active: internationalDeliveryPartner.isActive
        };
    }
    static toDomain(raw) {
        const InternationalDeliveryPartnerOrError = internationalDeliveryPartners_1.InternationalDeliveryPartner.create({
            delivery_partner_name: deliveryPartnerName_1.DeliveryPartnerName.create(raw.international_delivery_partner_name).getValue(),
            isActive: raw.is_active
        }, new UniqueEntityID_1.UniqueEntityID(raw.international_delivery_partner_id));
        InternationalDeliveryPartnerOrError.isFailure ? console.log(InternationalDeliveryPartnerOrError.error) : '';
        return InternationalDeliveryPartnerOrError.isSuccess ? InternationalDeliveryPartnerOrError.getValue() : null;
    }
    static toAllResponeDto(internationalDeliveryPartners) {
        const international_delivery_partners = internationalDeliveryPartners.map((internationaldelivery) => {
            return {
                id: internationaldelivery.id.toString(),
                name: internationaldelivery.deliveryPartnerName.value,
                isActive: internationaldelivery.isActive
            };
        });
        return { international_delivery_partners };
    }
    static toResponeDto(internationalDeliveryPartner) {
        const response = {
            id: internationalDeliveryPartner.id.toString(),
            name: internationalDeliveryPartner.deliveryPartnerName.value
        };
        return response;
    }
}
exports.InternationalDeliveryPartnerMap = InternationalDeliveryPartnerMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lck1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlbGl2ZXJ5X3BhcnRuZXJzL21hcHBlcnMvaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lck1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBcUU7QUFDckUsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSwyRkFBdUY7QUFJdkYsTUFBYSwrQkFBZ0MsU0FBUSxlQUF1QztJQUNuRixNQUFNLENBQUMsYUFBYSxDQUFDLDRCQUEwRDtRQUNwRixPQUFPO1lBQ0wsaUNBQWlDLEVBQUUsNEJBQTRCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUM3RSxtQ0FBbUMsRUFBRSw0QkFBNEIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO1lBQzNGLFNBQVMsRUFBRSw0QkFBNEIsQ0FBQyxRQUFRO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sbUNBQW1DLEdBQUcsNERBQTRCLENBQUMsTUFBTSxDQUM3RTtZQUNFLHFCQUFxQixFQUFFLHlDQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDckcsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTO1NBQ3hCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUMxRCxDQUFDO1FBRUYsbUNBQW1DLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFNUcsT0FBTyxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0csQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsNkJBQTZEO1FBQ3pGLE1BQU0sK0JBQStCLEdBQUcsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNsRyxPQUFPO2dCQUNMLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUN2QyxJQUFJLEVBQUUscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsS0FBSztnQkFDckQsUUFBUSxFQUFFLHFCQUFxQixDQUFDLFFBQVE7YUFDekMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLCtCQUErQixFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsNEJBQTBEO1FBQ25GLE1BQU0sUUFBUSxHQUFHO1lBQ2YsRUFBRSxFQUFFLDRCQUE0QixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDOUMsSUFBSSxFQUFFLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDLEtBQUs7U0FDN0QsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQTNDRCwwRUEyQ0MifQ==