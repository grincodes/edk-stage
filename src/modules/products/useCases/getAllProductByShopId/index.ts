import { productRepo } from "../../repos"
import { GetAllProductByShopIdController } from "./getAllProductByShopIdController"
import { GetAllProductByShopIdUseCase } from "./getAllProductByShopIdUseCase"

const getAllProductByShopIdUseCase = new GetAllProductByShopIdUseCase(productRepo)
const getAllProductByShopIdController = new GetAllProductByShopIdController(getAllProductByShopIdUseCase)

export { getAllProductByShopIdUseCase, getAllProductByShopIdController }
