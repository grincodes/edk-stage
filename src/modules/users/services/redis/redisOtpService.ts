import { RedisClientType } from "redis"
import * as jwt from "jsonwebtoken"
import * as uuid from "uuid"
import randtoken from "rand-token"
import { authConfig } from "../../../../config"
import { AbstractRedisClient } from "./abstractRedisClient"
import { IAuthService } from "../authService"
import { RefreshToken, JWTToken, JWTClaims } from "../../domain/jwt"
import { User } from "../../domain/user"
import { UserRole } from "../../domain/userRole"
import { IOtpService } from "../otpService"
import { CodeType, OtpCodeProps, VerifyOtpCodeProps } from "../../domain/otpCode"

/**
 * @class OTPCODEClient
 * @extends AbstractRedisClient
 * @desc This class is responsible for persisting otps to redis
 * and for signing tokens. It should also be responsible for determining their
 * validity.
 */

export class RedisOtpCodeService extends AbstractRedisClient implements IOtpService {
  public HashName = "activeOtpCode"

  constructor(redisClient: RedisClientType) {
    super(redisClient)
  }

  public async verifyUserOtp(code: VerifyOtpCodeProps): Promise<string> {
    const codeRes = await this.getCode(code)

    return codeRes
  }

  public async saveOtpCode(codeProps: OtpCodeProps): Promise<any> {
    if (codeProps.codeExpiryMinutes) {
      this.setTokenExpiryTime(codeProps.codeExpiryMinutes)
    }

    return this.set(
      this.constructKey({
        code: codeProps.code,
        codeType: codeProps.codeType,
        userId: codeProps.userId,
      }),
      codeProps.code,
    )
  }

  private constructKey(otp: VerifyOtpCodeProps): string {
    return `code-.${otp.code}.${otp.codeType}.${this.HashName}.${otp.userId}`
  }

  public async clearAllCodes(): Promise<any> {
    const allKeys = await this.getAllKeys(`*${this.HashName}*`)
    return Promise.all(allKeys.map((key) => this.deleteOne(key)))
  }

  public async getCodes(userId: string): Promise<string[]> {
    const keyValues = await this.getAllKeyValue(`*${this.HashName}.${userId}`)
    return keyValues.map((kv) => kv.value)
  }

  public async getCode(otp: VerifyOtpCodeProps): Promise<string> {
    return this.getOne(this.constructKey(otp))
  }

  public async clearCode(otp: VerifyOtpCodeProps): Promise<any> {
    return this.deleteOne(this.constructKey(otp))
  }
}
