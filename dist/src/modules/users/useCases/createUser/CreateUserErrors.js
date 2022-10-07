"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateUserErrors;
(function (CreateUserErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateUserErrors.GuardError = GuardError;
    class AccountAlreadyExists extends Result_1.Result {
        constructor(email) {
            super(false, {
                message: `The email ${email} associated for this account already exists`
            });
        }
    }
    CreateUserErrors.AccountAlreadyExists = AccountAlreadyExists;
    class FacebookTokenInvalid extends Result_1.Result {
        constructor() {
            super(false, {
                message: `The facebook token used to attempt to create an account not genuine.`
            });
        }
    }
    CreateUserErrors.FacebookTokenInvalid = FacebookTokenInvalid;
    class GoogleTokenInvalid extends Result_1.Result {
        constructor() {
            super(false, {
                message: `The google token used to attempt to create an account not genuine.`
            });
        }
    }
    CreateUserErrors.GoogleTokenInvalid = GoogleTokenInvalid;
})(CreateUserErrors = exports.CreateUserErrors || (exports.CreateUserErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVXNlckVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL2NyZWF0ZVVzZXIvQ3JlYXRlVXNlckVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsZ0JBQWdCLENBZ0NoQztBQWhDRCxXQUFpQixnQkFBZ0I7SUFDL0IsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDJCQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLG9CQUFxQixTQUFRLGVBQW9CO1FBQzVELFlBQVksS0FBYTtZQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxhQUFhLEtBQUssNkNBQTZDO2FBQ3pELENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSxxQ0FBb0IsdUJBTWhDLENBQUE7SUFFRCxNQUFhLG9CQUFxQixTQUFRLGVBQW9CO1FBQzVEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsc0VBQXNFO2FBQ2hFLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSxxQ0FBb0IsdUJBTWhDLENBQUE7SUFFRCxNQUFhLGtCQUFtQixTQUFRLGVBQW9CO1FBQzFEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsb0VBQW9FO2FBQzlELENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSxtQ0FBa0IscUJBTTlCLENBQUE7QUFDSCxDQUFDLEVBaENnQixnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQWdDaEMifQ==