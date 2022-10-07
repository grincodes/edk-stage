"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOtpController = exports.verifyOtpUseCase = void 0;
const repos_1 = require("../../repos");
const services_1 = require("../../services");
const verifyOtpController_1 = require("./verifyOtpController");
const verifyOtpUseCase_1 = require("./verifyOtpUseCase");
const verifyOtpUseCase = new verifyOtpUseCase_1.VerifyOtpUseCase(services_1.redisOtpService, repos_1.userRepo);
exports.verifyOtpUseCase = verifyOtpUseCase;
const verifyOtpController = new verifyOtpController_1.VerifyOtpController(verifyOtpUseCase);
exports.verifyOtpController = verifyOtpController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy92ZXJpZnlPdHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXNDO0FBQ3RDLDZDQUFnRDtBQUNoRCwrREFBMkQ7QUFDM0QseURBQXFEO0FBRXJELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQywwQkFBZSxFQUFFLGdCQUFRLENBQUMsQ0FBQTtBQUcvRCw0Q0FBZ0I7QUFGekIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLHlDQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUE7QUFFMUMsa0RBQW1CIn0=