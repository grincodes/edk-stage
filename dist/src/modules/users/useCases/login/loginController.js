"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const LoginErrors_1 = require("./LoginErrors");
class LoginController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        dto.auth_role = this.req.headers["auth_role"];
        try {
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                const error = result.value;
                console.log("error", error);
                switch (error.constructor) {
                    case LoginErrors_1.LoginUseCaseErrors.UserEmailDoesntExistError:
                        return this.notFound(error.errorValue().message);
                    case LoginErrors_1.LoginUseCaseErrors.InvalidUserPermissionError:
                        return this.unauthorized(error.errorValue().message);
                    case LoginErrors_1.LoginUseCaseErrors.InvalidAuthRoleError:
                        return this.unauthorized(error.errorValue().message);
                    case LoginErrors_1.LoginUseCaseErrors.PasswordDoesntMatchError:
                        return this.unauthorized(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res, result.value.getValue());
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5Db250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvbG9naW4vbG9naW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBFQUFzRTtBQUN0RSw4REFBaUU7QUFFakUsK0NBQWtEO0FBR2xELE1BQWEsZUFBZ0IsU0FBUSwrQkFBYztJQUdqRCxZQUFZLE9BQXlCO1FBQ25DLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxHQUFHLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFnQixDQUFBO1FBQy9DLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFN0MsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUMzQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUssZ0NBQWtCLENBQUMseUJBQXlCO3dCQUMvQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLGdDQUFrQixDQUFDLDBCQUEwQjt3QkFDaEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDdEQsS0FBSyxnQ0FBa0IsQ0FBQyxvQkFBb0I7d0JBQzFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3RELEtBQUssZ0NBQWtCLENBQUMsd0JBQXdCO3dCQUM5QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUN0RCxLQUFLLDBCQUFlLENBQUMsZUFBZTt3QkFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQ7d0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDL0M7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7YUFDbEQ7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGO0FBdkNELDBDQXVDQyJ9