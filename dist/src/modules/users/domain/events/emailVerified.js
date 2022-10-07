"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailVerifiedEvent = void 0;
class EmailVerifiedEvent {
    constructor(user) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    getAggregateId() {
        return this.user.id;
    }
}
exports.EmailVerifiedEvent = EmailVerifiedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxWZXJpZmllZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9ldmVudHMvZW1haWxWZXJpZmllZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLGtCQUFrQjtJQUk3QixZQUFZLElBQVU7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUFaRCxnREFZQyJ9