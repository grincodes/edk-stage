"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeletedEvent = void 0;
class UserDeletedEvent {
    constructor(user) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    getAggregateId() {
        return this.user.id;
    }
}
exports.UserDeletedEvent = UserDeletedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRlbGV0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9kb21haW4vZXZlbnRzL3VzZXJEZWxldGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNsQixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBWkQsNENBWUMifQ==