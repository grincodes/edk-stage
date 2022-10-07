"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopLocationId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ShopLocationId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ShopLocationId(id));
    }
}
exports.ShopLocationId = ShopLocationId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcExvY2F0aW9uSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2RvbWFpbi9zaG9wTG9jYXRpb25JZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx3REFBb0Q7QUFDcEQsdURBQW1EO0FBRW5ELE1BQWEsY0FBZSxTQUFRLGVBQVc7SUFDN0MsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxZQUFvQixFQUFtQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQW1CO1FBQ3RDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBaUIsSUFBSSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMxRCxDQUFDO0NBQ0Y7QUFaRCx3Q0FZQyJ9