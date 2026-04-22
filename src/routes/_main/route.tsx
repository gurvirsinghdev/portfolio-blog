import { containerScalingStyle } from '#/lib/scaling'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="h-full" style={{ ...containerScalingStyle }}>
      <section className="max-w-[min(calc(100%-4rem),2048px)] w-full h-full mx-auto">
        <div className="mb-8 h-full" />
        <Outlet />

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
