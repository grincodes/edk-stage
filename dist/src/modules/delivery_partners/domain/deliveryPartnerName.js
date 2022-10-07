"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryPartnerName = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class DeliveryPartnerName extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static create(name) {
        const deliveryPartnerNameResult = Guard_1.Guard.againstNullOrUndefined(name, 'delivery partner name');
        if (!deliveryPartnerNameResult.succeeded) {
            return Result_1.Result.fail(deliveryPartnerNameResult.message);
        }
        const minLengthResult = Guard_1.Guard.againstAtLeast(this.minLength, name, 'delivery partner name');
        if (!minLengthResult.succeeded) {
            return Result_1.Result.fail(minLengthResult.message);
        }
        return Result_1.Result.ok(new DeliveryPartnerName({ value: name }));
    }
}
exports.DeliveryPartnerName = DeliveryPartnerName;
DeliveryPartnerName.minLength = 2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsaXZlcnlQYXJ0bmVyTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlbGl2ZXJ5X3BhcnRuZXJzL2RvbWFpbi9kZWxpdmVyeVBhcnRuZXJOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUErRDtBQUMvRCxxREFBa0Q7QUFDbEQsdURBQW9EO0FBTXBELE1BQWEsbUJBQW9CLFNBQVEseUJBQXNDO0lBTzdFLFlBQW9CLEtBQWdDO1FBQ2xELEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFSRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFRTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDL0IsTUFBTSx5QkFBeUIsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFFOUYsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsRUFBRTtZQUN4QyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQXNCLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVFO1FBRUQsTUFBTSxlQUFlLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQzVGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzlCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBc0IsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFzQixJQUFJLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDOztBQXhCSCxrREF5QkM7QUFwQmUsNkJBQVMsR0FBRyxDQUFDLENBQUMifQ==