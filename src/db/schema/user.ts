import { relations } from 'drizzle-orm'
import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core'

import { account, session } from '.'

export const instituteType = pgEnum('InstituteType', [
  'PRIMARY',
  'SECUNDARY',
  'FACULTY',
  'UNIVERSITY',
  'FORMATIONCENTER',
])

export const user = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    instituteName: text('institute_name').notNull(),
    type: instituteType('type').notNull(),
    address: text('address').notNull(),
    phoneNumber: text('phone_number').notNull(),
    websiteUrl: text('website_url').notNull(),
    email: text('email').notNull(),
    emailVerified: timestamp('email_verified'),
    image: text('image').notNull(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => {
    return {
      emailUnique: uniqueIndex().on(table.email),
    }
  },
)

export const userRelations = relations(user, ({ many }) => ({
  sessions: many(session),
  account: many(account),
}))
