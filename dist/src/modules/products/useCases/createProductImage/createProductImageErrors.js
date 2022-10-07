"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductImageErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductImageErrors;
(function (CreateProductImageErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductImageErrors.GuardError = GuardError;
    class InvalidImageUrl extends Result_1.Result {
        constructor(url) {
            super(false, {
                message: ` Invalid image url ${url}`
            });
        }
    }
    CreateProductImageErrors.InvalidImageUrl = InvalidImageUrl;
})(CreateProductImageErrors = exports.CreateProductImageErrors || (exports.CreateProductImageErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEltYWdlRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdEltYWdlL2NyZWF0ZVByb2R1Y3RJbWFnZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsd0JBQXdCLENBZ0J4QztBQWhCRCxXQUFpQix3QkFBd0I7SUFDdkMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLG1DQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLGVBQWdCLFNBQVEsZUFBb0I7UUFDdkQsWUFBWSxHQUFXO1lBQ3JCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLHNCQUFzQixHQUFHLEVBQUU7YUFDckIsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLHdDQUFlLGtCQU0zQixDQUFBO0FBQ0gsQ0FBQyxFQWhCZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUFnQnhDIn0=