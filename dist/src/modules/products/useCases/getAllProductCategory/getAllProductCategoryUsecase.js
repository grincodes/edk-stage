"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductCategoryUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllProductCategoryUseCase {
    constructor(productCategoryRepo) {
        this.productCategoryRepo = productCategoryRepo;
    }
    async execute() {
        try {
            const productCats = await this.productCategoryRepo.getAllProductCategory();
            return (0, Result_1.right)(Result_1.Result.ok(productCats));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductCategoryUseCase = GetAllProductCategoryUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdENhdGVnb3J5VXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldEFsbFByb2R1Y3RDYXRlZ29yeS9nZXRBbGxQcm9kdWN0Q2F0ZWdvcnlVc2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUEyRTtBQUMzRSw4REFBaUU7QUFNakUsTUFBYSw0QkFBNEI7SUFHdkMsWUFBWSxtQkFBeUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFBO0lBQ2hELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztRQUNYLElBQUk7WUFDRixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1lBRTFFLE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBb0IsV0FBVyxDQUFDLENBQWEsQ0FBQTtTQUNwRTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7SUFDSCxDQUFDO0NBQ0Y7QUFoQkQsb0VBZ0JDIn0=