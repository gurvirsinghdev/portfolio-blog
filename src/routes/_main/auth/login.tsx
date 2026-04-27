import { authClient } from '#/lib/auth-client';
import { createFileRoute, Link } from '@tanstack/react-router';
import type { ChangeEvent } from 'react';
import { z } from 'zod/mini';

export const Route = createFileRoute('/_main/auth/login')({
  component: RouteComponent,
});

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
});

function RouteComponent() {
  const formHandler = function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formSchema.parse(Object.fromEntries(formData.entries()));

    authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          e.target.reset();
          alert('Login successful!');
        },
        onError: (error) => {
          console.error(error);
          alert(
            'Unable to login. Please check your credentials and try again.',
          );
        },
      },
    );
  };

  return (
    <div className="my-8 grid w-full grid-cols-1 grid-rows-1 border-2 lg:grid-cols-2">
      <form className="h-full w-full p-4" onSubmit={formHandler}>
        <div className="flex w-full flex-col items-start justify-center">
          <label className="p-1 px-0">Email</label>

          <input
            type="text"
            name="email"
            placeholder="hi@gurvirsingh.me"
            className="bg-background/10 placeholder:text-muted-foreground/50 w-full border-2 p-3 outline-none"
          />

          <div className="my-1" />
          <label className="p-1 px-0">Password</label>
          <input
            name="password"
            type="password"
            placeholder="********"
            className="bg-background/10 placeholder:text-muted-foreground/50 w-full border-2 p-3 outline-none"
          />
        </div>

        <div>
          <div className="my-3" />
          <div className="flex w-full items-center justify-end">
            <Link
              to={'/auth/register'}
              className="text-muted-foreground hover:text-foreground underline"
            >
              Don't have an account?
            </Link>
          </div>
          <div className="my-3" />
          <button
            type="submit"
            className="bg-background/20 hover:bg-background/40 w-full cursor-pointer border-2 p-4"
          >
            Login
          </button>
        </div>
      </form>

      <img
        className="h-full w-full object-cover object-center"
        src="https://picsum.photos/1000/500"
      />
    </div>
  );
}
