"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperRepo = void 0;
const sequelize_1 = require("sequelize");
const ShopperMap_1 = require("../mappers/ShopperMap");
class ShopperRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ShopperAddress,
                    as: "ShopAddress",
                    required: false,
                },
            ],
            order: [],
        };
    }
    async findShopperById(id) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["shopper_id"] = id;
        const shopper = await this.models.Shop.findOne(baseQuery);
        // if (!!shop === true) return ShopMap.toDomain(shop);
        if (!!shopper === true)
            return shopper;
        return null;
    }
    async findShopperByUserName(userName) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["shopper_username"] = userName;
        const shopper = await this.models.Shop.findOne(baseQuery);
        // if (!!shop === true) return ShopMap.toDomain(shop);
        if (!!shopper === true)
            return shopper;
        return null;
    }
    async exists(userName, userId) {
        const shopper = await this.models.Shop.findOne({
            where: {
                [sequelize_1.Op.or]: [{ shopper_username: userName }, { shopper_user_id: userId }],
            },
        });
        return !!shopper === true;
    }
    async save(shopper) {
        const ShopperModel = this.models.Shopper;
        const exists = await this.exists(shopper.shopperUserName.value, shopper.userId.id.toString());
        const rawShopper = await ShopperMap_1.ShopperMap.toPersistence(shopper);
        try {
            if (!exists) {
                // Create new
                await ShopperModel.create(rawShopper);
            }
            else {
                // Save old
                throw new Error("user already has a username");
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveTransaction(shopper, transaction) {
        const ShopperModel = this.models.Shopper;
        const exists = await this.exists(shopper.shopperUserName.value, shopper.userId.id.toString());
        const rawShopper = await ShopperMap_1.ShopperMap.toPersistence(shopper);
        try {
            if (!exists) {
                // Create new
                await ShopperModel.create(rawShopper, { transaction });
            }
            else {
                // Save old
                throw new Error("user already has a username");
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async createTransaction() {
        const t = await this.models.sequelize.transaction();
        return t;
    }
}
exports.ShopperRepo = ShopperRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlclJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL3JlcG9zL3Nob3BwZXJSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE4QjtBQUU5QixzREFBa0Q7QUFZbEQsTUFBYSxXQUFXO0lBR3RCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWM7b0JBQzVCLEVBQUUsRUFBRSxhQUFhO29CQUNqQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRjtZQUNELEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQTtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQVU7UUFDckMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBRWxDLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXpELHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTtZQUFFLE9BQU8sT0FBTyxDQUFBO1FBRXRDLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVNLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxRQUFnQjtRQUNqRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDeEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtRQUU5QyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUV6RCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUk7WUFBRSxPQUFPLE9BQU8sQ0FBQTtRQUV0QyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQWdCLEVBQUUsTUFBYztRQUNsRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QyxLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxjQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ3ZFO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQTtJQUMzQixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFnQjtRQUNoQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUU3RixNQUFNLFVBQVUsR0FBRyxNQUFNLHVCQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRTFELElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLGFBQWE7Z0JBQ2IsTUFBTSxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ3RDO2lCQUFNO2dCQUNMLFdBQVc7Z0JBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO2FBQy9DO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDckUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUE7UUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFFN0YsTUFBTSxVQUFVLEdBQUcsTUFBTSx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUUxRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0sWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVc7Z0JBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO2FBQy9DO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsaUJBQWlCO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDbkQsT0FBTyxDQUFDLENBQUE7SUFDVixDQUFDO0NBQ0Y7QUFwR0Qsa0NBb0dDIn0=