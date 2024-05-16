"use client";

import Card from "@/components/card";
import Contact from "@/components/quickContact";
import AzeMap from "@/components/map";
import Navbar from "@/components/navbar";
import {
  ArrowLongRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import Heading from "@/components/heading";
import hotel from "@/../public/cardImages/hotel.jpg";
import restaurant from "@/../public/cardImages/restourant.jpg";
import interior from "@/../public/cardImages/interior.jpg";
import exterior from "@/../public/cardImages/exterior.jpg";
import object from "@/../public/cardImages/object.jpg";
import construction from "@/../public/cardImages/construction.jpg";
import Footer from "@/components/footer";
import Splash from "@/components/splash";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    new Promise((resolve) => setTimeout(resolve, 1400)).then(() => {
      setLoading(false);
      document.body.style.overflow = "visible";
    });
  }, []);
  const [isTextHover, setTextHover] = useState(false);
  const handleMouseEnter = () => {
    setTextHover(true);
  };
  const handleMouseLeave = () => {
    setTextHover(false);
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInView(videoRef, { once: false });

  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true });

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -128 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.1 } },
  };
  const textControls = useAnimation();

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView]);

  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });
  return (
    <main className={`relative ${loading ? "overflow-hidden" : ""}`}>
      {loading && (
        <div className="fixed z-[999999] w-screen h-screen">
          <Splash />
        </div>
      )}
      {/* First Section */}
      <section className="relative w-full h-screen bg-grayA">
        <Contact scroll={scroll} />
        <Navbar isVideoVisible={videoInView} />
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/background.webm" type="video/webm" />
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {videoInView && (
          <span
            className="absolute flex items-center justify-center
          bottom-[5%] left-1/2 -translate-x-1/2
          "
          >
            <ChevronDownIcon className="opacity-0 sm:w-12 w-8 text-zinc-100/60 animate-down" />
          </span>
        )}
      </section>
      {/* Second Section */}
      <section className="min-h-screen p-4 sm:p-8 lg:p-16 bg-grayA">
        {/* Projects Text */}
        <motion.div
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          className="lg:mb-16 mb-4 sm:mb-8"
          animate={textControls}
        >
          <Link
            className="flex items-center justify-center relative w-fit"
            href="/portfolio"
          >
            <motion.div
              onHoverStart={handleMouseEnter}
              onHoverEnd={handleMouseLeave}
              className="absolute w-[102%] h-[112%] z-20"
            />
            <h1
              className={`text-4xl sm:text-5xl lg:text-9xl transition-colors z-10
                  duration-100 delay-75
                  ${isTextHover ? "text-grayA" : "text-zinc-100"}`}
            >
              Layihələrimiz
            </h1>
            <motion.span
              ref={textRef}
              variants={arrowVariants}
              initial="hidden"
              animate={textControls}
              className="lg:pt-4 pl-4 z-10"
            >
              <ArrowLongRightIcon
                className={`lg:w-32 sm:w-16 w-12 duration-75 delay-0
              ${isTextHover ? "text-grayA" : "text-zinc-100"}`}
              />
            </motion.span>
            <motion.div
              className={`absolute top-1/2 left-1/2 bg-zinc-100 w-[104%] h-[112%]
            pointer-events-none -skew-x-12 delay-100
            transform transition duration-300 origin-left -translate-x-1/2 -translate-y-1/2
            ${isTextHover ? "scale-x-1" : "scale-x-0"}
            `}
            />
          </Link>
        </motion.div>

        {/* Cards Section */}
        <div
          className="max-w-[calc((832px+96px)*3+128px)] lg:py-8 mx-auto flex flex-col lg:flex-row lg:flex-wrap
        items-center justify-center gap-y-8 sm:gap-y-12 lg:gap-x-10 xl:gap-x-16 lg:gap-y-24"
        >
          <Card
            delay={0.15}
            tag="İnteryer"
            src={interior}
            href="/portfolio/interiors"
          />
          <Card
            delay={0.2}
            tag="Eksteryer"
            src={exterior}
            href="/portfolio/exteriors"
          />
          <Card
            delay={0.05}
            tag="Restoranlar"
            src={restaurant}
            href="/portfolio/restaurants"
          />
          <Card delay={0} tag="Otellər" src={hotel} href="/portfolio/hotels" />
          <Card
            delay={0.1}
            tag="İaşə Obyektləri"
            src={object}
            href="/portfolio/objects"
          />
          <Card
            delay={0.25}
            tag="Təmir/Tikinti"
            src={construction}
            href="/portfolio/constructions"
          />
        </div>
      </section>
      {/* Third Section */}
      <section className="relative bg-grayA lg:p-16 sm:p-8 p-4">
        {/* Who are we */}
        <div className="hidden h-screen">
          <span className="pointer-events-none">
            <Heading
              animate={{ from: -50, to: 0, dir: "x" }}
              variant="h1"
              text="Biz Kimik?"
            />
          </span>
        </div>

        {/* Location */}
        <div className="bg-grayA sm:my-40 my-16">
          <div className="relative">
            <h1
              className="flex flex-col gap-2 text-nowrap
              top-0 left-0
              lg:text-5xl sm:text-3xl text-xl font-semibold text-zinc-100"
            >
              <span
                className="sm:border-l-8 border-l-4 border-red-400 sm:pl-2 pl-1
                pt-1
                leading-[1.2]"
              >
                <span>Vurğun Residence</span>
                <span className="flex">
                  Bakı
                  <MapPinIcon className="ml-1 sm:w-8 w-5 text-red-400" />
                </span>
              </span>
            </h1>
            <AzeMap />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Home;
