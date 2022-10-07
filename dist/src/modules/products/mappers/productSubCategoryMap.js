"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSubCategoryMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const ProductSubCategory_1 = require("../domain/ProductSubCategory");
class ProductSubCategoryMap extends Mapper_1.Mapper {
    static toPersistence(ProductSubCategory) {
        return {
            sub_category_id: ProductSubCategory.id.toString(),
            category_id: ProductSubCategory.categoryId.toString(),
            subcategory_name: ProductSubCategory.name,
            subcategory_slug: ProductSubCategory.slug,
            is_active: ProductSubCategory.isActive
        };
    }
    static toDomain(raw) {
        const ProductSubCategoryOrError = ProductSubCategory_1.ProductSubCategory.create({
            name: raw.dataValues.name,
            categoryId: raw.dataValues.category_id,
            slug: raw.dataValues.slug,
            isActive: raw.dataValues.isActive
        }, new UniqueEntityID_1.UniqueEntityID(raw.dataValues.subcategory_id));
        ProductSubCategoryOrError.isFailure ? console.log(ProductSubCategoryOrError.error) : '';
        return ProductSubCategoryOrError.isSuccess ? ProductSubCategoryOrError.getValue() : null;
    }
    static toResponeDto(prodSubCat) {
        const response = {
            id: prodSubCat.id.toString(),
            category_id: prodSubCat.categoryId.toString(),
            subcategory_name: prodSubCat.name,
            subcategory_slug: prodSubCat.slug
        };
        return response;
    }
}
exports.ProductSubCategoryMap = ProductSubCategoryMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN1YkNhdGVnb3J5TWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0U3ViQ2F0ZWdvcnlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQXFFO0FBQ3JFLHVEQUFvRDtBQUNwRCxxRUFBa0U7QUFHbEUsTUFBYSxxQkFBc0IsU0FBUSxlQUEwQjtJQUM1RCxNQUFNLENBQUMsYUFBYSxDQUFDLGtCQUFzQztRQUNoRSxPQUFPO1lBQ0wsZUFBZSxFQUFFLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDakQsV0FBVyxFQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDckQsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsSUFBSTtZQUN6QyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJO1lBQ3pDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0seUJBQXlCLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxDQUN6RDtZQUNFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDekIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVztZQUN0QyxJQUFJLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3pCLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVE7U0FDbEMsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FDbEQsQ0FBQztRQUVGLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hGLE9BQU8seUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzNGLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQThCO1FBQ3ZELE1BQU0sUUFBUSxHQUFHO1lBQ2YsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzVCLFdBQVcsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUM3QyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsSUFBSTtZQUNqQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsSUFBSTtTQUNsQyxDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBcENELHNEQW9DQyJ9