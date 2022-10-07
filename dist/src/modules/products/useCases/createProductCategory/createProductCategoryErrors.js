"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductCategoryErrors;
(function (CreateProductCategoryErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductCategoryErrors.GuardError = GuardError;
    class CategoryAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The category ame ${name}  already exists`
            });
        }
    }
    CreateProductCategoryErrors.CategoryAlreadyExists = CategoryAlreadyExists;
})(CreateProductCategoryErrors = exports.CreateProductCategoryErrors || (exports.CreateProductCategoryErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdENhdGVnb3J5RXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdENhdGVnb3J5L2NyZWF0ZVByb2R1Y3RDYXRlZ29yeUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsMkJBQTJCLENBZ0IzQztBQWhCRCxXQUFpQiwyQkFBMkI7SUFDMUMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLHNDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLHFCQUFzQixTQUFRLGVBQW9CO1FBQzdELFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxrQkFBa0I7YUFDcEMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGlEQUFxQix3QkFNakMsQ0FBQTtBQUNILENBQUMsRUFoQmdCLDJCQUEyQixHQUEzQixtQ0FBMkIsS0FBM0IsbUNBQTJCLFFBZ0IzQyJ9