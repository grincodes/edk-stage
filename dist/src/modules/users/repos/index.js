"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleRepo = exports.userRepo = void 0;
const userRepo_1 = require("./userRepo");
const models_1 = __importDefault(require("../../../infra/sequelize/models"));
const roleRepo_1 = require("./roleRepo");
const userRepo = new userRepo_1.UserRepo(models_1.default);
exports.userRepo = userRepo;
const roleRepo = new roleRepo_1.RoleRepo(models_1.default);
exports.roleRepo = roleRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9yZXBvcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FBcUM7QUFDckMsNkVBQW9EO0FBQ3BELHlDQUFxQztBQUVyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsZ0JBQU0sQ0FBQyxDQUFBO0FBRzVCLDRCQUFRO0FBRmpCLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxnQkFBTSxDQUFDLENBQUE7QUFFbEIsNEJBQVEifQ==