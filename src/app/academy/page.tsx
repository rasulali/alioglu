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
    <main>
      <div className="w-full">
        <div className="flex flex-col items-center lg:mt-12 mt-12 lg:mb-8 mb-2">
          <Heading text="Akademiya" animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" />
          <LiveDiv animate={{ from: -20, to: 0, dir: 'y', delay: 0.1 }}>
            <h1 className="lg:text-4xl sm:text-3xl text-xl text-zinc-100 w-full text-center">
              Təhsilinizi <span className='font-bold'> 15 illik</span> təcrübədən alın!
            </h1>
          </LiveDiv>
        </div>
        {/* Content */}
        <div className="w-full flex flex-col lg:flex-row relative
        lg:h-[calc(100vh-168px-48px-32px)]">
          {/* Text */}
          <div className="lg:w-1/2 lg:h-full lg:p-4 w-full h-auto p-2 flex flex-col justify-center
          lg:gap-y-8 sm:gap-y-6 gap-y-4 backdrop-blur bg-grayA/30">
            <div>
              <span className="font-semibold">
                <Heading variant="h3" text="Nə öyrənəcəksiniz?" animate={{ from: -20, to: 0, dir: 'x' }} />
              </span>
              <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
                <p className="lg:w-4/5 lg:mx-auto lg:mt-2 lg:text-2xl sm:text-xl text-lg text-zinc-100">
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
                  </span>,u
                  əhatə edən geniş kursumuzla dizayn dünyasına atılın.
                  Effektiv ünsiyyət sənətində ustalaşarkən digital modelləmə,
                  renderləmə və post production-da təqdimatların hazırlanmasını öyrənin.
                  Sahəyə yerində ziyarətlər də daxil olmaqla, real senariləri <span className="text-nowrap">kəşf edin </span>
                  və müstəqil bir dizayner olaraq inkşaf etmək üçün lazımi təcrübəni qazanın.
                </p>
              </LiveDiv>
            </div>
            <div>
              <span className="font-semibold">
                <Heading variant="h3" text="Dərslərimiz kimlər üçündür?" animate={{ from: -20, to: 0, dir: 'x' }} />
              </span>
              <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
                <p className="lg:w-4/5 lg:mx-auto lg:mt-2 lg:text-2xl sm:text-xl text-lg text-zinc-100">
                  Dərslərimizdə memarlıq və incəsənət ixtisası üzrə ali təhsil alan və ya
                  interyer, eksteryer dizayna xüsusi maraqı olan individual-lar iştirak edə bilər.
                </p>
              </LiveDiv>
            </div>
          </div>
          {/* Image */}
          <div className="lg:w-1/2 lg:h-full lg:p-4 p-0" >
            <Image src='/interior.jpg' width={1920} height={0} alt=""
              className="object-cover w-full h-full" />
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
                  className="lg:px-3 px-1 text-nowrap"
                >üç ölçülü</span>
                modelləmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square lg:p-4">
            <p className="text-zinc-100 lg:text-2xl text-lg">
              Dərslərimizdə sizə 3ds Max-ı birinci əldən təcrübə ilə öyrədirik.
              Etiam elit lectus hac ac varius non vulputate massa suscipit vel fermentum sit. Ligula in aliquam gravida pharetra dignissim, nam adipiscing in tempor amet tristique enim vitae ut id etiam aenean. Amet mi dignissim platea quis efficitur, vestibulum vel velit volutpat tortor vestibulum suscipit donec risus nisl condimentum fringilla elementum. Eu tincidunt enim tempor urna convallis vel eget blandit nulla suspendisse est, placerat nunc vitae aliquam tristique. Dui eu congue nibh sapien, congue pharetra varius varius. Nulla bibendum feugiat posuere odio lectus est posuere neque sagittis eget praesent aliquet enim nunc arcu tincidunt nullam rutrum praesent id ipsum ut hac.
            </p>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square
          border-grayALight border">
            <Scene />
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
