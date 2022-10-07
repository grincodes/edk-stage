"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopperAddressRepo = exports.shopperRepo = void 0;
const models_1 = __importDefault(require("../../../infra/sequelize/models"));
const shopperAddressRepo_1 = require("./shopperAddressRepo");
const shopperRepo_1 = require("./shopperRepo");
const shopperRepo = new shopperRepo_1.ShopperRepo(models_1.default);
exports.shopperRepo = shopperRepo;
const shopperAddressRepo = new shopperAddressRepo_1.ShopperAddressRepo(models_1.default);
exports.shopperAddressRepo = shopperAddressRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL3JlcG9zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDZFQUFvRDtBQUNwRCw2REFBeUQ7QUFDekQsK0NBQTJDO0FBRTNDLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxnQkFBTSxDQUFDLENBQUE7QUFHbEMsa0NBQVc7QUFGcEIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixDQUFDLGdCQUFNLENBQUMsQ0FBQTtBQUVuQyxnREFBa0IifQ==