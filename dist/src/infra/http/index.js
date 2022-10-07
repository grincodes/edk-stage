"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const services_1 = require("../../modules/users/services");
const Middleware_1 = require("./utils/Middleware");
const middleware = new Middleware_1.Middleware(services_1.authService);
exports.middleware = middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvaHR0cC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMEQ7QUFDMUQsbURBQStDO0FBRS9DLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxzQkFBVyxDQUFDLENBQUE7QUFFckMsZ0NBQVUifQ==