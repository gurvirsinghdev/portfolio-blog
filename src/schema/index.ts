import * as p from "drizzle-orm/pg-core";

export const usersTable = p.pgTable("users", {
  id: p.uuid().primaryKey().defaultRandom(),
  name: p.text().notNull(),
  email: p.text().notNull().unique(),
  password: p.text().notNull(),
});
