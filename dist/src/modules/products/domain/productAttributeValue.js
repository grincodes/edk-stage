"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeValue = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
const productAttributeValueId_1 = require("./productAttributeValueId");
class ProductAttributeValue extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get productAttributeValueId() {
        return productAttributeValueId_1.ProductAttributeValueId.create(this._id).getValue();
    }
    get productAttributeId() {
        return this.props.productAttributeId;
    }
    get attributeValue() {
        return this.props.attributeValue;
    }
    get attributeSequence() {
        return this.props.attributeSequence;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const product_attribute_value = new ProductAttributeValue(Object.assign({}, props), id);
        return Result_1.Result.ok(product_attribute_value);
    }
}
exports.ProductAttributeValue = ProductAttributeValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBb0Q7QUFFcEQsdURBQW1EO0FBRW5ELHVFQUFtRTtBQVFuRSxNQUFhLHFCQUFzQixTQUFRLGVBQTZCO0lBQ3RFLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxpREFBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVELENBQUM7SUFFRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUE7SUFDdEMsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUE7SUFDckMsQ0FBQztJQUVELFlBQW9CLEtBQTRCLEVBQUUsRUFBbUI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUE0QixFQUFFLEVBQW1CO1FBQ3BFLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxxQkFBcUIsbUJBRWxELEtBQUssR0FFVixFQUFFLENBQ0gsQ0FBQTtRQUVELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBd0IsdUJBQXVCLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0NBQ0Y7QUFuQ0Qsc0RBbUNDIn0=