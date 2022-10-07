"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const userEmail_1 = require("../../domain/userEmail");
const userPassword_1 = require("../../domain/userPassword");
const user_1 = require("../../domain/user");
const CreateUserErrors_1 = require("./CreateUserErrors");
const AppError_1 = require("../../../../core/logic/AppError");
const userRole_1 = require("../../domain/userRole");
const Guard_1 = require("../../../../core/logic/Guard");
class CreateUserUseCase {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async execute(req) {
        const { firstName, lastName } = req;
        const guardedProps = [
            { numChars: 5, text: firstName, argumentName: "firstName" },
            { numChars: 5, text: lastName, argumentName: "lastName" },
        ];
        const nameGuardResult = Guard_1.Guard.againstAtLeastBulk(guardedProps);
        if (!nameGuardResult.succeeded) {
            return (0, Result_1.left)(Result_1.Result.fail(nameGuardResult.message));
        }
        const emailOrError = userEmail_1.UserEmail.create(req.email);
        const passwordOrError = userPassword_1.UserPassword.create({ value: req.password });
        const roleOrError = userRole_1.UserRole.create(req.role);
        const combinedPropsResult = Result_1.Result.combine([emailOrError, passwordOrError, roleOrError]);
        if (combinedPropsResult.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(combinedPropsResult.error));
        }
        const userOrError = user_1.User.create({
            email: emailOrError.getValue(),
            password: passwordOrError.getValue(),
            role: roleOrError.getValue(),
            firstName,
            lastName,
            isEmailVerified: false,
        });
        if (userOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(userOrError.error));
        }
        const user = userOrError.getValue();
        const userAlreadyExists = await this.userRepo.exists(user.email);
        if (userAlreadyExists) {
            return (0, Result_1.left)(new CreateUserErrors_1.CreateUserErrors.AccountAlreadyExists(user.email.value));
        }
        try {
            await this.userRepo.save(user);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(user));
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVXNlclVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9jcmVhdGVVc2VyL0NyZWF0ZVVzZXJVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUEyRTtBQUMzRSxzREFBa0Q7QUFDbEQsNERBQXdEO0FBQ3hELDRDQUF3QztBQUV4Qyx5REFBcUQ7QUFDckQsOERBQWlFO0FBQ2pFLG9EQUFnRDtBQUNoRCx3REFBb0Q7QUFJcEQsTUFBYSxpQkFBaUI7SUFHNUIsWUFBWSxRQUFtQjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFrQjtRQUM5QixNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQTtRQUVuQyxNQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFO1lBQzNELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUU7U0FDMUQsQ0FBQTtRQUVELE1BQU0sZUFBZSxHQUFHLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU5RCxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUM5QixPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFhLENBQUE7U0FDcEU7UUFFRCxNQUFNLFlBQVksR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEQsTUFBTSxlQUFlLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDcEUsTUFBTSxXQUFXLEdBQUcsbUJBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRTdDLE1BQU0sbUJBQW1CLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQTtRQUV4RixJQUFJLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQTtTQUN0RTtRQUVELE1BQU0sV0FBVyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUM7WUFDOUIsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsUUFBUSxFQUFFLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDcEMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsU0FBUztZQUNULFFBQVE7WUFDUixlQUFlLEVBQUUsS0FBSztTQUN2QixDQUFDLENBQUE7UUFFRixJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFBO1NBQzlEO1FBRUQsTUFBTSxJQUFJLEdBQVMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRXpDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksbUNBQWdCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFBO1NBQ3JGO1FBRUQsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDL0I7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFBO1NBQ2xFO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFPLElBQUksQ0FBQyxDQUFhLENBQUE7SUFDakQsQ0FBQztDQUNGO0FBNURELDhDQTREQyJ9