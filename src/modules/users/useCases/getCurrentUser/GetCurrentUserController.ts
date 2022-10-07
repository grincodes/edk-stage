// import { UserMap } from "../../mappers/userMap";
// import * as express from 'express'
// import { BaseController } from "../../../../core/infra/BaseController";

// export class GetCurrentUserController extends BaseController {
//   private useCase: GetUserByUserName;

//   constructor (useCase: GetUserByUserName) {
//     super();
//     this.useCase = useCase;
//   }

//   async executeImpl (): Promise<any> {
//     const { email } = this.req.decoded as ;

//     try {
//       const result = await this.useCase.execute({ username });

//       if (result.isLeft()) {
//         return this.fail(res, result.value.getErrorValue().message);
//       } else {
//         const user = result.value.getValue()
//         return this.ok(res, {
//           user: UserMap.toDTO(user)
//         });
//       }

//     } catch (err) {
//       return this.fail(res, err)
//     }
//   }
// }
