"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttribute = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const ProductAttributeId_1 = require("./ProductAttributeId");
class ProductAttribute extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get productAttributeId() {
        return ProductAttributeId_1.ProductAttributeId.create(this._id).getValue();
    }
    get productCategoryId() {
        return this.props.product_category_id;
    }
    get name() {
        return this.props.name;
    }
    get description() {
        return this.props.description;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.name, argumentName: 'category name' },
            { argument: props.description, argumentName: 'description' }
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.name, argumentName: 'category name' },
            { numChars: 3, text: props.description, argumentName: 'description' }
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const product_attribute = new ProductAttribute(props, id);
        return Result_1.Result.ok(product_attribute);
    }
}
exports.ProductAttribute = ProductAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2RvbWFpbi9wcm9kdWN0QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUFxRDtBQUVyRCxxREFBa0Q7QUFDbEQsdURBQW9EO0FBQ3BELDZEQUEwRDtBQVExRCxNQUFhLGdCQUFpQixTQUFRLGVBQTZCO0lBQ2pFLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQW9CLEtBQTRCLEVBQUUsRUFBbUI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUE0QixFQUFFLEVBQW1CO1FBQ3BFLE1BQU0sWUFBWSxHQUFHO1lBQ25CLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRTtZQUN2RCxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7U0FDN0QsQ0FBQztRQUVGLE1BQU0saUJBQWlCLEdBQUc7WUFDeEIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUU7WUFDaEUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUU7U0FDdEUsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQW1CLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzRDtRQUNELE1BQU0sa0JBQWtCLEdBQUcsYUFBSyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQW1CLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQW1CLGlCQUFpQixDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBakRELDRDQWlEQyJ9