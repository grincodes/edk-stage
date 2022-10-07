import express from "express"
import { middleware } from "../../../../../infra/http"
import { createProductController } from "../../../useCases/createProduct"
import { createProductAttributeController } from "../../../useCases/createProductAttribute"
import { createProductAttributeValueController } from "../../../useCases/createProductAttributeValue"
import { createProductBrandController } from "../../../useCases/createProductBrand"
import { createProductCategoryController } from "../../../useCases/createProductCategory"
import { createProductTypeController } from "../../../useCases/createProductType"
import { getAllProductAttributeController } from "../../../useCases/getAllProductAttribute"
import { getAllProductBrandController } from "../../../useCases/getAllProductBrand"
import { getAllProductByShopIdController } from "../../../useCases/getAllProductByShopId"
import { getAllProductCategoryController } from "../../../useCases/getAllProductCategory"
import { getAllProductTypeController } from "../../../useCases/getAllProductType"
import { getProductByWebIdController } from "../../../useCases/getProductByWebId"

const productRouter = express.Router()

// Product
productRouter.post("/", middleware.ensureAuthenticated(), (req, res) => {
  createProductController.execute(req, res)
})

productRouter.get("/:shopId", (req, res) => {
  getAllProductByShopIdController.execute(req, res)
})

productRouter.get("/:shopId/:productWebId", (req, res) => {
  getProductByWebIdController.execute(req, res)
})

// Product Category
productRouter.post("/category/", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductCategoryController.execute(req, res, req.decoded)
})

productRouter.get("/category/", (req, res) => {
  getAllProductCategoryController.execute(req, res)
})

// Product SubCategory

productRouter.post("/subcategory/", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductCategoryController.execute(req, res, req.decoded)
})

// ProductBrand
productRouter.post("/brand/", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductBrandController.execute(req, res, req.decoded)
})

productRouter.get("/brand/", (req, res) => getAllProductBrandController.execute(req, res))

// Product Type

productRouter.post("/type/", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductTypeController.execute(req, res, req.decoded)
})

productRouter.get("/type/", (req, res) => getAllProductTypeController.execute(req, res))

// Product Attribute
productRouter.post("/attribute/", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductAttributeController.execute(req, res, req.decoded)
})

productRouter.get("/attribute/", (req, res) => getAllProductAttributeController.execute(req, res))

// Product Attribute Value
productRouter.post("/attribute/value", middleware.ensureAuthenticated(), (req: any, res) => {
  createProductAttributeValueController.execute(req, res, req.decoded)
})

export { productRouter }
