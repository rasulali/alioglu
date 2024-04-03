'use client'
import { ArrowLeftIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
interface BackNavProps {
  href: string
}
const BackNav: React.FC<BackNavProps> = ({ href }) => {
  return (
    <Link
      className="w-fit px-4 lg:h-16 sm:h-12 h-8 flex items-center fixed
      bg-grayALight border-4 border-neutral-500 z-50 top-2 left-2 overflow-hidden rounded-full group"
      href={href} scroll={false}>
      <ArrowLeftIcon
        className="lg:w-12 sm:w-8 w-6 text-zinc-100
          lg:group-hover:text-neutral-400 transition-colors duration-500"
      />
    </Link>
  )
}
export default BackNav
