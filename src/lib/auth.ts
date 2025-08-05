import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import { openAPI } from 'better-auth/plugins'
import { sendEmail } from './email'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'mysql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: 'Verify your email address',
        text: `Click the link to verify your email: ${url}`,
      })
    },
  },
  plugins: [openAPI()],
})
