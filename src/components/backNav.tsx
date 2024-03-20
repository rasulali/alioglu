'use client'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
interface BackNavProps {
  href: string
}
const BackNav: React.FC<BackNavProps> = ({ href }) => {
  return (
    <div className="w-fit lg:px-4 sm:px-2 px-1 lg:h-16 sm:h-12 h-8 flex items-center fixed
      bg-grayALight z-50 top-2 left-2 overflow-hidden rounded-full"
    >
      <Link href={href} scroll={true}>
        <ArrowLeftIcon
          className="lg:w-12 sm:w-8 w-6 text-zinc-100
          lg:hover:text-neutral-400 transition-colors duration-500"
        />
      </Link>
    </div>
  )
}
export default BackNav
