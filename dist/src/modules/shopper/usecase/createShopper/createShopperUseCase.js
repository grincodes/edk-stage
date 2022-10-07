"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopperUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const NigeriaPhoneNumber_1 = require("../../../../shared/domain_types/NigeriaPhoneNumber");
const userId_1 = require("../../../users/domain/userId");
const shopper_1 = require("../../domain/shopper");
const shopperAddress_1 = require("../../domain/shopperAddress");
const shopperUserName_1 = require("../../domain/shopperUserName");
const createShopperErrors_1 = require("./createShopperErrors");
class CreateShopperUseCase {
    constructor(shopperRepo, shopperAddressRepo) {
        this.shopperRepo = shopperRepo;
        this.shopperAddressRepo = shopperAddressRepo;
    }
    async execute(req) {
        const shopperUserNameOrError = shopperUserName_1.ShopperUserName.create(req.shopper_username);
        const shopperPhoneOrError = NigeriaPhoneNumber_1.NigeriaPhone.create(Number(req.shopper_phone));
        const shopperUserIdOrError = userId_1.UserId.create(new UniqueEntityID_1.UniqueEntityID(req.shopper_user_id));
        const shopperAddressOrError = shopperAddress_1.ShopperAddress.create(req.shopper_address);
        const combinedPropsResult = Result_1.Result.combine([shopperUserNameOrError, shopperPhoneOrError, shopperUserIdOrError, shopperAddressOrError]);
        if (combinedPropsResult.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(combinedPropsResult.error));
        }
        const shopperOrError = shopper_1.Shopper.create({
            shopperUserName: shopperUserNameOrError.getValue(),
            userId: shopperUserIdOrError.getValue(),
            shopperPhone: shopperPhoneOrError.getValue(),
            dob: req.shopper_dob,
            shopperAddress: shopperAddressOrError.getValue(),
        });
        if (shopperOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(shopperOrError.error));
        }
        const shopper = shopperOrError.getValue();
        const shopperAlreadyExists = await this.shopperRepo.exists(req.shopper_username, req.shopper_user_id);
        if (shopperAlreadyExists) {
            return (0, Result_1.left)(new createShopperErrors_1.CreateShopperErrors.ShopperAlreadyExists());
        }
        //set shopperId on shopAddress
        shopper.shopperAddress.shopperId = shopper.shopperId;
        const transaction = await this.shopperRepo.createTransaction();
        try {
            await this.shopperRepo.saveTransaction(shopper, transaction);
            console.log(`Shopper Account Created`);
            //save shop location
            await this.shopperAddressRepo.saveTransaction(shopper.shopperAddress, transaction);
            // commit transaction
            await transaction.commit();
        }
        catch (err) {
            await transaction.rollback();
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(shopper));
    }
}
exports.CreateShopperUseCase = CreateShopperUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcHBlclVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL3VzZWNhc2UvY3JlYXRlU2hvcHBlci9jcmVhdGVTaG9wcGVyVXNlQ2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyRUFBdUU7QUFFdkUsOERBQWlFO0FBQ2pFLDBEQUEyRTtBQUMzRSwyRkFBaUY7QUFDakYseURBQXFEO0FBQ3JELGtEQUE4QztBQUM5QyxnRUFBNEQ7QUFDNUQsa0VBQThEO0FBSTlELCtEQUEyRDtBQUkzRCxNQUFhLG9CQUFvQjtJQUkvQixZQUFZLFdBQXlCLEVBQUUsa0JBQXVDO1FBQzVFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFxQjtRQUNqQyxNQUFNLHNCQUFzQixHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzNFLE1BQU0sbUJBQW1CLEdBQUcsaUNBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQzFFLE1BQU0sb0JBQW9CLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUE7UUFDbkYsTUFBTSxxQkFBcUIsR0FBRywrQkFBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFeEUsTUFBTSxtQkFBbUIsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1FBRXRJLElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFBO1NBQ3RFO1FBRUQsTUFBTSxjQUFjLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUM7WUFDcEMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLFFBQVEsRUFBRTtZQUNsRCxNQUFNLEVBQUUsb0JBQW9CLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7WUFDNUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxXQUFXO1lBQ3BCLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUU7U0FDakQsQ0FBQyxDQUFBO1FBRUYsSUFBSSxjQUFjLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQTtTQUNqRTtRQUVELE1BQU0sT0FBTyxHQUFZLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUVsRCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUVyRyxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSx5Q0FBbUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFhLENBQUE7U0FDeEU7UUFFRCw4QkFBOEI7UUFDOUIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQTtRQUVwRCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtRQUU5RCxJQUFJO1lBQ0YsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUE7WUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBRXRDLG9CQUFvQjtZQUNwQixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQTtZQUVsRixxQkFBcUI7WUFDckIsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDM0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBRTVCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFBO1NBQ2xFO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFVLE9BQU8sQ0FBQyxDQUFhLENBQUE7SUFDdkQsQ0FBQztDQUNGO0FBL0RELG9EQStEQyJ9