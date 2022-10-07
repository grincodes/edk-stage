"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendOtpController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const resendOtpErrors_1 = require("./resendOtpErrors");
class ResendOtpController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.authReq;
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case resendOtpErrors_1.ResendOtpUseCaseErrors.InvalidUserError:
                        return this.conflict(error.errorValue().message);
                    case resendOtpErrors_1.ResendOtpUseCaseErrors.UserAlreadyVerifiedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, resultVal.getValue());
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.ResendOtpController = ResendOtpController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZW5kT3RwQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3Jlc2VuZE90cC9yZXNlbmRPdHBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUV0RSx1REFBMEQ7QUFHMUQsTUFBYSxtQkFBb0IsU0FBUSwrQkFBYztJQUdyRCxZQUFZLE9BQXlCO1FBQ25DLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxHQUFHLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUE7UUFFdEMsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDOUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUM5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFFMUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFLLHdDQUFzQixDQUFDLGdCQUFnQjt3QkFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSyx3Q0FBc0IsQ0FBQyx3QkFBd0I7d0JBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtpQkFDdkM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTthQUMvQztTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0Qsa0RBZ0NDIn0=