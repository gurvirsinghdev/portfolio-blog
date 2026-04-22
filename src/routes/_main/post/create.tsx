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
    <div className="grid h-96 w-full place-items-center">
      <div className="w-full">
        <Link
          className="text-muted-foreground hover:text-foreground flex w-max items-center justify-start gap-1 underline"
          to={'/'}
        >
          <HiArrowLongLeft className="size-5" />
          <span>Home</span>
        </Link>
      </div>
      <form className="w-full">
        <div className="bg-background/10 flex w-full flex-col items-center justify-center border-2">
          <input
            type="text"
            placeholder="Give your post a catchy title"
            className="placeholder:text-muted-foreground/50 w-full border-b-2 p-3 outline-none"
          />
          <textarea
            ref={textAreaRef}
            placeholder="Share your thoughts, ideas, or story"
            className="placeholder:text-muted-foreground/50 w-full resize-none p-3 outline-none"
            rows={6}
          />
        </div>

        <button className="bg-background/20 w-full border-2 border-t-0 p-4">
          Create Post
        </button>
      </form>
    </div>
  )
}
