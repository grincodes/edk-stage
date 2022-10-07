import { Email } from "../../shared/domain_types/Email"

export interface Mailer {
  sendMail(mailReqProps: MailerSendRequestProps): Promise<any>
  sendHtmlMail(mailReqPros: MailerSendHtmlRequestProps): Promise<any>
}

export interface MailerSendRequestProps {
  to: Email
  text: string
  subject: string
}

export interface MailerSendHtmlRequestProps {
  to: Email
  html: string
  subject: string
}
