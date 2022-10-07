import { GetUserByEmailUseCase } from "./GetUserByEmailUseCase"
import { GetUserByEmailController } from "./GetUserByEmailController"
import { userRepo } from "../../repos"

const getUserByEmailUseCase = new GetUserByEmailUseCase(userRepo)

const getUserByEmailController = new GetUserByEmailController(getUserByEmailUseCase)

export { getUserByEmailUseCase, getUserByEmailController }
