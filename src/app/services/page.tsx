'use client'

import Heading from "@/components/heading";

const Services = () => {
  return (
    <main className="lg:pt-24 pt-12">
      <div className="w-full h-screen lg:px-12 px-4">
        <div className="flex justify-center">
          <Heading text="Xidmətlərimiz" animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" />
        </div>
        <div className="w-full h-full bg-neutral-400">
        </div>
      </div>
    </main>
  )
}
export default Services;
