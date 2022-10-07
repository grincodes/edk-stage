"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductByShopIdUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
class GetAllProductByShopIdUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(req) {
        try {
            const allProductsInShop = await this.productRepo.getAllProductByShopId(req.shopid, req.page, req.size);
            return (0, Result_1.right)(Result_1.Result.ok(allProductsInShop));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllProductByShopIdUseCase = GetAllProductByShopIdUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEJ5U2hvcElkVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldEFsbFByb2R1Y3RCeVNob3BJZC9nZXRBbGxQcm9kdWN0QnlTaG9wSWRVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFpRTtBQUNqRSwwREFBMkU7QUFPM0UsTUFBYSw0QkFBNEI7SUFHdkMsWUFBWSxXQUF5QjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUE4QjtRQUMxQyxJQUFJO1lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV0RyxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQVksaUJBQWlCLENBQUMsQ0FBYSxDQUFBO1NBQ2xFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNsRTtJQUNILENBQUM7Q0FDRjtBQWhCRCxvRUFnQkMifQ==