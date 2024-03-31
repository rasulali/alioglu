'use client'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
interface Props {
  intInView: boolean
  extInView: boolean
  restInView: boolean
  hotelInView: boolean
  objInView: boolean
  consInView: boolean
}
const RightNav: React.FC<Props> = ({ intInView, extInView, restInView, hotelInView, objInView, consInView }) => {
  const [isDrawerOpen, setDrawer] = useState(false)

  return (
    <div
      className={`fixed h-fit lg:w-16 sm:w-8 w-4 right-0 top-1/2 z-50
        -translate-y-1/2 flex flex-col items-center
        bg-grayA px-4 py-4 sm:bg-transparent sm:p-0
        lg:text-2xl sm:text-xl text-lg transition duration-100
        ${!isDrawerOpen && 'translate-x-full'}
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
        <h1
          onClick={() => {

            document.getElementById('interior')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${intInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >İnteryer
        </h1>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <h1
          onClick={() => {
            document.getElementById('exterior')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${extInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >Eksteryer
        </h1>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <h1
          onClick={() => {
            document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${restInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >Restoran
        </h1>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <h1
          onClick={() => {
            document.getElementById('hotel')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${hotelInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >Otel
        </h1>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="py-4 flex items-center justify-center"
      >
        <h1
          onClick={() => {
            document.getElementById('objects')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${objInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >Obyekt
        </h1>
      </div>
      <div className="w-1 aspect-square rounded-full bg-zinc-100" />

      <div
        className="pt-4 flex items-center justify-center"
      >
        <h1
          onClick={() => {
            document.getElementById('construction')?.scrollIntoView({ behavior: 'smooth' })
            setDrawer(false)
          }}
          style={{ writingMode: 'vertical-lr' }}
          className={`text-center lg:hover:text-neutral-500
            rotate-180 duration-500 cursor-pointer ${consInView ? 'text-neutral-500' : 'text-zinc-100'}`}
        >
          Təmir/Tikiniti
        </h1>
      </div>

    </div>
  )
}
export default RightNav
