import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { IOtpService } from "../../services/otpService"
import { Mailer } from "../../../../core/infra/Mailer"
import { CodeType, Otp, VerifyOtpCodeProps } from "../../domain/otpCode"
import { OtpVerificationMessage } from "../../../notification/domain/otpVerificationMessage"
import { Email } from "../../../../shared/domain_types/Email"
import { VerifyOtpUseCaseErrors } from "./verifyOtpErrors"
import { VerifyOtpDTO, VerifyOtpDTOResponse } from "./verifyOtpDTO"
import { IUserRepo } from "../../repos/userRepo"

type Response = Either<VerifyOtpUseCaseErrors.UserAlreadyVerifiedError | VerifyOtpUseCaseErrors.InvalidOtp | GenericAppError.UnexpectedError | Result<any>, Result<VerifyOtpDTOResponse>>

export class VerifyOtpUseCase implements UseCase<VerifyOtpDTO, Promise<Response>> {
  private otpService: IOtpService
  private userRepo: IUserRepo

  constructor(otpService: IOtpService, userRepo: IUserRepo) {
    this.otpService = otpService
    this.userRepo = userRepo
  }

  public async execute(req: VerifyOtpDTO): Promise<Response> {
    if (!req) {
      return left(new VerifyOtpUseCaseErrors.InvalidUserError())
    }

    if (req.isUserVerified) {
      return left(new VerifyOtpUseCaseErrors.UserAlreadyVerifiedError())
    }

    let code = null

    try {
      code = await this.otpService.verifyUserOtp({ code: req.code, codeType: CodeType.EmailVerification, userId: req.userId })

      if (!code) {
        return left(Result.fail<void>(new VerifyOtpUseCaseErrors.InvalidOtp())) as Response
      }
      await this.userRepo.verifyUserById(req.userId)
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
    } catch (err) {
      return left(Result.fail<void>(err)) as Response
    }
    return right(
      Result.ok<VerifyOtpDTOResponse>({
        code,
      }),
    ) as Response
  }
}
