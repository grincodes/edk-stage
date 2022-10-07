"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllShopsController = exports.getAllShopsUseCase = void 0;
const repos_1 = require("../../repos");
const getAllShopController_1 = require("./getAllShopController");
const getAllShopsUseCase_1 = require("./getAllShopsUseCase");
const getAllShopsUseCase = new getAllShopsUseCase_1.GetAllShopsUseCase(repos_1.shopRepo);
exports.getAllShopsUseCase = getAllShopsUseCase;
const getAllShopsController = new getAllShopController_1.GetAllShopsController(getAllShopsUseCase);
exports.getAllShopsController = getAllShopsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2dldEFsbFNob3BzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFzQztBQUN0QyxpRUFBOEQ7QUFDOUQsNkRBQXlEO0FBRXpELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxnQkFBUSxDQUFDLENBQUE7QUFHbEQsZ0RBQWtCO0FBRjNCLE1BQU0scUJBQXFCLEdBQUcsSUFBSSw0Q0FBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBRTlDLHNEQUFxQiJ9