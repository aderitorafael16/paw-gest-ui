'use server'

import { z } from 'zod'

import { signIn } from '@/auth'

const signInFormSchema = z.object({
  email: z.string().email({ message: 'use aderitobento16@gmail.com' }),
  password: z
    .string()
    .min(8, { message: 'use 12345678' })
    .max(12, { message: 'use 12345678' }),
})

export async function HandleSignInWithEmail(data: FormData) {
  const { email, password } = signInFormSchema.parse(Object.fromEntries(data))

  await signIn('credentials', {
    email,
    password,
    redirectTo: '/dashboard',
  })
}
