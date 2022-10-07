"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperAddressRepo = void 0;
const ShopperAddressMap_1 = require("../mappers/ShopperAddressMap");
class ShopperAddressRepo {
    constructor(models) {
        this.models = models;
    }
    async findShopperAddressById(id) {
        const shopAddress = await this.models.ShopperAddress.findByPk(id);
        if (!!shopAddress === true)
            return ShopperAddressMap_1.ShopperAddressMap.toDomain(shopAddress);
        return null;
    }
    async save(shopperAddress) {
        const ShopperAddressModel = this.models.ShopperAddress;
        const rawShopperAddress = await ShopperAddressMap_1.ShopperAddressMap.toPersistence(shopperAddress);
        try {
            await ShopperAddressModel.create(rawShopperAddress);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveTransaction(shopperAddress, transaction) {
        const ShopperAddressModel = this.models.ShopperAddress;
        const rawShopperAddress = await ShopperAddressMap_1.ShopperAddressMap.toPersistence(shopperAddress);
        try {
            await ShopperAddressModel.create(rawShopperAddress, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ShopperAddressRepo = ShopperAddressRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlckFkZHJlc3NSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcHBlci9yZXBvcy9zaG9wcGVyQWRkcmVzc1JlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsb0VBQWdFO0FBUWhFLE1BQWEsa0JBQWtCO0lBRzdCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLEVBQVU7UUFDNUMsTUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDakUsSUFBSSxDQUFDLENBQUMsV0FBVyxLQUFLLElBQUk7WUFBRSxPQUFPLHFDQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUUxRSxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQThCO1FBQzlDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUE7UUFDdEQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLHFDQUFpQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUUvRSxJQUFJO1lBQ0YsTUFBTSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUNwRDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlLENBQUMsY0FBOEIsRUFBRSxXQUF3QjtRQUNuRixNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFBO1FBQ3RELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxxQ0FBaUIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUE7UUFFL0UsSUFBSTtZQUNGLE1BQU0sbUJBQW1CLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtTQUNyRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBckNELGdEQXFDQyJ9