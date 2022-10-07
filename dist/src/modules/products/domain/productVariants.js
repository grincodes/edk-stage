"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariants = void 0;
const WatchedList_1 = require("../../../core/domain/WatchedList");
class ProductVariants extends WatchedList_1.WatchedList {
    constructor(initialVariants) {
        super(initialVariants);
    }
    compareItems(a, b) {
        return a.equals(b);
    }
    static create(variants) {
        return new ProductVariants(variants ? variants : []);
    }
}
exports.ProductVariants = ProductVariants;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFZhcmlhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RWYXJpYW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFHOUQsTUFBYSxlQUFnQixTQUFRLHlCQUE2QjtJQUNoRSxZQUFvQixlQUFtQztRQUNyRCxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUVNLFlBQVksQ0FBQyxDQUFtQixFQUFFLENBQW1CO1FBQzFELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUE2QjtRQUNoRCxPQUFPLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0NBQ0Y7QUFaRCwwQ0FZQyJ9