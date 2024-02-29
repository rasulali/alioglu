import Logo from "./logo";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  isVideoVisible: boolean
}
const Navbar: React.FC<NavbarProps> = ({ isVideoVisible }) => {
  const [dynamicOpacity, setDynamicOpacity] = useState("bg-grayA/50 backdrop-blur-lg");
  useEffect(() => {
    if (isVideoVisible) {
      setDynamicOpacity("bg-grayA/50 backdrop-blur-lg");
    } else {
      setDynamicOpacity("bg-grayA backdrop-blur-0");
    }
  }
    , [isVideoVisible]);
  const [isHovered, setIsHovered] = useState(
    {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    }
  );

  const handleMouseEnter = (itemId: number) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  };

  const handleMouseLeave = (itemId: number) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [itemId]: false,
    }));
  };
  const hoverMenu = {
    enter: {
      opacity: 1,
      display: "block",
      transition: {
        duration: 0.1,
        easing: "easeInOut"
      },
    },
    exit: {
      opacity: 0,
      display: "none",
      transition: {
        duration: 0.3,
        delay: 0.1
      },
    }
  };
  return (
    <div className="flex w-full items-center justify-center z-50 fixed">
      <nav className="w-full flex items-center justify-center
      ">
        <div className={`flex flex-1 h-24 w-full
        items-center justify-around transition duration-500 ${dynamicOpacity}
        mr-auto`}>

          {/* Xidmətlərimiz & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(1)}
            onHoverEnd={() => handleMouseLeave(1)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:text-neutral-500 transition-colors duration-500">
              Xidmətlərimiz
              {isHovered[1] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[1] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-[40%] px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>

          {/* Akademiya & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(2)}
            onHoverEnd={() => handleMouseLeave(2)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Akademiya
              {isHovered[2] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[2] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-1/2 px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>

          {/* Portfolio & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(3)}
            onHoverEnd={() => handleMouseLeave(3)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Portfolio
              {isHovered[3] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[3] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-1/2 px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>

        </div>
        {/* reserve space for logo  */}
        <div className="w-40 h-24 relative" >
          <div className="w-40 py-4 flex items-center justify-center absolute
          top-0 left-1/2 -translate-x-1/2 rounded-b-2xl
          bg-grayA/50 backdrop-blur-lg
          ">
            <Logo />
          </div>
        </div>

        <div className="flex flex-1 h-24 w-full items-center justify-around
      bg-grayA/50 backdrop-blur-lg
        ml-auto">
          {/* Mediya/Blog & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(4)}
            onHoverEnd={() => handleMouseLeave(4)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Mediya və Bloq
              {isHovered[3] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[4] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-1/2 px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>
          {/* Haqqımızda & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(5)}
            onHoverEnd={() => handleMouseLeave(5)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Haqqımızda
              {isHovered[3] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[5] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-1/2 px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>
          {/* Əlaqə & dropdown */}
          <motion.div
            onHoverStart={() => handleMouseEnter(6)}
            onHoverEnd={() => handleMouseLeave(6)}
            className="relative h-auto">
            <a
              href="#" className="px-4 py-2 text-md font-poppins text-zinc-100 uppercase
          font-medium hover:hover:text-neutral-500 transition-colors duration-500">
              Əlaqə
              {isHovered[6] ? <ChevronUpIcon className="w-5 h-5 inline-block ml-2" />
                : <ChevronDownIcon className="w-5 h-5 inline-block ml-2" />}
            </a>
            <motion.div
              initial="exit"
              animate={isHovered[6] ? "enter" : "exit"}
              variants={hoverMenu}
              className="absolute w-80 top-20 left-1/2 transform -translate-x-[70%] px-8 h-96 bg-grayA/50
              backdrop-blur-lg rounded-3xl"
            >
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;
