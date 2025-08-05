import 'dotenv/config'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

const transporter = nodemailer.createTransport(
  {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  {
    from: {
      name: process.env.MAIL_FROM_NAME || 'MAIL_FROM_NAME',
      address: process.env.MAIL_FROM_ADDRESS || 'MAIL_FROM_ADDRESS',
    },
  }
)

export async function sendEmail(mailOptions: Mail.Options) {
  await transporter.sendMail(mailOptions)
}
