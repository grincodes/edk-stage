"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var LogoutErrors;
(function (LogoutErrors) {
    class UserNotFoundOrDeletedError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `User not found or doesn't exist anymore.`
            });
        }
    }
    LogoutErrors.UserNotFoundOrDeletedError = UserNotFoundOrDeletedError;
})(LogoutErrors = exports.LogoutErrors || (exports.LogoutErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0RXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvbG9nb3V0L0xvZ291dEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsWUFBWSxDQVE1QjtBQVJELFdBQWlCLFlBQVk7SUFDM0IsTUFBYSwwQkFBMkIsU0FBUSxlQUFvQjtRQUNsRTtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDBDQUEwQzthQUNwQyxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksdUNBQTBCLDZCQU10QyxDQUFBO0FBQ0gsQ0FBQyxFQVJnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQVE1QiJ9