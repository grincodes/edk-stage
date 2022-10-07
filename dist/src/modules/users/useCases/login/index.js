"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUseCase = exports.loginController = void 0;
const services_1 = require("../../services");
const repos_1 = require("../../repos");
const LoginUseCase_1 = require("./LoginUseCase");
const loginController_1 = require("./loginController");
const loginUseCase = new LoginUseCase_1.LoginUserUseCase(repos_1.userRepo, services_1.authService);
exports.loginUseCase = loginUseCase;
const loginController = new loginController_1.LoginController(loginUseCase);
exports.loginController = loginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBQ3RDLGlEQUFpRDtBQUNqRCx1REFBbUQ7QUFFbkQsTUFBTSxZQUFZLEdBQUcsSUFBSSwrQkFBZ0IsQ0FBQyxnQkFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQTtBQUd0QyxvQ0FBWTtBQUZ0QyxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLENBQUMsWUFBWSxDQUFDLENBQUE7QUFFaEQsMENBQWUifQ==