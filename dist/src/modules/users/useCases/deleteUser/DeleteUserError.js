"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var DeleteUserErrors;
(function (DeleteUserErrors) {
    class UserNotFoundError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `User not found`
            });
        }
    }
    DeleteUserErrors.UserNotFoundError = UserNotFoundError;
})(DeleteUserErrors = exports.DeleteUserErrors || (exports.DeleteUserErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZXRlVXNlckVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvZGVsZXRlVXNlci9EZWxldGVVc2VyRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQXNEO0FBRXRELElBQWlCLGdCQUFnQixDQVFoQztBQVJELFdBQWlCLGdCQUFnQjtJQUMvQixNQUFhLGlCQUFrQixTQUFRLGVBQW9CO1FBQ3pEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsZ0JBQWdCO2FBQ1YsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGtDQUFpQixvQkFNN0IsQ0FBQTtBQUNILENBQUMsRUFSZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFRaEMifQ==