"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCategoryRepo = void 0;
const shopCategoryId_1 = require("../domain/shopCategoryId");
const ShopCategoryMap_1 = require("../mappers/ShopCategoryMap");
class ShopCategoryRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async getAllShopCategory() {
        const shopCategories = (await this.models.ShopCategory.findAll()).map((record) => record.toJSON());
        return shopCategories.map((p) => ShopCategoryMap_1.ShopCategoryMap.toDomain(p));
    }
    async findShopCategoryById(id) {
        const _id = id instanceof shopCategoryId_1.ShopCategoryId ? id.id.toValue() : id;
        const baseQuery = this.createBaseQuery();
        baseQuery.where["category_id"] = _id;
        const ShopCategory = await this.models.ShopCategory.findOne(baseQuery);
        if (!!ShopCategory === true)
            return ShopCategoryMap_1.ShopCategoryMap.toDomain(ShopCategory);
        return null;
    }
    async findShopCategoryBySlug(slug) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["shop_category_slug"] = slug;
        const ShopCategory = await this.models.ShopCategory.findOne(baseQuery);
        if (!!ShopCategory === true)
            return ShopCategoryMap_1.ShopCategoryMap.toDomain(ShopCategory);
        return null;
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["shop_category_name"] = name;
        const ShopCategory = await this.models.ShopCategory.findOne(baseQuery);
        return !!ShopCategory === true;
    }
    async save(shopCategory) {
        const ShopCategoryModel = this.models.ShopCategory;
        const exists = await this.exists(shopCategory.name);
        const rawShopCat = await ShopCategoryMap_1.ShopCategoryMap.toPersistence(shopCategory);
        try {
            if (!exists) {
                // Create new
                await ShopCategoryModel.create(rawShopCat);
            }
            else {
                // Save old
                const sequelizeCategoryInstance = await ShopCategoryModel.findOne({
                    where: { name: shopCategory.name },
                });
                await sequelizeCategoryInstance.update(rawShopCat);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ShopCategoryRepo = ShopCategoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcENhdGVnb3J5UmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvcmVwb3Mvc2hvcENhdGVnb3J5UmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw2REFBeUQ7QUFDekQsZ0VBQTREO0FBVTVELE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksTUFBVztRQUZ2QixpQkFBWSxHQUFHLENBQUMsQ0FBQTtRQUNoQixpQkFBWSxHQUFHLENBQUMsQ0FBQTtRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtTQUNWLENBQUE7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGtCQUFrQjtRQUM3QixNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBRWxHLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsaUNBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU0sS0FBSyxDQUFDLG9CQUFvQixDQUFDLEVBQTJCO1FBQzNELE1BQU0sR0FBRyxHQUFHLEVBQUUsWUFBWSwrQkFBYyxDQUFDLENBQUMsQ0FBa0IsRUFBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBQ2pGLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUVwQyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSTtZQUFFLE9BQU8saUNBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFMUUsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRU0sS0FBSyxDQUFDLHNCQUFzQixDQUFDLElBQVk7UUFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUE7UUFFNUMsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUk7WUFBRSxPQUFPLGlDQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRTFFLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDeEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUM1QyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RSxPQUFPLENBQUMsQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQTBCO1FBQzFDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUE7UUFDbEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuRCxNQUFNLFVBQVUsR0FBRyxNQUFNLGlDQUFlLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXBFLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLGFBQWE7Z0JBQ2IsTUFBTSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDM0M7aUJBQU07Z0JBQ0wsV0FBVztnQkFDWCxNQUFNLHlCQUF5QixHQUFHLE1BQU0saUJBQWlCLENBQUMsT0FBTyxDQUFDO29CQUNoRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRTtpQkFDbkMsQ0FBQyxDQUFBO2dCQUNGLE1BQU0seUJBQXlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQ25EO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7Q0FDRjtBQXJFRCw0Q0FxRUMifQ==