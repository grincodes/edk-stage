"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductTypeUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllProductTypeUseCase {
    constructor(productTypeRepo) {
        this.productTypeRepo = productTypeRepo;
    }
    async execute() {
        try {
            const productTypes = await this.productTypeRepo.getAllProductType();
            return (0, Result_1.right)(Result_1.Result.ok(productTypes));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductTypeUseCase = GetAllProductTypeUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdFR5cGVVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvZ2V0QWxsUHJvZHVjdFR5cGUvZ2V0QWxsUHJvZHVjdFR5cGVVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUEyRTtBQUMzRSw4REFBaUU7QUFNakUsTUFBYSx3QkFBd0I7SUFHbkMsWUFBWSxlQUFpQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWCxJQUFJO1lBQ0YsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUE7WUFFbkUsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFnQixZQUFZLENBQUMsQ0FBYSxDQUFBO1NBQ2pFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNsRTtJQUNILENBQUM7Q0FDRjtBQWhCRCw0REFnQkMifQ==