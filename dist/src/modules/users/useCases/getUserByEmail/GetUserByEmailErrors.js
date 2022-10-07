"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByEmailErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var GetUserByEmailErrors;
(function (GetUserByEmailErrors) {
    class UserNotFoundError extends Result_1.Result {
        constructor(email) {
            super(false, {
                message: `No user with the email ${email} was found`
            });
        }
    }
    GetUserByEmailErrors.UserNotFoundError = UserNotFoundError;
})(GetUserByEmailErrors = exports.GetUserByEmailErrors || (exports.GetUserByEmailErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0VXNlckJ5RW1haWxFcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9nZXRVc2VyQnlFbWFpbC9HZXRVc2VyQnlFbWFpbEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsb0JBQW9CLENBUXBDO0FBUkQsV0FBaUIsb0JBQW9CO0lBQ25DLE1BQWEsaUJBQWtCLFNBQVEsZUFBb0I7UUFDekQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDBCQUEwQixLQUFLLFlBQVk7YUFDckMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLHNDQUFpQixvQkFNN0IsQ0FBQTtBQUNILENBQUMsRUFSZ0Isb0JBQW9CLEdBQXBCLDRCQUFvQixLQUFwQiw0QkFBb0IsUUFRcEMifQ==