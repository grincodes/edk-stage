import { authService } from "../../services"
import { userRepo } from "../../repos"
import { LoginUserUseCase } from "./LoginUseCase"
import { LoginController } from "./loginController"

const loginUseCase = new LoginUserUseCase(userRepo, authService)
const loginController = new LoginController(loginUseCase)

export { loginController, loginUseCase }
