"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopName = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ShopName extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static create(name) {
        const shopNameResult = Guard_1.Guard.againstNullOrUndefined(name, "shop name");
        if (!shopNameResult.succeeded) {
            return Result_1.Result.fail(shopNameResult.message);
        }
        const minLengthResult = Guard_1.Guard.againstAtLeast(this.minLength, name, "shop name");
        if (!minLengthResult.succeeded) {
            return Result_1.Result.fail(minLengthResult.message);
        }
        return Result_1.Result.ok(new ShopName({ value: name }));
    }
}
exports.ShopName = ShopName;
ShopName.minLength = 2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcE5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2RvbWFpbi9zaG9wTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVEQUFtRDtBQU1uRCxNQUFhLFFBQVMsU0FBUSx5QkFBMkI7SUFPdkQsWUFBb0IsS0FBcUI7UUFDdkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQVJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQVFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUMvQixNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBRXRFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1lBQzdCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDckQ7UUFFRCxNQUFNLGVBQWUsR0FBRyxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQy9FLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzlCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdEQ7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQVcsSUFBSSxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzNELENBQUM7O0FBeEJILDRCQXlCQztBQXBCZSxrQkFBUyxHQUFHLENBQUMsQ0FBQSJ9