import CredentialsProvider from 'next-auth/providers/credentials'
import { z } from 'zod'

import { db } from '@/db'

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const credentialsProvider = CredentialsProvider({
  credentials: {
    email: {
      label: 'E-mail',
      type: 'email',
      placeholder: 'use aderitobento16@gmail.com',
      value: 'aderitobento16@gmail.com',
    },
    password: {
      label: 'Password',
      type: 'password',
      value: '12345678',
      placeholder: 'use 12345678',
    },
  },
  async authorize(credentials) {
    const { email, password } = credentialsSchema.parse(credentials)
    const user = await db.query.user.findFirst({
      where(fields, { eq }) {
        return eq(fields.email, email)
      },
    })
    if (email === user?.email && password === user.password) {
      return user ?? null
    }

    throw new Error('Unauthorized.')
  },
})
