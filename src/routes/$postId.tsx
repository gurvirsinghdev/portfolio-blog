import {
  makeCSSCalc,
  makeScalingFactor,
  useClientAwareScaling,
} from '#/lib/scaling'
import { getPostById } from '#/lib/server-functions'
import { getPostCoverImageLink } from '#/lib/utils'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/$postId')({
  component: RouteComponent,
  loader: ({ params }) => {
    return getPostById({ data: { id: params.postId } })
  },
})

function RouteComponent() {
  const scaling = useClientAwareScaling(makeScalingFactor(3 / 2))

  const post = Route.useLoaderData().at(0)
  if (!post) {
    throw notFound()
  }

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
