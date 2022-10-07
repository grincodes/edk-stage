"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShopController = exports.createShopUseCase = void 0;
const repos_1 = require("../../repos");
const createShopController_1 = require("./createShopController");
const createShopUseCase_1 = require("./createShopUseCase");
const createShopUseCase = new createShopUseCase_1.CreateShopUseCase(repos_1.shopRepo, repos_1.shopLocationRepo);
exports.createShopUseCase = createShopUseCase;
const createShopController = new createShopController_1.CreateShopController(createShopUseCase);
exports.createShopController = createShopController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2NyZWF0ZVNob3AvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlEO0FBQ3pELGlFQUE4RDtBQUM5RCwyREFBd0Q7QUFFeEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLGdCQUFRLEVBQUUsd0JBQWdCLENBQUMsQ0FBQztBQUduRSw4Q0FBaUI7QUFGMUIsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFN0Msb0RBQW9CIn0=