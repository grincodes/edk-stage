"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = require("../../../../../infra/http");
const createUser_1 = require("../../../useCases/createUser");
const deleteUser_1 = require("../../../useCases/deleteUser");
const login_1 = require("../../../useCases/login");
const logout_1 = require("../../../useCases/logout");
// import { resendOtpController } from "../../../useCases/resendOtp"
const verifyOtp_1 = require("../../../useCases/verifyOtp");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post("/", (req, res) => createUser_1.createUserController.execute(req, res));
userRouter.post("/login", http_1.middleware.ensureAuthRole(), (req, res) => login_1.loginController.execute(req, res));
userRouter.post("/logout", http_1.middleware.ensureAuthenticated(), (req, res) => logout_1.logoutController.execute(req, res));
userRouter.delete("/:userId", http_1.middleware.ensureAuthenticated(), (req, res) => deleteUser_1.deleteUserController.execute(req, res));
// userRouter.post("/resend-otp", [middleware.ensureAuthenticated(), Middleware.createRateLimit(10, 1)], (req: any, res) => {
//   resendOtpController.execute(req, res, req.decoded)
// })
userRouter.post("/verify-otp", http_1.middleware.ensureAuthenticated(), (req, res) => {
    verifyOtp_1.verifyOtpController.execute(req, res, req.decoded);
});
// import express from 'express'
// import { createUserController } from '../../../useCases/createUser';
// import { deleteUserController } from '../../../useCases/deleteUser';
// import { getUserByUserNameController } from '../../../useCases/getUserByUserName';
// import { loginController } from '../../../useCases/login';
// import { middleware } from '../../../../../shared/infra/http';
// import { getCurrentUserController } from '../../../useCases/getCurrentUser';
// import { refreshAccessTokenController } from '../../../useCases/refreshAccessToken';
// import { logoutController } from '../../../useCases/logout';
// const userRouter = express.Router();
// userRouter.post('/',
//   (req, res) => createUserController.execute(req, res)
// );
// userRouter.get('/me',
//   middleware.ensureAuthenticated(),
//   (req, res) => getCurrentUserController.execute(req, res)
// )
// userRouter.post('/login',
//   (req, res) => loginController.execute(req, res)
// )
// userRouter.post('/logout',
//   middleware.ensureAuthenticated(),
//   (req, res) => logoutController.execute(req, res)
// )
// userRouter.post('/token/refresh',
//   (req, res) => refreshAccessTokenController.execute(req, res)
// )
// userRouter.delete('/:userId',
//   middleware.ensureAuthenticated(),
//   (req, res) => deleteUserController.execute(req, res)
// )
// userRouter.get('/:username',
//   middleware.ensureAuthenticated(),
//   (req, res) => getUserByUserNameController.execute(req, res)
// )
// export { userRouter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9pbmZyYS9odHRwL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBNkI7QUFDN0Isb0RBQXNEO0FBRXRELDZEQUFtRTtBQUNuRSw2REFBbUU7QUFDbkUsbURBQXlEO0FBQ3pELHFEQUEyRDtBQUMzRCxvRUFBb0U7QUFDcEUsMkRBQWlFO0FBRWpFLE1BQU0sVUFBVSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFrQjFCLGdDQUFVO0FBaEJuQixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLGlDQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUUxRSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxpQkFBVSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsdUJBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFdkcsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQVUsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMseUJBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRTlHLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLGlCQUFVLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLGlDQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVySCw2SEFBNkg7QUFDN0gsdURBQXVEO0FBQ3ZELEtBQUs7QUFFTCxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxpQkFBVSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDakYsK0JBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ3BELENBQUMsQ0FBQyxDQUFBO0FBSUYsZ0NBQWdDO0FBQ2hDLHVFQUF1RTtBQUN2RSx1RUFBdUU7QUFDdkUscUZBQXFGO0FBQ3JGLDZEQUE2RDtBQUM3RCxpRUFBaUU7QUFDakUsK0VBQStFO0FBQy9FLHVGQUF1RjtBQUN2RiwrREFBK0Q7QUFFL0QsdUNBQXVDO0FBRXZDLHVCQUF1QjtBQUN2Qix5REFBeUQ7QUFDekQsS0FBSztBQUVMLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFDdEMsNkRBQTZEO0FBQzdELElBQUk7QUFFSiw0QkFBNEI7QUFDNUIsb0RBQW9EO0FBQ3BELElBQUk7QUFFSiw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLHFEQUFxRDtBQUNyRCxJQUFJO0FBRUosb0NBQW9DO0FBQ3BDLGlFQUFpRTtBQUNqRSxJQUFJO0FBRUosZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUN0Qyx5REFBeUQ7QUFDekQsSUFBSTtBQUVKLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsZ0VBQWdFO0FBQ2hFLElBQUk7QUFFSix5QkFBeUIifQ==