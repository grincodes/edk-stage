"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCaseErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var LoginUseCaseErrors;
(function (LoginUseCaseErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`,
            });
        }
    }
    LoginUseCaseErrors.GuardError = GuardError;
    class InvalidUserPermissionError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Access Denied Invalid Permission`,
            });
        }
    }
    LoginUseCaseErrors.InvalidUserPermissionError = InvalidUserPermissionError;
    class InvalidAuthRoleError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Invalid auth role specified in header`,
            });
        }
    }
    LoginUseCaseErrors.InvalidAuthRoleError = InvalidAuthRoleError;
    class UserEmailDoesntExistError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Email or password incorrect.`,
            });
        }
    }
    LoginUseCaseErrors.UserEmailDoesntExistError = UserEmailDoesntExistError;
    class PasswordDoesntMatchError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Password doesnt match error.`,
            });
        }
    }
    LoginUseCaseErrors.PasswordDoesntMatchError = PasswordDoesntMatchError;
})(LoginUseCaseErrors = exports.LoginUseCaseErrors || (exports.LoginUseCaseErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5FcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9sb2dpbi9Mb2dpbkVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsa0JBQWtCLENBd0NsQztBQXhDRCxXQUFpQixrQkFBa0I7SUFDakMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDZCQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLDBCQUEyQixTQUFRLGVBQW9CO1FBQ2xFO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsa0NBQWtDO2FBQzVCLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSw2Q0FBMEIsNkJBTXRDLENBQUE7SUFFRCxNQUFhLG9CQUFxQixTQUFRLGVBQW9CO1FBQzVEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsdUNBQXVDO2FBQ2pDLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSx1Q0FBb0IsdUJBTWhDLENBQUE7SUFFRCxNQUFhLHlCQUEwQixTQUFRLGVBQW9CO1FBQ2pFO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsOEJBQThCO2FBQ3hCLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSw0Q0FBeUIsNEJBTXJDLENBQUE7SUFFRCxNQUFhLHdCQUF5QixTQUFRLGVBQW9CO1FBQ2hFO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsOEJBQThCO2FBQ3hCLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSwyQ0FBd0IsMkJBTXBDLENBQUE7QUFDSCxDQUFDLEVBeENnQixrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQXdDbEMifQ==