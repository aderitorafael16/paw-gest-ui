import EmailProvider from 'next-auth/providers/nodemailer'

import { env } from '@/env'

const emailProvider = EmailProvider({
  server: env.EMAIL_SERVER,
  from: env.EMAIL_FROM,
})
