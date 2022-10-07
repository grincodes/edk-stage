import { product360VideoRepo, productImageRepo, productInventoryRepo, productRepo, productStockRepo, tagProductAttributeValueRepo } from "../../repos"
import { CreateProductController } from "./createProductController"
import { CreateProductUseCase } from "./createProductUseCase"

const createProductUseCase = new CreateProductUseCase(productRepo, productInventoryRepo, productImageRepo, product360VideoRepo, tagProductAttributeValueRepo, productStockRepo)

const createProductController = new CreateProductController(createProductUseCase)

export { createProductUseCase, createProductController }
