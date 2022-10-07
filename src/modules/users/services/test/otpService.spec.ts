
import { redisOtpService } from "..";
import { CodeType, Otp } from "../../domain/otpCode"


describe("Otp Service", () => {
    it("should",async ()=>{
    //    let code = Otp.create({
    //     codeType:CodeType.EmailVerification,
    //     userId: "78kkdiis-kjds",
    //     numberDigits:6,
    //     codeExpiryMinutes:1
    //    })

    //    let codeVal = code.getValue()

    //    console.log(codeVal);
       

    //      let cpde = await otpService.saveOtpCode(codeVal)
      let res = await redisOtpService.verifyUserOtp({
         code: 853852,
          codeType: CodeType.EmailVerification,
          userId: '78kkdiis-kjds',
      })
       
    //   console.log(cpde);
      console.log(res);
      
    })
})