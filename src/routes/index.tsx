import { makeCSSCalc, makeScalingFactor, mobileScaling } from '#/lib/scaling'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const scaling = window.innerWidth > 1280 ? makeScalingFactor(3.5 / 3) : mobileScaling;
  return (
    <main className='w-full h-full' style={{ scale: scaling.converse, transformOrigin: 'top left', maxWidth: makeCSSCalc('100%', scaling.inverse) }}>
      <section className='max-w-[min(calc(100%-4rem),2048px)] w-full h-full mx-auto'>
        <section className='mb-8 py-8 border-b border-foreground/20'>
          <h1 className='text-2xl font-bold'>ZeroPage</h1>
          <p className='text-lg'>A blog for developers</p>
        </section>

        <section className='grid gap-12 md:gap-10 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
          {[1, 2, 3, 4, 5, 6, 7].map((post, idx) => (
            <Link key={idx} to={'/$postId'} params={{ postId: post.toString() }}>
              <div className='space-y-3 group border-2'>
                <div className='bg-muted w-full' style={{
                  minHeight: makeCSSCalc('328px', scaling.inverse),
                  height: makeCSSCalc('328px', scaling.inverse),
                  maxHeight: makeCSSCalc('328px', scaling.inverse)
                }}>
                  <img className='w-full h-full object-cover' src={`https://picsum.photos/1280/720?${idx}`} alt='Blog post cover' />
                </div>
                <div className='space-y-1 p-3'>
                  <h2 className='text-xl group-hover:underline font-semibold text-foreground leading-snug'>How Remote Work Is Changing Small Town Economies</h2>
                  <p className='text-surface'>As more people leave big cities for quieter communities, small towns are
                    seeing unexpected growth. Here’s how remote work is reshaping local
                    businesses, housing, and daily life.</p>
                </div>
              </div>

            </Link>
          ))}
        </section>

        <section className='mt-8 pb-8 pt-4 border-t border-foreground/20'>
          <p className='text-lg text-muted-foreground'>
            <span className='font-mono'>Copyright</span>
            &nbsp;&copy;&nbsp;
            <span className='font-mono'>2026.</span>
          </p>
        </section>
      </section>
    </main >
  )
}
