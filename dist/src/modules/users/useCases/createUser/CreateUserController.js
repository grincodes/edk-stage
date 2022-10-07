"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const CreateUserErrors_1 = require("./CreateUserErrors");
const TextUtils_1 = require("../../../../utils/TextUtils");
const AppError_1 = require("../../../../core/logic/AppError");
const UserMap_1 = require("../../mappers/UserMap");
class CreateUserController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        let dto = this.req.body;
        dto = {
            firstName: TextUtils_1.TextUtils.sanitize(dto.firstName),
            lastName: TextUtils_1.TextUtils.sanitize(dto.lastName),
            email: TextUtils_1.TextUtils.sanitize(dto.email),
            password: dto.password,
            role: TextUtils_1.TextUtils.sanitize(dto.role)
        };
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case CreateUserErrors_1.CreateUserErrors.AccountAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case CreateUserErrors_1.CreateUserErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, UserMap_1.UserMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVXNlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9jcmVhdGVVc2VyL0NyZWF0ZVVzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUd0RSx5REFBcUQ7QUFDckQsMkRBQXVEO0FBQ3ZELDhEQUFpRTtBQUNqRSxtREFBK0M7QUFFL0MsTUFBYSxvQkFBcUIsU0FBUSwrQkFBYztJQUd0RCxZQUFZLE9BQTBCO1FBQ3BDLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSSxHQUFHLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBcUIsQ0FBQTtRQUV2RCxHQUFHLEdBQUc7WUFDSixTQUFTLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM1QyxRQUFRLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxLQUFLLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNwQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDbkMsQ0FBQTtRQUVELElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFFOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBRTFCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxtQ0FBZ0IsQ0FBQyxvQkFBb0I7d0JBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssbUNBQWdCLENBQUMsVUFBVTt3QkFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtpQkFDdkM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3JFO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUN0QjtJQUNILENBQUM7Q0FDRjtBQTVDRCxvREE0Q0MifQ==