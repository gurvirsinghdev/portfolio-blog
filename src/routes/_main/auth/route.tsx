import StackView from '#/lib/components/StackView';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_main/auth')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <StackView>
      <Outlet />
    </StackView>
  );
}
