"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NigeriaPhone = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Guard_1 = require("../../core/logic/Guard");
const Result_1 = require("../../core/logic/Result");
class NigeriaPhone extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static isValidPhone(phone) {
        const re = /(^0)(7|8|9){1}(0|1){1}[0-9]{8}/;
        // toString removes first zero in a digit so i am adding it back
        // const _phone = "0" + phone.toString()
        return re.test(phone.toString());
    }
    static create(phone) {
        const phoneResult = Guard_1.Guard.againstNullOrUndefined(phone, "phone");
        if (!phoneResult.succeeded) {
            return Result_1.Result.fail(phoneResult.message);
        }
        if (!this.isValidPhone(phone)) {
            return Result_1.Result.fail("Invalid phone number format");
        }
        return Result_1.Result.ok(new NigeriaPhone({ value: phone }));
    }
}
exports.NigeriaPhone = NigeriaPhone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmlnZXJpYVBob25lTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kb21haW5fdHlwZXMvTmlnZXJpYVBob25lTnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEyRDtBQUMzRCxrREFBOEM7QUFDOUMsb0RBQWdEO0FBTWhELE1BQWEsWUFBYSxTQUFRLHlCQUErQjtJQUMvRCxZQUFvQixLQUF5QjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFhO1FBQ3ZDLE1BQU0sRUFBRSxHQUFHLGdDQUFnQyxDQUFBO1FBQzNDLGdFQUFnRTtRQUNoRSx3Q0FBd0M7UUFFeEMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWE7UUFDaEMsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUVoRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLDZCQUE2QixDQUFDLENBQUE7U0FDaEU7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsSUFBSSxZQUFZLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLENBQUM7Q0FDRjtBQTdCRCxvQ0E2QkMifQ==