import { authConfig } from "./auth"

import { nodeMailerConfig } from "./nodemailer"

const isProduction = process.env.IS_PRODUCTION === "true"

export { isProduction, authConfig, nodeMailerConfig }
