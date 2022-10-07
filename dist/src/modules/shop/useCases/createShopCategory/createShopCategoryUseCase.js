"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopCategoryUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const shopCategory_1 = require("../../domain/shopCategory");
const createShopCategoryErrors_1 = require("./createShopCategoryErrors");
class CreateShopCategoryUseCase {
    constructor(shopCategoryRepo) {
        this.shopCategoryRepo = shopCategoryRepo;
    }
    async execute(req) {
        // todo Get UserType
        const shopCategoryOrError = shopCategory_1.ShopCategory.create({
            name: req.name,
            slug: req.slug,
            isActive: true
        });
        if (shopCategoryOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(shopCategoryOrError.error));
        }
        const shopCat = shopCategoryOrError.getValue();
        const shopCatAlreadyExists = await this.shopCategoryRepo.exists(shopCat.name);
        if (shopCatAlreadyExists) {
            return (0, Result_1.left)(new createShopCategoryErrors_1.CreateShopCategoryErrors.ShopCategoryAlreadyExists(shopCat.name));
        }
        try {
            await this.shopCategoryRepo.save(shopCat);
            console.log(`Shop Category Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(shopCat));
    }
}
exports.CreateShopCategoryUseCase = CreateShopCategoryUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcENhdGVnb3J5VXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvdXNlQ2FzZXMvY3JlYXRlU2hvcENhdGVnb3J5L2NyZWF0ZVNob3BDYXRlZ29yeVVzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOERBQWtFO0FBQ2xFLDBEQUE0RTtBQUM1RSw0REFBeUQ7QUFHekQseUVBQXNFO0FBSXRFLE1BQWEseUJBQXlCO0lBR3BDLFlBQVksZ0JBQW1DO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUMzQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUEwQjtRQUN0QyxvQkFBb0I7UUFDcEIsTUFBTSxtQkFBbUIsR0FBRywyQkFBWSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO1NBQ3ZFO1FBRUQsTUFBTSxPQUFPLEdBQWlCLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTdELE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5RSxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSxtREFBd0IsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQWEsQ0FBQztTQUMvRjtRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ3RDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNuRTtRQUVELE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBZSxPQUFPLENBQUMsQ0FBYSxDQUFDO0lBQzdELENBQUM7Q0FDRjtBQXBDRCw4REFvQ0MifQ==