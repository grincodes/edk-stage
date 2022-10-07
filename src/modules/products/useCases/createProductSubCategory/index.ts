import { productSubCategoryRepo } from "../../repos"
import { CreateProductSubCategoryController } from "./createProductSubCategoryController"
import { CreateProductSubCategoryUseCase } from "./createProductSubCategoryUseCase"

const createProductSubCategoryUseCase = new CreateProductSubCategoryUseCase(productSubCategoryRepo)
const createProductSubCategoryController = new CreateProductSubCategoryController(createProductSubCategoryUseCase)

export { createProductSubCategoryUseCase, createProductSubCategoryController }
