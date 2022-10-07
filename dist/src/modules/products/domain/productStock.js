"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStock = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ProductStock extends AggregateRoot_1.AggregateRoot {
    get unitsSold() {
        return this.props.unitSold;
    }
    get units() {
        return this.props.units;
    }
    get productInventory() {
        return this.props.productInventoryId;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.units, argumentName: "units" },
            { argument: props.unitSold, argumentName: "units sold" },
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            const prodStock = new ProductStock(props, id);
            return Result_1.Result.ok(prodStock);
        }
    }
}
exports.ProductStock = ProductStock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN0b2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RTdG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFBa0U7QUFFbEUscURBQWlEO0FBQ2pELHVEQUFtRDtBQVNuRCxNQUFhLFlBQWEsU0FBUSw2QkFBZ0M7SUFDaEUsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFBO0lBQ3RDLENBQUM7SUFFRCxZQUFvQixLQUF3QixFQUFFLEVBQW1CO1FBQy9ELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBd0IsRUFBRSxFQUFtQjtRQUNoRSxNQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7WUFDaEQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFO1NBQ3pELENBQUE7UUFFRCxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN0RDthQUFNO1lBQ0wsTUFBTSxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzdDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBZSxTQUFTLENBQUMsQ0FBQTtTQUMxQztJQUNILENBQUM7Q0FDRjtBQWhDRCxvQ0FnQ0MifQ==