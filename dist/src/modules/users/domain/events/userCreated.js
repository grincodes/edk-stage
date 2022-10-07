"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreatedEvent = void 0;
class UserCreatedEvent {
    constructor(user) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    getAggregateId() {
        return this.user.id;
    }
}
exports.UserCreatedEvent = UserCreatedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckNyZWF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9kb21haW4vZXZlbnRzL3VzZXJDcmVhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBWkQsNENBWUMifQ==