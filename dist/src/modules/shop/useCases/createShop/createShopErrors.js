"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateShopErrors;
(function (CreateShopErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateShopErrors.GuardError = GuardError;
    class ShopAlreadyExists extends Result_1.Result {
        constructor(email) {
            super(false, {
                message: `The email ${email} associated for this account already exists`
            });
        }
    }
    CreateShopErrors.ShopAlreadyExists = ShopAlreadyExists;
})(CreateShopErrors = exports.CreateShopErrors || (exports.CreateShopErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcEVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvdXNlQ2FzZXMvY3JlYXRlU2hvcC9jcmVhdGVTaG9wRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUFzRDtBQUV0RCxJQUFpQixnQkFBZ0IsQ0FnQmhDO0FBaEJELFdBQWlCLGdCQUFnQjtJQUMvQixNQUFhLFVBQVcsU0FBUSxlQUFvQjtRQUNsRCxZQUFZLEtBQWE7WUFDdkIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUU7YUFDSixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksMkJBQVUsYUFNdEIsQ0FBQTtJQUVELE1BQWEsaUJBQWtCLFNBQVEsZUFBb0I7UUFDekQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGFBQWEsS0FBSyw2Q0FBNkM7YUFDekQsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGtDQUFpQixvQkFNN0IsQ0FBQTtBQUNILENBQUMsRUFoQmdCLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBZ0JoQyJ9