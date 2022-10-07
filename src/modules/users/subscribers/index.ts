import { assignUserRole } from "../useCases/assignUserRole"
//import { sendVerficationMail } from "../useCases/sendVerificationEmail"
import { AfterUserCreated } from "./AfterUserCreated"

// Subscribers
// new AfterUserCreated(assignUserRole, sendVerficationMail)
new AfterUserCreated(assignUserRole)