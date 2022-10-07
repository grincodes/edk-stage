"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendOtpUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const resendOtpErrors_1 = require("./resendOtpErrors");
const otpCode_1 = require("../../domain/otpCode");
const otpVerificationMessage_1 = require("../../../notification/domain/otpVerificationMessage");
const Email_1 = require("../../../../shared/domain_types/Email");
class ResendOtpUseCase {
    constructor(otpService, mailService) {
        this.otpService = otpService;
        this.mailService = mailService;
    }
    async execute(req) {
        if (!req) {
            return (0, Result_1.left)(new resendOtpErrors_1.ResendOtpUseCaseErrors.InvalidUserError());
        }
        if (req.isEmailVerified) {
            return (0, Result_1.left)(new resendOtpErrors_1.ResendOtpUseCaseErrors.UserAlreadyVerifiedError());
        }
        // generate otp code
        const otpOrError = otpCode_1.Otp.create({
            codeType: otpCode_1.CodeType.EmailVerification,
            userId: req.userId,
            numberDigits: 6,
        });
        if (otpOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(otpOrError.error));
        }
        const otp = otpOrError.getValue();
        try {
            await this.otpService.saveOtpCode(otp);
            // send email
            const otpMsg = new otpVerificationMessage_1.OtpVerificationMessage({ otp: otp.code });
            const userEmailOrError = Email_1.Email.create(req.email);
            if (userEmailOrError.isFailure) {
                return (0, Result_1.left)(Result_1.Result.fail(userEmailOrError.errorValue()));
            }
            await this.mailService.sendMail({
                to: userEmailOrError.getValue(),
                text: otpMsg.getMessage(),
                subject: "Email Verification",
            });
            console.log(`[Verification Email ]: otp sent to user ${req.userId}`);
        }
        catch (err) {
            return (0, Result_1.left)(Result_1.Result.fail(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok({
            code: otp.code,
            codeType: otp.codeType,
            userId: otp.userId,
        }));
    }
}
exports.ResendOtpUseCase = ResendOtpUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZW5kT3RwVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3Jlc2VuZE90cC9yZXNlbmRPdHBVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUEyRTtBQUMzRSx1REFBMEQ7QUFJMUQsa0RBQW9EO0FBQ3BELGdHQUE0RjtBQUM1RixpRUFBNkQ7QUFJN0QsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBWSxVQUF1QixFQUFFLFdBQW1CO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQWlCO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksd0NBQXNCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO1NBQzNEO1FBRUQsSUFBSSxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQ3ZCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSx3Q0FBc0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLENBQUE7U0FDbkU7UUFFRCxvQkFBb0I7UUFDcEIsTUFBTSxVQUFVLEdBQUcsYUFBRyxDQUFDLE1BQU0sQ0FBQztZQUM1QixRQUFRLEVBQUUsa0JBQVEsQ0FBQyxpQkFBaUI7WUFDcEMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLFlBQVksRUFBRSxDQUFDO1NBQ2hCLENBQUMsQ0FBQTtRQUVGLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUE7U0FDN0Q7UUFFRCxNQUFNLEdBQUcsR0FBUSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFdEMsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFdEMsYUFBYTtZQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksK0NBQXNCLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7WUFFNUQsTUFBTSxnQkFBZ0IsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUVoRCxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtnQkFDOUIsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQWEsQ0FBQTthQUMxRTtZQUVELE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7Z0JBQzlCLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN6QixPQUFPLEVBQUUsb0JBQW9CO2FBQzlCLENBQUMsQ0FBQTtZQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1NBQ3JFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNoRDtRQUNELE9BQU8sSUFBQSxjQUFLLEVBQ1YsZUFBTSxDQUFDLEVBQUUsQ0FBdUI7WUFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1lBQ3RCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQ1MsQ0FBQTtJQUNmLENBQUM7Q0FDRjtBQTdERCw0Q0E2REMifQ==