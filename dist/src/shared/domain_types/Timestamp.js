"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeStamp = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Guard_1 = require("../../core/logic/Guard");
const Result_1 = require("../../core/logic/Result");
const TextUtils_1 = require("../../utils/TextUtils");
class TimeStamp extends ValueObject_1.ValueObject {
    static isValidTimeStamp(url) {
        return TextUtils_1.TextUtils.validateTimeStamp(url);
    }
    constructor(props) {
        super(props);
    }
    static create(props) {
        const timeStampResult = Guard_1.Guard.againstNullOrUndefined(props.value, "time stamp");
        if (!timeStampResult.succeeded) {
            return Result_1.Result.fail(timeStampResult.message);
        }
        if (!this.isValidTimeStamp(props.value)) {
            return Result_1.Result.fail("Invalid timestamp");
        }
        return Result_1.Result.ok(new TimeStamp(props));
    }
}
exports.TimeStamp = TimeStamp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kb21haW5fdHlwZXMvVGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEyRDtBQUMzRCxrREFBOEM7QUFDOUMsb0RBQWdEO0FBQ2hELHFEQUFpRDtBQU1qRCxNQUFhLFNBQVUsU0FBUSx5QkFBNEI7SUFDakQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQVc7UUFDekMsT0FBTyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFDRCxZQUFvQixLQUFzQjtRQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFzQjtRQUN6QyxNQUFNLGVBQWUsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQTtRQUUvRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUM5QixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQVksZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdkMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFZLG1CQUFtQixDQUFDLENBQUE7U0FDbkQ7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQVksSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0NBQ0Y7QUFyQkQsOEJBcUJDIn0=