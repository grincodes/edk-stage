import { CreateShopLocationUseCase } from "./CreateShopLocationUseCase"
import { shopLocationRepo } from "../../repos"

const createShopLocationUseCase = new CreateShopLocationUseCase(shopLocationRepo)

export { createShopLocationUseCase }
