import { relations } from 'drizzle-orm'
import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from 'drizzle-orm/pg-core'

import { account, session, user } from '.'

export const instituteType = pgEnum('InstituteType', [
  'PRIMARY',
  'SECUNDARY',
  'FACULTY',
  'UNIVERSITY',
  'FORMATIONCENTER',
])

export const company = pgTable(
  'company',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    instituteName: text('institute_name').notNull(),
    type: instituteType('type').notNull(),
    address: text('address').notNull(),
    phoneNumber: text('phone_number').notNull(),
    websiteUrl: text('website_url').notNull(),
    email: text('email').notNull(),
    image: text('image'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => {
    return {
      emailUnique: uniqueIndex().on(table.email),
    }
  },
)

export const companyRelations = relations(company, ({ many }) => ({
  sessions: many(session),
  account: many(account),
  members: many(user),
}))
