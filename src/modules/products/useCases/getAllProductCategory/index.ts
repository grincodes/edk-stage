import { productCategoryRepo } from "../../repos"
import { GetAllProductCategoryController } from "./getAllProductCategoryController"
import { GetAllProductCategoryUseCase } from "./getAllProductCategoryUsecase"

const getAllProductCategoryUseCase = new GetAllProductCategoryUseCase(productCategoryRepo)
const getAllProductCategoryController = new GetAllProductCategoryController(getAllProductCategoryUseCase)

export { getAllProductCategoryUseCase, getAllProductCategoryController }
