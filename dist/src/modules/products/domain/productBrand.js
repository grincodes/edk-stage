"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBrand = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ProductBrand extends AggregateRoot_1.AggregateRoot {
    get name() {
        return this.props.name;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(props.name, 'brand name');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeast(3, props.name, 'brand name');
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const brand = new ProductBrand(props, id);
        return Result_1.Result.ok(brand);
    }
}
exports.ProductBrand = ProductBrand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEJyYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RCcmFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFBbUU7QUFHbkUscURBQWtEO0FBQ2xELHVEQUFvRDtBQU1wRCxNQUFhLFlBQWEsU0FBUSw2QkFBZ0M7SUFDaEUsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBb0IsS0FBd0IsRUFBRSxFQUFtQjtRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQXdCLEVBQUUsRUFBbUI7UUFDaEUsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2RDtRQUNELE1BQU0sa0JBQWtCLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBZSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RDtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUxQyxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUNGO0FBeEJELG9DQXdCQyJ9