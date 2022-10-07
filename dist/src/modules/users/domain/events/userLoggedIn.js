"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoggedInEvent = void 0;
class UserLoggedInEvent {
    constructor(user) {
        this.dateTimeOccurred = new Date();
        this.user = user;
    }
    getAggregateId() {
        return this.user.id;
    }
}
exports.UserLoggedInEvent = UserLoggedInEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckxvZ2dlZEluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL2V2ZW50cy91c2VyTG9nZ2VkSW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSxpQkFBaUI7SUFJNUIsWUFBWSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFTSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDckIsQ0FBQztDQUNGO0FBWkQsOENBWUMifQ==