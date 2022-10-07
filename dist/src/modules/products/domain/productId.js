"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ProductId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ProductId(id));
    }
}
exports.ProductId = ProductId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdElkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBb0Q7QUFDcEQsdURBQW1EO0FBRW5ELE1BQWEsU0FBVSxTQUFRLGVBQVc7SUFDeEMsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxZQUFvQixFQUFtQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3RDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBWSxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7Q0FDRjtBQVpELDhCQVlDIn0=