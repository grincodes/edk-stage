"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const verifyOtpErrors_1 = require("./verifyOtpErrors");
class VerifyOtpController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        dto.userId = this.authReq.userId;
        dto.isUserVerified = this.authReq.isEmailVerified;
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case verifyOtpErrors_1.VerifyOtpUseCaseErrors.InvalidUserError:
                        return this.conflict(error.errorValue().message);
                    case verifyOtpErrors_1.VerifyOtpUseCaseErrors.UserAlreadyVerifiedError:
                        return this.conflict(error.errorValue().message);
                    case verifyOtpErrors_1.VerifyOtpUseCaseErrors.InvalidOtp:
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
exports.VerifyOtpController = VerifyOtpController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5T3RwQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3ZlcmlmeU90cC92ZXJpZnlPdHBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUV0RSx1REFBMEQ7QUFHMUQsTUFBYSxtQkFBb0IsU0FBUSwrQkFBYztJQUdyRCxZQUFZLE9BQXlCO1FBQ25DLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxHQUFHLEdBQWlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBb0IsQ0FBQTtRQUN2RCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBQ2hDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUE7UUFFakQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDOUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUM5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFFMUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFLLHdDQUFzQixDQUFDLGdCQUFnQjt3QkFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSyx3Q0FBc0IsQ0FBQyx3QkFBd0I7d0JBQ2xELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssd0NBQXNCLENBQUMsVUFBVTt3QkFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQ7d0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO2lCQUN2QzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2FBQy9DO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDZjtJQUNILENBQUM7Q0FDRjtBQXBDRCxrREFvQ0MifQ==