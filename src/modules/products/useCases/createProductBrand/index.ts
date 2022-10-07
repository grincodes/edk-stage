import { productBrandRepo } from "../../repos"
import { CreateProductBrandController } from "./createProductBrandController"
import { CreateProductBrandUseCase } from "./createProductBrandUseCase"

const createProductBrandUseCase = new CreateProductBrandUseCase(productBrandRepo)
const createProductBrandController = new CreateProductBrandController(createProductBrandUseCase)

export { createProductBrandUseCase, createProductBrandController }
