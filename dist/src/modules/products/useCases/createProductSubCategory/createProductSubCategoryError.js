"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductSubCategoryErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateProductSubCategoryErrors;
(function (CreateProductSubCategoryErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateProductSubCategoryErrors.GuardError = GuardError;
    class SubCategoryAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The sub category ame ${name}  already exists`
            });
        }
    }
    CreateProductSubCategoryErrors.SubCategoryAlreadyExists = SubCategoryAlreadyExists;
})(CreateProductSubCategoryErrors = exports.CreateProductSubCategoryErrors || (exports.CreateProductSubCategoryErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFN1YkNhdGVnb3J5RXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0U3ViQ2F0ZWdvcnkvY3JlYXRlUHJvZHVjdFN1YkNhdGVnb3J5RXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQXNEO0FBRXRELElBQWlCLDhCQUE4QixDQWdCOUM7QUFoQkQsV0FBaUIsOEJBQThCO0lBQzdDLE1BQWEsVUFBVyxTQUFRLGVBQW9CO1FBQ2xELFlBQVksS0FBYTtZQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRTthQUNKLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSx5Q0FBVSxhQU10QixDQUFBO0lBRUQsTUFBYSx3QkFBeUIsU0FBUSxlQUFvQjtRQUNoRSxZQUFZLElBQVk7WUFDdEIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsd0JBQXdCLElBQUksa0JBQWtCO2FBQ3hDLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSx1REFBd0IsMkJBTXBDLENBQUE7QUFDSCxDQUFDLEVBaEJnQiw4QkFBOEIsR0FBOUIsc0NBQThCLEtBQTlCLHNDQUE4QixRQWdCOUMifQ==