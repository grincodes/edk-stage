"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.internationalDeliveryPartnerRepo = exports.localDeliveryPartnerRepo = void 0;
const models_1 = __importDefault(require("../../../infra/sequelize/models"));
const internationalDeliveryPartnerRepo_1 = require("./internationalDeliveryPartnerRepo");
const localDeliveryPartnerRepo_1 = require("./localDeliveryPartnerRepo");
const localDeliveryPartnerRepo = new localDeliveryPartnerRepo_1.LocalDeliveryPartnerRepo(models_1.default);
exports.localDeliveryPartnerRepo = localDeliveryPartnerRepo;
const internationalDeliveryPartnerRepo = new internationalDeliveryPartnerRepo_1.InternationalDeliveryPartnerRepo(models_1.default);
exports.internationalDeliveryPartnerRepo = internationalDeliveryPartnerRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy9yZXBvcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBb0Q7QUFDcEQseUZBQXFGO0FBQ3JGLHlFQUFxRTtBQUVyRSxNQUFNLHdCQUF3QixHQUFHLElBQUksbURBQXdCLENBQUMsZ0JBQU0sQ0FBQyxDQUFBO0FBRzVELDREQUF3QjtBQUZqQyxNQUFNLGdDQUFnQyxHQUFHLElBQUksbUVBQWdDLENBQUMsZ0JBQU0sQ0FBQyxDQUFBO0FBRWxELDRFQUFnQyJ9