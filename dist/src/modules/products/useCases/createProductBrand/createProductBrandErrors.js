"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductBrandErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductBrandErrors;
(function (CreateProductBrandErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductBrandErrors.GuardError = GuardError;
    class BrandAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The brand name ${name}  already exists`
            });
        }
    }
    CreateProductBrandErrors.BrandAlreadyExists = BrandAlreadyExists;
})(CreateProductBrandErrors = exports.CreateProductBrandErrors || (exports.CreateProductBrandErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEJyYW5kRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdEJyYW5kL2NyZWF0ZVByb2R1Y3RCcmFuZEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsd0JBQXdCLENBZ0J4QztBQWhCRCxXQUFpQix3QkFBd0I7SUFDdkMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLG1DQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLGtCQUFtQixTQUFRLGVBQW9CO1FBQzFELFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxrQkFBa0I7YUFDbEMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDJDQUFrQixxQkFNOUIsQ0FBQTtBQUNILENBQUMsRUFoQmdCLHdCQUF3QixHQUF4QixnQ0FBd0IsS0FBeEIsZ0NBQXdCLFFBZ0J4QyJ9