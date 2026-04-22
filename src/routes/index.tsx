import { db } from '#/lib/db'
import { makeCSSCalc, makeScalingFactor, mobileScaling } from '#/lib/scaling'
import { postsTable } from '#/schema'
import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { desc } from 'drizzle-orm'

const getPosts = createServerFn({ method: 'GET' }).handler(() =>
  db.select().from(postsTable).orderBy(desc(postsTable.createdAt)),
)

export const Route = createFileRoute('/')({
  component: Home,
  loader: () => getPosts(),
})

function Home() {
  const scaling =
    window.innerWidth > 1280 ? makeScalingFactor(3.5 / 3) : mobileScaling
  const posts = Route.useLoaderData().map((post) => ({
    ...post,
    description: (post.description.trim().split('\n')[0] ?? '').trim(),
  }))

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
        <section className="mb-8 py-8 border-b border-foreground/20">
          <h1 className="text-2xl font-bold">ZeroPage</h1>
          <p className="text-lg">A blog for developers</p>
        </section>

        <section className="grid gap-12 md:gap-10 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {posts.map((post, idx) => (
            <Link key={idx} to={'/$postId'} params={{ postId: post.id }}>
              <div className="space-y-3 group border-2">
                <div
                  className="bg-muted w-full"
                  style={{
                    minHeight: makeCSSCalc('328px', scaling.inverse),
                    height: makeCSSCalc('328px', scaling.inverse),
                    maxHeight: makeCSSCalc('328px', scaling.inverse),
                  }}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/seed/${post.title.replaceAll(' ', '')}/1280/720`}
                    alt="Blog post cover"
                  />
                </div>
                <div className="space-y-1 p-3">
                  <h2 className="text-xl capitalize group-hover:underline line-clamp-2 font-semibold text-foreground leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-surface line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>

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
