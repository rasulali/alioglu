'use client'
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/outline'

import Logo from "./logo";

interface NavbarProps {
  isVideoVisible: boolean
}

const Navbar: React.FC<NavbarProps> = ({ isVideoVisible }) => {
  const [menuState, setMenuState] = useState(false)

  const Menu = () => {
    return (
      <div className="w-full flex flex-col lg:flex-row px-4 py-4
      lg:justify-evenly lg:h-full lg:items-center text-right lg:text-center
      gap-8
      ">
        <Link
          href="/services" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Xidmətlərimiz
        </Link>
        <Link
          href="/academy" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Akademiya
        </Link>
        <Link
          href="/portfolio" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Portfolio
        </Link>
        {/* reServe space for logo on wide screens */}
        <div className={`hidden relative lg:block w-[136px] mx-8 mt-28
        transform translate-y-1/2 -translate-x-[5px] bg-grayA
        ${isVideoVisible && 'bg-grayA/50 backdrop-blur-lg'}
        transition-colors duration-500 h-5 -z-10 rounded-b-lg
        `} />
        {/* reServe space for logo on wide screens */}
        <Link
          href="/media_blog" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Mediya və Bloq
        </Link>
        <Link
          href="/about" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Haqqımızda
        </Link>
        <Link
          href="/contact" className="text-md sm:text-lg font-poppins text-zinc-100 uppercase
          font-medium lg:hover:text-neutral-500 transition-colors duration-500
          underline underline-offset-2 sm:underline-offset-4 lg:no-underline
          ">
          Əlaqə
        </Link>
      </div>
    )
  }

  return (
    <div className="fixed w-screen z-50">
      <nav className={`flex items-center z-50 w-full h-28 py-4 px-4 bg-grayA
     ${isVideoVisible && 'bg-grayA/50 backdrop-blur-lg'} transition-colors duration-500`}>
        <span className="mr-auto lg:absolute lg:transform lg:left-1/2
        lg:-translate-x-1/2 lg:top-[calc(50%+16px)] lg:-translate-y-1/2">
          <Link href="/">
            <Logo />
          </Link>
        </span>
        <div className="hidden lg:flex w-full">
          <Menu />
        </div>
        <Bars3Icon
          onClick={() => { setMenuState(!menuState) }}
          className="lg:hidden h-12 w-12 ml-auto text-zinc-100" />
      </nav>

      {/* mobile menu */}
      <div
        className={`lg:hidden absolute top-0 right-0 h-screen flex justify-end
      w-screen transform transition-transform duration-100
      ${!menuState ? "translate-x-full" : ""}`}>
        {/* escape div */}
        <div
          onClick={() => { setMenuState(false) }}
          className="absolute w-full h-full" />
        {/* escape div */}
        <div className={`bg-grayA ${isVideoVisible && 'bg-grayA/50 backdrop-blur-lg'}
        transition-colors duration-500
        w-[calc(100vw-80px-32px)] h-[calc(100%-80px-32px)] mt-[calc(80px+32px)]`}>
          <Menu />
        </div>
      </div>
      {/* mobile menu */}

    </div>
  )
}
export default Navbar;
