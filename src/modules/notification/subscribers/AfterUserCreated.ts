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
