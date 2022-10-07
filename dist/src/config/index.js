"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeMailerConfig = exports.authConfig = exports.isProduction = void 0;
const auth_1 = require("./auth");
Object.defineProperty(exports, "authConfig", { enumerable: true, get: function () { return auth_1.authConfig; } });
const nodemailer_1 = require("./nodemailer");
Object.defineProperty(exports, "nodeMailerConfig", { enumerable: true, get: function () { return nodemailer_1.nodeMailerConfig; } });
const isProduction = process.env.IS_PRODUCTION === "true";
exports.isProduction = isProduction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFtQztBQU1aLDJGQU5kLGlCQUFVLE9BTWM7QUFKakMsNkNBQStDO0FBSVosaUdBSjFCLDZCQUFnQixPQUkwQjtBQUZuRCxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsS0FBSyxNQUFNLENBQUE7QUFFaEQsb0NBQVkifQ==