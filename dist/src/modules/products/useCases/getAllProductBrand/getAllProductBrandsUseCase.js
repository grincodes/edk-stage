"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductBrandUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllProductBrandUseCase {
    constructor(productBrandRepo) {
        this.productBrandRepo = productBrandRepo;
    }
    async execute() {
        try {
            const productBrands = await this.productBrandRepo.getAllProductBrand();
            return (0, Result_1.right)(Result_1.Result.ok(productBrands));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductBrandUseCase = GetAllProductBrandUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEJyYW5kc1VzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9nZXRBbGxQcm9kdWN0QnJhbmQvZ2V0QWxsUHJvZHVjdEJyYW5kc1VzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQTJFO0FBQzNFLDhEQUFpRTtBQU1qRSxNQUFhLHlCQUF5QjtJQUdwQyxZQUFZLGdCQUFtQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUE7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1gsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUE7WUFFdEUsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFpQixhQUFhLENBQUMsQ0FBYSxDQUFBO1NBQ25FO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNsRTtJQUNILENBQUM7Q0FDRjtBQWhCRCw4REFnQkMifQ==