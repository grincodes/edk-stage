"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createShopperController = exports.createShopperUseCase = void 0;
const repos_1 = require("../../repos");
const createShopperController_1 = require("./createShopperController");
const createShopperUseCase_1 = require("./createShopperUseCase");
const createShopperUseCase = new createShopperUseCase_1.CreateShopperUseCase(repos_1.shopperRepo, repos_1.shopperAddressRepo);
exports.createShopperUseCase = createShopperUseCase;
const createShopperController = new createShopperController_1.CreateShopperController(createShopperUseCase);
exports.createShopperController = createShopperController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL3VzZWNhc2UvY3JlYXRlU2hvcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBNkQ7QUFDN0QsdUVBQW1FO0FBQ25FLGlFQUE2RDtBQUU3RCxNQUFNLG9CQUFvQixHQUFHLElBQUksMkNBQW9CLENBQUMsbUJBQVcsRUFBRSwwQkFBa0IsQ0FBQyxDQUFBO0FBSTdFLG9EQUFvQjtBQUY3QixNQUFNLHVCQUF1QixHQUFHLElBQUksaURBQXVCLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtBQUVsRCwwREFBdUIifQ==