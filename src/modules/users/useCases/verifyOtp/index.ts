import { userRepo } from "../../repos"
import { redisOtpService } from "../../services"
import { VerifyOtpController } from "./verifyOtpController"
import { VerifyOtpUseCase } from "./verifyOtpUseCase"

const verifyOtpUseCase = new VerifyOtpUseCase(redisOtpService, userRepo)
const verifyOtpController = new VerifyOtpController(verifyOtpUseCase)

export { verifyOtpUseCase, verifyOtpController }
