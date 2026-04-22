import { db } from '#/lib/db'
import { makeCSSCalc, mobileScaling, makeScalingFactor } from '#/lib/scaling'
import { postsTable } from '#/schema'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { eq } from 'drizzle-orm'
import * as z from 'zod/mini'

const getPostByIdSchema = z.object({ id: z.string() })
const getPostById = createServerFn({ method: 'GET' })
  .inputValidator((data: unknown) => getPostByIdSchema.parse(data))
  .handler(({ data }) => {
    return db.select().from(postsTable).where(eq(postsTable.id, data.id))
  })

export const Route = createFileRoute('/$postId')({
  component: RouteComponent,
  loader: ({ params }) => {
    return getPostById({ data: { id: params.postId } })
  },
})

function RouteComponent() {
  const scaling =
    window.innerWidth > 1280 ? makeScalingFactor(3 / 2) : mobileScaling
  const post = Route.useLoaderData()[0]!

  return (
    <main
      className="w-full h-full"
      style={{
        scale: scaling.converse,
        transformOrigin: 'top left',
        maxWidth: makeCSSCalc('100%', scaling.inverse),
      }}
    >
      <section className="max-w-[min(calc(100%-4rem),2048px)] w-full h-full mx-auto">
        <div className="prose prose-invert max-w-none mt-16">
          <h1 className="capitalize">{post.title}</h1>

          <img
            src={`http://picsum.photos/seed/${post.title.replaceAll(' ', '')}/1920/1080`}
            alt="Blog post cover"
            className="w-full aspect-16/5.5 object-bottom rounded-lg object-cover"
          />

          {post.description.split('\n').map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </div>

        <section className="mt-8 pb-8 pt-4 border-t border-foreground/20">
          <p className="text-lg text-muted-foreground">
            <span className="font-mono">Copyright</span>
            &nbsp;&copy;&nbsp;
            <span className="font-mono">2026.</span>
          </p>
        </section>
      </section>
    </main>
  )
}
