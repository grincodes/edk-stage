"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshAccessToken = void 0;
const RefreshAccessTokenErrors_1 = require("./RefreshAccessTokenErrors");
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
const userEmail_1 = require("../../domain/userEmail");
class RefreshAccessToken {
    constructor(userRepo, authService) {
        this.userRepo = userRepo;
        this.authService = authService;
    }
    async execute(req) {
        const { refreshToken } = req;
        let user;
        let email;
        try {
            try {
                email = await this.authService.getEmailFromRefreshToken(refreshToken);
            }
            catch (err) {
                return (0, Result_1.left)(new RefreshAccessTokenErrors_1.RefreshAccessTokenErrors.RefreshTokenNotFound());
            }
            try {
                user = await this.userRepo.findUserByEmail(userEmail_1.UserEmail.create(email).getValue());
            }
            catch (err) {
                return (0, Result_1.left)(new RefreshAccessTokenErrors_1.RefreshAccessTokenErrors.UserNotFoundOrDeletedError());
            }
            const accessToken = this.authService.signJWT({
                email: user.email.value,
                isEmailVerified: user.isEmailVerified,
                userId: user.userId.id.toString(),
                roles: user.roles.getItems(),
            });
            // sign a new jwt for that user
            user.setAccessToken(accessToken, refreshToken);
            // save it
            await this.authService.saveAuthenticatedUser(user);
            // return the new access token
            return (0, Result_1.right)(Result_1.Result.ok(accessToken));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.RefreshAccessToken = RefreshAccessToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmcmVzaEFjY2Vzc1Rva2VuVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi9SZWZyZXNoQWNjZXNzVG9rZW5Vc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHlFQUFxRTtBQUtyRSwwREFBMkU7QUFDM0UsOERBQWlFO0FBQ2pFLHNEQUFrRDtBQUlsRCxNQUFhLGtCQUFrQjtJQUk3QixZQUFZLFFBQW1CLEVBQUUsV0FBeUI7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBMEI7UUFDN0MsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLEdBQUcsQ0FBQTtRQUM1QixJQUFJLElBQVUsQ0FBQTtRQUNkLElBQUksS0FBYSxDQUFBO1FBRWpCLElBQUk7WUFDRixJQUFJO2dCQUNGLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDdEU7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksbURBQXdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFBO2FBQ2pFO1lBRUQsSUFBSTtnQkFDRixJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2FBQy9FO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLG1EQUF3QixDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQTthQUN2RTtZQUVELE1BQU0sV0FBVyxHQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBUzthQUNwQyxDQUFDLENBQUE7WUFFRiwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUE7WUFFOUMsVUFBVTtZQUNWLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUVsRCw4QkFBOEI7WUFDOUIsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFXLFdBQVcsQ0FBQyxDQUFDLENBQUE7U0FDL0M7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQztDQUNGO0FBOUNELGdEQThDQyJ9