"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const DeleteUserError_1 = require("./DeleteUserError");
const AppError_1 = require("../../../../core/logic/AppError");
class DeleteUserUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(req) {
        try {
            const user = await this.userRepo.findUserById(req.userId);
            const userFound = !!user == true;
            if (!userFound) {
                return (0, Result_1.left)(new DeleteUserError_1.DeleteUserErrors.UserNotFoundError());
            }
            user.delete();
            await this.userRepo.save(user);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok());
    }
}
exports.DeleteUserUseCase = DeleteUserUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlVXNlclVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9kZWxldGVVc2VyL0RlbGV0ZVVzZXJVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUEyRTtBQUszRSx1REFBb0Q7QUFDcEQsOERBQWlFO0FBTWpFLE1BQWEsaUJBQWlCO0lBRzVCLFlBQVksUUFBbUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBa0I7UUFDOUIsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3pELE1BQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO1lBRWhDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLGtDQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQWEsQ0FBQTthQUNsRTtZQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUViLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDL0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFBO1NBQ2xFO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxFQUFRLENBQWEsQ0FBQTtJQUM3QyxDQUFDO0NBQ0Y7QUF6QkQsOENBeUJDIn0=