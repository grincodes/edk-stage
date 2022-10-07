"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
const WatchedList_1 = require("../../../core/domain/WatchedList");
class UserRoles extends WatchedList_1.WatchedList {
    constructor(initialRoles) {
        super(initialRoles);
    }
    compareItems(a, b) {
        return a.equals(b);
    }
    static create(initialRoles) {
        return new UserRoles(initialRoles ? initialRoles : []);
    }
}
exports.UserRoles = UserRoles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3VzZXJSb2xlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFHOUQsTUFBYSxTQUFVLFNBQVEseUJBQXFCO0lBQ2xELFlBQW9CLFlBQXdCO1FBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRU0sWUFBWSxDQUFDLENBQVcsRUFBRSxDQUFXO1FBQzFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUF5QjtRQUM1QyxPQUFPLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0NBQ0Y7QUFaRCw4QkFZQyJ9