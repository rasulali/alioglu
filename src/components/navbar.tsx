import Logo from "./logo";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  isVideoVisible: boolean
}
const Navbar: React.FC<NavbarProps> = ({ isVideoVisible }) => {
  const [dynamicOpacity, setDynamicOpacity] = useState(
    "bg-grayA/50 backdrop-blur-lg ");

  useEffect(() => {
    if (isVideoVisible) {
      setDynamicOpacity("bg-grayA/50 backdrop-blur-lg");
    } else {
      setDynamicOpacity("bg-grayA backdrop-blur-0");
    }
  }
    , [isVideoVisible]);

  return (
    <div className="flex w-full items-center justify-center z-50 fixed">
      <nav className="w-full flex items-center justify-center
      ">
        <div className={`flex flex-1 h-24 w-full mr-auto
        items-center justify-around transition duration-500 ${dynamicOpacity}
        `}>

          {/* Xidmətlərimiz & dropdown */}
          <div
            className="relative h-auto">
            <Link
              href="/services" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:text-neutral-500 transition-colors duration-500">
              Xidmətlərimiz
            </Link>
          </div>

          {/* Akademiya & dropdown */}
          <motion.div
            className="relative h-auto">
            <Link
              href="/academy" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Akademiya
            </Link>
          </motion.div>

          {/* Portfolio & dropdown */}
          <motion.div
            className="relative h-auto">
            <Link
              href="/portfolio" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Portfolio
            </Link>
          </motion.div>

        </div>
        {/* reServe space for logo  */}
        <div className="w-40 h-24 relative" >
          <div className={`w-40 py-4 flex items-center justify-center absolute
          top-0 left-1/2 -translate-x-1/2 rounded-b-2xl
          ${dynamicOpacity} duration-500
          `}>
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </div>

        <div className={`flex flex-1 h-24 w-full items-center justify-around
        ${dynamicOpacity} duration-500
        ml-auto`}>
          {/* Mediya/Blog & dropdown */}
          <motion.div
            className="relative h-auto">
            <Link
              href="/media_blog" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Mediya və Bloq
            </Link>
          </motion.div>
          {/* Haqqımızda & dropdown */}
          <motion.div
            className="relative h-auto">
            <Link
              href="/about" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Haqqımızda
            </Link>
          </motion.div>
          {/* Əlaqə & dropdown */}
          <motion.div
            className="relative h-auto">
            <Link
              href="/contact" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Əlaqə
            </Link>
          </motion.div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
