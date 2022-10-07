"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ProductTypeId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ProductTypeId(id));
    }
}
exports.ProductTypeId = ProductTypeId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFR5cGVJZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2RvbWFpbi9wcm9kdWN0VHlwZUlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdEQUFvRDtBQUNwRCx1REFBbUQ7QUFFbkQsTUFBYSxhQUFjLFNBQVEsZUFBVztJQUM1QyxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELFlBQW9CLEVBQW1CO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbUI7UUFDdEMsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFnQixJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3hELENBQUM7Q0FDRjtBQVpELHNDQVlDIn0=