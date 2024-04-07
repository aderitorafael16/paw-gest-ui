import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

import { db } from '@/db'

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const credentialsProvider = CredentialsProvider({
  async authorize(credentials) {
    const { email, password } = credentialsSchema.parse(credentials)

    const user = await db.query.user.findFirst({
      where(fields, { eq }) {
        return eq(fields.email, email)
      },
    })

    console.log(user)

    if (email === user?.email && password === user.password) {
      return user ?? null
    }

    throw new Error('Unauthorized.')
  },
})
