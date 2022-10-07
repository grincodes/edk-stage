import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { ResendOtpUseCaseErrors } from "./resendOtpErrors"
import { ResendOtpDTO, ResendOtpDTOResponse } from "./resendOtpDTO"
import { IOtpService } from "../../services/otpService"
import { Mailer } from "../../../../core/infra/Mailer"
import { CodeType, Otp } from "../../domain/otpCode"
import { OtpVerificationMessage } from "../../../notification/domain/otpVerificationMessage"
import { Email } from "../../../../shared/domain_types/Email"

type Response = Either<ResendOtpUseCaseErrors.UserAlreadyVerifiedError | ResendOtpUseCaseErrors.InvalidUserError | GenericAppError.UnexpectedError | Result<any>, Result<ResendOtpDTOResponse>>

export class ResendOtpUseCase implements UseCase<ResendOtpDTO, Promise<Response>> {
  private otpService: IOtpService
  private mailService: Mailer

  constructor(otpService: IOtpService, mailService: Mailer) {
    this.otpService = otpService
    this.mailService = mailService
  }

  public async execute(req: ResendOtpDTO): Promise<Response> {
    if (!req) {
      return left(new ResendOtpUseCaseErrors.InvalidUserError())
    }

    if (req.isEmailVerified) {
      return left(new ResendOtpUseCaseErrors.UserAlreadyVerifiedError())
    }

    // generate otp code
    const otpOrError = Otp.create({
      codeType: CodeType.EmailVerification,
      userId: req.userId,
      numberDigits: 6,
    })

    if (otpOrError.isFailure) {
      return left(Result.fail<void>(otpOrError.error)) as Response
    }

    const otp: Otp = otpOrError.getValue()

    try {
      await this.otpService.saveOtpCode(otp)

      // send email
      const otpMsg = new OtpVerificationMessage({ otp: otp.code })

      const userEmailOrError = Email.create(req.email)

      if (userEmailOrError.isFailure) {
        return left(Result.fail<void>(userEmailOrError.errorValue())) as Response
      }

      await this.mailService.sendMail({
        to: userEmailOrError.getValue(),
        text: otpMsg.getMessage(),
        subject: "Email Verification",
      })

      console.log(`[Verification Email ]: otp sent to user ${req.userId}`)
    } catch (err) {
      return left(Result.fail<void>(err)) as Response
    }
    return right(
      Result.ok<ResendOtpDTOResponse>({
        code: otp.code,
        codeType: otp.codeType,
        userId: otp.userId,
      }),
    ) as Response
  }
}
