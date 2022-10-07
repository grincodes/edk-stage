"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserId = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class UserId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        if (!UniqueEntityID_1.UniqueEntityID.isValidId(id.toString())) {
            return Result_1.Result.fail(`Invalid id ${id.toString()}`);
        }
        return Result_1.Result.ok(new UserId(id));
    }
}
exports.UserId = UserId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcklkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3VzZXJJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBb0U7QUFDcEUsd0RBQW9EO0FBQ3BELHVEQUFtRDtBQUduRCxNQUFhLE1BQU8sU0FBUSxlQUFXO0lBQ3JDLElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsWUFBb0IsRUFBbUI7UUFDckMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFtQjtRQUN0QyxJQUFJLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFTLGNBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUMxRDtRQUNELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBUyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7Q0FDRjtBQWZELHdCQWVDIn0=