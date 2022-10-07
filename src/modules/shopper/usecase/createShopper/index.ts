import { shopperAddressRepo, shopperRepo } from "../../repos"
import { CreateShopperController } from "./createShopperController"
import { CreateShopperUseCase } from "./createShopperUseCase"

const createShopperUseCase = new CreateShopperUseCase(shopperRepo, shopperAddressRepo)

const createShopperController = new CreateShopperController(createShopperUseCase)

export { createShopperUseCase, createShopperController }
