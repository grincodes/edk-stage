"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const productType_1 = require("../domain/productType");
class ProductTypeMap extends Mapper_1.Mapper {
    static toPersistence(productType) {
        return {
            product_type_id: productType.id.toString(),
            product_type_name: productType.name
        };
    }
    static toDomain(raw) {
        const ProductTypeOrError = productType_1.ProductType.create({
            name: raw.product_type_name
        }, new UniqueEntityID_1.UniqueEntityID(raw.product_type_id));
        ProductTypeOrError.isFailure ? console.log(ProductTypeOrError.error) : '';
        return ProductTypeOrError.isSuccess ? ProductTypeOrError.getValue() : null;
    }
    static toAllResponeDto(prodTypes) {
        const product_types = prodTypes.map((type) => {
            return {
                id: type.id.toString(),
                name: type.name
            };
        });
        return { product_types };
    }
    static toResponeDto(productType) {
        const response = {
            id: productType.id.toString(),
            product_type_name: productType.name
        };
        return response;
    }
}
exports.ProductTypeMap = ProductTypeMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFR5cGVNYXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9tYXBwZXJzL3Byb2R1Y3RUeXBlTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFxRTtBQUNyRSx1REFBb0Q7QUFDcEQsdURBQW9EO0FBSXBELE1BQWEsY0FBZSxTQUFRLGVBQXNCO0lBQ2pELE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBd0I7UUFDbEQsT0FBTztZQUNMLGVBQWUsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsSUFBSTtTQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUTtRQUM3QixNQUFNLGtCQUFrQixHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUMzQztZQUNFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCO1NBQzVCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FDeEMsQ0FBQztRQUVGLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzFFLE9BQU8sa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdFLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLFNBQWM7UUFDMUMsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzNDLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO2dCQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQXdCO1FBQ2pELE1BQU0sUUFBUSxHQUFHO1lBQ2YsRUFBRSxFQUFFLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzdCLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxJQUFJO1NBQ3BDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUF2Q0Qsd0NBdUNDIn0=