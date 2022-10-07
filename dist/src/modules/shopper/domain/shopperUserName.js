"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperUserName = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ShopperUserName extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static create(name) {
        const userNameResult = Guard_1.Guard.againstNullOrUndefined(name, "user name");
        if (!userNameResult.succeeded) {
            return Result_1.Result.fail(userNameResult.message);
        }
        const minLengthResult = Guard_1.Guard.againstAtLeast(this.minLength, name, "user name");
        if (!minLengthResult.succeeded) {
            return Result_1.Result.fail(minLengthResult.message);
        }
        return Result_1.Result.ok(new ShopperUserName({ value: name }));
    }
}
exports.ShopperUserName = ShopperUserName;
ShopperUserName.minLength = 6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlclVzZXJOYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcHBlci9kb21haW4vc2hvcHBlclVzZXJOYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUE4RDtBQUM5RCxxREFBaUQ7QUFDakQsdURBQW1EO0FBTW5ELE1BQWEsZUFBZ0IsU0FBUSx5QkFBa0M7SUFPckUsWUFBb0IsS0FBNEI7UUFDOUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQVJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQVFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUMvQixNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBRXRFLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO1lBQzdCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBa0IsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzVEO1FBRUQsTUFBTSxlQUFlLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUM5QixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWtCLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM3RDtRQUVELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBa0IsSUFBSSxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7O0FBeEJILDBDQXlCQztBQXBCZSx5QkFBUyxHQUFHLENBQUMsQ0FBQSJ9