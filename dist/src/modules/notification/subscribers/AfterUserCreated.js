// import { IHandle } from "../../../core/domain/events/IHandle";
// import { DomainEvents } from "../../../core/domain/events/DomainEvents";
// import { UserCreatedEvent } from "../../users/domain/events/userCreated";
// import { SendVerificationEmailUseCase } from "../../users/useCases/SendVerificationEmail/SendVerificationEmailUseCase";
// export class AfterUserCreated implements IHandle<UserCreatedEvent> {
//   private sendVerificationEmailUseCase: SendVerificationEmailUseCase;
//   constructor(sendVerificationEmailUseCase: SendVerificationEmailUseCase) {
//     this.setupSubscriptions();
//     this.sendVerificationEmailUseCase = sendVerificationEmailUseCase;
//   }
//   setupSubscriptions(): void {
//     DomainEvents.register(
//       this.onUserCreatedEvent.bind(this),
//       UserCreatedEvent.name
//     );
//   }
//   private async onUserCreatedEvent(event: UserCreatedEvent): Promise<void> {
//     const { user } = event;
//     try {
//       this.sendVerificationEmailUseCase
//         .execute({ user })
//         .then((r) => {
//           console.log(r);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } catch (err) {}
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWZ0ZXJVc2VyQ3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL25vdGlmaWNhdGlvbi9zdWJzY3JpYmVycy9BZnRlclVzZXJDcmVhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRSwyRUFBMkU7QUFDM0UsNEVBQTRFO0FBQzVFLDBIQUEwSDtBQUUxSCx1RUFBdUU7QUFDdkUsd0VBQXdFO0FBRXhFLDhFQUE4RTtBQUM5RSxpQ0FBaUM7QUFDakMsd0VBQXdFO0FBQ3hFLE1BQU07QUFFTixpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLDRDQUE0QztBQUM1Qyw4QkFBOEI7QUFDOUIsU0FBUztBQUNULE1BQU07QUFFTiwrRUFBK0U7QUFDL0UsOEJBQThCO0FBRTlCLFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6Qiw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDRCQUE0QjtBQUM1Qiw4QkFBOEI7QUFDOUIsY0FBYztBQUNkLHVCQUF1QjtBQUN2QixNQUFNO0FBQ04sSUFBSSJ9