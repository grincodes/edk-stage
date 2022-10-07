"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductTypeErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductTypeErrors;
(function (CreateProductTypeErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductTypeErrors.GuardError = GuardError;
    class ProductTypeAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The product type ${name}  already exists`
            });
        }
    }
    CreateProductTypeErrors.ProductTypeAlreadyExists = ProductTypeAlreadyExists;
})(CreateProductTypeErrors = exports.CreateProductTypeErrors || (exports.CreateProductTypeErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFR5cGVFcnJvcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0VHlwZS9jcmVhdGVQcm9kdWN0VHlwZUVycm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBc0Q7QUFFdEQsSUFBaUIsdUJBQXVCLENBZ0J2QztBQWhCRCxXQUFpQix1QkFBdUI7SUFDdEMsTUFBYSxVQUFXLFNBQVEsZUFBb0I7UUFDbEQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEdBQUcsS0FBSyxFQUFFO2FBQ0osQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGtDQUFVLGFBTXRCLENBQUE7SUFFRCxNQUFhLHdCQUF5QixTQUFRLGVBQW9CO1FBQ2hFLFlBQVksSUFBWTtZQUN0QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxvQkFBb0IsSUFBSSxrQkFBa0I7YUFDcEMsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7S0FDRjtJQU5ZLGdEQUF3QiwyQkFNcEMsQ0FBQTtBQUNILENBQUMsRUFoQmdCLHVCQUF1QixHQUF2QiwrQkFBdUIsS0FBdkIsK0JBQXVCLFFBZ0J2QyJ9