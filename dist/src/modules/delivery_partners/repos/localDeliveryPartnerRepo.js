"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDeliveryPartnerRepo = void 0;
const localDeliveryPartnerMap_1 = require("../mappers/localDeliveryPartnerMap");
class LocalDeliveryPartnerRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {}
        };
    }
    async getAllLocalDeliveryPartner() {
        const localDeliveryPartners = (await this.models.LocalDeliveryPartner.findAll()).map((record) => record.toJSON());
        return localDeliveryPartners.map((p) => localDeliveryPartnerMap_1.LocalDeliveryPartnerMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['local_delivery_partner_name'] = name;
        const productBrand = await this.models.LocalDeliveryPartner.findOne(baseQuery);
        return !!productBrand === true;
    }
    async save(localDeliveryPartner) {
        const LocalDeliveryPartnerModel = this.models.LocalDeliveryPartner;
        const exists = await this.exists(localDeliveryPartner.deliveryPartnerName.value);
        const rawLocalDelivery = await localDeliveryPartnerMap_1.LocalDeliveryPartnerMap.toPersistence(localDeliveryPartner);
        try {
            if (!exists) {
                // Create new
                await LocalDeliveryPartnerModel.create(rawLocalDelivery);
            }
            else {
                // Save old
                const sequelizeLocalDeliveryInstance = await LocalDeliveryPartnerModel.findOne({
                    where: { local_delivery_partner_name: localDeliveryPartner.deliveryPartnerName.value }
                });
                await sequelizeLocalDeliveryInstance.update(rawLocalDelivery);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.LocalDeliveryPartnerRepo = LocalDeliveryPartnerRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEZWxpdmVyeVBhcnRuZXJSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVsaXZlcnlfcGFydG5lcnMvcmVwb3MvbG9jYWxEZWxpdmVyeVBhcnRuZXJSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdGQUE2RTtBQVU3RSxNQUFhLHdCQUF3QjtJQUduQyxZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQywwQkFBMEI7UUFDckMsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFbEgsT0FBTyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLGlEQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRSxPQUFPLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDO0lBQ2pDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLG9CQUEwQztRQUMxRCxNQUFNLHlCQUF5QixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDbkUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxpREFBdUIsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUUzRixJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0seUJBQXlCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDMUQ7aUJBQU07Z0JBQ0wsV0FBVztnQkFDWCxNQUFNLDhCQUE4QixHQUFHLE1BQU0seUJBQXlCLENBQUMsT0FBTyxDQUFDO29CQUM3RSxLQUFLLEVBQUUsRUFBRSwyQkFBMkIsRUFBRSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUU7aUJBQ3ZGLENBQUMsQ0FBQztnQkFDSCxNQUFNLDhCQUE4QixDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQy9EO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRjtBQWhERCw0REFnREMifQ==