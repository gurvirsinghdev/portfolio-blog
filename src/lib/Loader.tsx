import { TbLoader2 } from 'react-icons/tb'

export default function Loader() {
  return (
    <div className="scaling-h-screen grid w-full place-items-center">
      <TbLoader2 className="size-10 animate-spin" />
    </div>
  )
}
