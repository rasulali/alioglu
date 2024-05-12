"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./logo";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface NavbarProps {
  isVideoVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVideoVisible }) => {
  const [menuState, setMenuState] = useState(false);
  const [subMenuState, setSubMenuState] = useState(false);
  const Menu = () => {
    return (
      <div
        className="w-full flex flex-col lg:flex-row px-4 py-4
      lg:justify-evenly lg:h-full lg:items-center text-right lg:text-center
      gap-8 text-nowrap"
      >
        <motion.div
          onHoverStart={() => setSubMenuState(true)}
          onHoverEnd={() => setSubMenuState(false)}
          className="flex flex-col z-10 relative"
        >
          <motion.div className="flex gap-x-2">
            <Link
              href="/services"
              className="text-base sm:text-lg text-zinc-100 uppercase
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto"
            >
              XİDMƏTLƏRİMİZ
            </Link>
            <div
              className="w-6 aspect-square"
              onClick={() => {
                setSubMenuState(!subMenuState);
              }}
            >
              <ChevronDownIcon
                className={`w-full h-full text-zinc-100 ${subMenuState ? "rotate-180" : "rotate-0"}`}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: subMenuState ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="sm:absolute sm:top-7 sm:-translate-x-4 w-max flex flex-col
            gap-y-2 overflow-hidden sm:px-4 relative"
          >
            <div
              className={`flex flex-col gap-y-2 sm:py-4 pt-2 text-zinc-100 sm:text-left
            text-base sm:text-lg  sm:px-4 sm:rounded-lg sm:-translate-x-4 sm:drop-shadow
            ${isVideoVisible ? "sm:bg-grayA/50 sm:backdrop-blur-lg" : "sm:bg-grayA"}`}
            >
              <Link
                className="hover:text-neutral-500 transition-colors duration-500"
                href="/portfolio"
              >
                Layihə Xidmətləri
              </Link>
              <Link
                className="hover:text-neutral-500 transition-colors duration-500"
                href="/portfolio/constructions"
              >
                Təmir/Tikinti Xidmətləri
              </Link>
              <Link
                className="hover:text-neutral-500 transition-colors duration-500"
                href=""
              >
                Aksessuarlar
              </Link>
              <Link
                className="hover:text-neutral-500 transition-colors duration-500"
                href=""
              >
                Usta Xidmətləri
              </Link>
              <Link
                className="hover:text-neutral-500 transition-colors duration-500"
                href=""
              >
                Biznes Plan Tərtibi Metodikası
              </Link>
            </div>
          </motion.div>
        </motion.div>
        <Link
          href="/academy"
          className="text-md sm:text-lg text-zinc-100 uppercase
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          AKADEMİYA
        </Link>
        <Link
          href="/portfolio"
          className="text-md sm:text-lg text-zinc-100 uppercase
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          PORTFOLİO
        </Link>
        {/* reServe space for logo on wide screens */}
        <div
          className={`hidden relative lg:block w-[136px] mx-8 mt-28
        translate-y-1/2 -translate-x-[5px]
        ${isVideoVisible ? "bg-grayA/50 backdrop-blur-lg" : "bg-grayA"}
        transition-colors duration-500 h-5 -z-10 rounded-b-lg
        `}
        />
        {/* reServe space for logo on wide screens */}
        <Link
          href="#"
          className="text-md sm:text-lg text-zinc-100 uppercase
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          MEDİYA VƏ BLOQ
        </Link>
        <Link
          href="#"
          className="text-md sm:text-lg text-zinc-100 uppercase
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          HAQQIMIZDA
        </Link>
        <a
          href="/#footer"
          onClick={() => {
            setMenuState(false);
          }}
          className="text-md sm:text-lg text-zinc-100 uppercase cursor-pointer
           lg:hover:text-neutral-500 transition-colors duration-500
          w-fit lg:ml-0 ml-auto z-10"
        >
          Əlaqə
        </a>
      </div>
    );
  };

  return (
    <div className="fixed w-screen z-30">
      <nav
        className={`flex items-center z-30 w-full h-28 py-4 px-4
     ${isVideoVisible ? "bg-grayA/50 backdrop-blur-lg" : "bg-grayA"} transition-colors duration-500`}
      >
        <span
          className="mr-auto lg:absolute lg:lg:left-1/2 z-10
        lg:-translate-x-1/2 lg:top-[calc(50%+16px)] lg:-translate-y-1/2"
        >
          <Link href="/">
            <Logo />
          </Link>
        </span>
        <div className="hidden lg:flex w-full">
          <Menu />
        </div>
        <Bars3Icon
          onClick={() => {
            setMenuState(!menuState);
          }}
          className="lg:hidden h-12 w-12 ml-auto text-zinc-100 z-10"
        />
      </nav>

      {/* mobile menu */}
      <div
        className={`lg:hidden absolute top-0 right-0 h-screen flex justify-end
      w-screen transition-transform duration-100
      ${!menuState ? "translate-x-full" : ""}`}
      >
        {/* escape div */}
        <div
          onClick={() => {
            setMenuState(false);
          }}
          className="absolute w-full h-full"
        />
        {/* escape div */}
        <div
          className={`bg-grayA ${isVideoVisible && "bg-grayA/50 backdrop-blur-lg"}
        transition-colors duration-500
        w-[calc(100vw-80px-32px)] h-[calc(100%-80px-32px)] mt-[calc(80px+32px)]`}
        >
          <Menu />
        </div>
      </div>
      {/* mobile menu */}
    </div>
  );
};
export default Navbar;
