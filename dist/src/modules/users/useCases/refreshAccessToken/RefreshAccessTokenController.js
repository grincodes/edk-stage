// import { BaseController } from "../../../../core/infra/BaseController";
// import { RefreshAccessToken } from "./RefreshAccessToken";
// import { RefreshAccessTokenDTO } from "./RefreshAccessTokenDTO";
// import { RefreshAccessTokenErrors } from "./RefreshAccessTokenErrors";
// import { JWTToken } from "../../domain/jwt";
// import * as express from 'express'
// export class RefreshAccessTokenController extends BaseController {
//   private useCase: RefreshAccessToken;
//   constructor (useCase: RefreshAccessToken) {
//     super();
//     this.useCase = useCase;
//   }
//   async executeImpl (): Promise<any> {
//     const dto: RefreshAccessTokenDTO = this.req.body as RefreshAccessTokenDTO;
//     try {
//       const result = await this.useCase.execute(dto);
//       if (result.isLeft()) {
//         const error = result.value;
//         switch (error.constructor) {
//           case RefreshAccessTokenErrors.RefreshTokenNotFound:
//             return this.notFound(this.res, error.getErrorValue().message)
//             case RefreshAccessTokenErrors.UserNotFoundOrDeletedError:
//               return this.notFound(this.res, error.getErrorValue().message)
//           default:
//             return this.fail(this.res, error.getErrorValue().message);
//         }
//       } else {
//         const accessToken: JWTToken = result.value.getValue() as JWTToken;
//         return this.ok<LoginDTOResponse>(res, {
//           refreshToken: dto.refreshToken,
//           accessToken: accessToken
//         });
//       }
//     } catch (err) {
//       return this.fail(res, err)
//     }
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmcmVzaEFjY2Vzc1Rva2VuQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL3JlZnJlc2hBY2Nlc3NUb2tlbi9SZWZyZXNoQWNjZXNzVG9rZW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBFQUEwRTtBQUMxRSw2REFBNkQ7QUFDN0QsbUVBQW1FO0FBQ25FLHlFQUF5RTtBQUN6RSwrQ0FBK0M7QUFFL0MscUNBQXFDO0FBRXJDLHFFQUFxRTtBQUNyRSx5Q0FBeUM7QUFFekMsZ0RBQWdEO0FBQ2hELGVBQWU7QUFDZiw4QkFBOEI7QUFDOUIsTUFBTTtBQUVOLHlDQUF5QztBQUN6QyxpRkFBaUY7QUFFakYsWUFBWTtBQUNaLHdEQUF3RDtBQUV4RCwrQkFBK0I7QUFDL0Isc0NBQXNDO0FBRXRDLHVDQUF1QztBQUN2QyxnRUFBZ0U7QUFDaEUsNEVBQTRFO0FBQzVFLHdFQUF3RTtBQUN4RSw4RUFBOEU7QUFDOUUscUJBQXFCO0FBQ3JCLHlFQUF5RTtBQUN6RSxZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLDZFQUE2RTtBQUM3RSxrREFBa0Q7QUFDbEQsNENBQTRDO0FBQzVDLHFDQUFxQztBQUNyQyxjQUFjO0FBQ2QsVUFBVTtBQUVWLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJIn0=