import { makeCSSCalc, mobileScaling, makeScalingFactor } from '#/lib/scaling'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
  const scaling = window.innerWidth > 1280 ? makeScalingFactor(3 / 2) : mobileScaling;
  return (
    <main className='w-full h-full' style={{ scale: scaling.converse, transformOrigin: 'top left', maxWidth: makeCSSCalc('100%', scaling.inverse) }}>
      <section className='max-w-[min(calc(100%-4rem),2048px)] w-full h-full mx-auto'>
        <div className='prose prose-invert max-w-none mt-16'>
          <h1>How Remote Work Is Changing Small Town Economies</h1>

          <img src='http://picsum.photos/1280/720' alt='Blog post cover' className='w-full aspect-16/5.5 rounded-lg object-cover' />

          <p>
            Not long ago, small towns were often defined by what they lacked—fewer job opportunities, limited infrastructure, and a steady outflow of younger residents heading toward big cities. Today, that narrative is shifting. Remote work has untethered millions of people from traditional offices, and in doing so, it’s quietly reshaping the economic and social fabric of smaller communities.
          </p>

          <p>
            One of the most visible changes is population growth. Professionals who once needed to live near urban job centers are choosing quieter, more affordable towns without sacrificing their careers. This migration brings new energy—and new expectations. Coffee shops become workspaces. Libraries evolve into co-working hubs. Reliable high-speed internet is no longer a luxury; it’s essential infrastructure.
          </p>

          <p>
            Local businesses are among the first to feel the impact. An increase in residents with stable, often higher-than-local incomes means more spending power in the community. Restaurants, boutiques, and service providers see a steady uptick in demand. In some cases, entirely new businesses emerge to cater to remote workers—think shared office spaces, tech support services, or niche fitness studios.
          </p>

          <p>
            Housing, however, tells a more complicated story. Increased demand can drive up property values and rental prices, which is great for homeowners but challenging for long-time residents. Towns that were once highly affordable may begin to face the same affordability pressures as larger cities. Managing this balance—growth without displacement—has become a key concern for local governments.
          </p>

          <p>
            There’s also a cultural shift underway. New residents often bring different lifestyles, expectations, and perspectives. This can lead to a more diverse and dynamic community, but it can also create friction if change happens too quickly. Successful towns tend to be the ones that find ways to integrate newcomers while preserving the character that made the place attractive in the first place.
          </p>

          <p>
            Infrastructure is another area under pressure. Roads, schools, healthcare services, and internet capacity all need to keep pace with population changes. Some towns are embracing this moment as an opportunity to invest and modernize, while others struggle to adapt quickly enough.
          </p>

          <p>
            Despite the challenges, the overall outlook is promising. Remote work has created a rare opportunity for small towns to grow on their own terms. Instead of relying on large employers to move in, they can attract individuals who bring their jobs with them. This decentralization of work could lead to more resilient local economies—ones that aren’t tied to a single industry or employer.
          </p>
        </div>

        <section className='mt-8 pb-8 pt-4 border-t border-foreground/20'>
          <p className='text-lg text-muted-foreground'>
            <span className='font-mono'>Copyright</span>
            &nbsp;&copy;&nbsp;
            <span className='font-mono'>2026.</span>
          </p>
        </section>
      </section>
    </main>
  )
}
