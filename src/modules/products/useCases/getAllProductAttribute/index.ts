import { productAttributeRepo } from "../../repos"
import { GetAllProductAttributeController } from "./getAllProductAttributeController"
import { GetAllProductAttributeUseCase } from "./getAllProductAttributeUseCase"

const getAllProductAttributeUseCase = new GetAllProductAttributeUseCase(productAttributeRepo)
const getAllProductAttributeController = new GetAllProductAttributeController(getAllProductAttributeUseCase)

export { getAllProductAttributeUseCase, getAllProductAttributeController }
