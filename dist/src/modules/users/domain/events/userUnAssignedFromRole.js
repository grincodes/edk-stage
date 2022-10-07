"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUnAssignedFromRoleEvent = void 0;
class UserUnAssignedFromRoleEvent {
    constructor(role) {
        this.dateTimeOccurred = new Date();
        this.role = role;
    }
    getAggregateId() {
        return this.role.id;
    }
}
exports.UserUnAssignedFromRoleEvent = UserUnAssignedFromRoleEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclVuQXNzaWduZWRGcm9tUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9ldmVudHMvdXNlclVuQXNzaWduZWRGcm9tUm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLDJCQUEyQjtJQUl0QyxZQUFZLElBQVU7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUFaRCxrRUFZQyJ9