import type { Config } from 'drizzle-kit'

import { env } from '@/env'

export default {
  schema: './schema/index.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
} satisfies Config
