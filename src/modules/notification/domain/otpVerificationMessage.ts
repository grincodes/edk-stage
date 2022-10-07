import { INotificationMessage, MsgProps } from "./notificationMessage"

export class OtpVerificationMessage implements INotificationMessage {
  msgProps: MsgProps

  get subject(): string {
    return this.msgProps.subject
  }

  constructor(msgProps: MsgProps) {
    this.msgProps = msgProps
  }

  getMessage(): string {
    const content =
      "You are receiving this because you (or someone else) have requested the registration on edekee app.\n\n" +
      "Please use the token provided to complete the registration process within 5 minutes of receiving it:\n\n" +
      `OTP ${this.msgProps.otp}\n\n` +
      "If you did not request this, please ignore this email.\n"

    return content
  }
}
