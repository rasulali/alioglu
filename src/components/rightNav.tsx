import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
const RightNav = () => {
  const [isDrawerOpen, setDrawer] = useState(false)

  return (
    <div
      className={`fixed h-fit lg:w-16 sm:w-8 w-4 right-0 top-1/2 z-50
        -translate-y-1/2 flex flex-col items-center
        bg-grayA px-4 py-4 sm:bg-transparent sm:p-0
        lg:text-2xl sm:text-xl text-lg transition duration-100
        ${isDrawerOpen && 'translate-x-full'}
        sm:translate-x-0`}
    >
      <div
        onClick={() => { setDrawer(!isDrawerOpen) }}
        className="w-6 h-10 absolute top-1/2 left-0 z-50
      -translate-x-full sm:hidden bg-grayA rounded-l-xl
      flex items-center
      ">
        <ChevronLeftIcon className="text-zinc-100"
        />
      </div>

      <div
        className="pb-4 flex items-center justify-center"
      >
        <a href="#interior"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >İnteryer
        </a>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <a href="#exterior"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >Eksteryer
        </a>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <a href="#restaurants"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >Restoran
        </a>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <a href="#hotel"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >Otel
        </a>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <a href="#objects"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >Obyekt
        </a>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="pt-4 flex items-center justify-center"
      >
        <a href="#construction"
          style={{ writingMode: 'vertical-lr' }}
          className="text-center text-zinc-100 lg:hover:text-neutral-500
            rotate-180 duration-500"
        >
          Təmir/Tikiniti
        </a>
      </div>

    </div>
  )
}
export default RightNav
