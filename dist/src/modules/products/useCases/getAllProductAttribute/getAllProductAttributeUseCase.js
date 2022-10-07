"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductAttributeUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllProductAttributeUseCase {
    constructor(productAttributeRepo) {
        this.productAttributeRepo = productAttributeRepo;
    }
    async execute() {
        try {
            const productAttrs = await this.productAttributeRepo.getAllProductAttribute();
            return (0, Result_1.right)(Result_1.Result.ok(productAttrs));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductAttributeUseCase = GetAllProductAttributeUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEF0dHJpYnV0ZVVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9nZXRBbGxQcm9kdWN0QXR0cmlidXRlL2dldEFsbFByb2R1Y3RBdHRyaWJ1dGVVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUEyRTtBQUMzRSw4REFBaUU7QUFNakUsTUFBYSw2QkFBNkI7SUFHeEMsWUFBWSxvQkFBMkM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFBO0lBQ2xELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztRQUNYLElBQUk7WUFDRixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1lBRTdFLE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBcUIsWUFBWSxDQUFDLENBQWEsQ0FBQTtTQUN0RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7SUFDSCxDQUFDO0NBQ0Y7QUFoQkQsc0VBZ0JDIn0=