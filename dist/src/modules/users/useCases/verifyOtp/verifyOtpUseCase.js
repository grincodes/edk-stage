"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const otpCode_1 = require("../../domain/otpCode");
const verifyOtpErrors_1 = require("./verifyOtpErrors");
class VerifyOtpUseCase {
    constructor(otpService, userRepo) {
        this.otpService = otpService;
        this.userRepo = userRepo;
    }
    async execute(req) {
        if (!req) {
            return (0, Result_1.left)(new verifyOtpErrors_1.VerifyOtpUseCaseErrors.InvalidUserError());
        }
        if (req.isUserVerified) {
            return (0, Result_1.left)(new verifyOtpErrors_1.VerifyOtpUseCaseErrors.UserAlreadyVerifiedError());
        }
        let code = null;
        try {
            code = await this.otpService.verifyUserOtp({ code: req.code, codeType: otpCode_1.CodeType.EmailVerification, userId: req.userId });
            if (!code) {
                return (0, Result_1.left)(Result_1.Result.fail(new verifyOtpErrors_1.VerifyOtpUseCaseErrors.InvalidOtp()));
            }
            await this.userRepo.verifyUserById(req.userId);
            // send congrats email verified through event
            //   const otpMsg = new OtpVerificationMessage({ otp: otp.code })
            //   const userEmailOrError = Email.create(req.email)
            //   if (userEmailOrError.isFailure) {
            //     return left(Result.fail<void>(userEmailOrError.errorValue())) as Response
            //   }
            //   await this.mailService.sendMail({
            //     to: userEmailOrError.getValue(),
            //     text: otpMsg.getMessage(),
            //     subject: "Email Verification",
            //   })
            //   console.log(`[Verification Email ]: otp sent to user ${req.userId}`)
        }
        catch (err) {
            return (0, Result_1.left)(Result_1.Result.fail(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok({
            code,
        }));
    }
}
exports.VerifyOtpUseCase = VerifyOtpUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5T3RwVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3ZlcmlmeU90cC92ZXJpZnlPdHBVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBEQUEyRTtBQUczRSxrREFBd0U7QUFHeEUsdURBQTBEO0FBTTFELE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksVUFBdUIsRUFBRSxRQUFtQjtRQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFpQjtRQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLHdDQUFzQixDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQTtTQUMzRDtRQUVELElBQUksR0FBRyxDQUFDLGNBQWMsRUFBRTtZQUN0QixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksd0NBQXNCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFBO1NBQ25FO1FBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBRWYsSUFBSTtZQUNGLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGtCQUFRLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBRXhILElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLElBQUksd0NBQXNCLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBYSxDQUFBO2FBQ3BGO1lBQ0QsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDOUMsNkNBQTZDO1lBQzdDLGlFQUFpRTtZQUVqRSxxREFBcUQ7WUFFckQsc0NBQXNDO1lBQ3RDLGdGQUFnRjtZQUNoRixNQUFNO1lBRU4sc0NBQXNDO1lBQ3RDLHVDQUF1QztZQUN2QyxpQ0FBaUM7WUFDakMscUNBQXFDO1lBQ3JDLE9BQU87WUFFUCx5RUFBeUU7U0FDMUU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxHQUFHLENBQUMsQ0FBYSxDQUFBO1NBQ2hEO1FBQ0QsT0FBTyxJQUFBLGNBQUssRUFDVixlQUFNLENBQUMsRUFBRSxDQUF1QjtZQUM5QixJQUFJO1NBQ0wsQ0FBQyxDQUNTLENBQUE7SUFDZixDQUFDO0NBQ0Y7QUFwREQsNENBb0RDIn0=