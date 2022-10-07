"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const LoginErrors_1 = require("./LoginErrors");
const userPassword_1 = require("../../domain/userPassword");
const userEmail_1 = require("../../domain/userEmail");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const userRole_1 = require("../../domain/userRole");
class LoginUserUseCase {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async execute(request) {
        let user;
        let userEmail;
        let password;
        try {
            const userEmailOrError = userEmail_1.UserEmail.create(request.email);
            const passwordOrError = userPassword_1.UserPassword.create({ value: request.password });
            const payloadResult = Result_1.Result.combine([userEmailOrError, passwordOrError]);
            if (payloadResult.isFailure) {
                return (0, Result_1.left)(new LoginErrors_1.LoginUseCaseErrors.GuardError(payloadResult.errorValue()));
            }
            userEmail = userEmailOrError.getValue();
            password = passwordOrError.getValue();
            user = await this.userRepo.findUserByEmail(userEmail);
            const userFound = !!user;
            console.log(`userFOund${userFound}`);
            if (!userFound) {
                return (0, Result_1.left)(new LoginErrors_1.LoginUseCaseErrors.UserEmailDoesntExistError());
            }
            const passwordValid = await user.password.comparePassword(password.value);
            console.log(`passwordValid  ${passwordValid}`);
            if (!passwordValid) {
                return (0, Result_1.left)(new LoginErrors_1.LoginUseCaseErrors.PasswordDoesntMatchError());
            }
            const authRoleOrError = userRole_1.UserRole.create(request.auth_role);
            if (authRoleOrError.isFailure) {
                return (0, Result_1.left)(new LoginErrors_1.LoginUseCaseErrors.InvalidAuthRoleError());
            }
            // check user permission
            if (!user.hasPermission(authRoleOrError.getValue())) {
                return (0, Result_1.left)(new LoginErrors_1.LoginUseCaseErrors.InvalidUserPermissionError());
            }
            const accessToken = this.authService.signJWT({
                email: user.email.value,
                isEmailVerified: user.isEmailVerified,
                userId: user.userId.id.toString(),
                roles: user.roles.getItems(),
            });
            const refreshToken = this.authService.createRefreshToken();
            user.setAccessToken(accessToken, refreshToken);
            console.log("before save auth ----user", user.isLoggedIn());
            await this.authService.saveAuthenticatedUser(user);
            return (0, Result_1.right)(Result_1.Result.ok({
                accessToken,
                refreshToken,
            }));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err.toString()));
        }
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5Vc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvbG9naW4vTG9naW5Vc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLCtDQUFrRDtBQUlsRCw0REFBd0Q7QUFHeEQsc0RBQWtEO0FBQ2xELDhEQUFpRTtBQUNqRSwwREFBMkU7QUFDM0Usb0RBQWdEO0FBV2hELE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksUUFBbUIsRUFBRSxXQUF5QjtRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFpQjtRQUNwQyxJQUFJLElBQVUsQ0FBQTtRQUNkLElBQUksU0FBb0IsQ0FBQTtRQUN4QixJQUFJLFFBQXNCLENBQUE7UUFFMUIsSUFBSTtZQUNGLE1BQU0sZ0JBQWdCLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3hELE1BQU0sZUFBZSxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3hFLE1BQU0sYUFBYSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFBO1lBRXpFLElBQUksYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDM0IsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLGdDQUFrQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQzNFO1lBRUQsU0FBUyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ3ZDLFFBQVEsR0FBRyxlQUFlLENBQUMs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