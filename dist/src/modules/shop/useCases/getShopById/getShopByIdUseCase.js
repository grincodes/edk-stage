"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopByIdUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
const getShopByIdErrors_1 = require("./getShopByIdErrors");
const shopId_1 = require("../../domain/shopId");
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
class GetShopByIdUseCase {
    constructor(shopRepo) {
        this.shopRepo = shopRepo;
    }
    async execute(req) {
        const shopId = req.shopId;
        const shopIdOrError = shopId_1.ShopId.create(new UniqueEntityID_1.UniqueEntityID(shopId));
        if (shopIdOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(shopIdOrError.error));
        }
        try {
            const shop = await this.shopRepo.findShopById(shopId);
            const shopFound = !!shop == true;
            if (!shopFound) {
                return (0, Result_1.left)(new getShopByIdErrors_1.GetShopByIdErrors.ShopDoesNotExistError(shopId));
            }
            return (0, Result_1.right)(Result_1.Result.ok(shop));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetShopByIdUseCase = GetShopByIdUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2hvcEJ5SWRVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC91c2VDYXNlcy9nZXRTaG9wQnlJZC9nZXRTaG9wQnlJZFVzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQTRFO0FBQzVFLDhEQUFrRTtBQUNsRSwyREFBd0Q7QUFJeEQsZ0RBQTZDO0FBQzdDLDJFQUF3RTtBQUl4RSxNQUFhLGtCQUFrQjtJQUc3QixZQUFZLFFBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQW1CO1FBQy9CLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFMUIsTUFBTSxhQUFhLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO1NBQ2pFO1FBRUQsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7WUFFakMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxPQUFPLElBQUEsYUFBSSxFQUFDLElBQUkscUNBQWlCLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQWEsQ0FBQzthQUM5RTtZQUVELE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBTyxJQUFJLENBQUMsQ0FBYSxDQUFDO1NBQ2pEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNuRTtJQUNILENBQUM7Q0FDRjtBQTdCRCxnREE2QkMifQ==