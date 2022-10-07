import { OtpCodeProps, VerifyOtpCodeProps } from "../domain/otpCode"

export interface IOtpService {
  saveOtpCode(code: OtpCodeProps)
  verifyUserOtp(code: VerifyOtpCodeProps)
}
