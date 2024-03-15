'use client'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import { useRouter } from 'next/navigation'
const BackNav = () => {
  const router = useRouter()
  return (
    <div className="w-fit lg:px-4 sm:px-2 px-1 lg:h-16 sm:h-12 h-8 flex items-center fixed
      bg-grayALight z-50 top-2 left-2 overflow-hidden rounded-full"
    >
      <ArrowLeftIcon
        onClick={() => { router.back() }}
        className="lg:w-12 sm:w-8 w-6 text-zinc-100
          lg:hover:text-neutral-400 transition-colors duration-500"
      />
    </div>
  )
}
export default BackNav
