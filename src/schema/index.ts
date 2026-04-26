import * as p from 'drizzle-orm/pg-core';
import { user } from './auth-schema';

export const postsTable = p.pgTable('posts', {
  id: p.uuid().primaryKey().defaultRandom(),
  user_id: p
    .text()
    .notNull()
    .references(() => user.id),
  title: p.text().notNull().unique(),
  description: p.text().notNull(),
  createdAt: p.timestamp().defaultNow(),
  updatedAt: p.timestamp().defaultNow(),
});
