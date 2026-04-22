import { updatePageScaling } from '#/lib/scaling'
import { getPosts } from '#/lib/server-functions'
import { createBreifFromDescription, getPostCoverImageLink } from '#/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  component: Home,
  loader: () => getPosts(),
})

function Home() {
  updatePageScaling('7/6')
  const posts = Route.useLoaderData().map((post) => ({
    ...post,
    id: post.id,
    title: post.title,
    coverLink: getPostCoverImageLink(post.id),
    description: createBreifFromDescription(post.description),
  }))

  return (
    <>
      <section className="flex items-center justify-between border-b pb-8 border-foreground/20">
        <div>
          <h1 className="text-2xl font-bold">ZeroPage</h1>
          <p className="text-lg">A blog for developers</p>
        </div>

        <Link to="/post/create">
          <span className="underline text-muted-foreground hover:text-foreground">
            Want to post something?
          </span>
        </Link>
      </section>

      <section className="grid gap-12 md:gap-10 lg:gap-8 pt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {posts.map((post, idx) => (
          <Link
            preload={false}
            key={idx}
            to={'/$postId'}
            params={{ postId: post.id }}
          >
            <div className="space-y-3 group border-2">
              <div className="bg-muted w-full">
                <img
                  className="w-full h-full object-cover"
                  src={post.coverLink}
                  alt="Blog post cover"
                />
              </div>
              <div className="space-y-1 p-3">
                <h2 className="text-xl capitalize group-hover:underline line-clamp-2 font-semibold text-foreground leading-snug">
                  {post.title}
                </h2>
                <p className="text-surface line-clamp-3">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </>
  )
}
