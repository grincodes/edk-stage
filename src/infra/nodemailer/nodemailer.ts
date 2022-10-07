// import * as nodemailer from "nodemailer"
// import { nodeMailerConfig } from "../../config"
// import { Mailer, MailerSendHtmlRequestProps, MailerSendRequestProps } from "../../core/infra/Mailer"

// export class NodeMailerService implements Mailer {
//   private _transporter

//   constructor() {
//     this._transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: nodeMailerConfig.user,
//         pass: nodeMailerConfig.pass,
//       },
//       tls: {
//         rejectUnauthorized: false,
//       },
//     })
//   }
//   sendHtmlMail(sendHtmlMailProps: MailerSendHtmlRequestProps): Promise<any> {
//     const options = {
//       from: nodeMailerConfig.sender,
//       to: sendHtmlMailProps.to.value,
//       subject: sendHtmlMailProps.subject,
//       html: sendHtmlMailProps.html,
//     }

//     return this._transporter.sendMail(options)
//   }

//   public sendMail(sendMailProps: MailerSendRequestProps): Promise<void> {
//     const options = {
//       from: nodeMailerConfig.sender,
//       to: sendMailProps.to.value,
//       subject: sendMailProps.subject,
//       text: sendMailProps.text,
//     }

//     return this._transporter.sendMail(options)
//   }
// }
