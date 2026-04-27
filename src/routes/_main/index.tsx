import { getPosts } from '#/lib/server-functions'
import { createBreifFromDescription, getPostCoverImageLink } from '#/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/')({
  component: Home,
  loader: () => getPosts(),
})

function Home() {
  const posts = Route.useLoaderData().map((post) => ({
    ...post,
    id: post.id,
    title: post.title,
    coverLink: getPostCoverImageLink(post.id),
    description: createBreifFromDescription(post.description),
  }))

  return (
    <>
      <section className="border-foreground/20 flex items-center justify-between border-b pb-8">
        <div>
          <h1 className="text-2xl font-bold">ZeroPage</h1>
          <p className="text-lg">A blog for developers</p>
        </div>

        <Link to="/auth/login">
          <span className="text-muted-foreground hover:text-foreground underline">
            Want to post something?
          </span>
        </Link>
      </section>

      <section className="grid auto-rows-fr grid-cols-1 gap-12 pt-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
        {posts.map((post, idx) => (
          <Link
            preload={false}
            key={idx}
            to={'/$postId'}
            params={{ postId: post.id }}
          >
            <div className="group space-y-3 border-2">
              <div className="bg-muted w-full">
                <img
                  className="h-full w-full object-cover"
                  src={post.coverLink}
                  alt="Blog post cover"
                />
              </div>
              <div className="space-y-1 p-3">
                <h2 className="text-foreground line-clamp-2 text-xl leading-snug font-semibold capitalize group-hover:underline">
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
