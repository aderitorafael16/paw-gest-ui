import { neon, neonConfig } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import { migrate } from 'drizzle-orm/neon-http/migrator'
import { drizzle as drizzleJs } from 'drizzle-orm/postgres-js'
import { migrate as migrateJs } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { env } from '@/env'

neonConfig.fetchConnectionCache = true

if (!process.env.DIRECT_DATABASE_URL) {
  throw new Error('Invalid environment variable DIRECT_DATABASE_URL')
}

if (env.VERCEL_ENV === 'development') {
  const migrationClient = postgres(process.env.DIRECT_DATABASE_URL, { max: 1 })

  migrateJs(drizzleJs(migrationClient), {
    migrationsFolder: __dirname.concat('/migrations'),
  }).then(() => {
    console.log('Migrations applied successfully!')
  })
} else if (env.VERCEL_ENV === 'production') {
  const connection = neon(process.env.DIRECT_DATABASE_URL)
  const db = drizzle(connection)

  migrate(db, { migrationsFolder: __dirname.concat('/migrations') }).then(
    () => {
      console.log('Migrations applied successfully!')
    },
  )
}
