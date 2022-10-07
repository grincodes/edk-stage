"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const DeleteUserError_1 = require("./DeleteUserError");
const AppError_1 = require("../../../../core/logic/AppError");
class DeleteUserController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        try {
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case DeleteUserError_1.DeleteUserErrors.UserNotFoundError:
                        return this.notFound(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res);
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.DeleteUserController = DeleteUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9kZWxldGVVc2VyL0RlbGV0ZVVzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDBFQUFzRTtBQUN0RSx1REFBb0Q7QUFDcEQsOERBQWlFO0FBRWpFLE1BQWEsb0JBQXFCLFNBQVEsK0JBQWM7SUFHdEQsWUFBWSxPQUEwQjtRQUNwQyxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQXFCLENBQUE7UUFFekQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBRTFCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxrQ0FBZ0IsQ0FBQyxpQkFBaUI7d0JBQ3JDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRDt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUMvQzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDekI7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGO0FBaENELG9EQWdDQyJ9