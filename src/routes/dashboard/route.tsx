import {
  containerScalingStyle,
  makeCSSCalc,
  SCALING_VARIABLES,
} from '#/lib/scaling'
import { cn } from '#/lib/utils'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div
      className="grid grid-cols-1 grid-rows-1 lg:grid-cols-[1fr_3fr]"
      style={{
        ...containerScalingStyle,
        minHeight: makeCSSCalc('100svh', SCALING_VARIABLES.inverse),
      }}
    >
      <div className="hidden flex-col border-r-2 lg:flex">
        <div className="w-full border-b-2 p-3">
          <span>ZeroPage</span>
        </div>
        <div className="h-full w-full p-3">
          <Link
            to={'/dashboard'}
            className={cn(
              `text-muted-foreground hover:text-foreground underline`,
              'text-foreground',
            )}
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
