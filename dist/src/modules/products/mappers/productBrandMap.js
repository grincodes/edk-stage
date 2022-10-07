"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBrandMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const productBrand_1 = require("../domain/productBrand");
class ProductBrandMap extends Mapper_1.Mapper {
    static toPersistence(productBrand) {
        return {
            product_brand_id: productBrand.id.toString(),
            product_brand_name: productBrand.name
        };
    }
    static toDomain(raw) {
        const ProductBrandOrError = productBrand_1.ProductBrand.create({
            name: raw.product_brand_name
        }, new UniqueEntityID_1.UniqueEntityID(raw.product_brand_id));
        ProductBrandOrError.isFailure ? console.log(ProductBrandOrError.error) : '';
        return ProductBrandOrError.isSuccess ? ProductBrandOrError.getValue() : null;
    }
    static toAllResponeDto(prodBrands) {
        const product_brands = prodBrands.map((brand) => {
            return {
                id: brand.id.toString(),
                name: brand.name
            };
        });
        return { product_brands };
    }
    static toResponeDto(productBrand) {
        const response = {
            id: productBrand.id.toString(),
            product_brand_name: productBrand.name
        };
        return response;
    }
}
exports.ProductBrandMap = ProductBrandMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEJyYW5kTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0QnJhbmRNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQXFFO0FBQ3JFLHVEQUFvRDtBQUNwRCx5REFBc0Q7QUFJdEQsTUFBYSxlQUFnQixTQUFRLGVBQW9CO0lBQ2hELE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBMEI7UUFDcEQsT0FBTztZQUNMLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzVDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxJQUFJO1NBQ3RDLENBQUM7SUFDSixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sbUJBQW1CLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQzdDO1lBQ0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0I7U0FDN0IsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQ3pDLENBQUM7UUFFRixtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RSxPQUFPLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMvRSxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUEwQjtRQUN0RCxNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUMsT0FBTztnQkFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3ZCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTthQUNqQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsY0FBYyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBMEI7UUFDbkQsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FDdEMsQ0FBQztRQUVGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXZDRCwwQ0F1Q0MifQ==