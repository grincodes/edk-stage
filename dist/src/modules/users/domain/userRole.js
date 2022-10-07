"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = exports.RolesType = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
var RolesType;
(function (RolesType) {
    RolesType["SHOPPER"] = "SHOPPER";
    RolesType["BUSINESS"] = "BUSINESS";
    RolesType["MERCHANT"] = "MERCHANT";
    RolesType["SUBUSER"] = "SUBUSER";
})(RolesType = exports.RolesType || (exports.RolesType = {}));
class UserRole extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static isOfTypeRole(roleInput) {
        return roleInput.toUpperCase() in RolesType;
    }
    static create(role) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(role, "role");
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        if (!this.isOfTypeRole(role)) {
            return Result_1.Result.fail("Invalid user role");
        }
        return Result_1.Result.ok(new UserRole({
            value: role,
        }));
    }
}
exports.UserRole = UserRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9kb21haW4vdXNlclJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQThEO0FBQzlELHFEQUFpRDtBQUNqRCx1REFBbUQ7QUFFbkQsSUFBWSxTQUtYO0FBTEQsV0FBWSxTQUFTO0lBQ25CLGdDQUFxQixDQUFBO0lBQ3JCLGtDQUF1QixDQUFBO0lBQ3ZCLGtDQUF1QixDQUFBO0lBQ3ZCLGdDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFMVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUtwQjtBQU1ELE1BQWEsUUFBUyxTQUFRLHlCQUEyQjtJQUN2RCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFvQixLQUFxQjtRQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFpQjtRQUMzQyxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxTQUFTLENBQUE7SUFDN0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUMvQixNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRTlELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDbEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQVcsbUJBQW1CLENBQUMsQ0FBQTtTQUNsRDtRQUNELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FDZCxJQUFJLFFBQVEsQ0FBQztZQUNYLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUNILENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUE1QkQsNEJBNEJDIn0=