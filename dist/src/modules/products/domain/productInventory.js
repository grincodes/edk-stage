"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventory = exports.Currency = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const productInventoryId_1 = require("./productInventoryId");
var Currency;
(function (Currency) {
    Currency["NGN"] = "NGN";
})(Currency = exports.Currency || (exports.Currency = {}));
class ProductInventory extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get ProductInventoryId() {
        return productInventoryId_1.ProductInventoryId.create(this._id).getValue();
    }
    get productId() {
        return this.props.productId;
    }
    get productBrandId() {
        return this.props.productBrandId;
    }
    get productAttributeValueId() {
        return this.props.productAttributeValueId;
    }
    get sku() {
        return this.props.sku;
    }
    get variantName() {
        return this.props.variantName;
    }
    get currency() {
        return this.props.currency;
    }
    get isActive() {
        return this.props.isActive;
    }
    get storePrice() {
        return this.props.storePrice;
    }
    get retailPrice() {
        return this.props.retailPrice;
    }
    get weight() {
        return this.props.weight;
    }
    get quantity() {
        return this.props.quantity;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const product_inventory = new ProductInventory(props, id);
        return Result_1.Result.ok(product_inventory);
    }
}
exports.ProductInventory = ProductInventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEludmVudG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2RvbWFpbi9wcm9kdWN0SW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFrRTtBQUVsRSx1REFBbUQ7QUFJbkQsNkRBQXlEO0FBSXpELElBQVksUUFFWDtBQUZELFdBQVksUUFBUTtJQUNsQix1QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUZXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBRW5CO0FBaUJELE1BQWEsZ0JBQWlCLFNBQVEsNkJBQW9DO0lBQ3hFLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3ZELENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFBO0lBQzdCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFBO0lBQzNDLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQzFCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxZQUFvQixLQUE0QixFQUFFLEVBQW1CO1FBQ25FLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBNEIsRUFBRSxFQUFtQjtRQUNwRSxNQUFNLGlCQUFpQixHQUFHLElBQUksZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRXpELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBbUIsaUJBQWlCLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0NBQ0Y7QUE5REQsNENBOERDIn0=