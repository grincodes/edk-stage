import models from "../../../infra/sequelize/models"
import { ShopCategoryRepo } from "./shopCategoryRepo"
import { ShopLocationRepo } from "./shopLocationRepo"
import { ShopRepo } from "./shopRepo"

const shopRepo = new ShopRepo(models)
const shopLocationRepo = new ShopLocationRepo(models)
const shopCategoryRepo = new ShopCategoryRepo(models)

export { shopRepo, shopLocationRepo, shopCategoryRepo }
