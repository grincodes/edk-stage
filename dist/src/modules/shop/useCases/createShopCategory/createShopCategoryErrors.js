"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopCategoryErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateShopCategoryErrors;
(function (CreateShopCategoryErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`
            });
        }
    }
    CreateShopCategoryErrors.GuardError = GuardError;
    class ShopCategoryAlreadyExists extends Result_1.Result {
        constructor(name) {
            super(false, {
                message: `The shop category name ${name}  already exists`
            });
        }
    }
    CreateShopCategoryErrors.ShopCategoryAlreadyExists = ShopCategoryAlreadyExists;
})(CreateShopCategoryErrors = exports.CreateShopCategoryErrors || (exports.CreateShopCategoryErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcENhdGVnb3J5RXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC91c2VDYXNlcy9jcmVhdGVTaG9wQ2F0ZWdvcnkvY3JlYXRlU2hvcENhdGVnb3J5RXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUF1RDtBQUV2RCxJQUFpQix3QkFBd0IsQ0FnQnhDO0FBaEJELFdBQWlCLHdCQUF3QjtJQUN2QyxNQUFhLFVBQVcsU0FBUSxlQUFvQjtRQUNsRCxZQUFZLEtBQWE7WUFDdkIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUU7YUFDSixDQUFDLENBQUM7UUFDckIsQ0FBQztLQUNGO0lBTlksbUNBQVUsYUFNdEIsQ0FBQTtJQUVELE1BQWEseUJBQTBCLFNBQVEsZUFBb0I7UUFDakUsWUFBWSxJQUFZO1lBQ3RCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLDBCQUEwQixJQUFJLGtCQUFrQjthQUMxQyxDQUFDLENBQUM7UUFDckIsQ0FBQztLQUNGO0lBTlksa0RBQXlCLDRCQU1yQyxDQUFBO0FBQ0gsQ0FBQyxFQWhCZ0Isd0JBQXdCLEdBQXhCLGdDQUF3QixLQUF4QixnQ0FBd0IsUUFnQnhDIn0=