"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductController = exports.createProductUseCase = void 0;
const repos_1 = require("../../repos");
const createProductController_1 = require("./createProductController");
const createProductUseCase_1 = require("./createProductUseCase");
const createProductUseCase = new createProductUseCase_1.CreateProductUseCase(repos_1.productRepo, repos_1.productInventoryRepo, repos_1.productImageRepo, repos_1.product360VideoRepo, repos_1.tagProductAttributeValueRepo, repos_1.productStockRepo);
exports.createProductUseCase = createProductUseCase;
const createProductController = new createProductController_1.CreateProductController(createProductUseCase);
exports.createProductController = createProductController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFzSjtBQUN0Six1RUFBbUU7QUFDbkUsaUVBQTZEO0FBRTdELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxtQkFBVyxFQUFFLDRCQUFvQixFQUFFLHdCQUFnQixFQUFFLDJCQUFtQixFQUFFLG9DQUE0QixFQUFFLHdCQUFnQixDQUFDLENBQUE7QUFJdEssb0RBQW9CO0FBRjdCLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO0FBRWxELDBEQUF1QiJ9