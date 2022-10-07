"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const otpCode_1 = require("../../domain/otpCode");
describe("Otp Service", () => {
    it("should", async () => {
        //    let code = Otp.create({
        //     codeType:CodeType.EmailVerification,
        //     userId: "78kkdiis-kjds",
        //     numberDigits:6,
        //     codeExpiryMinutes:1
        //    })
        //    let codeVal = code.getValue()
        //    console.log(codeVal);
        //      let cpde = await otpService.saveOtpCode(codeVal)
        let res = await __1.redisOtpService.verifyUserOtp({
            code: 853852,
            codeType: otpCode_1.CodeType.EmailVerification,
            userId: '78kkdiis-kjds',
        });
        //   console.log(cpde);
        console.log(res);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3RwU2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvc2VydmljZXMvdGVzdC9vdHBTZXJ2aWNlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQkFBcUM7QUFDckMsa0RBQW9EO0FBR3BELFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLEVBQUUsQ0FBQyxRQUFRLEVBQUMsS0FBSyxJQUFHLEVBQUU7UUFDdEIsNkJBQTZCO1FBQzdCLDJDQUEyQztRQUMzQywrQkFBK0I7UUFDL0Isc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixRQUFRO1FBRVIsbUNBQW1DO1FBRW5DLDJCQUEyQjtRQUczQix3REFBd0Q7UUFDdEQsSUFBSSxHQUFHLEdBQUcsTUFBTSxtQkFBZSxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLEVBQUUsTUFBTTtZQUNYLFFBQVEsRUFBRSxrQkFBUSxDQUFDLGlCQUFpQjtZQUNwQyxNQUFNLEVBQUUsZUFBZTtTQUMxQixDQUFDLENBQUE7UUFFSix1QkFBdUI7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=