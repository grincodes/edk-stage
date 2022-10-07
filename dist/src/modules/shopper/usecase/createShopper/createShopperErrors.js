"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopperErrors = void 0;
const Result_1 = require("../../../../core/logic/Result");
var CreateShopperErrors;
(function (CreateShopperErrors) {
    class GuardError extends Result_1.Result {
        constructor(error) {
            super(false, {
                message: `${error}`,
            });
        }
    }
    CreateShopperErrors.GuardError = GuardError;
    class ShopperAlreadyExists extends Result_1.Result {
        constructor() {
            super(false, {
                message: `A username already exists on user`,
            });
        }
    }
    CreateShopperErrors.ShopperAlreadyExists = ShopperAlreadyExists;
})(CreateShopperErrors = exports.CreateShopperErrors || (exports.CreateShopperErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcHBlckVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3BwZXIvdXNlY2FzZS9jcmVhdGVTaG9wcGVyL2NyZWF0ZVNob3BwZXJFcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQXNEO0FBRXRELElBQWlCLG1CQUFtQixDQWdCbkM7QUFoQkQsV0FBaUIsbUJBQW1CO0lBQ2xDLE1BQWEsVUFBVyxTQUFRLGVBQW9CO1FBQ2xELFlBQVksS0FBYTtZQUN2QixLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRTthQUNKLENBQUMsQ0FBQTtRQUNwQixDQUFDO0tBQ0Y7SUFOWSw4QkFBVSxhQU10QixDQUFBO0lBRUQsTUFBYSxvQkFBcUIsU0FBUSxlQUFvQjtRQUM1RDtZQUNFLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLG1DQUFtQzthQUM3QixDQUFDLENBQUE7UUFDcEIsQ0FBQztLQUNGO0lBTlksd0NBQW9CLHVCQU1oQyxDQUFBO0FBQ0gsQ0FBQyxFQWhCZ0IsbUJBQW1CLEdBQW5CLDJCQUFtQixLQUFuQiwyQkFBbUIsUUFnQm5DIn0=