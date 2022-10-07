import { shopRepo } from "../../repos"
import { GetAllShopsController } from "./getAllShopController"
import { GetAllShopsUseCase } from "./getAllShopsUseCase"

const getAllShopsUseCase = new GetAllShopsUseCase(shopRepo)
const getAllShopsController = new GetAllShopsController(getAllShopsUseCase)

export { getAllShopsUseCase, getAllShopsController }
