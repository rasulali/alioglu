'use client'

import Navbar from "@/components/navbar"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion'
import { useRef } from "react"

const Home = () => {
  const videoRef = useRef(null)
  const videoInview = useInView(videoRef, { once: false })

  return (
    <main>
      <section className="w-full h-screen bg-gray-950">
        <Navbar isVideoVisible={videoInview} />
        <video
          ref={videoRef}
          autoPlay muted playsInline loop
          className="h-screen w-screen object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="min-h-screen px-16 pt-16 bg-grayA">
        <div className="flex items-center overflow-hidden pb-16">
          <h1 className="text-9xl font-poppins text-zinc-100">Lahiyələrimiz</h1>
          <span
            className="pt-4 pl-4"
          ><ArrowLongRightIcon className="w-32 text-zinc-100" /></span>
        </div>

        <div className="grid grid-rows-4 grid-cols-2 gap-16
        h-[200vh] pb-16">

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">Hotel</h1>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">Restoran</h1>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">İaişə Obyektəri</h1>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">İnteryer</h1>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">Eksteryer</h1>
            </div>
          </div>

          <div className="flex items-center justify-center bg-gray-100 relative
          rounded-xl
          ">
            <div className="absolute w-1/2 h-1/4 bg-yellow-500/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
              <h1 className="text-4xl font-poppins pl-8">Təmir/Tikinti</h1>
            </div>
          </div>

        </div>

      </section>
    </main >
  )
}
export default Home
