"use client";
import Card, { CardServicesProps } from "@/components/cardServices";
import Heading from "@/components/heading";
import { faBath } from "@fortawesome/free-solid-svg-icons/faBath";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons/faChartSimple";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons/faCompassDrafting";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons/faHelmetSafety";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons/faScrewdriverWrench";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
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
          Vitae suspendisse nunc id sed varius metus, efficitur velit nunc
          euismod urna.
        </p>
      ),
      icon: faCompassDrafting,
      title: "Layihə Xidmətləri",
    },
    {
      link: "/portfolio/constructions",
      description: (
        <p>Arcu ac in convallis, in ut a, posuere fusce nibh praesent eu.</p>
      ),
      icon: faHelmetSafety,
      title: "Təmir/Tikinti Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>Eu elit suspendisse ac nec quis, nunc nulla ut nec at arcu.</p>
      ),
      icon: faBath,
      title: "Aksessuarlar",
    },
    {
      link: "#",
      description: (
        <p>
          Lacus enim suspendisse viverra tempor ante arcu, ligula sit pulvinar
          pharetra consectetur.
        </p>
      ),
      icon: faScrewdriverWrench,
      title: "Usta Xidmətləri",
    },
    {
      link: "#",
      description: (
        <p>
          Curabitur est non erat pretium enim eu dictum aliquam sem sit, tellus.
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
      return window.innerWidth / 2;
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

  return (
    <main className="lg:mt-24 mt-12 max-w-[1920px] mx-auto relative min-h-screen">
      {/* Heading */}
      <div className="flex flex-col items-center w-full lg:mb-8">
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

      <div className="flex relative w-full lg:h-[600px]">
        <div className="w-full h-full flex flex-col gap-y-4 z-10 lg:p-8">
          <h1 className="text-zinc-100 lg:text-5xl">
            <span className="underline underline-offset-2">15</span> ildən
            artıqdır ki, xidmətinizdəyik!
          </h1>
          <p className="text-zinc-100 text-3xl w-1/2">
            Vestibulum fusce in, tristique ut et. Eu imperdiet faucibus
            dignissim dictumst non quam ut massa semper purus nunc nec.
            Pellentesque interdum vulputate nunc arcu sed consectetur
            consectetur semper penatibus dui sed rutrum viverra ultrices,
            pharetra urna vestibulum in, eu consectetur efficitur sagittis ut
            nascetur libero.
          </p>
          <h1 className="text-zinc-100 lg:text-3xl px-4 py-2 w-fit">
            Daha ətraflı məlumat üçün əlaqə saxlaya bilərsiniz
          </h1>
          <div className="flex z-10 gap-x-8">
            <div className="w-64 aspect-[2/1] border-2 border-neutral-500 rounded-full" />
            <div className="w-64 aspect-[2/1] border-2 border-neutral-500 rounded-full" />
            <div className="w-64 aspect-[2/1] border-2 border-neutral-500 rounded-full" />
          </div>
        </div>
        <Image
          src="/services/city.png"
          alt=""
          width={1920}
          height={0}
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="w-full h-full absolute bg-gradient-to-r from-grayA via-grayA/50 to-grayA/10" />
        <div className="w-full h-[60px] bg-gradient-to-t from-grayA via-grayA/50 to-grayA/0 absolute bottom-0 left-0" />
      </div>
      {/* Cards */}
      <div
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
        ref={carouselWrapperRef}
        className="w-full h-fit relative lg:mb-8 mb-4"
      >
        <button
          onClick={handleLeftClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:left-4
          lg:translate-y-1/2 lg:translate-x-0 -bottom-16 left-1/3 -translate-x-full
          transition-all duration-200 hover:border-zinc-100 group
        z-20 lg:w-16 w-12 aspect-square border-2 border-neutral-700 rounded-full items-center justify-center"
        >
          <ArrowLeftIcon className="w-full h-full p-2 text-zinc-100 group-hover:text-neutral-900 transition-colors duration-200" />
        </button>
        <button
          onClick={handleRightClick}
          className="absolute flex lg:bottom-[calc(50%-64px)] lg:right-4 lg:translate-y-1/2
          lg:translate-x-0 -bottom-16 right-1/3 translate-x-full
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
    </main>
  );
};

export default Services;
