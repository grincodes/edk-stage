"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternationalDeliveryPartnerRepo = void 0;
const internationalDeliveryPartnerMap_1 = require("../mappers/internationalDeliveryPartnerMap");
class InternationalDeliveryPartnerRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {}
        };
    }
    async getAllInternationalDeliveryPartner() {
        const internationalDeliveryPartners = (await this.models.InternationalDeliveryPartner.findAll()).map((record) => record.toJSON());
        return internationalDeliveryPartners.map((p) => internationalDeliveryPartnerMap_1.InternationalDeliveryPartnerMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['international_delivery_partner_name'] = name;
        const internationalDeliveryPartner = await this.models.InternationalDeliveryPartner.findOne(baseQuery);
        return !!internationalDeliveryPartner === true;
    }
    async save(internationalDeliveryPartner) {
        const InternationalDeliveryPartnerModel = this.models.InternationalDeliveryPartner;
        const exists = await this.exists(internationalDeliveryPartner.deliveryPartnerName.value);
        const rawInternationalDelivery = await internationalDeliveryPartnerMap_1.InternationalDeliveryPartnerMap.toPersistence(internationalDeliveryPartner);
        try {
            if (!exists) {
                // Create new
                await InternationalDeliveryPartnerModel.create(rawInternationalDelivery);
            }
            else {
                // Save old
                const sequelizeInternationalDeliveryInstance = await InternationalDeliveryPartnerModel.findOne({
                    where: {
                        international_delivery_partner_name: internationalDeliveryPartner.deliveryPartnerName.value
                    }
                });
                await sequelizeInternationalDeliveryInstance.update(rawInternationalDelivery);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.InternationalDeliveryPartnerRepo = InternationalDeliveryPartnerRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lclJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy9yZXBvcy9pbnRlcm5hdGlvbmFsRGVsaXZlcnlQYXJ0bmVyUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnR0FBNkY7QUFVN0YsTUFBYSxnQ0FBZ0M7SUFHM0MsWUFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLGtDQUFrQztRQUM3QyxNQUFNLDZCQUE2QixHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsSSxPQUFPLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsaUVBQStCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekMsU0FBUyxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM5RCxNQUFNLDRCQUE0QixHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkcsT0FBTyxDQUFDLENBQUMsNEJBQTRCLEtBQUssSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLDRCQUEwRDtRQUMxRSxNQUFNLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUM7UUFDbkYsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sd0JBQXdCLEdBQUcsTUFBTSxpRUFBK0IsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUVuSCxJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0saUNBQWlDLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDMUU7aUJBQU07Z0JBQ0wsV0FBVztnQkFDWCxNQUFNLHNDQUFzQyxHQUFHLE1BQU0saUNBQWlDLENBQUMsT0FBTyxDQUFDO29CQUM3RixLQUFLLEVBQUU7d0JBQ0wsbUNBQW1DLEVBQUUsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMsS0FBSztxQkFDNUY7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILE1BQU0sc0NBQXNDLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDL0U7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBakRELDRFQWlEQyJ9