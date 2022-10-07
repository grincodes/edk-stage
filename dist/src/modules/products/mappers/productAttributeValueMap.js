"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeValueMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const productAttributeValue_1 = require("../domain/productAttributeValue");
class ProductAttributeValueMap extends Mapper_1.Mapper {
    static toPersistence(productAttributeValue) {
        return {
            attribute_value_id: productAttributeValue.id.toString(),
            attribute_id: productAttributeValue.productAttributeId.id.toString(),
            attribute_value: productAttributeValue.attributeValue,
            attribute_value_sequence: productAttributeValue.attributeSequence,
        };
    }
    static toDomain(raw) {
        const ProductAttributeValueOrError = productAttributeValue_1.ProductAttributeValue.create({
            attributeValue: raw.attribute_value,
            productAttributeId: raw.attribute_id,
            attributeSequence: raw.attribute_value_sequence,
        }, new UniqueEntityID_1.UniqueEntityID(raw.attribute_value_id));
        ProductAttributeValueOrError.isFailure ? console.log(ProductAttributeValueOrError.error) : "";
        return ProductAttributeValueOrError.isSuccess ? ProductAttributeValueOrError.getValue() : null;
    }
    static toAllResponeDto(prodAttributeValues) {
        const product_attribute_values = prodAttributeValues.map((attr) => {
            return {
                id: attr.id.toString(),
                attribute_id: attr.attribute_id,
                attribute_value: attr.attribute_value,
                sequence: attr.attribute_value_sequence,
            };
        });
        return { product_attribute_values };
    }
    static toResponeDto(productAttributeValue) {
        const response = {
            id: productAttributeValue.id.toString(),
            attribute_value: productAttributeValue.attributeValue,
        };
        return response;
    }
}
exports.ProductAttributeValueMap = ProductAttributeValueMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0QXR0cmlidXRlVmFsdWVNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQW9FO0FBQ3BFLHVEQUFtRDtBQUNuRCwyRUFBdUU7QUFJdkUsTUFBYSx3QkFBeUIsU0FBUSxlQUE2QjtJQUNsRSxNQUFNLENBQUMsYUFBYSxDQUFDLHFCQUE0QztRQUN0RSxPQUFPO1lBQ0wsa0JBQWtCLEVBQUUscUJBQXFCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN2RCxZQUFZLEVBQUUscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwRSxlQUFlLEVBQUUscUJBQXFCLENBQUMsY0FBYztZQUNyRCx3QkFBd0IsRUFBRSxxQkFBcUIsQ0FBQyxpQkFBaUI7U0FDbEUsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSw0QkFBNEIsR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQy9EO1lBQ0UsY0FBYyxFQUFFLEdBQUcsQ0FBQyxlQUFlO1lBQ25DLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxZQUFZO1lBQ3BDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyx3QkFBd0I7U0FDaEQsRUFDRCxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQzNDLENBQUE7UUFFRCw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtRQUM3RixPQUFPLDRCQUE0QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNoRyxDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxtQkFBd0I7UUFDcEQsTUFBTSx3QkFBd0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNoRSxPQUFPO2dCQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUMvQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLFFBQVEsRUFBRSxJQUFJLENBQUMsd0JBQXdCO2FBQ3hDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxDQUFBO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUE0QztRQUNyRSxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxjQUFjO1NBQ3RELENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUE3Q0QsNERBNkNDIn0=