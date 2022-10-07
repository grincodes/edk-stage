"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const Result_1 = require("../../../core/logic/Result");
const NigeriaPhoneNumber_1 = require("../../../shared/domain_types/NigeriaPhoneNumber");
const userId_1 = require("../../users/domain/userId");
const shopper_1 = require("../domain/shopper");
const shopperUserName_1 = require("../domain/shopperUserName");
class ShopperMap extends Mapper_1.Mapper {
    static async toPersistence(shopper) {
        return {
            shopper_id: shopper.id.toString(),
            shopper_username: shopper.shopperUserName.value,
            shopper_phone: shopper.shopperPhone.value,
            shopper_user_id: shopper.userId.id.toString(),
            shopper_dob: shopper.dob,
        };
    }
    static toDomain(raw) {
        const shopperUserNameOrError = shopperUserName_1.ShopperUserName.create(raw.shopper_username);
        const shopperPhoneOrError = NigeriaPhoneNumber_1.NigeriaPhone.create(raw.shopper_phone);
        const shopperUserIdOrError = userId_1.UserId.create(new UniqueEntityID_1.UniqueEntityID(raw.shopper_user_id));
        const combinedPropsResult = Result_1.Result.combine([shopperUserNameOrError, shopperPhoneOrError, shopperUserIdOrError]);
        if (!combinedPropsResult.isFailure) {
            const shopperOrError = shopper_1.Shopper.create({
                shopperUserName: shopperUserNameOrError.getValue(),
                shopperPhone: shopperPhoneOrError.getValue(),
                userId: shopperUserIdOrError.getValue(),
                dob: raw.shopper_dob,
            }, new UniqueEntityID_1.UniqueEntityID());
            shopperOrError.isFailure ? console.log(shopperOrError.error) : "";
            return shopperOrError.isSuccess ? shopperOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
    static toResponseDto(shopper) {
        const response = {
            id: shopper.id.toValue(),
            shopper_username: shopper.shopperUserName.value,
            shopper_phone: shopper.shopperPhone.value,
        };
        return response;
    }
}
exports.ShopperMap = ShopperMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcHBlck1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3BwZXIvbWFwcGVycy9TaG9wcGVyTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFvRTtBQUNwRSx1REFBbUQ7QUFDbkQsdURBQW1EO0FBQ25ELHdGQUE4RTtBQUM5RSxzREFBa0Q7QUFDbEQsK0NBQTJDO0FBQzNDLCtEQUEyRDtBQUUzRCxNQUFhLFVBQVcsU0FBUSxlQUFlO0lBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQWdCO1FBQ2hELE9BQU87WUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDakMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLO1lBQy9DLGFBQWEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDekMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUc7U0FDekIsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSxzQkFBc0IsR0FBRyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMzRSxNQUFNLG1CQUFtQixHQUFHLGlDQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNsRSxNQUFNLG9CQUFvQixHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1FBQ25GLE1BQU0sbUJBQW1CLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQTtRQUUvRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2xDLE1BQU0sY0FBYyxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUNuQztnQkFDRSxlQUFlLEVBQUUsc0JBQXNCLENBQUMsUUFBUSxFQUFFO2dCQUNsRCxZQUFZLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFO2dCQUM1QyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsUUFBUSxFQUFFO2dCQUN2QyxHQUFHLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDckIsRUFDRCxJQUFJLCtCQUFjLEVBQUUsQ0FDckIsQ0FBQTtZQUVELGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFFakUsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUNuRTtRQUVELE9BQU8sbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBZ0I7UUFDMUMsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLO1lBQy9DLGFBQWEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDMUMsQ0FBQTtRQUVELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7Q0FDRjtBQTdDRCxnQ0E2Q0MifQ==