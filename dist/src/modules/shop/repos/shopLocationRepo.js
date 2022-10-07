"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopLocationRepo = void 0;
const ShopLocationMap_1 = require("../mappers/ShopLocationMap");
const shopLocationId_1 = require("../domain/shopLocationId");
class ShopLocationRepo {
    constructor(models) {
        this.models = models;
    }
    async findShopLocationById(id) {
        const _id = id instanceof shopLocationId_1.ShopLocationId ? id.id.toValue() : id;
        const shopLocation = await this.models.ShopLocation.findByPk(_id);
        if (!!shopLocation === true)
            return ShopLocationMap_1.ShopLocationMap.toDomain(shopLocation);
        return null;
    }
    async save(shopLocation) {
        const ShopLocationModel = this.models.ShopLocation;
        const rawShopLocation = await ShopLocationMap_1.ShopLocationMap.toPersistence(shopLocation);
        try {
            await ShopLocationModel.create(rawShopLocation);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveTransaction(shopLocation, transaction) {
        const ShopLocationModel = this.models.ShopLocation;
        const rawShopLocation = await ShopLocationMap_1.ShopLocationMap.toPersistence(shopLocation);
        try {
            await ShopLocationModel.create(rawShopLocation, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ShopLocationRepo = ShopLocationRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcExvY2F0aW9uUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvcmVwb3Mvc2hvcExvY2F0aW9uUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnRUFBNEQ7QUFDNUQsNkRBQXlEO0FBU3pELE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQTJCO1FBQzNELE1BQU0sR0FBRyxHQUFHLEVBQUUsWUFBWSwrQkFBYyxDQUFDLENBQUMsQ0FBa0IsRUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRWpGLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxDQUFDLFlBQVksS0FBSyxJQUFJO1lBQUUsT0FBTyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUUxRSxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQTBCO1FBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUE7UUFDbEQsTUFBTSxlQUFlLEdBQUcsTUFBTSxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUV6RSxJQUFJO1lBQ0YsTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUE7U0FDaEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLFlBQTBCLEVBQUUsV0FBd0I7UUFDL0UsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtRQUVsRCxNQUFNLGVBQWUsR0FBRyxNQUFNLGlDQUFlLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXpFLElBQUk7WUFDRixNQUFNLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0NBQ0Y7QUF4Q0QsNENBd0NDIn0=