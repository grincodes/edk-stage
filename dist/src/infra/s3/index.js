"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const s3 = new aws_sdk_1.default.S3({
    signatureVersion: "v4"
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW5mcmEvczMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBeUI7QUFHekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxpQkFBRyxDQUFDLEVBQUUsQ0FBQztJQUNwQixnQkFBZ0IsRUFBRSxJQUFJO0NBQ3ZCLENBQUMsQ0FBQSJ9