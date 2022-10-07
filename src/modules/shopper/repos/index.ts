import models from "../../../infra/sequelize/models"
import { ShopperAddressRepo } from "./shopperAddressRepo"
import { ShopperRepo } from "./shopperRepo"

const shopperRepo = new ShopperRepo(models)
const shopperAddressRepo = new ShopperAddressRepo(models)

export { shopperRepo, shopperAddressRepo }
