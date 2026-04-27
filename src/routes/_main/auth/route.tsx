import { authClient } from '#/lib/auth-client'
import StackView from '#/lib/components/StackView'
import Loader from '#/lib/Loader'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/auth')({
  beforeLoad: async () => {
    const session = await authClient.getSession()
    if (session) throw redirect({ to: '/dashboard' })
    return {}
  },
  pendingMs: 100,
  pendingComponent: Loader,
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <StackView>
      <Outlet />
    </StackView>
  )
}
