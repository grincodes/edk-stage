"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopByIdErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var GetShopByIdErrors;
(function (GetShopByIdErrors) {
    class ShopDoesNotExistError extends Result_1.Result {
        constructor(shopId) {
            super(false, {
                message: `Shop with id ${shopId} not found`
            });
        }
    }
    GetShopByIdErrors.ShopDoesNotExistError = ShopDoesNotExistError;
})(GetShopByIdErrors = exports.GetShopByIdErrors || (exports.GetShopByIdErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2hvcEJ5SWRFcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2dldFNob3BCeUlkL2dldFNob3BCeUlkRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUF1RDtBQUV2RCxJQUFpQixpQkFBaUIsQ0FRakM7QUFSRCxXQUFpQixpQkFBaUI7SUFDaEMsTUFBYSxxQkFBc0IsU0FBUSxlQUFvQjtRQUM3RCxZQUFZLE1BQWM7WUFDeEIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0JBQWdCLE1BQU0sWUFBWTthQUM1QixDQUFDLENBQUM7UUFDckIsQ0FBQztLQUNGO0lBTlksdUNBQXFCLHdCQU1qQyxDQUFBO0FBQ0gsQ0FBQyxFQVJnQixpQkFBaUIsR0FBakIseUJBQWlCLEtBQWpCLHlCQUFpQixRQVFqQyJ9