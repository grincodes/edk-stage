"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeValueErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductAttributeValueErrors;
(function (CreateProductAttributeValueErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductAttributeValueErrors.GuardError = GuardError;
    class ProductAttributeValueAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The product attribute value ${name}  already exists`
            });
        }
    }
    CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists = ProductAttributeValueAlreadyExists;
})(CreateProductAttributeValueErrors = exports.CreateProductAttributeValueErrors || (exports.CreateProductAttributeValueErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlRXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBdUQ7QUFFdkQsSUFBaUIsaUNBQWlDLENBZ0JqRDtBQWhCRCxXQUFpQixpQ0FBaUM7SUFDaEQsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFDO1FBQ3JCLENBQUM7S0FDRjtJQU5ZLDRDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLGtDQUFtQyxTQUFRLGVBQW9CO1FBQzFFLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSwrQkFBK0IsSUFBSSxrQkFBa0I7YUFDL0MsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7S0FDRjtJQU5ZLG9FQUFrQyxxQ0FNOUMsQ0FBQTtBQUNILENBQUMsRUFoQmdCLGlDQUFpQyxHQUFqQyx5Q0FBaUMsS0FBakMseUNBQWlDLFFBZ0JqRCJ9