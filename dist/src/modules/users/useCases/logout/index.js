"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = exports.logoutUseCase = void 0;
const LogoutUseCase_1 = require("./LogoutUseCase");
const repos_1 = require("../../repos");
const services_1 = require("../../services");
const LogoutController_1 = require("./LogoutController");
const logoutUseCase = new LogoutUseCase_1.LogoutUseCase(repos_1.userRepo, services_1.authService);
exports.logoutUseCase = logoutUseCase;
const logoutController = new LogoutController_1.LogoutController(logoutUseCase);
exports.logoutController = logoutController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9sb2dvdXQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbURBQStDO0FBQy9DLHVDQUFzQztBQUN0Qyw2Q0FBNEM7QUFDNUMseURBQXFEO0FBRXJELE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxnQkFBUSxFQUFFLHNCQUFXLENBQUMsQ0FBQTtBQUdyRCxzQ0FBYTtBQUZ0QixNQUFNLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLENBQUMsYUFBYSxDQUFDLENBQUE7QUFFcEMsNENBQWdCIn0=