"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopByIdController = exports.getShopByIdUseCase = void 0;
const repos_1 = require("../../repos");
const getShopByIdController_1 = require("./getShopByIdController");
const getShopByIdUseCase_1 = require("./getShopByIdUseCase");
const getShopByIdUseCase = new getShopByIdUseCase_1.GetShopByIdUseCase(repos_1.shopRepo);
exports.getShopByIdUseCase = getShopByIdUseCase;
const getShopByIdController = new getShopByIdController_1.GetShopByIdController(getShopByIdUseCase);
exports.getShopByIdController = getShopByIdController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2dldFNob3BCeUlkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUF1QztBQUN2QyxtRUFBZ0U7QUFDaEUsNkRBQTBEO0FBRTFELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxnQkFBUSxDQUFDLENBQUM7QUFHbkQsZ0RBQWtCO0FBRjNCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSw2Q0FBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRS9DLHNEQUFxQiJ9