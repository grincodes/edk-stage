import express from "express"
import { middleware } from "../../../../../infra/http"
import { Middleware } from "../../../../../infra/http/utils/Middleware"
import { createUserController } from "../../../useCases/createUser"
import { deleteUserController } from "../../../useCases/deleteUser"
import { loginController } from "../../../useCases/login"
import { logoutController } from "../../../useCases/logout"
// import { resendOtpController } from "../../../useCases/resendOtp"
import { verifyOtpController } from "../../../useCases/verifyOtp"

const userRouter = express.Router()

userRouter.post("/", (req, res) => createUserController.execute(req, res))

userRouter.post("/login", middleware.ensureAuthRole(), (req, res) => loginController.execute(req, res))

userRouter.post("/logout", middleware.ensureAuthenticated(), (req, res) => logoutController.execute(req, res))

userRouter.delete("/:userId", middleware.ensureAuthenticated(), (req, res) => deleteUserController.execute(req, res))

// userRouter.post("/resend-otp", [middleware.ensureAuthenticated(), Middleware.createRateLimit(10, 1)], (req: any, res) => {
//   resendOtpController.execute(req, res, req.decoded)
// })

userRouter.post("/verify-otp", middleware.ensureAuthenticated(), (req: any, res) => {
  verifyOtpController.execute(req, res, req.decoded)
})

export { userRouter }

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
