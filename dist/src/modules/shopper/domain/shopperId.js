"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperId = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class ShopperId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        return Result_1.Result.ok(new ShopperId(id));
    }
}
exports.ShopperId = ShopperId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlcklkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcHBlci9kb21haW4vc2hvcHBlcklkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHdEQUFvRDtBQUNwRCx1REFBbUQ7QUFFbkQsTUFBYSxTQUFVLFNBQVEsZUFBVztJQUN4QyxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELFlBQW9CLEVBQW1CO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBbUI7UUFDdEMsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFZLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztDQUNGO0FBWkQsOEJBWUMifQ==