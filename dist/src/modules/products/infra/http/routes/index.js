"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("../../../../../infra/http");
const createProduct_1 = require("../../../useCases/createProduct");
const createProductAttribute_1 = require("../../../useCases/createProductAttribute");
const createProductAttributeValue_1 = require("../../../useCases/createProductAttributeValue");
const createProductBrand_1 = require("../../../useCases/createProductBrand");
const createProductCategory_1 = require("../../../useCases/createProductCategory");
const createProductType_1 = require("../../../useCases/createProductType");
const getAllProductAttribute_1 = require("../../../useCases/getAllProductAttribute");
const getAllProductBrand_1 = require("../../../useCases/getAllProductBrand");
const getAllProductByShopId_1 = require("../../../useCases/getAllProductByShopId");
const getAllProductCategory_1 = require("../../../useCases/getAllProductCategory");
const getAllProductType_1 = require("../../../useCases/getAllProductType");
const getProductByWebId_1 = require("../../../useCases/getProductByWebId");
const productRouter = express_1.default.Router();
exports.productRouter = productRouter;
// Product
productRouter.post("/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProduct_1.createProductController.execute(req, res);
});
productRouter.get("/:shopId", (req, res) => {
    getAllProductByShopId_1.getAllProductByShopIdController.execute(req, res);
});
productRouter.get("/:shopId/:productWebId", (req, res) => {
    getProductByWebId_1.getProductByWebIdController.execute(req, res);
});
// Product Category
productRouter.post("/category/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductCategory_1.createProductCategoryController.execute(req, res, req.decoded);
});
productRouter.get("/category/", (req, res) => {
    getAllProductCategory_1.getAllProductCategoryController.execute(req, res);
});
// Product SubCategory
productRouter.post("/subcategory/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductCategory_1.createProductCategoryController.execute(req, res, req.decoded);
});
// ProductBrand
productRouter.post("/brand/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductBrand_1.createProductBrandController.execute(req, res, req.decoded);
});
productRouter.get("/brand/", (req, res) => getAllProductBrand_1.getAllProductBrandController.execute(req, res));
// Product Type
productRouter.post("/type/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductType_1.createProductTypeController.execute(req, res, req.decoded);
});
productRouter.get("/type/", (req, res) => getAllProductType_1.getAllProductTypeController.execute(req, res));
// Product Attribute
productRouter.post("/attribute/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductAttribute_1.createProductAttributeController.execute(req, res, req.decoded);
});
productRouter.get("/attribute/", (req, res) => getAllProductAttribute_1.getAllProductAttributeController.execute(req, res));
// Product Attribute Value
productRouter.post("/attribute/value", http_1.middleware.ensureAuthenticated(), (req, res) => {
    createProductAttributeValue_1.createProductAttributeValueController.execute(req, res, req.decoded);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9pbmZyYS9odHRwL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBNkI7QUFDN0Isb0RBQXNEO0FBQ3RELG1FQUF5RTtBQUN6RSxxRkFBMkY7QUFDM0YsK0ZBQXFHO0FBQ3JHLDZFQUFtRjtBQUNuRixtRkFBeUY7QUFDekYsMkVBQWlGO0FBQ2pGLHFGQUEyRjtBQUMzRiw2RUFBbUY7QUFDbkYsbUZBQXlGO0FBQ3pGLG1GQUF5RjtBQUN6RiwyRUFBaUY7QUFDakYsMkVBQWlGO0FBRWpGLE1BQU0sYUFBYSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUF5RDdCLHNDQUFhO0FBdkR0QixVQUFVO0FBQ1YsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3JFLHVDQUF1QixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFDLENBQUE7QUFFRixhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6Qyx1REFBK0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQyxDQUFBO0FBRUYsYUFBYSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN2RCwrQ0FBMkIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQy9DLENBQUMsQ0FBQyxDQUFBO0FBRUYsbUJBQW1CO0FBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFB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