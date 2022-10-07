import { VerifyOtpCodeProps } from "../../domain/otpCode"

export interface VerifyOtpDTOResponse {
  code: number
}

export interface VerifyOtpDTO extends VerifyOtpCodeProps {
  isUserVerified: boolean
}
