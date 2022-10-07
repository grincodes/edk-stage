"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryId = void 0;
const Result_1 = require("../../../core/logic/Result");
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
class ProductInventoryId extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ProductInventoryId(id));
    }
}
exports.ProductInventoryId = ProductInventoryId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEludmVudG9yeUlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RJbnZlbnRvcnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx1REFBbUQ7QUFDbkQsc0VBQWtFO0FBRWxFLE1BQWEsa0JBQW1CLFNBQVEsNkJBQWtCO0lBQ3hELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsWUFBb0IsRUFBbUI7UUFDckMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFtQjtRQUN0QyxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQXFCLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0NBQ0Y7QUFaRCxnREFZQyJ9