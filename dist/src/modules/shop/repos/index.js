"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopCategoryRepo = exports.shopLocationRepo = exports.shopRepo = void 0;
const models_1 = __importDefault(require("../../../infra/sequelize/models"));
const shopCategoryRepo_1 = require("./shopCategoryRepo");
const shopLocationRepo_1 = require("./shopLocationRepo");
const shopRepo_1 = require("./shopRepo");
const shopRepo = new shopRepo_1.ShopRepo(models_1.default);
exports.shopRepo = shopRepo;
const shopLocationRepo = new shopLocationRepo_1.ShopLocationRepo(models_1.default);
exports.shopLocationRepo = shopLocationRepo;
const shopCategoryRepo = new shopCategoryRepo_1.ShopCategoryRepo(models_1.default);
exports.shopCategoryRepo = shopCategoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3JlcG9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFvRDtBQUNwRCx5REFBcUQ7QUFDckQseURBQXFEO0FBQ3JELHlDQUFxQztBQUVyQyxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsZ0JBQU0sQ0FBQyxDQUFBO0FBSTVCLDRCQUFRO0FBSGpCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxnQkFBTSxDQUFDLENBQUE7QUFHbEMsNENBQWdCO0FBRm5DLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxnQkFBTSxDQUFDLENBQUE7QUFFaEIsNENBQWdCIn0=