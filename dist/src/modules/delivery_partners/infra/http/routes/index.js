"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryPartnerRouter = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("../../../../../infra/http");
const createInternationalDeliveryPartner_1 = require("../../../useCases/createInternationalDeliveryPartner");
const createLocalDeliveryPartner_1 = require("../../../useCases/createLocalDeliveryPartner");
const getAllInternationalPartner_1 = require("../../../useCases/getAllInternationalPartner");
const getAllLocalDeliveryPartner_1 = require("../../../useCases/getAllLocalDeliveryPartner");
const deliveryPartnerRouter = express_1.default.Router();
exports.deliveryPartnerRouter = deliveryPartnerRouter;
// LocalDelivery Partners
deliveryPartnerRouter.post('/local/', http_1.middleware.ensureAuthenticated(), (req, res) => {
    createLocalDeliveryPartner_1.createLocalDeliveryPartnerController.execute(req, res, req.decoded);
});
deliveryPartnerRouter.get('/local/', (req, res) => {
    getAllLocalDeliveryPartner_1.getAllLocalDeliveryPartnerController.execute(req, res);
});
//internationalDelivery Partners
deliveryPartnerRouter.post('/international/', http_1.middleware.ensureAuthenticated(), (req, res) => {
    createInternationalDeliveryPartner_1.createInternationalDeliveryPartnerController.execute(req, res, req.decoded);
});
deliveryPartnerRouter.get('/international/', (req, res) => {
    getAllInternationalPartner_1.getAllInternationalDeliveryPartnerController.execute(req, res);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy9pbmZyYS9odHRwL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsb0RBQXVEO0FBQ3ZELDZHQUFvSDtBQUNwSCw2RkFBb0c7QUFDcEcsNkZBQTRHO0FBQzVHLDZGQUFvRztBQUVwRyxNQUFNLHFCQUFxQixHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFvQnRDLHNEQUFxQjtBQWxCOUIseUJBQXlCO0FBQ3pCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3hGLGlFQUFvQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEQsaUVBQW9DLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVILGdDQUFnQztBQUNoQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsaUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ2hHLGlGQUE0QyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5RSxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4RCx5RUFBNEMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pFLENBQUMsQ0FBQyxDQUFDIn0=