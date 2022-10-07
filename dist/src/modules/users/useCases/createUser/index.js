"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = exports.createUserUseCase = void 0;
const CreateUserController_1 = require("./CreateUserController");
const CreateUserUseCase_1 = require("./CreateUserUseCase");
const repos_1 = require("../../repos");
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(repos_1.userRepo);
exports.createUserUseCase = createUserUseCase;
const createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9jcmVhdGVVc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlFQUE2RDtBQUM3RCwyREFBdUQ7QUFDdkQsdUNBQXNDO0FBRXRDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxnQkFBUSxDQUFDLENBQUE7QUFHaEQsOENBQWlCO0FBRjFCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVDLG9EQUFvQiJ9