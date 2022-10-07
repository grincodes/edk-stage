"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagProductAttributValue = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class TagProductAttributValue extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get productAttributeValueId() {
        return this.props.productAttributeValueId;
    }
    get productInventoryId() {
        return this.props.productInventoryId;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const tag_product_attr_val = new TagProductAttributValue(props, id);
        return Result_1.Result.ok(tag_product_attr_val);
    }
}
exports.TagProductAttributValue = TagProductAttributValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdEF0dHJpYnV0ZVZhbHVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3RhZ1Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBb0Q7QUFFcEQsdURBQW1EO0FBU25ELE1BQWEsdUJBQXdCLFNBQVEsZUFBZ0M7SUFDM0UsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxJQUFJLHVCQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUE7SUFDM0MsQ0FBQztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsWUFBb0IsS0FBK0IsRUFBRSxFQUFtQjtRQUN0RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQStCLEVBQUUsRUFBbUI7UUFDdkUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLHVCQUF1QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNuRSxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQTBCLG9CQUFvQixDQUFDLENBQUE7SUFDakUsQ0FBQztDQUNGO0FBckJELDBEQXFCQyJ9