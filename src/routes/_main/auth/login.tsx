import { authClient } from '#/lib/auth-client'
import { updatePageScaling } from '#/lib/scaling'
import { createFileRoute, Link } from '@tanstack/react-router'
import type { ChangeEvent } from 'react'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { z } from 'zod/mini'

export const Route = createFileRoute('/_main/auth/login')({
  component: RouteComponent,
})

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
})

function RouteComponent() {
  updatePageScaling('14 / 10')

  const formHandler = function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = formSchema.parse(Object.fromEntries(formData.entries()))

    authClient.signIn.email({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <div className="w-full grid place-items-center">
      <div className="w-full">
        <Link
          className="underline text-muted-foreground  flex items-center justify-start gap-1 hover:text-foreground w-max"
          to={'/'}
        >
          <HiArrowLongLeft className="size-5" />
          <span>Home</span>
        </Link>
      </div>
      <form className="w-full py-16" onSubmit={formHandler}>
        <div className="flex w-full items-start flex-col justify-center ">
          <label className="p-1 px-0">Email</label>

          <input
            type="text"
            name="email"
            placeholder="hi@gurvirsingh.me"
            className="w-full border-2 bg-background/10 p-3 outline-none placeholder:text-muted-foreground/50"
          />

          <div className="my-1" />
          <label className="p-1 px-0">Password</label>
          <input
            name="password"
            type="password"
            placeholder="********"
            className="w-full border-2 bg-background/10 p-3 outline-none placeholder:text-muted-foreground/50"
          />
        </div>

        <div className="my-3" />
        <div className='flex items-center justify-end w-full'>
          <Link to={"/auth/register"} className='underline text-muted-foreground hover:text-foreground'>Don't have an account?</Link>
        </div>
        <div className="my-3" />
        <button
          type="submit"
          className="p-4 border-2 w-full bg-background/20 hover:bg-background/40 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  )
}
