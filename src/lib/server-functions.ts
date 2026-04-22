import { createServerFn } from '@tanstack/react-start'
import { db } from './db'
import { postsTable } from '#/schema'
import { desc, eq } from 'drizzle-orm'
import { z } from 'zod/mini'

export const getPosts = createServerFn({
  method: 'GET',
}).handler(function () {
  return db.select().from(postsTable).orderBy(desc(postsTable.updatedAt))
})

const getPostByIdSchema = z.object({
  id: z.string(),
})

export const getPostById = createServerFn({
  method: 'GET',
})
  .inputValidator((data: unknown) => getPostByIdSchema.parse(data))
  .handler(function ({ data }) {
    return db.select().from(postsTable).where(eq(postsTable.id, data.id))
  })
