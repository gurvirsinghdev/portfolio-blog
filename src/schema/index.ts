import * as p from 'drizzle-orm/pg-core'

export const usersTable = p.pgTable('users', {
  id: p.uuid().primaryKey().defaultRandom(),
  name: p.text().notNull(),
  email: p.text().notNull().unique(),
  password: p.text().notNull(),
})

export const postsTable = p.pgTable('posts', {
  id: p.uuid().primaryKey().defaultRandom(),
  user_id: p
    .uuid()
    .notNull()
    .references(() => usersTable.id),
  title: p.text().notNull().unique(),
  description: p.text().notNull(),
  createdAt: p.timestamp().defaultNow(),
  updatedAt: p.timestamp().defaultNow(),
})
