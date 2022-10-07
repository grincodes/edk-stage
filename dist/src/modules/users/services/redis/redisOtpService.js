"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisOtpCodeService = void 0;
const abstractRedisClient_1 = require("./abstractRedisClient");
/**
 * @class OTPCODEClient
 * @extends AbstractRedisClient
 * @desc This class is responsible for persisting otps to redis
 * and for signing tokens. It should also be responsible for determining their
 * validity.
 */
class RedisOtpCodeService extends abstractRedisClient_1.AbstractRedisClient {
    constructor(redisClient) {
        super(redisClient);
        this.HashName = "activeOtpCode";
    }
    async verifyUserOtp(code) {
        const codeRes = await this.getCode(code);
        return codeRes;
    }
    async saveOtpCode(codeProps) {
        if (codeProps.codeExpiryMinutes) {
            this.setTokenExpiryTime(codeProps.codeExpiryMinutes);
        }
        return this.set(this.constructKey({
            code: codeProps.code,
            codeType: codeProps.codeType,
            userId: codeProps.userId,
        }), codeProps.code);
    }
    constructKey(otp) {
        return `code-.${otp.code}.${otp.codeType}.${this.HashName}.${otp.userId}`;
    }
    async clearAllCodes() {
        const allKeys = await this.getAllKeys(`*${this.HashName}*`);
        return Promise.all(allKeys.map((key) => this.deleteOne(key)));
    }
    async getCodes(userId) {
        const keyValues = await this.getAllKeyValue(`*${this.HashName}.${userId}`);
        return keyValues.map((kv) => kv.value);
    }
    async getCode(otp) {
        return this.getOne(this.constructKey(otp));
    }
    async clearCode(otp) {
        return this.deleteOne(this.constructKey(otp));
    }
}
exports.RedisOtpCodeService = RedisOtpCodeService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXNPdHBTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvc2VydmljZXMvcmVkaXMvcmVkaXNPdHBTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLCtEQUEyRDtBQVEzRDs7Ozs7O0dBTUc7QUFFSCxNQUFhLG1CQUFvQixTQUFRLHlDQUFtQjtJQUcxRCxZQUFZLFdBQTRCO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUhiLGFBQVEsR0FBRyxlQUFlLENBQUE7SUFJakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBd0I7UUFDakQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXhDLE9BQU8sT0FBTyxDQUFBO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQXVCO1FBQzlDLElBQUksU0FBUyxDQUFDLGlCQUFpQixFQUFFO1lBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtTQUNyRDtRQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FDYixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7WUFDNUIsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3pCLENBQUMsRUFDRixTQUFTLENBQUMsSUFBSSxDQUNmLENBQUE7SUFDSCxDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQXVCO1FBQzFDLE9BQU8sU0FBUyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDM0UsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhO1FBQ3hCLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO1FBQzNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFjO1FBQ2xDLE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxFQUFFLENBQUMsQ0FBQTtRQUMxRSxPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUF1QjtRQUMxQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQXVCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFDL0MsQ0FBQztDQUNGO0FBakRELGtEQWlEQyJ9