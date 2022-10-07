"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllShopErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var GetAllShopErrors;
(function (GetAllShopErrors) {
    class InvalidQueryPassed extends Result_1.Result {
        constructor() {
            super(false, {
                message: `expects query params of page and size`
            });
        }
    }
    GetAllShopErrors.InvalidQueryPassed = InvalidQueryPassed;
})(GetAllShopErrors = exports.GetAllShopErrors || (exports.GetAllShopErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU2hvcHNFcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2dldEFsbFNob3BzL2dldEFsbFNob3BzRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUF1RDtBQUV2RCxJQUFpQixnQkFBZ0IsQ0FRaEM7QUFSRCxXQUFpQixnQkFBZ0I7SUFDL0IsTUFBYSxrQkFBbUIsU0FBUSxlQUFvQjtRQUMxRDtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHVDQUF1QzthQUNqQyxDQUFDLENBQUM7UUFDckIsQ0FBQztLQUNGO0lBTlksbUNBQWtCLHFCQU05QixDQUFBO0FBQ0gsQ0FBQyxFQVJnQixnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQVFoQyJ9