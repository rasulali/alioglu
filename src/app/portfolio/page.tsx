'use client'

import Heading from "@/components/heading";
import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/16/solid'

const portfolio = () => {
  return (
    <main className="relative bg-grayA">
      {/* nav */}
      <div className="w-full lg:h-24 sm:h-16 h-12 flex items-center fixed bg-grayA z-50 top-0 left-0">
        <Link href="/" scroll={true}
          className="w-fit block lg:ml-4 sm:ml-2 ml-1"
        >
          <ArrowLeftIcon className="lg:w-16 sm:w-10 w-8 text-zinc-100
          lg:hover:text-neutral-500 transition-colors duration-500"
          />
        </Link>
      </div>
      {/* nav */}

      <section className="w-full lg:mt-24 sm:mt-16 mt-12 min-h-screen lg:p-8 p-4">
        <div className="w-full lg:mt-16 sm:mt-8 mt-4 relative">
          <span className="w-full flex justify-center">
            <Heading direction="y" variant="h1" text="Portfolio" />
          </span>

          <div id="hotel"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="Otellər" />
          </div>

          <div id="restaurants"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="Restoranlar" />
          </div>

          <div id="objects"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="İaişə Obyektləri" />
          </div>

          <div id="interior"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="İnteryer" />
          </div>

          <div id="exterior"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="Eksteryer" />
          </div>

          <div id="construction"
            className="min-h-screen lg:pt-24 sm:pt-16 pt-12"
          >
            <Heading direction="x" variant="h2" text="Təmir/Tikinti" />
          </div>

        </div>
      </section>
    </main>
  )
}
export default portfolio;
