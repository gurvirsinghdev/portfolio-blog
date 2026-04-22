import { authMiddleware } from '#/lib/middleware'
import { updatePageScaling } from '#/lib/scaling'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

import { HiArrowLongLeft } from 'react-icons/hi2'

export const Route = createFileRoute('/_main/post/create')({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
})

function RouteComponent() {
  updatePageScaling('14 / 10')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(
    function () {
      if (!textAreaRef.current) return

      const updateHeight = () => {
        textAreaRef.current?.style?.setProperty(
          'height',
          textAreaRef.current.scrollHeight + 'px',
        )
      }
      textAreaRef.current.addEventListener('input', updateHeight)
    },
    [textAreaRef],
  )

  return (
    <div className="w-full h-96 grid place-items-center">
      <div className="w-full">
        <Link
          className="underline text-muted-foreground  flex items-center justify-start gap-1 hover:text-foreground w-max"
          to={'/'}
        >
          <HiArrowLongLeft className="size-5" />
          <span>Home</span>
        </Link>
      </div>
      <form className="w-full">
        <div className="flex w-full items-center flex-col justify-center border-2 bg-background/10">
          <input
            type="text"
            placeholder="Give your post a catchy title"
            className="w-full border-b-2 p-3 outline-none placeholder:text-muted-foreground/50"
          />
          <textarea
            ref={textAreaRef}
            placeholder="Share your thoughts, ideas, or story"
            className="resize-none w-full p-3 outline-none placeholder:text-muted-foreground/50"
            rows={6}
          />
        </div>

        <button className="p-4 border-2 border-t-0 w-full bg-background/20">
          Create Post
        </button>
      </form>
    </div>
  )
}
