"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopPhone = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ShopPhone extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static isValidPhone(phone) {
        const re = /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/;
        // toString removes first zero in a digit so i am adding it back
        const _phone = "0" + phone.toString();
        return re.test(_phone);
    }
    static create(phone) {
        const shopPhoneResult = Guard_1.Guard.againstNullOrUndefined(phone, "phone");
        if (!shopPhoneResult.succeeded) {
            return Result_1.Result.fail(shopPhoneResult.message);
        }
        if (!this.isValidPhone(phone)) {
            return Result_1.Result.fail("Invalid phone number format");
        }
        return Result_1.Result.ok(new ShopPhone({ value: phone }));
    }
}
exports.ShopPhone = ShopPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcFBob25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcFBob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUE4RDtBQUM5RCxxREFBaUQ7QUFDakQsdURBQW1EO0FBTW5ELE1BQWEsU0FBVSxTQUFRLHlCQUE0QjtJQUN6RCxZQUFvQixLQUFzQjtRQUN4QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFhO1FBQ3ZDLE1BQU0sRUFBRSxHQUFHLGdDQUFnQyxDQUFBO1FBRTNDLGdFQUFnRTtRQUNoRSxNQUFNLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRXJDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQ2hDLE1BQU0sZUFBZSxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFZLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN2RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBWSw2QkFBNkIsQ0FBQyxDQUFBO1NBQzdEO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFZLElBQUksU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0NBQ0Y7QUE5QkQsOEJBOEJDIn0=