'use client'

import Card from "@/components/card"
import Contact from "@/components/contactBall"
import AzeMap from "@/components/map"
import Navbar from "@/components/navbar"
import { ArrowLongRightIcon, DevicePhoneMobileIcon, PhoneIcon, MapPinIcon as MapPinIconOutline } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { faWhatsapp, faXTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare as faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AtSymbolIcon } from '@heroicons/react/20/solid'
import { motion, useAnimation, useInView, useScroll, useMotionValueEvent } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import Heading from "@/components/heading"

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
      <section className="relative bg-grayA lg:p-16 sm:p-8 p-4">
        {/* Partners */}

        {/* Who are we */}
        {/* Xəyalları Dizayn, Gələcəyi İnşa edirik! */}
        <div className="font-poppins h-screen">
          <span className="pointer-events-none">
            <Heading text="Biz Kimik?" />
          </span>
          <div className="py-8 px-1 w-2/3">
            <span className="text-4xl text-zinc-100">
              <p>
                Ölkəmizdə və Dünyada onlarla proyekt ərsəyə gətirmiş,
              </p>
              <p>
                Xəyalları reallığa çevirmişik.
              </p>
            </span>
          </div>
        </div>
        {/* Location */}
        <div className="bg-grayA lg:my-16 sm:my-8 my-4">
          <div className="relative">
            <h1
              className="flex flex-col gap-2 absolute lg:top-64 lg:right-8
              sm:-top-20 -top-12
              text-nowrap sm:text-5xl text-xl font-semibold font-poppins text-zinc-100"
            >
              <span
                className="sm:border-l-8 border-l-4 border-red-400 sm:pl-2 pl-1
                pt-1
                leading-[1.2]">
                <span>İçəri Şəhər,</span>
                <span className="flex">Bakı
                  <MapPinIcon className="sm:w-10 w-5 text-red-400" />
                </span>
              </span>
            </h1>
            <AzeMap />
          </div>
        </div>

        {/* footer wrapper */}
        <div className="font-poppins w-full pb-8 flex flex-col lg:flex-row
        lg:justify-center gap-8 lg:gap-4">
          {/* Location */}
          <div className="lg:w-1/2 border-l-2 lg:border-0 border-zinc-400 pl-4 py-2" >
            <h1 className="text-zinc-100 pb-1 text-lg sm:text-2xl lg:text-right
            font-semibold"
            >
              Ünvan
            </h1>
            <span className="lg:w-fit lg:float-end flex items-center text-sm sm:text-lg text-zinc-300 pl-0">
              <MapPinIconOutline className="w-4 sm:w-6 -translate-y-px" />
              <h1 className="pl-1"
              >
                23 Leopold və Mstislav Rostropoviçlər, Bakı
              </h1>
              <Link target="_blank" href="https://www.google.com/maps/dir/?api=1&">
                <FontAwesomeIcon icon={faLink}
                  className="lg:hidden text-xs sm:text-base pl-2 text-zinc-100"
                />
              </Link>
            </span>
          </div>
          {/* Contact */}
          <div className="lg:w-1/2 flex flex-col gap-2 border-l-2 border-zinc-400 pl-4 py-2" >
            <h1 className="text-zinc-100 pb-1 text-lg sm:text-2xl font-semibold"
            >
              Əlaqə
            </h1>
            <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
              <DevicePhoneMobileIcon className="w-4 sm:w-6 -translate-x-[3px]" />
              <h2 className="pl-1"
              >
                055 555 55 55
              </h2>
            </span>
            <span className="flex h-4 sm:h-6 text-sm sm:text-lg text-zinc-300 pl-0">
              <PhoneIcon className="w-4 sm:w-6 -translate-x-[1px]
              sm:translate-x-0" />
              <h2 className="pl-1"
              >
                012 212 12 12
              </h2>
            </span>
            <Link href="https://www.instagram.com/alioglu.group/" target="_blank"
              className="flex h-4 sm:h-6 items-center text-sm sm:text-lg text-zinc-300">
              <FontAwesomeIcon icon={faInstagram}
                className="text-base sm:text-xl w-4 sm:w-6 -translate-x-[1px]"
              />
              <h2 className="pl-1"
              >
                aligolu.group
              </h2>
            </Link>
          </div>
        </div>
        <p className="absolute text-xs sm:text-sm text-neutral-500
        bottom-4 left-8 lg:left-4">
          Built by
          <Link
            target="_blank"
            href="https://github.com/rasulali/"
            className="underline text-neutral-400 pl-1">
            Rasul Ali
          </Link>
        </p>
      </section>
    </main >
  )
}
export default Home
