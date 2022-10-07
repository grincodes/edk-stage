"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByWebIdUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
class GetProductByWebIdUseCase {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    async execute(req) {
        try {
            const product = await this.productRepo.findProductByWebId(req.shopid, req.productWebId);
            return (0, Result_1.right)(Result_1.Result.ok(product));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetProductByWebIdUseCase = GetProductByWebIdUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdEJ5V2ViSWRVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvZ2V0UHJvZHVjdEJ5V2ViSWQvZ2V0UHJvZHVjdEJ5V2ViSWRVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFpRTtBQUNqRSwwREFBMkU7QUFNM0UsTUFBYSx3QkFBd0I7SUFHbkMsWUFBWSxXQUF5QjtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFRO1FBQ3BCLElBQUk7WUFDRixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDdkYsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFVLE9BQU8sQ0FBQyxDQUFhLENBQUE7U0FDdEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFBO1NBQ2xFO0lBQ0gsQ0FBQztDQUNGO0FBZkQsNERBZUMifQ==