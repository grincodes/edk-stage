"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assignUserRole_1 = require("../useCases/assignUserRole");
//import { sendVerficationMail } from "../useCases/sendVerificationEmail"
const AfterUserCreated_1 = require("./AfterUserCreated");
// Subscribers
// new AfterUserCreated(assignUserRole, sendVerficationMail)
new AfterUserCreated_1.AfterUserCreated(assignUserRole_1.assignUserRole);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9zdWJzY3JpYmVycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUEyRDtBQUMzRCx5RUFBeUU7QUFDekUseURBQXFEO0FBRXJELGNBQWM7QUFDZCw0REFBNEQ7QUFDNUQsSUFBSSxtQ0FBZ0IsQ0FBQywrQkFBYyxDQUFDLENBQUEifQ==