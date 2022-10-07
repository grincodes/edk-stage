import { productCategoryRepo } from "../../repos"
import { CreateProductCategoryController } from "./createProductCategoryController"
import { CreateProductCategoryUseCase } from "./createProductCategoryUseCase"

const createProductCategoryUseCase = new CreateProductCategoryUseCase(productCategoryRepo)
const createProductCategoryController = new CreateProductCategoryController(createProductCategoryUseCase)

export { createProductCategoryUseCase, createProductCategoryController }
