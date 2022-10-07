"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailUseCase = void 0;
const GetUserByEmailErrors_1 = require("./GetUserByEmailErrors");
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
const userEmail_1 = require("../../domain/userEmail");
class GetUserByEmailUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(req) {
        try {
            const userEmailOrError = userEmail_1.UserEmail.create(req.email);
            if (userEmailOrError.isFailure) {
                return (0, Result_1.left)(Result_1.Result.fail(userEmailOrError.error));
            }
            const userEmail = userEmailOrError.getValue();
            const user = await this.userRepo.findUserByEmail(userEmail);
            const userFound = !!user === true;
            if (!userFound) {
                return (0, Result_1.left)(new GetUserByEmailErrors_1.GetUserByEmailErrors.UserNotFoundError(userEmail.value));
            }
            return (0, Result_1.right)(Result_1.Result.ok(user));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetUserByEmailUseCase = GetUserByEmailUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0VXNlckJ5RW1haWxVc2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvZ2V0VXNlckJ5RW1haWwvR2V0VXNlckJ5RW1haWxVc2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGlFQUE2RDtBQUk3RCwwREFBMkU7QUFDM0UsOERBQWlFO0FBQ2pFLHNEQUFrRDtBQUlsRCxNQUFhLHFCQUFxQjtJQUdoQyxZQUFZLFFBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQXNCO1FBQ3pDLElBQUk7WUFDRixNQUFNLGdCQUFnQixHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUVwRCxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFNLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUE7YUFDbEU7WUFFRCxNQUFNLFNBQVMsR0FBYyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUV4RCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzNELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFBO1lBRWpDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDJDQUFvQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFBO2FBQ3JGO1lBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFPLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDcEM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQztDQUNGO0FBN0JELHNEQTZCQyJ9