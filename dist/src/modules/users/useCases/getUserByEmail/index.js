"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmailController = exports.getUserByEmailUseCase = void 0;
const GetUserByEmailUseCase_1 = require("./GetUserByEmailUseCase");
const GetUserByEmailController_1 = require("./GetUserByEmailController");
const repos_1 = require("../../repos");
const getUserByEmailUseCase = new GetUserByEmailUseCase_1.GetUserByEmailUseCase(repos_1.userRepo);
exports.getUserByEmailUseCase = getUserByEmailUseCase;
const getUserByEmailController = new GetUserByEmailController_1.GetUserByEmailController(getUserByEmailUseCase);
exports.getUserByEmailController = getUserByEmailController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9nZXRVc2VyQnlFbWFpbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFBK0Q7QUFDL0QseUVBQXFFO0FBQ3JFLHVDQUFzQztBQUV0QyxNQUFNLHFCQUFxQixHQUFHLElBQUksNkNBQXFCLENBQUMsZ0JBQVEsQ0FBQyxDQUFBO0FBSXhELHNEQUFxQjtBQUY5QixNQUFNLHdCQUF3QixHQUFHLElBQUksbURBQXdCLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUVwRCw0REFBd0IifQ==