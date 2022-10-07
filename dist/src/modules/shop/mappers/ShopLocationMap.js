"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopLocationMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const shopLocation_1 = require("../domain/shopLocation");
class ShopLocationMap extends Mapper_1.Mapper {
    static toPersistence(shopLoc) {
        return {
            shop_location_id: shopLoc.id.toString(),
            shop_id: shopLoc.shopId.id.toString(),
            address: shopLoc.address,
            state: shopLoc.state,
            city: shopLoc.city,
            country: shopLoc.country,
            lng: shopLoc.lng,
            lat: shopLoc.lat
        };
    }
    static toDomain(raw) {
        const shopLocationOrError = shopLocation_1.ShopLocation.create({
            shopId: raw.dataValues.shop_id,
            address: raw.dataValues.address,
            city: raw.dataValues.city,
            country: raw.dataValues.country,
            state: raw.dataValues.state,
            lng: raw.dataValues.lng,
            lat: raw.dataValues.lat
        }, new UniqueEntityID_1.UniqueEntityID(raw.dataValues.shop_location_id));
        shopLocationOrError.isFailure ? console.log(shopLocationOrError.error) : "";
        return shopLocationOrError.isSuccess ? shopLocationOrError.getValue() : null;
    }
}
exports.ShopLocationMap = ShopLocationMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcExvY2F0aW9uTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9tYXBwZXJzL1Nob3BMb2NhdGlvbk1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBb0U7QUFDcEUsdURBQW1EO0FBR25ELHlEQUFxRDtBQUVyRCxNQUFhLGVBQWdCLFNBQVEsZUFBb0I7SUFDaEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFxQjtRQUMvQyxPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztTQUNqQixDQUFBO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUTtRQUM3QixNQUFNLG1CQUFtQixHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUM3QztZQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDOUIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUMvQixJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU87WUFDL0IsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSztZQUMzQixHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHO1lBQ3ZCLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7U0FDeEIsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNwRCxDQUFBO1FBRUQsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDM0UsT0FBTyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDOUUsQ0FBQztDQUNGO0FBL0JELDBDQStCQyJ9