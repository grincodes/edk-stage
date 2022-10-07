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
