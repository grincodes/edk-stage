import { productBrandRepo } from "../../repos"
import { GetAllProductBrandController } from "./getAllProductBrandController"
import { GetAllProductBrandUseCase } from "./getAllProductBrandsUseCase"

const getAllProductBrandUseCase = new GetAllProductBrandUseCase(productBrandRepo)
const getAllProductBrandController = new GetAllProductBrandController(getAllProductBrandUseCase)

export { getAllProductBrandUseCase, getAllProductBrandController }
