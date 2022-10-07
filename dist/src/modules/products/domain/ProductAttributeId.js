"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ProductAttributeId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ProductAttributeId(id));
    }
}
exports.ProductAttributeId = ProductAttributeId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdEF0dHJpYnV0ZUlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL1Byb2R1Y3RBdHRyaWJ1dGVJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBb0Q7QUFDcEQsdURBQW1EO0FBRW5ELE1BQWEsa0JBQW1CLFNBQVEsZUFBVztJQUNqRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELFlBQW9CLEVBQW1CO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbUI7UUFDdEMsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFxQixJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbEUsQ0FBQztDQUNGO0FBWkQsZ0RBWUMifQ==