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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9kZW1haWxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYS9ub2RlbWFpbGVyL25vZGVtYWlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLGtEQUFrRDtBQUNsRCx1R0FBdUc7QUFFdkcscURBQXFEO0FBQ3JELHlCQUF5QjtBQUV6QixvQkFBb0I7QUFDcEIsdURBQXVEO0FBQ3ZELDBCQUEwQjtBQUMxQixnQkFBZ0I7QUFDaEIsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2QyxXQUFXO0FBQ1gsZUFBZTtBQUNmLHFDQUFxQztBQUNyQyxXQUFXO0FBQ1gsU0FBUztBQUNULE1BQU07QUFDTixnRkFBZ0Y7QUFDaEYsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2Qyx3Q0FBd0M7QUFDeEMsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0QyxRQUFRO0FBRVIsaURBQWlEO0FBQ2pELE1BQU07QUFFTiw0RUFBNEU7QUFDNUUsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLGtDQUFrQztBQUNsQyxRQUFRO0FBRVIsaURBQWlEO0FBQ2pELE1BQU07QUFDTixJQUFJIn0=