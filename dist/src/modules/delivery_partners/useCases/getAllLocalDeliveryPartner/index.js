"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLocalDeliveryPartnerController = exports.getAllLocalDeliveryPartnerUseCase = void 0;
const repos_1 = require("../../repos");
const getAllLocalDeliveryPartnerController_1 = require("./getAllLocalDeliveryPartnerController");
const getAllLocalDeliveryPartnerUseCase_1 = require("./getAllLocalDeliveryPartnerUseCase");
const getAllLocalDeliveryPartnerUseCase = new getAllLocalDeliveryPartnerUseCase_1.GetAllLocalDeliveryPartnerUseCase(repos_1.localDeliveryPartnerRepo);
exports.getAllLocalDeliveryPartnerUseCase = getAllLocalDeliveryPartnerUseCase;
const getAllLocalDeliveryPartnerController = new getAllLocalDeliveryPartnerController_1.GetAllLocalDeliveryPartnerController(getAllLocalDeliveryPartnerUseCase);
exports.getAllLocalDeliveryPartnerController = getAllLocalDeliveryPartnerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9nZXRBbGxMb2NhbERlbGl2ZXJ5UGFydG5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBc0Q7QUFDdEQsaUdBQTZGO0FBQzdGLDJGQUF1RjtBQUV2RixNQUFNLGlDQUFpQyxHQUFHLElBQUkscUVBQWlDLENBQUMsZ0NBQXdCLENBQUMsQ0FBQTtBQUdoRyw4RUFBaUM7QUFGMUMsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLDJFQUFvQyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7QUFFNUUsb0ZBQW9DIn0=