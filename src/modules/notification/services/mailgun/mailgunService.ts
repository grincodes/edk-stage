// import Client from "mailgun.js/client";
// import { mailGunConfig } from "../../../../config";
// import { INotificationMessage } from "../../domain/notificationMessage";
// import { OtpVerificationMessage } from "../../domain/otpVerificationMessage";

// import { IMailerService } from "../mailerService";

// export class MailGunService implements IMailerService {
//    protected mgClient: Client;

//   constructor(mgClient: Client) {
//     this.mgClient = mgClient;
//   }

//   async sendEmail(to: string, message: string): Promise<void> {
//      await this.mgClient.messages.create(mailGunConfig.domain, {
//        from: "Excited User <mailgun@sandbox-123.mailgun.org>",
//        to: [to],
//        subject: OtpVerificationMessage.subject,
//        text: message,
//      });
//   }
// }
