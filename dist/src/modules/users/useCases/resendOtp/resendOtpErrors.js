"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendOtpUseCaseErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var ResendOtpUseCaseErrors;
(function (ResendOtpUseCaseErrors) {
    class UserAlreadyVerifiedError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `user already verified`,
            });
        }
    }
    ResendOtpUseCaseErrors.UserAlreadyVerifiedError = UserAlreadyVerifiedError;
    class InvalidUserError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `user not authenticated `,
            });
        }
    }
    ResendOtpUseCaseErrors.InvalidUserError = InvalidUserError;
})(ResendOtpUseCaseErrors = exports.ResendOtpUseCaseErrors || (exports.ResendOtpUseCaseErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZW5kT3RwRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvcmVzZW5kT3RwL3Jlc2VuZE90cEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsc0JBQXNCLENBZ0J0QztBQWhCRCxXQUFpQixzQkFBc0I7SUFDckMsTUFBYSx3QkFBeUIsU0FBUSxlQUFvQjtRQUNoRTtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHVCQUF1QjthQUNqQixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksK0NBQXdCLDJCQU1wQyxDQUFBO0lBRUQsTUFBYSxnQkFBaUIsU0FBUSxlQUFvQjtRQUN4RDtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHlCQUF5QjthQUNuQixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksdUNBQWdCLG1CQU01QixDQUFBO0FBQ0gsQ0FBQyxFQWhCZ0Isc0JBQXNCLEdBQXRCLDhCQUFzQixLQUF0Qiw4QkFBc0IsUUFnQnRDIn0=