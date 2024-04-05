import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_VERCEL_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
  DATABASE_URL: z.string().min(1),
  DIRECT_DATABASE_URL: z.string().min(1),
})

export const env = envSchema.parse(process.env)
