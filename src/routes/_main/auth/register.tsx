import { authClient } from '#/lib/auth-client';
import { createFileRoute, Link } from '@tanstack/react-router';
import type { ChangeEvent } from 'react';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { z } from 'zod/mini';

export const Route = createFileRoute('/_main/auth/register')({
  component: RouteComponent,
});

const formSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

function RouteComponent() {
  const formHandler = function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = formSchema.parse(Object.fromEntries(formData.entries()));

    authClient.signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: '/',
    });
  };

  return (
    <form className="w-full py-16" onSubmit={formHandler}>
      <div className="flex w-full flex-col items-start justify-center">
        <label className="p-1 px-0">Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          className="bg-background/10 placeholder:text-muted-foreground/50 w-full border-2 p-3 outline-none"
        />

        <div className="my-1" />
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

      <div className="my-3" />
      <div className="flex w-full items-center justify-end">
        <Link
          to={'/auth/login'}
          className="text-muted-foreground hover:text-foreground underline"
        >
          Already have an account?
        </Link>
      </div>
      <div className="my-3" />
      <button
        type="submit"
        className="bg-background/20 hover:bg-background/40 w-full cursor-pointer border-2 p-4"
      >
        Register
      </button>
    </form>
  );
}
