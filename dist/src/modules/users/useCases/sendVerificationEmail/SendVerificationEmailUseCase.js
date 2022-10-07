// import { UseCase } from "../../../../core/domain/UseCase"
// import { User } from "../../domain/user"
// import { IOtpService } from "../../services/otpService"
// import { CodeType, Otp } from "../../domain/otpCode"
// import { OtpVerificationMessage } from "../../../notification/domain/otpVerificationMessage"
// import { Result } from "../../../../core/logic/Result"
// import { Mailer } from "../../../../core/infra/Mailer"
// interface Request {
//   user: User
// }
// export class SendVerificationEmailUseCase implements UseCase<Request, Result<Otp>> {
//   private otpService: IOtpService
//   private mailService: Mailer
//   constructor(otpService: IOtpService, mailService: Mailer) {
//     this.otpService = otpService
//     this.mailService = mailService
//   }
//   async execute(request: Request): Promise<Result<Otp>> {
//     const { user } = request
//     const otpOrError = Otp.create({
//       codeType: CodeType.EmailVerification,
//       userId: user.id.toString(),
//       numberDigits: 6,
//     })
//     if (otpOrError.isFailure) {
//       return Result.fail<Otp>(otpOrError.error)
//     }
//     const otp: Otp = otpOrError.getValue()
//     try {
//       await this.otpService.saveOtpCode(otp)
//       // send email
//       const otpMsg = new OtpVerificationMessage({ otp: otp.code })
//     //   await this.mailService.sendMail({
//     //     to: user.email,
//     //     text: otpMsg.getMessage(),
//     //     subject: "Email Verification",
//     //   })
//       console.log(`[Verification Email ]: otp sent to user ${user.id}`)
//     } catch (err) {
//       return Result.fail<Otp>(err)
//     }
//     return Result.ok<Otp>(otp)
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZFZlcmlmaWNhdGlvbkVtYWlsVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3NlbmRWZXJpZmljYXRpb25FbWFpbC9TZW5kVmVyaWZpY2F0aW9uRW1haWxVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCwyQ0FBMkM7QUFDM0MsMERBQTBEO0FBQzFELHVEQUF1RDtBQUN2RCwrRkFBK0Y7QUFDL0YseURBQXlEO0FBQ3pELHlEQUF5RDtBQUV6RCxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLElBQUk7QUFFSix1RkFBdUY7QUFDdkYsb0NBQW9DO0FBQ3BDLGdDQUFnQztBQUVoQyxnRUFBZ0U7QUFDaEUsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxNQUFNO0FBRU4sNERBQTREO0FBQzVELCtCQUErQjtBQUUvQixzQ0FBc0M7QUFDdEMsOENBQThDO0FBQzlDLG9DQUFvQztBQUNwQyx5QkFBeUI7QUFDekIsU0FBUztBQUVULGtDQUFrQztBQUNsQyxrREFBa0Q7QUFDbEQsUUFBUTtBQUVSLDZDQUE2QztBQUU3QyxZQUFZO0FBQ1osK0NBQStDO0FBRS9DLHNCQUFzQjtBQUN0QixxRUFBcUU7QUFFckUsNkNBQTZDO0FBQzdDLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsNENBQTRDO0FBQzVDLGNBQWM7QUFFZCwwRUFBMEU7QUFDMUUsc0JBQXNCO0FBQ3RCLHFDQUFxQztBQUNyQyxRQUFRO0FBRVIsaUNBQWlDO0FBQ2pDLE1BQU07QUFDTixJQUFJIn0=