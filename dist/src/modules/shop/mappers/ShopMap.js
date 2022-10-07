"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const Result_1 = require("../../../core/logic/Result");
const Email_1 = require("../../../shared/domain_types/Email");
const shop_1 = require("../domain/shop");
const shopLocation_1 = require("../domain/shopLocation");
const shopLogo_1 = require("../domain/shopLogo");
const shopName_1 = require("../domain/shopName");
const shopPhone_1 = require("../domain/shopPhone");
class ShopMap extends Mapper_1.Mapper {
    static async toPersistence(shop) {
        return {
            shop_id: shop.id.toString(),
            shop_category_id: shop.shopCategoryId.toString(),
            shop_name: shop.shopName.value,
            shop_email: shop.shopEmail.value,
            shop_phone: shop.shopPhone.value,
            shop_logo: shop.shopLogo.value ? shop.shopLogo.value : null,
            shop_owner_type: shop.shopOwnerType,
            shop_owner_id: shop.ownerId.toString(),
            local_delivery_partner_id: shop.localDeliveryPartnerId.toString(),
            international_delivery_partner_id: shop.internationalDeliveryPartnerId.toString(),
        };
    }
    static toDomain(raw) {
        const shopNameOrError = shopName_1.ShopName.create(raw.dataValues.shop_name);
        const shopEmailOrError = Email_1.Email.create(raw.dataValues.shop_email);
        const shopPhoneOrError = shopPhone_1.ShopPhone.create(raw.dataValues.shop_phone);
        const shopLogoOrError = shopLogo_1.ShopLogo.create(raw.dataValues.shop_logo);
        const shopLocationOrError = shopLocation_1.ShopLocation.create(raw.dataValues.ShopLocation);
        const combinedPropsResult = Result_1.Result.combine([shopNameOrError, shopEmailOrError, shopPhoneOrError]);
        if (!combinedPropsResult.isFailure) {
            const shopOrError = shop_1.Shop.create({
                shopName: shopNameOrError.getValue(),
                shopPhone: shopPhoneOrError.getValue(),
                shopEmail: shopEmailOrError.getValue(),
                shopLogo: shopLogoOrError.getValue(),
                shopLocation: shopLocationOrError.getValue(),
                shopCategoryId: raw.dataValues.category_id,
                shopOwnerType: raw.dataValues.shop_owner_type,
                ownerId: raw.dataValues.shop_owner_id,
                localDeliveryPartnerId: raw.dataValues.local_delivery_id,
                internationalDeliveryPartnerId: raw.dataValues.international_delivery_id,
                isVerified: raw.dataValues.isVerified,
            }, new UniqueEntityID_1.UniqueEntityID());
            shopOrError.isFailure ? console.log(shopOrError.error) : "";
            return shopOrError.isSuccess ? shopOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
    static toResponseDto(shop) {
        const response = {
            id: shop.id.toValue(),
            shop_email: shop.shopEmail.value,
            owner_id: shop.ownerId.toValue(),
        };
        return response;
    }
    static toPagination(data, page, limit) {
        const { count, rows } = data;
        const totalShops = count;
        const shops = rows;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalShops / limit);
        return { totalShops, shops, totalPages, currentPage };
    }
}
exports.ShopMap = ShopMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvbWFwcGVycy9TaG9wTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFvRTtBQUNwRSx1REFBbUQ7QUFDbkQsdURBQW1EO0FBQ25ELDhEQUEwRDtBQUMxRCx5Q0FBcUM7QUFDckMseURBQXFEO0FBQ3JELGlEQUE2QztBQUM3QyxpREFBNkM7QUFDN0MsbURBQStDO0FBSS9DLE1BQWEsT0FBUSxTQUFRLGVBQVk7SUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBVTtRQUMxQyxPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzNCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ2hELFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUs7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUNoQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDM0QsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ25DLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN0Qyx5QkFBeUIsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO1lBQ2pFLGlDQUFpQyxFQUFFLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxRQUFRLEVBQUU7U0FDbEYsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSxlQUFlLEdBQUcs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