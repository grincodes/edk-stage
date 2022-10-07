"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductByShopIdController = exports.getAllProductByShopIdUseCase = void 0;
const repos_1 = require("../../repos");
const getAllProductByShopIdController_1 = require("./getAllProductByShopIdController");
const getAllProductByShopIdUseCase_1 = require("./getAllProductByShopIdUseCase");
const getAllProductByShopIdUseCase = new getAllProductByShopIdUseCase_1.GetAllProductByShopIdUseCase(repos_1.productRepo);
exports.getAllProductByShopIdUseCase = getAllProductByShopIdUseCase;
const getAllProductByShopIdController = new getAllProductByShopIdController_1.GetAllProductByShopIdController(getAllProductByShopIdUseCase);
exports.getAllProductByShopIdController = getAllProductByShopIdController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9nZXRBbGxQcm9kdWN0QnlTaG9wSWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlDO0FBQ3pDLHVGQUFtRjtBQUNuRixpRkFBNkU7QUFFN0UsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLDJEQUE0QixDQUFDLG1CQUFXLENBQUMsQ0FBQTtBQUd6RSxvRUFBNEI7QUFGckMsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLGlFQUErQixDQUFDLDRCQUE0QixDQUFDLENBQUE7QUFFbEUsMEVBQStCIn0=