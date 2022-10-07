"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategory = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const productCategoryId_1 = require("./productCategoryId");
class ProductCategory extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get productCategoryId() {
        return productCategoryId_1.ProductCategoryId.create(this._id).getValue();
    }
    get productTypeId() {
        return this.props.product_type_id;
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
            { argument: props.name, argumentName: 'category name' },
            { argument: props.slug, argumentName: 'slug' }
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.name, argumentName: 'category name' },
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
        const category = new ProductCategory(props, id);
        return Result_1.Result.ok(category);
    }
}
exports.ProductCategory = ProductCategory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RDYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBcUQ7QUFFckQscURBQWtEO0FBQ2xELHVEQUFvRDtBQUNwRCwyREFBd0Q7QUFTeEQsTUFBYSxlQUFnQixTQUFRLGVBQTRCO0lBQy9ELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFBSSxpQkFBaUI7UUFDbkIsT0FBTyxxQ0FBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxZQUFvQixLQUEyQixFQUFFLEVBQW1CO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBMkIsRUFBRSxFQUFtQjtRQUNuRSxNQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUU7WUFDdkQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1NBQy9DLENBQUM7UUFFRixNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFO1lBQ2hFLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1NBQ3hELENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFrQixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFrQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRTtRQUNELE1BQU0sUUFBUSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWtCLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQXRERCwwQ0FzREMifQ==