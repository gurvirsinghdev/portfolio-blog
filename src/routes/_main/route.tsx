import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="h-full">
      <section className="mx-auto h-full w-full max-w-[min(calc(100%-4rem),2048px)]">
        <div className="mb-8 h-full" />
        <Outlet />

        <section className="border-foreground/20 mt-8 border-t pt-4 pb-8">
          <p className="text-muted-foreground text-lg">
            <span className="font-mono">Copyright</span>
            &nbsp;&copy;&nbsp;
            <span className="font-mono">2026.</span>
          </p>
        </section>
      </section>
    </main>
  )
}
