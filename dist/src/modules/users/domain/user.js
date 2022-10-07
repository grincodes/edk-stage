"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const userId_1 = require("./userId");
const Guard_1 = require("../../../core/logic/Guard");
const userCreated_1 = require("./events/userCreated");
const userDeleted_1 = require("./events/userDeleted");
const userLoggedIn_1 = require("./events/userLoggedIn");
class User extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get userId() {
        return userId_1.UserId.create(this.id).getValue();
    }
    get email() {
        return this.props.email;
    }
    get firstName() {
        return this.props.firstName;
    }
    get lastName() {
        return this.props.lastName;
    }
    get roles() {
        return this.props.roles;
    }
    get password() {
        return this.props.password;
    }
    get role() {
        return this.props.role;
    }
    get isEmailVerified() {
        return this.props.isEmailVerified;
    }
    get profilePicture() {
        return this.props.profilePicture;
    }
    get googleId() {
        return this.props.googleId;
    }
    get facebookId() {
        return this.props.facebookId;
    }
    get accessToken() {
        return this.props.accessToken;
    }
    get isDeleted() {
        return this.props.isDeleted;
    }
    get lastLogin() {
        return this.props.lastLogin;
    }
    get refreshToken() {
        return this.props.refreshToken;
    }
    isLoggedIn() {
        return !!this.props.accessToken && !!this.props.refreshToken;
    }
    hasPermission(role) {
        return this.props.roles.exists(role);
    }
    setAccessToken(token, refreshToken) {
        this.addDomainEvent(new userLoggedIn_1.UserLoggedInEvent(this));
        this.props.accessToken = token;
        this.props.refreshToken = refreshToken;
        this.props.lastLogin = new Date();
    }
    delete() {
        if (!this.props.isDeleted) {
            this.addDomainEvent(new userDeleted_1.UserDeletedEvent(this));
            this.props.isDeleted = true;
        }
    }
    constructor(props, id) {
        super(props, id);
    }
    static isRegisteringWithGoogle(props) {
        return !!props.googleId === true;
    }
    static isRegisteringWithFacebook(props) {
        return !!props.facebookId === true;
    }
    static create(props, id) {
        const guardedProps = [
            { argument: props.firstName, argumentName: "firstName" },
            { argument: props.lastName, argumentName: "lastName" },
            { argument: props.email, argumentName: "email" },
            { argument: props.isEmailVerified, argumentName: "isEmailVerified" },
        ];
        if (!this.isRegisteringWithGoogle(props) && !this.isRegisteringWithFacebook(props)) {
            guardedProps.push({ argument: props.password, argumentName: "password" });
        }
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardedProps);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardAtLeastChars = [
            { numChars: 3, text: props.firstName, argumentName: "firstName" },
            { numChars: 3, text: props.lastName, argumentName: "lastName" },
            { numChars: 8, text: props.password.value, argumentName: "password" },
        ];
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const user = new User(Object.assign({}, props), id);
        const idWasProvided = !!id;
        if (!idWasProvided) {
            user.addDomainEvent(new userCreated_1.UserCreatedEvent(user));
        }
        return Result_1.Result.ok(user);
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFrRTtBQUVsRSx1REFBbUQ7QUFDbkQscUNBQWlDO0FBRWpDLHFEQUFpRDtBQUNqRCxzREFBdUQ7QUFFdkQsc0RBQXVEO0FBRXZELHdEQUF5RDtBQXNCekQsTUFBYSxJQUFLLFNBQVEsNkJBQXdCO0lBQ2hELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUE7SUFDbkMsQ0FBQztJQUVELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFBO0lBQ2xDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFBO0lBQzlCLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO0lBQy9CLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFBO0lBQzdCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFBO0lBQzdCLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBQ2hDLENBQUM7SUFFTSxVQUFVO1FBQ2YsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFBO0lBQzlELENBQUM7SUFFTSxhQUFhLENBQUMsSUFBYztRQUNqQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0QyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWUsRUFBRSxZQUEwQjtRQUMvRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksZ0NBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDbkMsQ0FBQztJQUVNLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLDhCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFlBQW9CLEtBQWdCLEVBQUUsRUFBbUI7UUFDdkQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLEtBQWdCO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFBO0lBQ2xDLENBQUM7SUFFTyxNQUFNLENBQUMseUJBQXlCLENBQUMsS0FBZ0I7UUFDdkQsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUE7SUFDcEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBZ0IsRUFBRSxFQUFtQjtRQUN4RCxNQUFNLFlBQVksR0FBRztZQUNuQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUU7WUFDeEQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFO1lBQ3RELEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRTtZQUNoRCxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsZUFBZSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRTtTQUNyRSxDQUFBO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsRixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUE7U0FDMUU7UUFFRCxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM5QztRQUVELE1BQU0saUJBQWlCLEdBQUc7WUFDeEIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUU7WUFDakUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUU7WUFDL0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFO1NBQ3RFLENBQUE7UUFDRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3RFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFPLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3JEO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLG1CQUFNLEtBQUssR0FBSSxFQUFFLENBQUMsQ0FBQTtRQUV2QyxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRTFCLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLDhCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDaEQ7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU8sSUFBSSxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUNGO0FBeElELG9CQXdJQyJ9