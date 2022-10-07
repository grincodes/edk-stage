import { productTypeRepo } from "../../repos"
import { GetAllProductTypeController } from "./getAllProductTypeController"
import { GetAllProductTypeUseCase } from "./getAllProductTypeUseCase"

const getAllProductTypeUseCase = new GetAllProductTypeUseCase(productTypeRepo)
const getAllProductTypeController = new GetAllProductTypeController(getAllProductTypeUseCase)

export { getAllProductTypeUseCase, getAllProductTypeController }
