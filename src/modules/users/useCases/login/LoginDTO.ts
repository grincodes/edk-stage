import { JWTToken, RefreshToken } from "../../domain/jwt"

export interface LoginDTO {
  email: string
  password: string
  auth_role?
}

export interface LoginDTOResponse {
  accessToken: JWTToken
  refreshToken: RefreshToken
}
