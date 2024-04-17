'use client'
import Scene from "@/components/3dModel";
import Footer from "@/components/footer";
import LiveDiv from "@/components/liveDiv";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import Heading from "@/components/heading";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Loading from "../loading";
const Academy = () => {
  const [cadClick, setCadClick] = useState(false)
  const [cadHover, setCadHover] = useState(false)
  const [loading, setLoading] = useState(true)
  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
  }, [typeof window !== "undefined" && window.innerWidth]);
  useEffect(() => {
    new Promise(resolve => setTimeout(resolve, 200)).then(() => {
      setLoading(false)
    })
  }, [])

  const mousePos = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const cursorPos = {
    x: useSpring(mousePos.x, { stiffness: 200, damping: 50 }),
    y: useSpring(mousePos.y, { stiffness: 200, damping: 50 })
  }

  const handleMousePos = (e: MouseEvent) => {
    mousePos.x.set(e.clientX - 40)
    mousePos.y.set(e.clientY - 80)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMousePos)
    return () => {
      window.removeEventListener('mousemove', handleMousePos)
    }
  })
  const [color, setColor] = useState('')
  const [scroll, setScroll] = useState(0)
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest)
  })
  useEffect(() => {
    const hue = Math.round(scroll * (50 - 40) + 30);
    setColor(`hsl(${hue}, 90%, 55%)`)
    if (window.innerWidth < 640) {
      cursorPos.x.set(windowDimensions.width / 2 - 40)
      cursorPos.y.set(windowDimensions.height / 2 - 80)
    }
  }, [scroll])
  return (
    <main className="relative">
      <motion.div
        animate={{ rotate: 120, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{ translateX: cursorPos.x, translateY: cursorPos.y, backgroundColor: color }}
        className="fixed -z-50 w-[80px] blur-[20px] opacity-80
        aspect-square rounded-full">
      </motion.div>
      {loading &&
        <div className="fixed z-[999999] w-screen h-screen top-0">
          <Loading />
        </div>}
      <div className="w-full">
        <div className="flex flex-col lg:gap-y-4 items-center lg:mt-12 mt-12 lg:mb-4 mb-2">
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

            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0 }}>
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
        <div className="w-full lg:mt-6 mt-4">
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
              <h1 className="lg:text-3xl sm:text-xl text-sm text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full">
                Dünya standartı olaraq qəbul edilən,
                <span
                  className="text-nowrap"
                > üç ölçülü </span>
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
                  Geniş və detallı 3ds Max dərslərimiz ilə yaradıcı potensialınızın kilidini açacaqsınız.
                  <span>
                    Sektorun ekspertlərindən öyrənin və ideyaları gerçəyə çevirmək üçün
                    texnikalara yiyələnin.
                  </span>
                </p>
              </div>
            </LiveDiv>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square relative">
            <span className="absolute text-zinc-100 lg:text-base text-[8px] z-20
            bottom-0 lg:left-1 left-0.5">
              <span className="font-bold">&#9432; </span>Gördüyünüz simulasiya sadələşdirilmişdir və gerçək təcrübəni əks etdirmir
            </span>
            <LiveDiv animate={{ from: 20, to: 0, dir: 'x', delay: 0 }}>
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
        <div className="w-full lg:mt-6 mt-4">
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
              <h1 className="lg:text-3xl sm:text-xl text-sm text-zinc-100
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
                    top-0 left-full origin-right -translate-y-full drop-shadow-lg
                    -translate-x-2 w-fit
                    `}>
                    Computer-Aided Design
                  </span>
                  <motion.span
                    onHoverStart={() => setCadHover(true)}
                    onHoverEnd={() => setCadHover(false)}
                    className="lg:text-sm hidden lg:inline-block font-bold text-neutral-400 absolute
                    cursor-default group right-0 top-0 -translate-y-2">&#9432;
                  </motion.span>
                  <span className="lg:px-3 px-1 cursor-default">CAD</span>
                </span>
                programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex lg:flex-row flex-col
        lg:h-[calc(100vh-220px-32px)] h-[calc(100vh-112px-16px)]">
          <div className="lg:w-1/2 lg:h-full w-full h-1/2 bg-neutral-700/50
         drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg">
          </div>
        </div>
      </div >

      {/* Photoshop Wrapper */}
      <div id="photoshop" className="lg:w-full lg:px-12 px-4 lg:mt-24 mt-8" >
        <div className="w-full lg:mt-6 mt-4">
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
              <h1 className="lg:text-3xl sm:text-xl text-sm text-zinc-100
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
