"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const Email_1 = require("../../../../shared/domain_types/Email");
const shop_1 = require("../../domain/shop");
const shopLocation_1 = require("../../domain/shopLocation");
const shopLogo_1 = require("../../domain/shopLogo");
const shopName_1 = require("../../domain/shopName");
const shopPhone_1 = require("../../domain/shopPhone");
const createShopErrors_1 = require("./createShopErrors");
class CreateShopUseCase {
    constructor(shopRepo, shopLocationRepo) {
        this.shopRepo = shopRepo;
        this.shopLocationRepo = shopLocationRepo;
    }
    async execute(req) {
        const shopNameOrError = shopName_1.ShopName.create(req.shop_name);
        const shopPhoneOrError = shopPhone_1.ShopPhone.create(Number(req.shop_phone));
        const shopEmailOrError = Email_1.Email.create(req.shop_email);
        const shopLogoOrError = shopLogo_1.ShopLogo.create(req.shop_logo);
        const shopLocationOrError = shopLocation_1.ShopLocation.create(req.shop_location);
        const categoryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.category_id) ? Result_1.Result.ok(new UniqueEntityID_1.UniqueEntityID(req.category_id)) : Result_1.Result.fail("Invalid category id");
        const ownerIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.owner_id) ? Result_1.Result.ok(new UniqueEntityID_1.UniqueEntityID(req.owner_id)) : Result_1.Result.fail("Invalid owner id");
        const localDeliveryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.local_delivery_partner_id)
            ? Result_1.Result.ok(new UniqueEntityID_1.UniqueEntityID(req.local_delivery_partner_id))
            : Result_1.Result.fail("Invalid local delivery id");
        const internationalDeliveryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.international_delivery_partner_id)
            ? Result_1.Result.ok(new UniqueEntityID_1.UniqueEntityID(req.international_delivery_partner_id))
            : Result_1.Result.fail("Invalid international delivery id");
        const combinedPropsResult = Result_1.Result.combine([
            shopNameOrError,
            shopPhoneOrError,
            shopEmailOrError,
            shopLocationOrError,
            shopLogoOrError,
            categoryIdOrError,
            ownerIdOrError,
            localDeliveryIdOrError,
            internationalDeliveryIdOrError,
        ]);
        if (combinedPropsResult.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(combinedPropsResult.error));
        }
        // todo Get UserType
        const shopOrError = shop_1.Shop.create({
            shopName: shopNameOrError.getValue(),
            shopCategoryId: categoryIdOrError.getValue(),
            shopPhone: shopPhoneOrError.getValue(),
            shopEmail: shopEmailOrError.getValue(),
            shopLocation: shopLocationOrError.getValue(),
            shopLogo: shopLogoOrError.getValue(),
            shopOwnerType: shop_1.ShopOwnerType.USER,
            ownerId: ownerIdOrError.getValue(),
            localDeliveryPartnerId: localDeliveryIdOrError.getValue(),
            internationalDeliveryPartnerId: internationalDeliveryIdOrError.getValue(),
            isVerified: false,
        });
        if (shopOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(shopOrError.error));
        }
        const shop = shopOrError.getValue();
        const shopAlreadyExists = await this.shopRepo.exists(shop.shopEmail, shop.shopName.value);
        if (shopAlreadyExists) {
            return (0, Result_1.left)(new createShopErrors_1.CreateShopErrors.ShopAlreadyExists(shop.shopEmail.value));
        }
        //set shopId on shopLocation
        shop.shopLocation.shopId = shop.shopId;
        const transaction = await this.shopRepo.createTransaction();
        try {
            // await this.shopRepo.save(shop);
            await this.shopRepo.saveTransaction(shop, transaction);
            console.log(`shop Created`);
            //save shop location
            await this.shopLocationRepo.saveTransaction(shop.shopLocation, transaction);
            // commit transaction
            await transaction.commit();
        }
        catch (err) {
            await transaction.rollback();
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(shop));
    }
}
exports.CreateShopUseCase = CreateShopUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcFVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2NyZWF0ZVNob3AvY3JlYXRlU2hvcFVzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkVBQXVFO0FBRXZFLDhEQUFpRTtBQUNqRSwwREFBMkU7QUFDM0UsaUVBQTZEO0FBQzdELDRDQUF1RDtBQUN2RCw0REFBd0Q7QUFDeEQsb0RBQWdEO0FBQ2hELG9EQUFnRDtBQUNoRCxzREFBa0Q7QUFJbEQseURBQXFEO0FBSXJELE1BQWEsaUJBQWlCO0lBSTVCLFlBQVksUUFBbUIsRUFBRSxnQkFBbUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQWtCO1FBQzlCLE1BQU0sZUFBZSxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RCxNQUFNLGdCQUFnQixHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUNqRSxNQUFNLGdCQUFnQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3JELE1BQU0sZUFBZSxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RCxNQUFNLG1CQUFtQixHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNsRSxNQUFNLGlCQUFpQixHQUFHLCtCQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENB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