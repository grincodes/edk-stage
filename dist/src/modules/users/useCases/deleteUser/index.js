"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.deleteUserUseCase = void 0;
const repos_1 = require("../../repos");
const DeleteUserController_1 = require("./DeleteUserController");
const DeleteUserUseCase_1 = require("./DeleteUserUseCase");
const deleteUserUseCase = new DeleteUserUseCase_1.DeleteUserUseCase(repos_1.userRepo);
exports.deleteUserUseCase = deleteUserUseCase;
const deleteUserController = new DeleteUserController_1.DeleteUserController(deleteUserUseCase);
exports.deleteUserController = deleteUserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9kZWxldGVVc2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFzQztBQUN0QyxpRUFBNkQ7QUFDN0QsMkRBQXVEO0FBRXZELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxnQkFBUSxDQUFDLENBQUE7QUFHaEQsOENBQWlCO0FBRjFCLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRTVDLG9EQUFvQiJ9