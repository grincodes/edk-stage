"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperAddressMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const shopperAddress_1 = require("../domain/shopperAddress");
class ShopperAddressMap extends Mapper_1.Mapper {
    static toPersistence(shopperAddress) {
        return {
            shopper_address_id: shopperAddress.id.toString(),
            shopper_id: shopperAddress.shopperId.id.toString(),
            address: shopperAddress.address,
            state: shopperAddress.state,
            city: shopperAddress.city,
            country: shopperAddress.country,
            lng: shopperAddress.lng,
            lat: shopperAddress.lat,
        };
    }
    static toDomain(raw) {
        const shopAddressOrError = shopperAddress_1.ShopperAddress.create({
            shopperId: raw.dataValues.shopper_id,
            address: raw.dataValues.address,
            city: raw.dataValues.city,
            country: raw.dataValues.country,
            state: raw.dataValues.state,
            lng: raw.dataValues.lng,
            lat: raw.dataValues.lat,
        }, new UniqueEntityID_1.UniqueEntityID(raw.dataValues.shopper_address_id));
        shopAddressOrError.isFailure ? console.log(shopAddressOrError.error) : "";
        return shopAddressOrError.isSuccess ? shopAddressOrError.getValue() : null;
    }
}
exports.ShopperAddressMap = ShopperAddressMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcHBlckFkZHJlc3NNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL21hcHBlcnMvU2hvcHBlckFkZHJlc3NNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQW9FO0FBQ3BFLHVEQUFtRDtBQUNuRCw2REFBeUQ7QUFFekQsTUFBYSxpQkFBa0IsU0FBUSxlQUFzQjtJQUNwRCxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQThCO1FBQ3hELE9BQU87WUFDTCxrQkFBa0IsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNoRCxVQUFVLEVBQUUsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xELE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTztZQUMvQixLQUFLLEVBQUUsY0FBYyxDQUFDLEtBQUs7WUFDM0IsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxjQUFjLENBQUMsT0FBTztZQUMvQixHQUFHLEVBQUUsY0FBYyxDQUFDLEdBQUc7WUFDdkIsR0FBRyxFQUFFLGNBQWMsQ0FBQyxHQUFHO1NBQ3hCLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sa0JBQWtCLEdBQUcsK0JBQWMsQ0FBQyxNQUFNLENBQzlDO1lBQ0UsU0FBUyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVTtZQUNwQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPO1lBQy9CLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDekIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTztZQUMvQixLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQzNCLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUc7WUFDdkIsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRztTQUN4QixFQUNELElBQUksK0JBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQ3RELENBQUE7UUFFRCxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUN6RSxPQUFPLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUM1RSxDQUFDO0NBQ0Y7QUEvQkQsOENBK0JDIn0=