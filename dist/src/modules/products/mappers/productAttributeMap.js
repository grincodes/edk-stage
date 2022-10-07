"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const productAttribute_1 = require("../domain/productAttribute");
class ProductAttributeMap extends Mapper_1.Mapper {
    static toPersistence(productAttribute) {
        return {
            attribute_id: productAttribute.id.toString(),
            category_id: productAttribute.productCategoryId.toString(),
            attribute_name: productAttribute.name,
            attribute_description: productAttribute.description
        };
    }
    static toDomain(raw) {
        const ProductAttributeOrError = productAttribute_1.ProductAttribute.create({
            name: raw.attribute_name,
            product_category_id: raw.product_category_id,
            description: raw.attribute_description
        }, new UniqueEntityID_1.UniqueEntityID(raw.product_type_id));
        ProductAttributeOrError.isFailure ? console.log(ProductAttributeOrError.error) : '';
        return ProductAttributeOrError.isSuccess ? ProductAttributeOrError.getValue() : null;
    }
    static toAllResponeDto(prodAttributes) {
        const product_attributes = prodAttributes.map((attr) => {
            return {
                id: attr.id.toString(),
                name: attr.attribute_name,
                product_category_id: attr.category_id,
                description: attr.attribute_description
            };
        });
        return { product_attributes };
    }
    static toResponeDto(productAttribute) {
        const response = {
            id: productAttribute.id.toString(),
            attribute_name: productAttribute.name
        };
        return response;
    }
}
exports.ProductAttributeMap = ProductAttributeMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZU1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL21hcHBlcnMvcHJvZHVjdEF0dHJpYnV0ZU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBcUU7QUFDckUsdURBQW9EO0FBQ3BELGlFQUE4RDtBQUk5RCxNQUFhLG1CQUFvQixTQUFRLGVBQXdCO0lBQ3hELE1BQU0sQ0FBQyxhQUFhLENBQUMsZ0JBQWtDO1FBQzVELE9BQU87WUFDTCxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFO1lBQzFELGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO1lBQ3JDLHFCQUFxQixFQUFFLGdCQUFnQixDQUFDLFdBQVc7U0FDcEQsQ0FBQztJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSx1QkFBdUIsR0FBRyxtQ0FBZ0IsQ0FBQyxNQUFNLENBQ3JEO1lBQ0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxjQUFjO1lBQ3hCLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUI7WUFDNUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxxQkFBcUI7U0FDdkMsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUN4QyxDQUFDO1FBRUYsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDcEYsT0FBTyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkYsQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBbUI7UUFDL0MsTUFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDckQsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYztnQkFDekIsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMscUJBQXFCO2FBQ3hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLGdCQUFrQztRQUMzRCxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJO1NBQ3RDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUE3Q0Qsa0RBNkNDIn0=