"use client";
import Scene from "@/components/3dModel";
import LiveDiv from "@/components/liveDiv";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import Heading from "@/components/heading";
import {
  ChevronDownIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import AutoCAD from "@/components/autocad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import Link from "next/link";
const Academy = () => {
  const [cadClick, setCadClick] = useState(false);
  const [cadHover, setCadHover] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const heatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, [typeof window !== "undefined" && window.innerWidth]);

  const mousePos = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const cursorPos = {
    x: useSpring(mousePos.x, { stiffness: 200, damping: 50 }),
    y: useSpring(mousePos.y, { stiffness: 200, damping: 50 }),
  };

  const handleMousePos = (e: MouseEvent) => {
    mousePos.x.set(e.clientX - 60);
    mousePos.y.set(e.clientY - 60);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePos);
    return () => {
      window.removeEventListener("mousemove", handleMousePos);
    };
  });
  const [color, setColor] = useState("");
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScroll(latest);
  });
  useEffect(() => {
    const hue = Math.round(scroll * (60 - 40) + 30);
    setColor(`hsl(${hue}, 90%, 55%)`);
  }, [scroll]);

  useEffect(() => {
    cursorPos.x.set(windowDimensions.width / 2 - 60);
    cursorPos.y.set(windowDimensions.height / 2 - 60);
    setTimeout(() => {
      if (heatRef.current) {
        heatRef.current.style.opacity = "0.8";
      }
    }, 1000);
  }, [windowDimensions.width, windowDimensions.height]);
  return (
    <main className="relative overflow-hidden max-w-[1920px] mx-auto">
      {scroll === 0 && (
        <span
          className="fixed flex items-center justify-center
          bottom-[2%] left-1/2 -translate-x-1/2"
        >
          <ChevronDownIcon className="opacity-0 sm:w-12 w-8 text-zinc-100/60 animate-down" />
        </span>
      )}
      <motion.div
        ref={heatRef}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        style={{
          translateX: cursorPos.x,
          translateY: cursorPos.y,
          backgroundColor: color,
        }}
        className="fixed -z-50 w-[120px] blur-[20px] aspect-square rounded-full
        opacity-0 pointer-events-none transition-opacity duration-1000"
      />
      <div className="w-full">
        <div className="flex flex-col lg:gap-y-4 items-center mt-12 lg:mb-4 mb-2">
          <Heading
            text="Akademiya"
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h1"
          />
          <LiveDiv animate={{ from: -20, to: 0, dir: "y", delay: 0.1 }}>
            <h1 className="lg:text-4xl sm:text-3xl text-xl text-zinc-100 w-full text-center font-light">
              Təhsilinizi <span className="font-semibold"> 15 illik</span>{" "}
              təcrübədən alın!
            </h1>
          </LiveDiv>
        </div>
        {/* Content */}
        <div
          className="w-full flex flex-col lg:flex-row
        lg:h-[calc(100vh-168px-48px-32px)]"
        >
          {/* Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:p-4 p-2">
            <div className="h-fit w-full self-end">
              <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0 }}>
                <div
                  className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4 flex items-center
                  lg:rounded-xl rounded-lg drop-shadow-lg lg:col-span-1"
                >
                  <div>
                    <h1 className="lg:text-5xl sm:text-3xl text-xl text-zinc-100 font-semibold mb-2">
                      Nə öyrənəcəksiniz?
                    </h1>
                    <p
                      className="lg:mt-2 lg:text-2xl sm:text-xl
                  text-lg text-zinc-100 leading-snug"
                    >
                      <span
                        onClick={() => {
                          document
                            .getElementById("3dsmax")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#7fc5de] via-[#39a5cc] to-[#36687f]"
                      >
                        3ds Max
                      </span>
                      <span>, </span>
                      <span
                        onClick={() => {
                          document
                            .getElementById("autocad")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#f4548b] via-[#d52654] to-[#b11538]"
                      >
                        Autocad
                      </span>
                      <span> </span>
                      və
                      <span> </span>
                      <span
                        onClick={() => {
                          document
                            .getElementById("photoshop")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="bg-clip-text text-transparent text-nowrap cursor-pointer
                    bg-gradient-to-br from-[#31a8ff]  to-[#001e36]"
                      >
                        Photoshop
                      </span>
                      -u əhatə edən geniş kursumuzla dizayn dünyasına atılın.
                      Effektiv ünsiyyət sənətində ustalaşarkən digital
                      modelləmə, renderləmə və post production-da təqdimatların
                      hazırlanmasını öyrənin. Sahəyə yerində ziyarətlər də daxil
                      olmaqla, real senariləri{" "}
                      <span className="text-nowrap">kəşf edin </span>
                      və müstəqil bir dizayner olaraq inkşaf etmək üçün lazımi
                      təcrübəni qazanın.
                    </p>
                  </div>
                </div>
              </LiveDiv>
            </div>

            <div className="lg:col-span-1 lg:row-span-2 w-full h-fit self-center">
              <LiveDiv animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}>
                <div
                  className="lg:p-6 p-4 drop-shadow-lg relative bg-[#383838]
                      lg:rounded-xl rounded-lg overflow-hidden"
                >
                  <div
                    className="absolute lg:bottom-8 bottom-6 flex lg:py-2 lg:px-4 py-1 px-2
                  bg-gradient-to-r from-grayA via-grayA/60 to-grayA/10
                "
                  >
                    <MapPinIcon className="lg:w-6 w-4 aspect-square text-neutral-200" />
                    <h1 className="lg:text-lg text-xs text-neutral-200">
                      Akademiya, İçəri Şəhər
                    </h1>
                  </div>
                  <Image
                    className="aspect-[16/9] w-full h-full object-cover"
                    quality={70}
                    src="/academy/academy.webp"
                    alt=""
                    width={1080}
                    height={0}
                  />
                </div>
              </LiveDiv>
            </div>

            <div className="w-full h-fit lg:mb-auto">
              <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0 }}>
                <div
                  className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4 lg:col-span-1
                  flex items-center lg:rounded-xl rounded-lg drop-shadow-lg"
                >
                  <div>
                    <h1 className="lg:text-5xl sm:text-3xl text-xl text-zinc-100 font-semibold mb-2">
                      Dərslərimiz kimlər üçündür?
                    </h1>
                    <p className="lg:mt-2 lg:text-2xl sm:text-xl text-lg text-zinc-100 leading-snug">
                      Dərslərimizdə memarlıq və incəsənət ixtisası üzrə ali
                      təhsil alan və ya interyer, eksteryer dizayna xüsusi
                      maraqı olan individual-lar iştirak edə bilər.
                    </p>
                  </div>
                </div>
              </LiveDiv>
            </div>
          </div>
        </div>
      </div>
      {/* 3ds max wrapper */}
      <div id="3dsmax" className="lg:w-full lg:px-4 px-2">
        <div className="w-full lg:mt-6 mt-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/3dsmax.svg"
                alt="3DSmax-ın logosu"
              />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#7fc5de] via-[#39a5cc] to-[#36687f]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 "
              >
                3ds Max
              </h1>
              <h1
                className="lg:text-3xl sm:text-xl text-sm text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full"
              >
                Gerçəyə yaxın visualizasiya üçün
                <span className="text-nowrap"> 3 ölçülü </span>
                modelləmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 relative items-center">
          <div className="flex flex-col lg:w-1/2 w-full gap-y-4">
            <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0 }}>
              <div
                className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4 aspect-[16/9]
              lg:rounded-xl rounded-lg drop-shadow-lg w-full lg:h-full h-fit flex flex-col"
              >
                <Image
                  src="/academy/3dsmax.webp"
                  className="w-full h-full object-fit"
                  alt=""
                  width={1920}
                  height={0}
                  quality={70}
                />
              </div>
            </LiveDiv>
            <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0 }}>
              <div
                className="bg-neutral-700/50 backdrop-blur lg:p-6 p-4
              lg:rounded-xl rounded-lg drop-shadow-lg w-full lg:h-full h-fit flex flex-col"
              >
                <p
                  className="w-full lg:text-2xl sm:text-xl text-lg
                text-zinc-100 leading-snug"
                >
                  3ds Max, memarlıq, oyun və film sektorunda gözoxşayan
                  vizualizasiyalar və immersive təcrübələr yaratmaq üçün geniş
                  şəkildə istifadə olunan üç ölçülü modelləmə programıdır. Bizim
                  dərslərimiz ilə öz kreativ potentialınızın kilidini açacaq,
                  sektorun ekspterlərindən birinci əldən texnikalar
                  öyrənəcəksiniz.
                </p>
              </div>
            </LiveDiv>
          </div>
          <div className="lg:w-1/2 w-full h-fit">
            <LiveDiv animate={{ from: 20, to: 0, dir: "x", delay: 0 }}>
              <div
                className="relative w-full h-full bg-neutral-700/50 backdrop-blur
              lg:p-6 lg:rounded-xl rounded-lg"
              >
                <div
                  className="lg:rounded-xl w-full h-full rounded-lg aspect-[16/9]
              overflow-hidden bg-[#383838] drop-shadow-lg filter-none relative"
                >
                  <Scene />
                  <div className="absolute z-50 bottom-1 lg:left-2 left-1">
                    <h1 className="text-zinc-100 lg:text-base text-[8px]">
                      <span className="font-bold">&#9432; </span>Gördüyünüz
                      simulasiya sadələşdirilmişdir və gerçək təcrübəni əks
                      etdirmir
                    </h1>
                  </div>
                </div>
              </div>
            </LiveDiv>
          </div>
        </div>
      </div>

      {/* Autocad Wrapper */}
      <div id="autocad" className="lg:w-full lg:px-4 px-2 lg:mt-24 mt-8">
        <div className="w-full lg:mt-6 mt-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/autocad.svg"
                alt="Autocad-ın logosu"
              />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#f4548b] via-[#d52654] to-[#b11538]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 "
              >
                Autocad
              </h1>
              <h1
                className="lg:text-3xl sm:text-xl text-sm text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full"
              >
                Dəqiq, iki və üç ölçülü çertyojlama üçün
                <span
                  className="relative lg:no-underline underline"
                  onClick={() => {
                    if (window.innerWidth < 640) setCadClick(!cadClick);
                  }}
                >
                  <span
                    className={`${cadClick || cadHover ? "inline-block" : "hidden"} absolute bg-grayALight lg:text-base lg:px-2
                    py-1 lg:rounded-xl px-1.5 rounded-xl text-xs text-nowrap
                    top-0 left-full origin-right -translate-y-full drop-shadow-lg
                    -translate-x-2 w-fit
                    `}
                  >
                    Computer-Aided Design
                  </span>
                  <motion.span
                    onHoverStart={() => setCadHover(true)}
                    onHoverEnd={() => setCadHover(false)}
                    className="lg:text-sm hidden lg:inline-block font-bold text-neutral-400 absolute
                    cursor-default group right-0 top-0 -translate-y-2"
                  >
                    &#9432;
                  </motion.span>
                  <span className="lg:px-3 px-1 cursor-default">CAD</span>
                </span>
                programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 items-center">
          <div
            className="lg:w-1/2 h-fit w-full bg-neutral-700/50 lg:p-6 p-4
             drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg"
          >
            <AutoCAD />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-y-4">
            <div
              className="aspect-[16/9] bg-neutral-700/30 lg:p-6 p-4
             drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg"
            >
              <Image
                src="/academy/autocad.webp"
                alt=""
                className="mb-2 w-full h-full object-fill"
                width={1920}
                height={0}
                quality={70}
              />
            </div>
            <div
              className="w-full bg-neutral-700/30 lg:p-6 p-4
             drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg"
            >
              <p
                className="w-full lg:text-2xl sm:text-xl text-lg
                text-zinc-100 leading-snug"
              >
                AutoCAD 2D və 3D dizaynın təməl daşı olaraq dayanır və memarlıq,
                mühəndislik və istehsalat kimi sənayelərdə dəqiq çertyojlamalar
                vasitəsi kimi istifadə olunur. Dərslərimiz AutoCAD-i mənimsəmək
                və rəqəmsal kətan üzərində təxəyyülünüzü üzə çıxarmaqda sizə
                bələdçilik edəcək.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photoshop Wrapper */}
      <div id="photoshop" className="lg:px-4 px-2 lg:mt-24 mt-8">
        <div className="w-full lg:mt-6 mt-4">
          <LiveDiv animate={{ from: -20, to: 0, dir: "x", delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/photoshop.svg"
                alt="Photoshop-un logosu"
              />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#31a8ff]  to-[#001e36]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 "
              >
                Photoshop
              </h1>
              <h1
                className="lg:text-3xl sm:text-xl text-sm text-zinc-100
                lg:translate-y-1 font-semibold lg:my-4 my-2 min-w-full"
              >
                Adobe-in professional şəkil redaktə etmə programıdır
              </h1>
            </div>
          </LiveDiv>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div
            className="lg:w-1/2 w-full h-fit bg-neutral-700/50 lg:p-6 p-4
             drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg"
          >
            <div
              className="w-full lg:text-2xl sm:text-xl text-lg
                text-zinc-100 leading-snug"
            >
              <h1 className="font-light lg:text-3xl sm:text-2xl text-xl lg:mb-4">
                Həmişə yaşıl bacarıqlarınıza daha bir əlvəmiz isə Adobe
                Photoshop olacaqdır!
              </h1>
              <p className="lg:mb-4">
                3D Dizaynerlər və Memarlar tərəfindən geniş şəkildə istifadə
                olunan bu proqram :
                <ul className="list-disc list-inside">
                  <li className="font-semibold">post processing</li>
                  <li className="font-semibold">texture redaktə etmə</li>
                  <li className="font-semibold">concept art hazırlama</li>
                  zamanı sizin ən yaxın dostunuzdur.
                </ul>
              </p>
              <p className="lg:mb-4">
                Geniş alətlər dəsti və intuitiv interfeysi ilə Photoshop,
                yaradıcılığınızı üzə çıxarmağa imkan yaradacaqdır. İstər 3D
                modelinizdə incə sazlamalar edin istərsə də növbəti böyük
                memarlıq əsərinin eskizini tərtib edin, Photoshop canlı və pixel
                perfect detalları ilə təxəyyülünüzü canlandırmaq üçün müraciət
                edəcəyiniz vasitədir.
              </p>
              <p>
                Dərslərimizə qoşulun və sabahın vizual mənzərəsini
                formalaşdırmaqda Adobe Photoshop-un gücünü birinci əldən kəşf
                edin!
              </p>
            </div>
          </div>
          <div
            className="lg:w-1/2 h-auto w-full bg-neutral-700/50 lg:p-6 p-4
             drop-shadow-lg backdrop-blur lg:rounded-xl rounded-lg"
          >
            <Image
              src="/academy/photoshop.webp"
              alt=""
              className="w-full h-full object-cover"
              width={1920}
              height={0}
              quality={70}
            />
          </div>
        </div>
      </div>
      <div className="lg:px-4 px-2 lg:my-12">
        <LiveDiv animate={{ from: -20, to: 0, dir: "y", delay: 0.5 }}>
          <div className="flex flex-col items-center lg:gap-y-4 gap-y-2 lg:mb-8 mb-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-zinc-100">
              Dərslərimizə qoşulun
            </h1>
            <p className="text-zinc-400 lg:text-2xl sm:text-xl">
              Mütəxəssislərdən öyrənmək və bacarıqlarınızı inkşaf etdirmək üçün
              bu fürsəti qaçırmayın.
            </p>
          </div>
        </LiveDiv>
        <div className="flex lg:flex-row flex-col gap-4 lg:mt-8 mt-4 justify-center items-center lg:w-1/2 lg:mx-auto">
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
export default Academy;
