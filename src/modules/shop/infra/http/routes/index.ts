import express from "express"
import { middleware } from "../../../../../infra/http"
import { createShopController } from "../../../useCases/createShop"
import { createShopCategoryController } from "../../../useCases/createShopCategory"
import { getAllShopCategoryController } from "../../../useCases/getAllShopCategory"
import { getAllShopsController } from "../../../useCases/getAllShops"
import { getShopByIdController } from "../../../useCases/getShopById"

const shopRouter = express.Router()

shopRouter.get("/:shopId", (req, res) => getShopByIdController.execute(req, res))

shopRouter.post("/", middleware.ensureAuthenticated(), (req: any, res) => {
  console.log("MiddleWare", req.decoded)

  createShopController.execute(req, res, req.decoded)
})

shopRouter.get("/", (req, res) => getAllShopsController.execute(req, res))

// shop category
shopRouter.get("/category", (req, res) => getAllShopCategoryController.execute(req, res))
shopRouter.post("/category", middleware.ensureAuthenticated(), (req, res) => createShopCategoryController.execute(req, res))

export { shopRouter }
