"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const ProductCategory_1 = require("../domain/ProductCategory");
class ProductCategoryMap extends Mapper_1.Mapper {
    static toPersistence(productCategory) {
        return {
            category_id: productCategory.id.toString(),
            product_type_id: productCategory.productTypeId.toString(),
            category_name: productCategory.name,
            category_slug: productCategory.slug,
            is_active: productCategory.isActive
        };
    }
    static toDomain(raw) {
        const ProductCategoryOrError = ProductCategory_1.ProductCategory.create({
            name: raw.category_name,
            product_type_id: new UniqueEntityID_1.UniqueEntityID(raw.product_type_id),
            slug: raw.category_slug,
            isActive: raw.is_active
        }, new UniqueEntityID_1.UniqueEntityID(raw.category_id));
        ProductCategoryOrError.isFailure ? console.log(ProductCategoryOrError.error) : '';
        return ProductCategoryOrError.isSuccess ? ProductCategoryOrError.getValue() : null;
    }
    static toAllResponeDto(prodCats) {
        const categories = prodCats.map((cat) => {
            return {
                category_id: cat.productCategoryId.id.toString(),
                category_name: cat.name,
                category_slug: cat.slug
            };
        });
        return { categories };
    }
    static toResponeDto(prodCat) {
        const response = {
            category_id: prodCat.productCategoryId.id.toString(),
            category_name: prodCat.name,
            category_slug: prodCat.slug
        };
        return response;
    }
}
exports.ProductCategoryMap = ProductCategoryMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENhdGVnb3J5TWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0Q2F0ZWdvcnlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQXFFO0FBQ3JFLHVEQUFvRDtBQUVwRCwrREFBNEQ7QUFJNUQsTUFBYSxrQkFBbUIsU0FBUSxlQUF1QjtJQUN0RCxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWdDO1FBQzFELE9BQU87WUFDTCxXQUFXLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQ3pELGFBQWEsRUFBRSxlQUFlLENBQUMsSUFBSTtZQUNuQyxhQUFhLEVBQUUsZUFBZSxDQUFDLElBQUk7WUFDbkMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxRQUFRO1NBQ3BDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sc0JBQXNCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQ25EO1lBQ0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUN4RCxJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWE7WUFDdkIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTO1NBQ3hCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FDcEMsQ0FBQztRQUVGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xGLE9BQU8sc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JGLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLFFBQTJCO1FBQ3ZELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN0QyxPQUFPO2dCQUNMLFdBQVcsRUFBRSxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDaEQsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJO2dCQUN2QixhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDeEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQXdCO1FBQ2pELE1BQU0sUUFBUSxHQUFHO1lBQ2YsV0FBVyxFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3BELGFBQWEsRUFBRSxPQUFPLENBQUMsSUFBSTtZQUMzQixhQUFhLEVBQUUsT0FBTyxDQUFDLElBQUk7U0FDNUIsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQS9DRCxnREErQ0MifQ==