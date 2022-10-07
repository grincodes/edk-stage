import { CodeType } from "../../domain/otpCode"

export interface ResendOtpDTOResponse {
  code: number
  codeType: CodeType
  userId: string
}

export interface ResendOtpDTO {
  userId: string
  isEmailVerified: boolean
  email: string
  roles: string[]
}
