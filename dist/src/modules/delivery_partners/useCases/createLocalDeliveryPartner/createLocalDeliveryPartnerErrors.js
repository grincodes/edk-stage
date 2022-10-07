"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocalDeliveryPartnerErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateLocalDeliveryPartnerErrors;
(function (CreateLocalDeliveryPartnerErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateLocalDeliveryPartnerErrors.GuardError = GuardError;
    class LocalDeliveryPartnerAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The local delivery partner ${name}  already exists`
            });
        }
    }
    CreateLocalDeliveryPartnerErrors.LocalDeliveryPartnerAlreadyExists = LocalDeliveryPartnerAlreadyExists;
})(CreateLocalDeliveryPartnerErrors = exports.CreateLocalDeliveryPartnerErrors || (exports.CreateLocalDeliveryPartnerErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTG9jYWxEZWxpdmVyeVBhcnRuZXJFcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9jcmVhdGVMb2NhbERlbGl2ZXJ5UGFydG5lci9jcmVhdGVMb2NhbERlbGl2ZXJ5UGFydG5lckVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsZ0NBQWdDLENBZ0JoRDtBQWhCRCxXQUFpQixnQ0FBZ0M7SUFDL0MsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDJDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLGlDQUFrQyxTQUFRLGVBQW9CO1FBQ3pFLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw4QkFBOEIsSUFBSSxrQkFBa0I7YUFDOUMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGtFQUFpQyxvQ0FNN0MsQ0FBQTtBQUNILENBQUMsRUFoQmdCLGdDQUFnQyxHQUFoQyx3Q0FBZ0MsS0FBaEMsd0NBQWdDLFFBZ0JoRCJ9