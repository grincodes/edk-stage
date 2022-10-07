"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyOtpUseCaseErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var VerifyOtpUseCaseErrors;
(function (VerifyOtpUseCaseErrors) {
    class UserAlreadyVerifiedError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `user already verified`,
            });
        }
    }
    VerifyOtpUseCaseErrors.UserAlreadyVerifiedError = UserAlreadyVerifiedError;
    class InvalidOtp extends Result_1.Result {
        constructor() {
            super(false, {
                message: `incorrect or expired otp code`,
            });
        }
    }
    VerifyOtpUseCaseErrors.InvalidOtp = InvalidOtp;
    class InvalidUserError extends Result_1.Result {
        constructor() {
            super(false, {
                message: `user not authenticated`,
            });
        }
    }
    VerifyOtpUseCaseErrors.InvalidUserError = InvalidUserError;
})(VerifyOtpUseCaseErrors = exports.VerifyOtpUseCaseErrors || (exports.VerifyOtpUseCaseErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5T3RwRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvdmVyaWZ5T3RwL3ZlcmlmeU90cEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBc0Q7QUFHdEQsSUFBaUIsc0JBQXNCLENBd0J0QztBQXhCRCxXQUFpQixzQkFBc0I7SUFDckMsTUFBYSx3QkFBeUIsU0FBUSxlQUFvQjtRQUNoRTtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHVCQUF1QjthQUNqQixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksK0NBQXdCLDJCQU1wQyxDQUFBO0lBRUQsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQ7WUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0I7YUFDekIsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGlDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLGdCQUFpQixTQUFRLGVBQW9CO1FBQ3hEO1lBQ0UsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsd0JBQXdCO2FBQ2xCLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSx1Q0FBZ0IsbUJBTTVCLENBQUE7QUFDSCxDQUFDLEVBeEJnQixzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQXdCdEMifQ==