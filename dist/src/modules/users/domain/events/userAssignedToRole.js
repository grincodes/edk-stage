"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAssignedToRoleEvent = void 0;
class UserAssignedToRoleEvent {
    constructor(role) {
        this.dateTimeOccurred = new Date();
        this.role = role;
    }
    getAggregateId() {
        return this.role.id;
    }
}
exports.UserAssignedToRoleEvent = UserAssignedToRoleEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckFzc2lnbmVkVG9Sb2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL2V2ZW50cy91c2VyQXNzaWduZWRUb1JvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSx1QkFBdUI7SUFJbEMsWUFBWSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBWkQsMERBWUMifQ==