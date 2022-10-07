"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const userAssignedToRole_1 = require("./events/userAssignedToRole");
class Role extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get role() {
        return this.props.role;
    }
    get userId() {
        return this.props.userId;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const role = new Role(Object.assign({}, props), id);
        const idWasProvided = !!id;
        if (!idWasProvided) {
            role.addDomainEvent(new userAssignedToRole_1.UserAssignedToRoleEvent(role));
        }
        return Result_1.Result.ok(role);
    }
}
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9yb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFrRTtBQUVsRSx1REFBbUQ7QUFDbkQsb0VBQXFFO0FBU3JFLE1BQWEsSUFBSyxTQUFRLDZCQUF3QjtJQUNoRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELFlBQW9CLEtBQWdCLEVBQUUsRUFBbUI7UUFDdkQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFnQixFQUFFLEVBQW1CO1FBQ3hELE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxtQkFFZCxLQUFLLEdBRVYsRUFBRSxDQUNILENBQUE7UUFFRCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRTFCLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLDRDQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDdkQ7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU8sSUFBSSxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUNGO0FBakNELG9CQWlDQyJ9