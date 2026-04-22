import { updatePageScaling } from '#/lib/scaling'
import { getPostById } from '#/lib/server-functions'
import { getPostCoverImageLink } from '#/lib/utils'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/$postId')({
  component: RouteComponent,
  loader: ({ params }) => getPostById({ data: { id: params.postId } }),
})

function RouteComponent() {
  updatePageScaling('3/2')
  const post = Route.useLoaderData().at(0)
  if (!post) {
    throw notFound()
  }

  return (
    <div className="prose prose-invert max-w-none pt-8">
      <h1 className="capitalize">{post.title}</h1>

      <img
        src={getPostCoverImageLink(post.id)}
        alt="Blog post cover"
        className="w-full aspect-16/5.5 object-bottom rounded-lg object-cover"
      />

      {post.description
        .split('\n')
        .filter((p) => p)
        .map((p) => (
          <p>{p.trim()}</p>
        ))}
    </div>
  )
}
