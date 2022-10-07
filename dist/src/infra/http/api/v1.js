"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../../modules/delivery_partners/infra/http/routes");
const routes_2 = require("../../../modules/products/infra/http/routes");
const routes_3 = require("../../../modules/shop/infra/http/routes");
const routes_4 = require("../../../modules/users/infra/http/routes");
const v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.get("/", (req, res) => {
    return res.json({ message: "Yo! we're up" });
});
v1Router.use("/user", routes_4.userRouter);
v1Router.use("/shop", routes_3.shopRouter);
v1Router.use("/product", routes_2.productRouter);
v1Router.use("/delivery_partner", routes_1.deliveryPartnerRouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvaHR0cC9hcGkvdjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLGlGQUE0RjtBQUM1Rix3RUFBMkU7QUFDM0Usb0VBQW9FO0FBQ3BFLHFFQUFxRTtBQUVyRSxNQUFNLFFBQVEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBV3hCLDRCQUFRO0FBVGpCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsbUJBQVUsQ0FBQyxDQUFBO0FBQ2pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLG1CQUFVLENBQUMsQ0FBQTtBQUNqQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxzQkFBYSxDQUFDLENBQUE7QUFDdkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSw4QkFBcUIsQ0FBQyxDQUFBIn0=