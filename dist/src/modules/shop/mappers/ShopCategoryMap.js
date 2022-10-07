"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCategoryMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const ShopCategory_1 = require("../domain/ShopCategory");
class ShopCategoryMap extends Mapper_1.Mapper {
    static toPersistence(shopCategory) {
        return {
            shop_category_id: shopCategory.id.toString(),
            shop_category_name: shopCategory.name,
            shop_category_slug: shopCategory.slug,
            is_active: shopCategory.isActive
        };
    }
    static toDomain(raw) {
        const shopCategoryOrError = ShopCategory_1.ShopCategory.create({
            name: raw.shop_category_name,
            slug: raw.shop_category_slug,
            isActive: raw.is_active
        }, new UniqueEntityID_1.UniqueEntityID(raw.category_id));
        shopCategoryOrError.isFailure ? console.log(shopCategoryOrError.error) : '';
        return shopCategoryOrError.isSuccess ? shopCategoryOrError.getValue() : null;
    }
    static toAllResponeDto(shopCats) {
        const shop_categories = shopCats.map((shopCat) => {
            return {
                shop_category_id: shopCat.shopCategoryId.id.toString(),
                shop_category_name: shopCat.name,
                shop_category_slug: shopCat.slug
            };
        });
        return { shop_categories };
    }
    static toResponeDto(shopCat) {
        const response = {
            shop_category_id: shopCat.shopCategoryId.id.toString(),
            shop_category_name: shopCat.name,
            shop_category_slug: shopCat.slug
        };
        return response;
    }
}
exports.ShopCategoryMap = ShopCategoryMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcENhdGVnb3J5TWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9tYXBwZXJzL1Nob3BDYXRlZ29yeU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBcUU7QUFDckUsdURBQW9EO0FBRXBELHlEQUFzRDtBQUl0RCxNQUFhLGVBQWdCLFNBQVEsZUFBb0I7SUFDaEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUEwQjtRQUNwRCxPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDNUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDckMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDckMsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRO1NBQ2pDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sbUJBQW1CLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQzdDO1lBQ0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7WUFDNUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTO1NBQ3hCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztRQUVGLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVFLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQy9FLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQXdCO1FBQ3BELE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMvQyxPQUFPO2dCQUNMLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDdEQsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ2hDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxJQUFJO2FBQ2pDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFxQjtRQUM5QyxNQUFNLFFBQVEsR0FBRztZQUNmLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN0RCxrQkFBa0IsRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNoQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsSUFBSTtTQUNqQyxDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBN0NELDBDQTZDQyJ9