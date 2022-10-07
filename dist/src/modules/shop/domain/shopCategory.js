"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCategory = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const shopCategoryId_1 = require("./shopCategoryId");
class ShopCategory extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get shopCategoryId() {
        return shopCategoryId_1.ShopCategoryId.create(this._id).getValue();
    }
    get name() {
        return this.props.name;
    }
    get slug() {
        return this.props.name;
    }
    get isActive() {
        return this.props.isActive;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.name, argumentName: 'shop category name' },
            { argument: props.slug, argumentName: 'slug' }
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.name, argumentName: 'shop category name' },
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
        const category = new ShopCategory(props, id);
        return Result_1.Result.ok(category);
    }
}
exports.ShopCategory = ShopCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcENhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcENhdGVnb3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdEQUFxRDtBQUVyRCxxREFBa0Q7QUFDbEQsdURBQW9EO0FBQ3BELHFEQUFrRDtBQVFsRCxNQUFhLFlBQWEsU0FBUSxlQUF5QjtJQUN6RCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLCtCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsWUFBb0IsS0FBd0IsRUFBRSxFQUFtQjtRQUMvRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQXdCLEVBQUUsRUFBbUI7UUFDaEUsTUFBTSxZQUFZLEdBQUc7WUFDbkIsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUU7WUFDNUQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1NBQy9DLENBQUM7UUFFRixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUU7WUFDckUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7U0FDeEQsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsTUFBTSxrQkFBa0IsR0FBRyxhQUFLLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBZSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RDtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QyxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNGO0FBakRELG9DQWlEQyJ9