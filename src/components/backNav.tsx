'use client'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'
interface BackNavProps {
  href?: string
}
const BackNav: React.FC<BackNavProps> = ({ href }) => {
  const router = useRouter()
  return (
    <div
      onClick={() => { href ? router.push(href) : router.back() }}
      className="w-fit lg:px-6 sm:px-4 px-2 lg:h-16 sm:h-12 h-8 flex items-center fixed
      bg-grayALight z-50 top-2 left-2 overflow-hidden rounded-full group drop-shadow-lg">
      <ArrowLeftIcon
        className="lg:w-12 sm:w-8 w-6 text-zinc-100
          lg:group-hover:text-neutral-400 transition-colors duration-500"
      />
    </div>
  )
}
export default BackNav
