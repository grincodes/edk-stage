const nodeMailerConfig = {
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS,
  sender: process.env.ADMIN_EMAIL_SENDER,
}

export { nodeMailerConfig }
