import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { drizzle as drizzleJs } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '@/env'

import * as schema from './schema'

export let db

if (env.VERCEL_ENV === 'development') {
  const queryClient = postgres(env.DATABASE_URL)

  db = drizzleJs(queryClient, { schema })
} else if (env.VERCEL_ENV === 'production') {
  const client = neon(env.DATABASE_URL)
  db = drizzle(client, { schema })
}
