"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextUtils = void 0;
const validator_1 = __importDefault(require("validator"));
const jsdom_1 = require("jsdom");
const dompurify_1 = __importDefault(require("dompurify"));
const { window } = new jsdom_1.JSDOM('<!DOCTYPE html>');
const domPurify = (0, dompurify_1.default)(window);
class TextUtils {
    static sanitize(unsafeText) {
        return domPurify.sanitize(unsafeText);
    }
    static validateWebURL(url) {
        return validator_1.default.isURL(url);
    }
    static validateEmailAddress(email) {
        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    static validateTimeStamp(timestamp) {
        return new Date(timestamp).getTime() > 0;
    }
    static createRandomNumericString(numberDigits) {
        const chars = '0123456789';
        let value = '';
        for (let i = numberDigits; i > 0; --i) {
            value += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return value;
    }
}
exports.TextUtils = TextUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL1RleHRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwREFBa0M7QUFDbEMsaUNBQThCO0FBQzlCLDBEQUFrQztBQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxhQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoRCxNQUFNLFNBQVMsR0FBRyxJQUFBLG1CQUFTLEVBQUMsTUFBTSxDQUFDLENBQUM7QUFFcEMsTUFBYSxTQUFTO0lBQ2IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFrQjtRQUN2QyxPQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBVztRQUN0QyxPQUFPLG1CQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBYTtRQUM5Qyw2Q0FBNkM7UUFDN0MsTUFBTSxFQUFFLEdBQUcseUpBQXlKLENBQUM7UUFDckssT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBaUI7UUFDL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxZQUFvQjtRQUMxRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDM0IsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWYsS0FBSyxJQUFJLENBQUMsR0FBRyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNyQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjtBQTdCRCw4QkE2QkMifQ==