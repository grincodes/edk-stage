"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const productId_1 = require("./productId");
class Product extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get productName() {
        return this.props.productName;
    }
    get productId() {
        return productId_1.ProductId.create(this._id).getValue();
    }
    get productCategoryId() {
        return this.props.productCategoryId;
    }
    get productDescription() {
        return this.props.productDescription;
    }
    get shopId() {
        return this.props.shopId;
    }
    get productWebId() {
        return this.props.productWebId;
    }
    get productSlug() {
        return this.props.productSlug;
    }
    get isActive() {
        return this.props.isActive;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.productName, argumentName: "product name" },
            {
                argument: props.productDescription,
                argumentName: "product description",
            },
        ];
        const guardAtLeastChars = [
            {
                numChars: 4,
                text: props.productName,
                argumentName: " product name",
            },
            {
                numChars: 10,
                text: props.productDescription,
                argumentName: "product description",
            },
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const product = new Product(props, id);
        return Result_1.Result.ok(product);
    }
}
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2RvbWFpbi9wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFrRTtBQUVsRSxxREFBaUQ7QUFDakQsdURBQW1EO0FBSW5ELDJDQUF1QztBQWdCdkMsTUFBYSxPQUFRLFNBQVEsNkJBQTJCO0lBQ3RELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQTtJQUMvQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDOUMsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFBO0lBQ3RDLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQzFCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxZQUFvQixLQUFtQixFQUFFLEVBQW1CO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBbUIsRUFBRSxFQUFtQjtRQUMzRCxNQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUU7WUFDN0Q7Z0JBQ0UsUUFBUSxFQUFFLEtBQUssQ0FBQyxrQkFBa0I7Z0JBQ2xDLFlBQVksRUFBRSxxQkFBcUI7YUFDcEM7U0FDRixDQUFBO1FBRUQsTUFBTSxpQkFBaUIsR0FBRztZQUN4QjtnQkFDRSxRQUFRLEVBQUUsQ0FBQztnQkFDWCxJQUFJLEVBQUUsS0FBSyxDQUFDLFdBQVc7Z0JBQ3ZCLFlBQVksRUFBRSxlQUFlO2FBQzlCO1lBQ0Q7Z0JBQ0UsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLEtBQUssQ0FBQyxrQkFBa0I7Z0JBQzlCLFlBQVksRUFBRSxxQkFBcUI7YUFDcEM7U0FDRixDQUFBO1FBRUQsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDakQ7UUFFRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRXRFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFVLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3hEO1FBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBVSxPQUFPLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0Y7QUE1RUQsMEJBNEVDIn0=