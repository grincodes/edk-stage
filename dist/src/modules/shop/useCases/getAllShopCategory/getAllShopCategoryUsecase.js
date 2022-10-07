"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllShopCategoryUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllShopCategoryUseCase {
    constructor(ShopCategoryRepo) {
        this.ShopCategoryRepo = ShopCategoryRepo;
    }
    async execute() {
        try {
            const shopCats = await this.ShopCategoryRepo.getAllShopCategory();
            return (0, Result_1.right)(Result_1.Result.ok(shopCats));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllShopCategoryUseCase = GetAllShopCategoryUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU2hvcENhdGVnb3J5VXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvdXNlQ2FzZXMvZ2V0QWxsU2hvcENhdGVnb3J5L2dldEFsbFNob3BDYXRlZ29yeVVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQTRFO0FBQzVFLDhEQUFrRTtBQU1sRSxNQUFhLHlCQUF5QjtJQUdwQyxZQUFZLGdCQUFtQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDM0MsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1gsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFFbEUsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFpQixRQUFRLENBQUMsQ0FBYSxDQUFDO1NBQy9EO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNuRTtJQUNILENBQUM7Q0FDRjtBQWhCRCw4REFnQkMifQ==