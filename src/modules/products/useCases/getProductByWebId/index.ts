import { productRepo } from "../../repos"
import { GetProductByWebIdController } from "./getProductByWebIdController"

import { GetProductByWebIdUseCase } from "./getProductByWebIdUseCase"

const getProductByWebIdUseCase = new GetProductByWebIdUseCase(productRepo)
const getProductByWebIdController = new GetProductByWebIdController(getProductByWebIdUseCase)

export { getProductByWebIdUseCase, getProductByWebIdController }
