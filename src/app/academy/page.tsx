'use client'
import Scene from "@/components/3dModel";
import Footer from "@/components/footer";
import LiveDiv from "@/components/liveDiv";
import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion'
import Heading from "@/components/heading";
const Academy = () => {
  const [cadClick, setCadClick] = useState(false)
  const [cadHover, setCadHover] = useState(false)
  return (
    <main className="lg:pt-24 pt-12">
      <div className="w-full h-screen lg:px-12 px-4">
        <div className="flex justify-center lg:my-6 my-2">
          <Heading text="Akademiya" animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" />
        </div>
        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row
        lg:h-[calc(100vh-128px-96px-48px-48px)] h-[calc(100vh-48px-48px-16px-16px)]">
          <div className="lg:w-1/2 w-full lg:h-full h-1/2">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Info goes here</h1>
          </div>
          <div className="lg:w-1/2 w-full lg:h-full h-1/2 bg-neutral-400">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Image goes here</h1>
          </div>
        </div>
      </div>
      {/* 3ds max wrapper */}
      <div className="lg:w-full lg:px-12 px-4 ">
        <div className="w-full lg:my-6 my-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/3dsmax.svg" alt="3DSmax-ın logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#7fc5de] via-[#39a5cc] to-[#36687f]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                3ds Max
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full">
                Dünya standartı olaraq qəbul edilən,
                <span
                  className="lg:px-3 px-1 text-nowrap"
                >üç ölçülü</span>
                modelləmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square
          border-grayALight border">
            <Scene />
          </div>
        </div>
      </div>

      {/* Autocad Wrapper */}
      <div className="lg:w-full lg:px-12 px-4 lg:mt-24 mt-8">
        <div className="w-full lg:my-6 my-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/autocad.svg" alt="Autocad-ın logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#f4548b] via-[#d52654] to-[#b11538]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                Autocad
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full">
                Dəqiq, iki və üç ölçülü çertyojlama üçün
                <span
                  className="relative lg:no-underline underline"
                  onClick={() => {
                    if (window.innerWidth < 640) setCadClick(!cadClick)
                  }}
                >
                  <span
                    className={`${(cadClick || cadHover) ? 'inline-block' : 'hidden'} absolute bg-grayALight lg:text-base lg:px-2
                    py-1 lg:rounded-xl px-1.5 rounded-xl text-xs text-nowrap
                    top-0 -translate-y-full -right-full translate-x-1/2
                    lg:left-full lg:translate-x-0 w-fit
                    `}>
                    Computer-Aided Design
                  </span>
                  <motion.span
                    onHoverStart={() => setCadHover(true)}
                    onHoverEnd={() => setCadHover(false)}
                    className="lg:text-lg hidden lg:inline-block font-bold text-neutral-400 absolute
                    cursor-default group right-0 top-0">&#9432;
                  </motion.span>
                  <span className="lg:px-3 px-1 cursor-default">CAD</span>
                </span>
                programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
        </div>
      </div >

      {/* Photoshop Wrapper */}
      < div className="lg:w-full lg:px-12 px-4 lg:mt-24 mt-8" >
        <div className="w-full lg:my-6 my-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/photoshop.svg" alt="Photoshop-un logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#31a8ff]  to-[#001e36]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                Photoshop
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full">
                Adobe-in professional şəkil redaktə etmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
        </div>
      </div >
      <Footer />
    </main >
  )
}
export default Academy;
