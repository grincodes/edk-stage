"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OtpVerificationMessage = void 0;
class OtpVerificationMessage {
    constructor(msgProps) {
        this.msgProps = msgProps;
    }
    get subject() {
        return this.msgProps.subject;
    }
    getMessage() {
        const content = "You are receiving this because you (or someone else) have requested the registration on edekee app.\n\n" +
            "Please use the token provided to complete the registration process within 5 minutes of receiving it:\n\n" +
            `OTP ${this.msgProps.otp}\n\n` +
            "If you did not request this, please ignore this email.\n";
        return content;
    }
}
exports.OtpVerificationMessage = OtpVerificationMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwVmVyaWZpY2F0aW9uTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL25vdGlmaWNhdGlvbi9kb21haW4vb3RwVmVyaWZpY2F0aW9uTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLHNCQUFzQjtJQU9qQyxZQUFZLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFORCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFBO0lBQzlCLENBQUM7SUFNRCxVQUFVO1FBQ1IsTUFBTSxPQUFPLEdBQ1gseUdBQXlHO1lBQ3pHLDBHQUEwRztZQUMxRyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNO1lBQzlCLDBEQUEwRCxDQUFBO1FBRTVELE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7Q0FDRjtBQXBCRCx3REFvQkMifQ==