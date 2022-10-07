import { createShopLocationUseCase } from "../useCases/createShopLocation"
import { CreateShopLocationUseCase } from "../useCases/createShopLocation/CreateShopLocationUseCase"

import { AfterShopCreated } from "./AfterShopCreated"

// Subscribers
new AfterShopCreated(createShopLocationUseCase)
