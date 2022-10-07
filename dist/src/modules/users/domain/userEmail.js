"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Result_1 = require("../../../core/logic/Result");
class UserEmail extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    static format(email) {
        return email.trim().toLowerCase();
    }
    static create(email) {
        if (!this.isValidEmail(email)) {
            return Result_1.Result.fail("Email address not valid");
        }
        else {
            return Result_1.Result.ok(new UserEmail({ value: this.format(email) }));
        }
    }
}
exports.UserEmail = UserEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3VzZXJFbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFDOUQsdURBQW1EO0FBTW5ELE1BQWEsU0FBVSxTQUFRLHlCQUEyQjtJQUN4RCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFvQixLQUFxQjtRQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFhO1FBQ3ZDLE1BQU0sRUFBRSxHQUFHLHdKQUF3SixDQUFBO1FBQ25LLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBRU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQ2pDLE9BQU8sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ25DLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFZLHlCQUF5QixDQUFDLENBQUE7U0FDekQ7YUFBTTtZQUNMLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBWSxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQzFFO0lBQ0gsQ0FBQztDQUNGO0FBekJELDhCQXlCQyJ9