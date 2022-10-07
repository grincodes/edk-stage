"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutUseCase = void 0;
const LogoutErrors_1 = require("./LogoutErrors");
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class LogoutUseCase {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async execute(request) {
        let user;
        const { userId } = request;
        try {
            try {
                user = await this.userRepo.findUserById(userId);
            }
            catch (err) {
                return (0, Result_1.left)(new LogoutErrors_1.LogoutErrors.UserNotFoundOrDeletedError());
            }
            await this.authService.deAuthenticateUser(user.email.value);
            return (0, Result_1.right)(Result_1.Result.ok());
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.LogoutUseCase = LogoutUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0VXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL2xvZ291dC9Mb2dvdXRVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLGlEQUE2QztBQUU3QywwREFBMkU7QUFDM0UsOERBQWlFO0FBSWpFLE1BQWEsYUFBYTtJQUl4QixZQUFZLFFBQW1CLEVBQUUsV0FBeUI7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBa0I7UUFDckMsSUFBSSxJQUFVLENBQUE7UUFDZCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFBO1FBRTFCLElBQUk7WUFDRixJQUFJO2dCQUNGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ2hEO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDJCQUFZLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFBO2FBQzNEO1lBRUQsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFM0QsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxFQUFRLENBQUMsQ0FBQTtTQUNoQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDO0NBQ0Y7QUEzQkQsc0NBMkJDIn0=