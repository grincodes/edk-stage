"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeValueId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ProductAttributeValueId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ProductAttributeValueId(id));
    }
}
exports.ProductAttributeValueId = ProductAttributeValueId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9kb21haW4vcHJvZHVjdEF0dHJpYnV0ZVZhbHVlSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esd0RBQW9EO0FBQ3BELHVEQUFtRDtBQUVuRCxNQUFhLHVCQUF3QixTQUFRLGVBQVc7SUFDdEQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxZQUFvQixFQUFtQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3RDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBMEIsSUFBSSx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzVFLENBQUM7Q0FDRjtBQVpELDBEQVlDIn0=