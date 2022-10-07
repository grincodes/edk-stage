"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSubCategory = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ProductSubCategory extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get name() {
        return this.props.name;
    }
    get slug() {
        return this.props.name;
    }
    get categoryId() {
        return this.props.categoryId;
    }
    get isActive() {
        return this.props.isActive;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.name, argumentName: 'sub category name' },
            { argument: props.slug, argumentName: 'slug' }
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.name, argumentName: 'sub category name' },
            { numChars: 3, text: props.slug, argumentName: 'slug' }
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const category = new ProductSubCategory(props, id);
        return Result_1.Result.ok(category);
    }
}
exports.ProductSubCategory = ProductSubCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN1YkNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RTdWJDYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBcUQ7QUFFckQscURBQWtEO0FBQ2xELHVEQUFvRDtBQVVwRCxNQUFhLGtCQUFtQixTQUFRLGVBQStCO0lBQ3JFLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBb0IsS0FBOEIsRUFBRSxFQUFtQjtRQUNyRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQThCLEVBQUUsRUFBbUI7UUFDdEUsTUFBTSxZQUFZLEdBQUc7WUFDbkIsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUU7WUFDM0QsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1NBQy9DLENBQUM7UUFFRixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUU7WUFDcEUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7U0FDeEQsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQXFCLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELE1BQU0sa0JBQWtCLEdBQUcsYUFBSyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFdkUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQXFCLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3BFO1FBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbkQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFxQixRQUFRLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFsREQsZ0RBa0RDIn0=