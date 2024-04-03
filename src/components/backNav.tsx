'use client'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
interface BackNavProps {
  href: string
}
const BackNav: React.FC<BackNavProps> = ({ href }) => {
  return (
    <a
      href={href}
      className="w-fit lg:px-6 sm:px-4 px-2 lg:h-16 sm:h-12 h-8 flex items-center fixed
      bg-grayALight z-50 top-2 left-2 overflow-hidden rounded-full group">
      <ArrowLeftIcon
        className="lg:w-12 sm:w-8 w-6 text-zinc-100
          lg:group-hover:text-neutral-400 transition-colors duration-500"
      />
    </a>
  )
}
export default BackNav
