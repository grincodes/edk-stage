"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductErrors;
(function (CreateProductErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`,
            });
        }
    }
    CreateProductErrors.GuardError = GuardError;
    class ProductAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The product name ${name}  already exists`,
            });
        }
    }
    CreateProductErrors.ProductAlreadyExists = ProductAlreadyExists;
    class ProductMustHaveVariants extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Product must have a variant`,
            });
        }
    }
    CreateProductErrors.ProductMustHaveVariants = ProductMustHaveVariants;
})(CreateProductErrors = exports.CreateProductErrors || (exports.CreateProductErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3QvY3JlYXRlUHJvZHVjdEVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsbUJBQW1CLENBd0JuQztBQXhCRCxXQUFpQixtQkFBbUI7SUFDbEMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDhCQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLG9CQUFxQixTQUFRLGVBQW9CO1FBQzVELFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxrQkFBa0I7YUFDcEMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLHdDQUFvQix1QkFNaEMsQ0FBQTtJQUVELE1BQWEsdUJBQXdCLFNBQVEsZUFBb0I7UUFDL0Q7WUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw2QkFBNkI7YUFDdkIsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDJDQUF1QiwwQkFNbkMsQ0FBQTtBQUNILENBQUMsRUF4QmdCLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBd0JuQyJ9