import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    DATABASE_URL: z.string().min(1),
    DIRECT_DATABASE_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string().url().min(1),
  },
  shared: {
    VERCEL_ENV: z
      .enum(['production', 'preview', 'development'])
      .default('development'),
  },
  runtimeEnv: {
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
  emptyStringAsUndefined: true,
})
