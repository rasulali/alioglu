'use client'
import Scene from "@/components/3dModel";
import Footer from "@/components/footer";
import LiveDiv from "@/components/liveDiv";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import Heading from "@/components/heading";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Loading from "../loading";
const Academy = () => {
  const [cadClick, setCadClick] = useState(false)
  const [cadHover, setCadHover] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 200)).then(() => {
      setLoading(false)
    })
  }, [])

  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < height) {
        setWindowDimensions({ width: 1080, height: 1920 });
      }
      else {
        setWindowDimensions({ width: 1920, height: 1080 });
      }
    }
  }, [typeof window !== "undefined" && window.innerWidth]);
  return (
    <main className="relative">
      <div className="absolute top-0 w-full h-full">
      </div>
      {loading &&
        <div className="fixed z-[999999] w-screen h-screen top-0">
          <Loading />
        </div>}
      <div className="w-full">
        <div className="flex flex-col items-center lg:mt-12 mt-12 lg:mb-8 mb-8">
          <Heading text="Akademiya" animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" />
          <LiveDiv animate={{ from: -20, to: 0, dir: 'y', delay: 0.1 }}>
            <h1 className="lg:text-4xl sm:text-3xl text-xl text-zinc-100 w-full text-center">
              Təhsilinizi <span className='font-bold'> 15 illik</span> təcrübədən alın!
            </h1>
          </LiveDiv>
        </div>
        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row
        lg:h-[calc(100vh-168px-48px-32px)]">
          {/* Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-4 p-2">

            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0 }}>
              <div className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4 flex items-center
            lg:h-full lg:rounded-xl rounded-lg drop-shadow-lg lg:col-span-1">
                <div>
                  <h1
                    className="lg:text-5xl sm:text-3xl text-xl text-zinc-100 font-semibold mb-2"
                  >Nə öyrənəcəksiniz?
                  </h1>
                  <p className="lg:w-4/5 lg:mx-auto lg:mt-2 lg:text-2xl sm:text-xl
                  text-lg text-zinc-100 leading-snug">
                    <span
                      onClick={() => {
                        document.getElementById('3dsmax')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#7fc5de] via-[#39a5cc] to-[#36687f]">
                      3ds Max
                    </span>
                    <span>, </span>
                    <span
                      onClick={() => {
                        document.getElementById('autocad')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#f4548b] via-[#d52654] to-[#b11538]">
                      Autocad
                    </span>
                    <span> </span>
                    və
                    <span> </span>
                    <span
                      onClick={() => {
                        document.getElementById('photoshop')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#31a8ff]  to-[#001e36]">
                      Photoshop
                    </span>-u
                    əhatə edən geniş kursumuzla dizayn dünyasına atılın.
                    Effektiv ünsiyyət sənətində ustalaşarkən digital modelləmə,
                    renderləmə və post production-da təqdimatların hazırlanmasını öyrənin.
                    Sahəyə yerində ziyarətlər də daxil olmaqla, real senariləri <span className="text-nowrap">kəşf edin </span>
                    və müstəqil bir dizayner olaraq inkşaf etmək üçün lazımi təcrübəni qazanın.
                  </p>
                </div>
              </div>
            </LiveDiv>

            <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full
            drop-shadow-lg relative
            lg:col-span-1 lg:row-span-2 lg:rounded-xl rounded-lg overflow-hidden">
              <LiveDiv animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}>
                <div className="absolute bottom-2 flex lg:py-2 lg:px-4 py-1 px-2
                bg-gradient-to-r from-grayA via-grayA/60 to-grayA/10
                ">
                  <MapPinIcon
                    className="lg:w-6 w-4 aspect-square text-neutral-200" />
                  <h1 className="lg:text-lg text-xs text-neutral-200">Akademiya, İçəri Şəhər</h1>
                </div>
                <Image className="w-full h-full object-cover" quality={70}
                  src='/academy/academy.webp' alt='' width={windowDimensions.width / 2} height={0} />
              </LiveDiv>
            </div>

            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.2 }}>
              <div className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4 lg:col-span-1
              lg:h-full flex items-center
            lg:rounded-xl rounded-lg drop-shadow-lg">
                <div>
                  <h1
                    className="lg:text-5xl sm:text-3xl text-xl text-zinc-100 font-semibold mb-2"
                  >Dərslərimiz kimlər üçündür?
                  </h1>
                  <p className="lg:w-4/5 lg:mx-auto lg:mt-2 lg:text-2xl sm:text-xl text-lg text-zinc-100 leading-snug">
                    Dərslərimizdə memarlıq və incəsənət ixtisası üzrə ali təhsil alan və ya
                    interyer, eksteryer dizayna xüsusi maraqı olan individual-lar iştirak edə bilər.
                  </p>
                </div>
              </div>
            </LiveDiv>

          </div>
        </div>
      </div>
      {/* 3ds max wrapper */}
      <div id="3dsmax" className="lg:w-full lg:px-12 px-4 ">
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
                  className="text-nowrap"
                >üç ölçülü</span>
                modelləmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 relative">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3]">
            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0 }}>
              <div className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4
              lg:rounded-xl rounded-lg drop-shadow-lg w-full lg:h-full h-fit flex flex-col">
                <Image src="/academy/3dsmaxui.jpg" className="mb-2" alt="" width={windowDimensions.width} height={0} quality={70} />
                <p className="w-full lg:text-2xl sm:text-xl text-lg
                text-zinc-100 leading-snug">
                  Magnis consectetur id praesent pulvinar nibh, enim consectetur amet adipiscing eget proin nulla praesent bibendum faucibus dolor diam neque congue.
                </p>
              </div>
            </LiveDiv>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square">
            <LiveDiv animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}>
              <div className="lg:rounded-xl w-full h-full rounded-lg
              overflow-hidden bg-grayA">
                <Scene />
              </div>
            </LiveDiv>
          </div>
        </div>
      </div>

      {/* Autocad Wrapper */}
      <div id="autocad" className="lg:w-full lg:px-12 px-4 lg:mt-24 mt-8">
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
      <div id="photoshop" className="lg:w-full lg:px-12 px-4 lg:mt-24 mt-8" >
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
