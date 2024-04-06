import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    DIRECT_DATABASE_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().url().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  emptyStringAsUndefined: true,
})
