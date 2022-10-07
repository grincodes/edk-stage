import { RedisAuthService } from "./redis/redisAuthService"
import { redisConnection } from "./redis/redisConnection"
import { RedisOtpCodeService } from "./redis/redisOtpService"

const authService = new RedisAuthService(redisConnection)
const redisOtpService = new RedisOtpCodeService(redisConnection)

export { authService, redisOtpService }
