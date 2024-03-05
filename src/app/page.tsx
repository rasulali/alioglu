'use client'

import Card from "@/components/card"
import Contact from "@/components/contactBall"
import AzeMap from "@/components/map"
import Navbar from "@/components/navbar"
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { motion, useAnimation, useInView, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import Heading from "@/components/heading"
import Loading from "./loading"

const Home = () => {

  const [isTextHover, setTextHover] = useState(false)
  const handleMouseEnter = () => {
    setTextHover(true)
  }
  const handleMouseLeave = () => {
    setTextHover(false)
  }

  const videoRef = useRef(null)
  const videoInview = useInView(videoRef, { once: false })

  const textRef = useRef(null)
  const textInView = useInView(textRef, { once: true })

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, } },
  }

  const arrowVariants = {
    hidden: { opacity: 0, x: -128 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1, } },
  }
  const textControls = useAnimation()

  useEffect(() => {
    if (textInView) {
      textControls.start("visible")
    }
  }, [textInView])

  const textRef2 = useRef(null)
  const textInView2 = useInView(textRef2, { once: true })

  const textControls2 = useAnimation()

  useEffect(() => {
    if (textInView2) {
      textControls2.start("visible")
    }
  }, [textInView2])


  const { scrollYProgress } = useScroll();
  const [scrollY, setScrollY] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest)
  })


  return (
    <main>
      {/* <Contact /> */}
      {/* First Section */}
      <section className="w-full h-screen bg-grayA">
        <Navbar isVideoVisible={videoInview} />

        <video
          ref={videoRef}
          autoPlay muted playsInline loop
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </section>
      {/* Second Section */}
      <section className="min-h-screen p-4 sm:p-8 lg:p-16 bg-grayA">
        {/* Projects Text */}
        <motion.div
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          className="lg:mb-16 mb-4 sm:mb-8"
          animate={textControls}>
          <Link
            className="flex items-center justify-center relative
            w-fit"
            href="/portfolio">
            <motion.div
              onHoverStart={handleMouseEnter}
              onHoverEnd={handleMouseLeave}
              className="absolute w-[102%] h-[112%] z-20"
            />
            <h1
              className={`text-4xl sm:text-5xl lg:text-9xl font-poppins transition-colors z-10
            duration-100 delay-75
             ${isTextHover ? "text-grayA" : "text-zinc-100"}`}>
              Lahiyələrimiz
            </h1>
            <motion.span
              ref={textRef}
              variants={arrowVariants}
              initial="hidden"
              animate={textControls}
              className="lg:pt-4 pl-4 z-10"
            ><ArrowLongRightIcon
                className={`lg:w-32 sm:w-16 w-12 duration-75 delay-0
              ${isTextHover ? "text-grayA" : "text-zinc-100"}`} />
            </motion.span>
            <motion.div
              className={`absolute top-1/2 left-1/2 bg-zinc-100 w-[104%] h-[112%]
            pointer-events-none -skew-x-12 delay-100
            transform transition duration-300 origin-left -translate-x-1/2 -translate-y-1/2
            ${isTextHover ? 'scale-x-1' : 'scale-x-0'}
            `}
            />
          </Link>
        </motion.div>

        {/* Cards Section */}
        <div className="max-w-[calc((832px+96px)*3+128px)] mx-auto flex flex-col lg:flex-row lg:flex-wrap
        items-center justify-center gap-y-8 sm:gap-y-12 lg:gap-x-10 xl:gap-x-16 lg:gap-y-24"
        >
          <Card delay={0} tag="Hotel" src="/placeholder.png" />
          <Card delay={0.05} tag="Restoran" src="/placeholder.png" />
          <Card delay={0.1} tag="İaişə Obyektləri" src="/placeholder.png" />
          <Card delay={0.15} tag="İnteryer" src="/placeholder.png" />
          <Card delay={0.2} tag="Eksteryer" src="/placeholder.png" />
          <Card delay={0.25} tag="Təmir/Tikinti" src="/placeholder.png" />
        </div>

      </section>
      {/* Third Section */}
      <section className="bg-grayA lg:p-16 sm:p-8 p-4">
        {/* Partners */}

        {/* Who are we */}
        <div className="h-screen">
          <span className="pointer-events-none">
            <Heading text="Biz Kimik?" />
          </span>
        </div>
        {/* Where are we */}

        <div className="h-screen">
          <span className="pointer-events-none">
            <Heading text="Biz Hardayıq?" />
          </span>
        </div>
        {/* Location */}
        <div className="bg-grayA lg:my-16 sm:my-8 my-4">
          <div className="relative lg:pt-64 sm:pt-32 pt-20">
            <h1
              className="flex flex-col gap-2 absolute top-0 left-0
              text-nowrap lg:text-8xl sm:text-5xl text-3xl font-semibold font-poppins text-zinc-100"
            >
              <span
                className="lg:border-l-[16px] border-l-8 border-red-400 pl-2 leading-[1.1]">
                <span>İçəri Şəhər,</span>
                <span className="flex">Bakı
                  <MapPinIcon className="lg:w-20 w-10 text-red-400" />
                </span>
              </span>
            </h1>
            <AzeMap />
          </div>
        </div>
        <h1 className="text-2xl text-zinc-100">
          Unvan Flan yer besmen yer 26, 45
        </h1>
      </section>
    </main >
  )
}
export default Home
