import { account, session, user, verification } from '#/schema/auth-schema';
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    user,
    account,
    verification,
    session,
  },
});
