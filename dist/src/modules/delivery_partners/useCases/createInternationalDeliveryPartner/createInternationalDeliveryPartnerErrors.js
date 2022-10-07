"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInternationalDeliveryPartnerErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateInternationalDeliveryPartnerErrors;
(function (CreateInternationalDeliveryPartnerErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateInternationalDeliveryPartnerErrors.GuardError = GuardError;
    class InternationalDeliveryPartnerAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The  international delivery partner ${name}  already exists`
            });
        }
    }
    CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists = InternationalDeliveryPartnerAlreadyExists;
})(CreateInternationalDeliveryPartnerErrors = exports.CreateInternationalDeliveryPartnerErrors || (exports.CreateInternationalDeliveryPartnerErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lckVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RlbGl2ZXJ5X3BhcnRuZXJzL3VzZUNhc2VzL2NyZWF0ZUludGVybmF0aW9uYWxEZWxpdmVyeVBhcnRuZXIvY3JlYXRlSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lckVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsd0NBQXdDLENBZ0J4RDtBQWhCRCxXQUFpQix3Q0FBd0M7SUFDdkQsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLG1EQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLHlDQUEwQyxTQUFRLGVBQW9CO1FBQ2pGLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSx1Q0FBdUMsSUFBSSxrQkFBa0I7YUFDdkQsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGtGQUF5Qyw0Q0FNckQsQ0FBQTtBQUNILENBQUMsRUFoQmdCLHdDQUF3QyxHQUF4QyxnREFBd0MsS0FBeEMsZ0RBQXdDLFFBZ0J4RCJ9