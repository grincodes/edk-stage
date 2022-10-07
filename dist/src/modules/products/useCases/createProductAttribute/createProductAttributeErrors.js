"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductAttributeErrors;
(function (CreateProductAttributeErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`,
            });
        }
    }
    CreateProductAttributeErrors.GuardError = GuardError;
    class ProductAttributeAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The product attribute ${name}  already exists`,
            });
        }
    }
    CreateProductAttributeErrors.ProductAttributeAlreadyExists = ProductAttributeAlreadyExists;
})(CreateProductAttributeErrors = exports.CreateProductAttributeErrors || (exports.CreateProductAttributeErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZUVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGUvY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsNEJBQTRCLENBZ0I1QztBQWhCRCxXQUFpQiw0QkFBNEI7SUFDM0MsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLHVDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLDZCQUE4QixTQUFRLGVBQW9CO1FBQ3JFLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSx5QkFBeUIsSUFBSSxrQkFBa0I7YUFDekMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLDBEQUE2QixnQ0FNekMsQ0FBQTtBQUNILENBQUMsRUFoQmdCLDRCQUE0QixHQUE1QixvQ0FBNEIsS0FBNUIsb0NBQTRCLFFBZ0I1QyJ9