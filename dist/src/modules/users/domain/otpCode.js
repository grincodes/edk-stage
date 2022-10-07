"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Otp = exports.CodeType = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
var CodeType;
(function (CodeType) {
    CodeType["EmailVerification"] = "email verification";
    CodeType["PhoneVerification"] = "phone verification";
})(CodeType = exports.CodeType || (exports.CodeType = {}));
class Otp extends ValueObject_1.ValueObject {
    get code() {
        return this.props.code;
    }
    get codeType() {
        return this.props.codeType;
    }
    get userId() {
        return this.props.userId;
    }
    get codeExpiryMinutes() {
        return this.props.codeExpiryMinutes;
    }
    get numberDigits() {
        return this.props.numberDigits;
    }
    static isValidNumberDigits(digits) {
        return digits >= 4 && digits <= 6;
    }
    constructor(props) {
        super(props);
    }
    static create(props) {
        const guardResult = Guard_1.Guard.againstAtLeast(3, props.userId, "userId");
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            if (!this.isValidNumberDigits(props.numberDigits)) {
                return Result_1.Result.fail("Can only create otp code between 4 to 6 digits");
            }
            // generate random
            const chars = "0123456789";
            let token = "";
            for (let i = props.numberDigits; i > 0; --i) {
                token += chars[Math.round(Math.random() * (chars.length - 1))];
            }
            const code = parseInt(token);
            return Result_1.Result.ok(new Otp({
                code,
                codeType: props.codeType,
                userId: props.userId,
                numberDigits: props.numberDigits,
                codeExpiryMinutes: props.codeExpiryMinutes
            }));
        }
    }
}
exports.Otp = Otp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9vdHBDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUE4RDtBQUM5RCxxREFBaUQ7QUFDakQsdURBQW1EO0FBZ0JuRCxJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDbEIsb0RBQTBDLENBQUE7SUFDMUMsb0RBQTBDLENBQUE7QUFDNUMsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0FBRUQsTUFBYSxHQUFJLFNBQVEseUJBQXlCO0lBQ2hELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQTtJQUNyQyxDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQTtJQUNoQyxDQUFDO0lBRU8sTUFBTSxDQUFDLG1CQUFtQixDQUFDLE1BQWM7UUFDL0MsT0FBTyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELFlBQW9CLEtBQW1CO1FBQ3JDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQW1CO1FBQ3RDLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFFbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pELE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTSxnREFBZ0QsQ0FBQyxDQUFBO2FBQzFFO1lBRUQsa0JBQWtCO1lBQ2xCLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQTtZQUMxQixJQUFJLEtBQUssR0FBRyxFQUFFLENBQUE7WUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtnQkFDM0MsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQy9EO1lBRUQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBRTVCLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FDZCxJQUFJLEdBQUcsQ0FBQztnQkFDTixJQUFJO2dCQUNKLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtnQkFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO2dCQUNwQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7Z0JBQ2hDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7YUFDM0MsQ0FBQyxDQUNILENBQUE7U0FDRjtJQUNILENBQUM7Q0FDRjtBQTVERCxrQkE0REMifQ==