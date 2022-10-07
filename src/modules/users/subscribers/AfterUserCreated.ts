import { IHandle } from "../../../core/domain/events/IHandle"

import { DomainEvents } from "../../../core/domain/events/DomainEvents"

import { UserCreatedEvent } from "../domain/events/userCreated"
import { AssignUserRole } from "../useCases/assignUserRole/AssignUserRole"
// import { SendVerificationEmailUseCase } from "../useCases/sendVerificationEmail/SendVerificationEmailUseCase"

export class AfterUserCreated implements IHandle<UserCreatedEvent> {
  private assignUserRole: AssignUserRole
  // private sendVerificationEmail: SendVerificationEmailUseCase

  constructor(assignUserRole: AssignUserRole) {
    this.setupSubscriptions()
    this.assignUserRole = assignUserRole
    // this.sendVerificationEmail = sendVerificationEmail
  }

  setupSubscriptions(): void {
    DomainEvents.register(this.onUserCreatedEvent.bind(this), UserCreatedEvent.name)
  }

  private async onUserCreatedEvent(event: UserCreatedEvent): Promise<void> {
    const { user } = event

    this.assignUserRole
      .execute({ user })
      .then((r) => {
        console.log(r)
      })
      .catch((err) => {
        console.log(err)
      })

    // this.sendVerificationEmail
    //   .execute({ user })
    //   .then((r) => {
    //     console.log(r)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
}
