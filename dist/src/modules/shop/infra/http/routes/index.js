"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRouter = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("../../../../../infra/http");
const createShop_1 = require("../../../useCases/createShop");
const createShopCategory_1 = require("../../../useCases/createShopCategory");
const getAllShopCategory_1 = require("../../../useCases/getAllShopCategory");
const getAllShops_1 = require("../../../useCases/getAllShops");
const getShopById_1 = require("../../../useCases/getShopById");
const shopRouter = express_1.default.Router();
exports.shopRouter = shopRouter;
shopRouter.get("/:shopId", (req, res) => getShopById_1.getShopByIdController.execute(req, res));
shopRouter.post("/", http_1.middleware.ensureAuthenticated(), (req, res) => {
    console.log("MiddleWare", req.decoded);
    createShop_1.createShopController.execute(req, res, req.decoded);
});
shopRouter.get("/", (req, res) => getAllShops_1.getAllShopsController.execute(req, res));
// shop category
shopRouter.get("/category", (req, res) => getAllShopCategory_1.getAllShopCategoryController.execute(req, res));
shopRouter.post("/category", http_1.middleware.ensureAuthenticated(), (req, res) => createShopCategory_1.createShopCategoryController.execute(req, res));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2luZnJhL2h0dHAvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE2QjtBQUM3QixvREFBc0Q7QUFDdEQsNkRBQW1FO0FBQ25FLDZFQUFtRjtBQUNuRiw2RUFBbUY7QUFDbkYsK0RBQXFFO0FBQ3JFLCtEQUFxRTtBQUVyRSxNQUFNLFVBQVUsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBZ0IxQixnQ0FBVTtBQWRuQixVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLG1DQUFxQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVqRixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXRDLGlDQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUVGLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsbUNBQXFCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRTFFLGdCQUFnQjtBQUNoQixVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLGlEQUE0QixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN6RixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxpQkFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxpREFBNEIsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUEifQ==