"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ShopId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ShopId(id));
    }
}
exports.ShopId = ShopId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcElkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcElkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdEQUFvRDtBQUNwRCx1REFBbUQ7QUFFbkQsTUFBYSxNQUFPLFNBQVEsZUFBVztJQUNyQyxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELFlBQW9CLEVBQW1CO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbUI7UUFDdEMsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFTLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNGO0FBWkQsd0JBWUMifQ==