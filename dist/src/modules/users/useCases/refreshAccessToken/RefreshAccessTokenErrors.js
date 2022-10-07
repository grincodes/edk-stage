"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshAccessTokenErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var RefreshAccessTokenErrors;
(function (RefreshAccessTokenErrors) {
    class RefreshTokenNotFound extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Refresh token doesn't exist`
            });
        }
    }
    RefreshAccessTokenErrors.RefreshTokenNotFound = RefreshTokenNotFound;
    class UserNotFoundOrDeletedError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `User not found or doesn't exist anymore.`
            });
        }
    }
    RefreshAccessTokenErrors.UserNotFoundOrDeletedError = UserNotFoundOrDeletedError;
})(RefreshAccessTokenErrors = exports.RefreshAccessTokenErrors || (exports.RefreshAccessTokenErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmcmVzaEFjY2Vzc1Rva2VuRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvcmVmcmVzaEFjY2Vzc1Rva2VuL1JlZnJlc2hBY2Nlc3NUb2tlbkVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsd0JBQXdCLENBZ0J4QztBQWhCRCxXQUFpQix3QkFBd0I7SUFDdkMsTUFBYSxvQkFBcUIsU0FBUSxlQUFvQjtRQUM1RDtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDZCQUE2QjthQUN2QixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksNkNBQW9CLHVCQU1oQyxDQUFBO0lBRUQsTUFBYSwwQkFBMkIsU0FBUSxlQUFvQjtRQUNsRTtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDBDQUEwQzthQUNwQyxDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksbURBQTBCLDZCQU10QyxDQUFBO0FBQ0gsQ0FBQyxFQWhCZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUFnQnhDIn0=