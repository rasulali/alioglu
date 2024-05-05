"use client";
import Card, { CardServicesProps } from "@/components/cardServices";
import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import Pulse from "@/components/pulse";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faBath } from "@fortawesome/free-solid-svg-icons/faBath";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons/faCompassDrafting";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons/faHelmetSafety";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const carousel: CardServicesProps[] = [
    {
      link: "/portfolio",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitaeserpa
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faCompassDrafting,
      title: "Layihə Xidmətləri",
    },
    {
      link: "/portfolio/constructions",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faHelmetSafety,
      title: "Təmir/Tikinti Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faBath,
      title: "Aksessuarlar",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faScrewdriverWrench,
      title: "Usta Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc Vitae
          suspendisse nunc id sed varius metus, efficitur velit nunc euismod
          urna.
        </p>
      ),
      icon: faChartSimple,
      title: "Biznes Plan Tərtibi Metodikası",
    },
  ];

  const doubleCarousel = [...carousel, ...carousel];

  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollX, setScrollX] = useState(0);
  const [duration, setDuration] = useState(0.5);
  const [animateState, setAnimateState] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const cardWidth = () => {
    if (window.innerWidth < 640) {
      return window.innerWidth;
    } else {
      return 960;
    }
  };

  useEffect(() => {
    const handleTouchStart = () => {
      setAutoScroll(false);
    };

    const handleTouchEnd = () => {
      setAutoScroll(true);
    };

    const carouselWrapper = carouselWrapperRef.current;
    carouselWrapper?.addEventListener("touchstart", handleTouchStart);
    carouselWrapper?.addEventListener("touchend", handleTouchEnd);

    return () => {
      carouselWrapper?.removeEventListener("touchstart", handleTouchStart);
      carouselWrapper?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleLeftClick = () => {
    if (animateState) {
      return;
    }
    setAnimateState(true);
    if (scrollX === 0) {
      setDuration(0);
      setScrollX(-cardWidth() * carousel.length);
      setTimeout(() => {
        setDuration(0.5);
        setScrollX(-cardWidth() * carousel.length + cardWidth());
        setAnimateState(false);
      }, 500);
    } else {
      setScrollX(scrollX + cardWidth());
      setAnimateState(false);
    }
  };

  const handleRightClick = () => {
    if (animateState) {
      return;
    }
    setAnimateState(true);
    if (scrollX === -cardWidth() * (carousel.length - 1)) {
      setTimeout(() => {
        setDuration(0);
        setScrollX(0);
      }, 500);
    }
    setDuration(0.5);
    setScrollX(scrollX - cardWidth());
    setAnimateState(false);
  };

  useEffect(() => {
    if (autoScroll) {
      const interval = setInterval(() => {
        handleRightClick();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoScroll, scrollX]);

  const [building_1Hover, setBuilding_1Hover] = useState(false);
  const [building_2Hover, setBuilding_2Hover] = useState(false);
  const [building_3Hover, setBuilding_3Hover] = useState(false);
  const [building_4Hover, setBuilding_4Hover] = useState(false);

  return (
    <main className="lg:mt-24 mt-12">
      {/* Heading */}
      <div className="flex flex-col items-center w-full lg:mb-24 mb-4 relative">
        <div className="w-fit">
          <Heading
            animate={{ from: -10, to: 0, dir: "y" }}
            text="Xidmətlərimiz"
            variant="h1"
          />
        </div>
        <Heading
          text={
            <h2 className="font-light">Sizin Ehtiyaclarınızı Düşünərək !</h2>
          }
          animate={{ from: -10, to: 0, dir: "y", delay: 0.1 }}
          variant="h3"
        />
      </div>

      <div className="flex w-full lg:h-[600px] relative lg:mb-24 overflow-hidden">
        <ChevronDownIcon
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10
          opacity-0 sm:w-12 w-8 text-zinc-100/60 animate-down lg:block hidden"
        />
        <div className="w-full h-full flex flex-col lg:gap-y-4 gap-y-2 mt-14 lg:mt-0 justify-end z-30 lg:p-8 pointer-events-none">
          <div className="lg:w-1/3 w-full flex justify-center lg:justify-normal">
            <Heading
              animate={{ from: -10, to: 0, dir: "x", delay: 0.1 }}
              variant="h3"
              text={
                <h1 className="font-semibold drop-shadow pointer-events-auto lg:text-left text-center">
                  Layihədən tikintiyə
                  <br />
                  Təmirdən aksessuarlara
                </h1>
              }
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <LiveDiv animate={{ from: -10, to: 0, dir: "x", delay: 0.2 }}>
              <p
                className="drop-shadow pointer-events-auto lg:text-2xl
          sm:text-lg text-base text-zinc-100 lg:text-left text-center font-light"
              >
                Morbi laoreet eu dolor ut dui ac semper vestibulum morbi urna
                vestibulum at arcu vestibulum in at, dolor nullam eget dui metus
                a dictumst hac platea, facilisis. Vulputate lorem nisi nulla eu
                eCursus congue tempor, faucibus sed ut sit sapien sagittis eros,
                neque ipsum pellentesque porttitor, rhoncus cras. Nunc ut auctor
                duis nulla aenean, nunc tempor eu in nullam ornare nibh
                imperdiet congue lacus vivamus consequat feugiat pellentesque
              </p>
            </LiveDiv>
          </div>
        </div>
        <Image
          src="/services/city.png"
          alt=""
          width={1920}
          height={0}
          className="lg:w-full lg:h-full  absolute top-0 left-0"
        />

        {/* BUILDING 1 INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: building_1Hover ? 1 : 0 }}
          transition={{
            duration: 0.1,
            type: "easeOut",
          }}
          className="absolute w-[382px] h-[256px] top-[129.5px] left-[864px] z-50 pointer-events-none"
        >
          <div className="w-[calc(100%-128px)] h-1/2 ml-auto flex flex-col">
            <p className="text-2xl text-neutral-400">BUILDING I</p>
          </div>
          <svg className="fill-blue-500/50" viewBox="0 0 379 126">
            <path d="M5 122a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
            <path
              fill-rule="evenodd"
              d="M9.2 118.2 125.42 2H379V0H125a1 1 0 0 0-.7.3L7.8 116.8c-.02 0-.03.02-.04.03a5 5 0 1 0 1.41 1.41l.04-.03ZM8 121a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </motion.div>

        {/* BUILDING 1 Pulse */}
        <Pulse
          dur="2"
          isHovered={building_1Hover}
          className="absolute z-50 pointer-events-none w-24 aspect-square
          top-[331px] left-[821px] hidden lg:block"
        />

        {/* BUILDING 2 INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: building_2Hover ? 1 : 0 }}
          transition={{
            duration: 0.1,
            type: "easeOut",
          }}
          className="absolute w-[382px] h-[256px] top-[189.5px] left-[984px] z-50 pointer-events-none"
        >
          <div className="w-[calc(100%-128px)] h-1/2 ml-auto flex flex-col">
            <p className="text-2xl text-neutral-400">BUILDING II </p>
          </div>
          <svg className="fill-blue-500/50" viewBox="0 0 379 126">
            <path d="M5 122a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
            <path
              fill-rule="evenodd"
              d="M9.2 118.2 125.42 2H379V0H125a1 1 0 0 0-.7.3L7.8 116.8c-.02 0-.03.02-.04.03a5 5 0 1 0 1.41 1.41l.04-.03ZM8 121a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </motion.div>

        {/* BUILDING 2 Pulse */}
        <Pulse
          dur="2.6"
          isHovered={building_2Hover}
          className="absolute z-50 pointer-events-none w-24 aspect-square
          top-[391px] left-[941px] hidden lg:block"
        />

        {/* BUILDING 3 INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: building_3Hover ? 1 : 0 }}
          transition={{
            duration: 0.1,
            type: "easeOut",
          }}
          className="absolute w-[382px] h-[256px] top-[109px] left-[1170px] z-50 pointer-events-none"
        >
          <div className="w-[calc(100%-128px)] h-1/2 ml-auto flex flex-col">
            <p className="text-2xl text-neutral-400">BUILDING III </p>
          </div>
          <svg className="fill-blue-500/50" viewBox="0 0 379 126">
            <path d="M5 122a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
            <path
              fill-rule="evenodd"
              d="M9.2 118.2 125.42 2H379V0H125a1 1 0 0 0-.7.3L7.8 116.8c-.02 0-.03.02-.04.03a5 5 0 1 0 1.41 1.41l.04-.03ZM8 121a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </motion.div>

        {/* BUILDING 3 Pulse */}
        <Pulse
          dur="2.4"
          isHovered={building_3Hover}
          className="absolute z-50 pointer-events-none w-24 aspect-square
          top-[311px] left-[1127px] hidden lg:block"
        />

        {/*BUILDING 4 INFO*/}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: building_4Hover ? 1 : 0 }}
          transition={{
            duration: 0.1,
            type: "easeOut",
          }}
          className="absolute w-[382px] h-[256px] top-[209px] left-[1370px] z-50 pointer-events-none"
        >
          <div className="w-[calc(100%-128px)] h-1/2 ml-auto flex flex-col">
            <p className="text-2xl text-neutral-400">BUILDING IV </p>
          </div>
          <svg className="fill-blue-500/50" viewBox="0 0 379 126">
            <path d="M5 122a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
            <path
              fill-rule="evenodd"
              d="M9.2 118.2 125.42 2H379V0H125a1 1 0 0 0-.7.3L7.8 116.8c-.02 0-.03.02-.04.03a5 5 0 1 0 1.41 1.41l.04-.03ZM8 121a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </motion.div>

        {/* BUILDING 4 Pulse */}
        <Pulse
          dur="2.2"
          isHovered={building_4Hover}
          className="absolute z-50 pointer-events-none w-24 aspect-square
          top-[411px] left-[1327px] hidden lg:block"
        />

        <div className="absolute top-0 left-0 w-full h-full z-20 hidden lg:block">
          <svg fill="none" viewBox="0 0 1920 600" className="relative">
            {/*SELECTOR 1*/}
            <motion.path
              //left-1
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              onHoverStart={() => setBuilding_1Hover(true)}
              onHoverEnd={() => setBuilding_1Hover(false)}
              transition={{
                duration: 0.1,
                type: "easeOut",
              }}
              className="stroke-blue-500/70 stroke-2 fill-blue-300/50 relative"
              d="m648 600 3-332 1-162 59-8V87l23-3v-9l23-4 44 11 29 11v10l106 27v397h32v-9h35v2h9v17h42v63H648Z"
            />
            {/*SELECTOR 2*/}
            <motion.path
              //left-2
              onHoverStart={() => setBuilding_2Hover(true)}
              onHoverEnd={() => setBuilding_2Hover(false)}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                type: "easeOut",
              }}
              className="stroke-blue-500/70 stroke-2 fill-blue-300/50"
              d="m946 361 2 1v5h-12v160h32v-9h35v2h9v17h42V392l-9 1v-16h-15v-4l-3-1v-8l-2-2h-10v-9l-1-2h-42l-2 3h-24v7Z"
            />
            {/*SELECTOR 3*/}
            <motion.path
              // left-3
              onHoverStart={() => setBuilding_3Hover(true)}
              onHoverEnd={() => setBuilding_3Hover(false)}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                type: "easeOut",
              }}
              className="stroke-blue-500/70 stroke-2 fill-blue-300/50"
              d="m1084 170 25-12 30-2 86 3 15 3v36l10 4 1 52 6 2v55l7 3v35h3v19l4 1v7h-16v224h-201V370h7v-55l6-2v-52l8-1v-50h9v-40Z"
            />
            {/*SELECTOR 4*/}
            <motion.path
              //left-4
              onHoverStart={() => setBuilding_4Hover(true)}
              onHoverEnd={() => setBuilding_4Hover(false)}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{
                duration: 0.1,
                type: "easeOut",
              }}
              className="stroke-blue-500/70 stroke-2 fill-blue-300/50"
              d="m1469 368-214 8v224h291l-1-219-71-13h-5Z"
            />
          </svg>
        </div>
        {/* shadows */}
        <div className="w-full h-full absolute bg-gradient-to-r from-grayA via-grayA/50 to-grayA/10" />
        <div className="w-1/2 h-full absolute right-0 bg-gradient-to-l from-grayA via-transparent to-transparent" />
        {/* shadows */}
      </div>
      {/* Cards */}
      <div
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
        ref={carouselWrapperRef}
        className="max-w-[1920px] mx-auto h-fit relative lg:mb-24 mb-12 overflow-hidden"
      >
        <button
          onClick={handleLeftClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:left-4
          lg:translate-y-1/2 lg:translate-x-0 top-1/2 translate-y-1/2
          transition-all duration-200 hover:border-zinc-100 group bg-neutral-800
        z-20 lg:w-16 w-12 aspect-square border-2 border-neutral-700 rounded-full items-center justify-center"
        >
          <ArrowLeftIcon className="w-full h-full p-2 text-zinc-100 group-hover:text-neutral-900 transition-colors duration-200" />
        </button>
        <button
          onClick={handleRightClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:right-4 lg:translate-y-1/2
          lg:translate-x-0 top-1/2 translate-y-1/2 right-0
          transition-all duration-200 hover:border-zinc-100 bg-neutral-800 group hover:bg-zinc-100
        z-20 lg:w-16 w-12 aspect-square border-2 border-neutral-700 rounded-full items-center justify-center"
        >
          <ArrowRightIcon className="w-full h-full p-2 text-zinc-100 group-hover:text-neutral-900 transition-colors duration-200" />
        </button>

        <div className="overflow-x-hidden whitespace-nowrap w-full ">
          {doubleCarousel.map((item, index) => (
            <motion.div
              ref={carouselRef}
              animate={{ x: scrollX }}
              transition={{
                duration: duration,
                ease: "easeInOut",
              }}
              key={index}
              className="inline-flex justify-center lg:w-1/2 w-full"
            >
              <Card
                link={item.link}
                description={item.description}
                icon={item.icon}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full lg:px-8 flex flex-col items-center">
        <Heading
          animate={{ from: -10, to: 0, dir: "x" }}
          text={<h1>Bizimlə Əlaqə Saxlayın</h1>}
          variant="h2"
        />
        <div
          className="flex lg:flex-row flex-col gap-4 lg:mt-8 mt-4 justify-center
        items-center lg:w-1/2 lg:mx-auto lg:mb-24"
        >
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="https://wa.me/994502989999">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <span className="w-6 aspect-square flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="w-full h-full text-green-500"
                  />
                </span>
                <div>
                  <p className="font-medium text-[#f4f4f5]">WhatsApp</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    050 298 99 99
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="tel:994502989999">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <PhoneIcon className="w-6 aspect-square text-blue-500" />
                <div>
                  <p className="font-medium text-[#f4f4f5]">Telefon</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    050 298 99 99
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full lg:px-4 px-2">
            <Link className="block" href="mailto:office@alioglu.az">
              <div
                className="flex items-center gap-3 lg:rounded-xl rounded-lg p-4
              bg-neutral-700/50 backdrop-blur hover:bg-neutral-600/50
              transition-colors duration-300"
              >
                <EnvelopeIcon className="w-6 aspect-square text-red-500" />
                <div>
                  <p className="font-medium text-[#f4f4f5]">Elektron poçt</p>
                  <p className="text-sm text-[#b3b3b3] dark:text-[#b3b3b3]">
                    office@alioglu.az
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
