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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0Q3VycmVudFVzZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvdXNlQ2FzZXMvZ2V0Q3VycmVudFVzZXIvR2V0Q3VycmVudFVzZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1EQUFtRDtBQUNuRCxxQ0FBcUM7QUFDckMsMEVBQTBFO0FBRTFFLGlFQUFpRTtBQUNqRSx3Q0FBd0M7QUFFeEMsK0NBQStDO0FBQy9DLGVBQWU7QUFDZiw4QkFBOEI7QUFDOUIsTUFBTTtBQUVOLHlDQUF5QztBQUN6Qyw4Q0FBOEM7QUFFOUMsWUFBWTtBQUNaLGlFQUFpRTtBQUVqRSwrQkFBK0I7QUFDL0IsdUVBQXVFO0FBQ3ZFLGlCQUFpQjtBQUNqQiwrQ0FBK0M7QUFDL0MsZ0NBQWdDO0FBQ2hDLHNDQUFzQztBQUN0QyxjQUFjO0FBQ2QsVUFBVTtBQUVWLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJIn0=