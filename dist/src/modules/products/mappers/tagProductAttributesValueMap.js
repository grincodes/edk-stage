"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagProductAttributValueMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
class TagProductAttributValueMap extends Mapper_1.Mapper {
    static toPersistence(tagProdAttrValue) {
        return {
            tag_product_attr_value_id: tagProdAttrValue.id.toString(),
            product_inventory_id: tagProdAttrValue.productInventoryId.id.toString(),
            attribute_value_id: tagProdAttrValue.productAttributeValueId.toString(),
        };
    }
}
exports.TagProductAttributValueMap = TagProductAttributValueMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdEF0dHJpYnV0ZXNWYWx1ZU1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL21hcHBlcnMvdGFnUHJvZHVjdEF0dHJpYnV0ZXNWYWx1ZU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBbUQ7QUFHbkQsTUFBYSwwQkFBMkIsU0FBUSxlQUErQjtJQUN0RSxNQUFNLENBQUMsYUFBYSxDQUFDLGdCQUF5QztRQUNuRSxPQUFPO1lBQ0wseUJBQXlCLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN6RCxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3ZFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRTtTQUN4RSxDQUFBO0lBQ0gsQ0FBQztDQUNGO0FBUkQsZ0VBUUMifQ==