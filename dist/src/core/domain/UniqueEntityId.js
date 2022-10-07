"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueEntityID = void 0;
const uuid_1 = require("uuid");
const Identifier_1 = require("./Identifier");
class UniqueEntityID extends Identifier_1.Identifier {
    static isValidId(id) {
        return (0, uuid_1.validate)(id);
    }
    constructor(id) {
        super(id ? id : (0, uuid_1.v4)());
    }
}
exports.UniqueEntityID = UniqueEntityID;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlRW50aXR5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9kb21haW4vVW5pcXVlRW50aXR5SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQTJEO0FBQzNELDZDQUF5QztBQUV6QyxNQUFhLGNBQWUsU0FBUSx1QkFBMkI7SUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFVO1FBQ2hDLE9BQU8sSUFBQSxlQUFZLEVBQUMsRUFBRSxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUNELFlBQVksRUFBb0I7UUFDOUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFBLFNBQUksR0FBRSxDQUFDLENBQUE7SUFDekIsQ0FBQztDQUNGO0FBUEQsd0NBT0MifQ==