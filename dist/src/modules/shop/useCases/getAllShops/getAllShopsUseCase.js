"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllShopsUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
const getAllShopsErrors_1 = require("./getAllShopsErrors");
class GetAllShopsUseCase {
    constructor(shopRepo) {
        this.shopRepo = shopRepo;
    }
    async execute(req) {
        const { page, size } = req;
        if (!(isNaN(req.page) && isNaN(req.size))) {
            try {
                const shops = await this.shopRepo.getAllShops(page, size);
                return (0, Result_1.right)(Result_1.Result.ok(shops));
            }
            catch (err) {
                return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
            }
        }
        else {
            return (0, Result_1.left)(new getAllShopsErrors_1.GetAllShopErrors.InvalidQueryPassed());
        }
    }
}
exports.GetAllShopsUseCase = GetAllShopsUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU2hvcHNVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC91c2VDYXNlcy9nZXRBbGxTaG9wcy9nZXRBbGxTaG9wc1VzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQTRFO0FBQzVFLDhEQUFrRTtBQUlsRSwyREFBdUQ7QUFJdkQsTUFBYSxrQkFBa0I7SUFHN0IsWUFBWSxRQUFtQjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFtQjtRQUMvQixNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUUzQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUN6QyxJQUFJO2dCQUNGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUUxRCxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQVMsS0FBSyxDQUFDLENBQWEsQ0FBQzthQUNwRDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFDO2FBQ25FO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSxvQ0FBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFhLENBQUM7U0FDcEU7SUFDSCxDQUFDO0NBQ0Y7QUF0QkQsZ0RBc0JDIn0=