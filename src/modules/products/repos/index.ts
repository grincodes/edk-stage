import models from "../../../infra/sequelize/models"
import { Product360VideoRepo } from "./product360VideoRepo"
import { ProductAttributeRepo } from "./productAttributeRepo"
import { ProductAttributeValueRepo } from "./productAttributeValueRepo"
import { ProductBrandRepo } from "./productBrandRepo"
import { ProductCategoryRepo } from "./productCategoryRepo"
import { ProductImageRepo } from "./productImageRepo"
import { ProductInventoryRepo } from "./productInventoryRepo"
import { ProductRepo } from "./productRepo"
import { ProductStockRepo } from "./productStockRepo"
import { ProductSubCategoryRepo } from "./productSubCategoryRepo"
import { ProductTypeRepo } from "./productTypeRepo"
import { TagProductAttributeValueRepo } from "./tagProductAtrtibuteValueRepo"
import { TagProductCategoryRepo } from "./tagProductCategoryRepo"

const productCategoryRepo = new ProductCategoryRepo(models)
const productSubCategoryRepo = new ProductSubCategoryRepo(models)
const productBrandRepo = new ProductBrandRepo(models)
const productTypeRepo = new ProductTypeRepo(models)
const productAttributeRepo = new ProductAttributeRepo(models)
const productAttributeValueRepo = new ProductAttributeValueRepo(models)
const productRepo = new ProductRepo(models)
const productInventoryRepo = new ProductInventoryRepo(models)
const productImageRepo = new ProductImageRepo(models)
const product360VideoRepo = new Product360VideoRepo(models)
const tagProductAttributeValueRepo = new TagProductAttributeValueRepo(models)
const tagProductCategoryRepo = new TagProductCategoryRepo(models)
const productStockRepo = new ProductStockRepo(models)

export {
  productCategoryRepo,
  productSubCategoryRepo,
  productBrandRepo,
  productTypeRepo,
  productAttributeRepo,
  productAttributeValueRepo,
  productRepo,
  productInventoryRepo,
  productImageRepo,
  product360VideoRepo,
  tagProductAttributeValueRepo,
  tagProductCategoryRepo,
  productStockRepo,
}
