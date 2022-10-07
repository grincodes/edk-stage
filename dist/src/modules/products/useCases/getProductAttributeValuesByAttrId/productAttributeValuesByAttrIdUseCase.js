"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductAttributeValueByAttrIdUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllProductAttributeValueByAttrIdUseCase {
    constructor(productAttributeValueRepo) {
        this.productAttributeValueRepo = productAttributeValueRepo;
    }
    async execute(req) {
        try {
            const productAttributeValue = await this.productAttributeValueRepo.getProductAttributeValuesByAttrID(req.attributeId);
            return (0, Result_1.right)(Result_1.Result.ok(productAttributeValue));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductAttributeValueByAttrIdUseCase = GetAllProductAttributeValueByAttrIdUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlc0J5QXR0cklkVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldFByb2R1Y3RBdHRyaWJ1dGVWYWx1ZXNCeUF0dHJJZC9wcm9kdWN0QXR0cmlidXRlVmFsdWVzQnlBdHRySWRVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUEyRTtBQUMzRSw4REFBaUU7QUFPakUsTUFBYSwwQ0FBMEM7SUFHckQsWUFBWSx5QkFBcUQ7UUFDL0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLHlCQUF5QixDQUFBO0lBQzVELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQW9DO1FBQ2hELElBQUk7WUFDRixNQUFNLHFCQUFxQixHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUVySCxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQTBCLHFCQUFxQixDQUFDLENBQWEsQ0FBQTtTQUNwRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7SUFDSCxDQUFDO0NBQ0Y7QUFoQkQsZ0dBZ0JDIn0=