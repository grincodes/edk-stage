"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopper = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const shopperId_1 = require("./shopperId");
class Shopper extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get shopperId() {
        return shopperId_1.ShopperId.create(this._id).getValue();
    }
    get userId() {
        return this.props.userId;
    }
    get shopperUserName() {
        return this.props.shopperUserName;
    }
    get dob() {
        return this.props.dob;
    }
    get shopperPhone() {
        return this.props.shopperPhone;
    }
    get shopperAddress() {
        return this.props.shopperAddress;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const shopper = new Shopper(props, id);
        return Result_1.Result.ok(shopper);
    }
}
exports.Shopper = Shopper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3BwZXIvZG9tYWluL3Nob3BwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQWtFO0FBRWxFLHVEQUFtRDtBQUluRCwyQ0FBdUM7QUFXdkMsTUFBYSxPQUFRLFNBQVEsNkJBQTJCO0lBQ3RELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDOUMsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksZUFBZTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFBO0lBQ25DLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBQ2hDLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsWUFBb0IsS0FBbUIsRUFBRSxFQUFtQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQW1CLEVBQUUsRUFBbUI7UUFDM0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRXRDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBVSxPQUFPLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0Y7QUF0Q0QsMEJBc0NDIn0=