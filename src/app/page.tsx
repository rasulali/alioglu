'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Logo from "@/components/logo"


const Home = () => {

  const yellowFrame = useRef(null);
  const greenFrame = useRef(null);

  const TextStroke = {
    WebkitTextStroke: '4px rgba(0,0,0,0.2)',
  }

  const countowdn = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`03/08/${year}`) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(countowdn());
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(countowdn());
    }, 1000 * 60);
  });

  return (
    <main className="flex flex-col min-h-screen relative">
      {/* logo */}
      <div className="mx-auto mt-8 w-32">
        <Logo />
      </div>
      {/* center text wrapper */}
      <div className="relative w-full mx-auto">
        {/* countdown */}
        <div style={TextStroke} className="text-transparent flex w-full mx-auto mt-16 justify-center gap-8">
          {/* day */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold">{timeLeft.days}</h1>
            <p className="text-[64px] font-bold mt-32">gün</p>
          </div>
          {/* hour */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold">{timeLeft.hours}</h1>
            <p className="text-[64px] font-bold mt-32">saat</p>
          </div>
          {/* minute */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold">{timeLeft.minutes}</h1>
            <p className="text-7xl font-bold mt-32">dəq.</p>
          </div>
          {/* text */}
        </div>
        <div className="flex flex-col text-6xl font-bold text-offRed absolute
      left-1/4 -bottom-8">
          <span>
            Tezlikə
          </span>
          <span>
            Xidmətinizdə.
          </span>
        </div>
      </div>

      <motion.div
        ref={yellowFrame}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={{
          top: -100,
          left: -24,
          right: 24,
          bottom: 100,
        }
        }
        className="w-[20rem] h-[30rem] rounded-xl top-1/4 right-16 absolute
      border-2 border-offYellow/80">
        <div className="w-full bg-offYellow/50 backdrop-blur-sm h-12 rounded-t-[10px]"></div>
        <motion.div
          drag
          dragConstraints={yellowFrame}
          dragSnapToOrigin
          dragPropagation
          className="border-2 border-offYellow/80 aspect-square m-6">
          <Image
            className="object-cover h-full w-full pointer-events-none"
            src="../../public/2.jpg"
            alt="Beatiful interior design"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        ref={greenFrame}
        whileHover={{ scale: 1.05 }}

        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        className="h-[20rem] w-[30rem] rounded-xl
        top-[calc(25%+20rem)] right-[23rem]
        grid grid-rows-[auto,1fr] -rotate-0 absolute
      border-2 border-emerald/80">
        <div className="w-full bg-emerald/50 backdrop-blur-sm h-12 rounded-t-[10px]">
        </div>
        <motion.div
          drag
          dragConstraints={greenFrame}
          dragSnapToOrigin
          dragPropagation
          className="border-2 border-emerald/80 m-6 h-[calc(14rem-4px)] rounded-b-[9px]">

          <Image
            className="object-cover h-full w-full rounded-b-[9px]"
            src="../../public/2.jpg"
            alt="Beatiful interior design"
            priority
          />
        </motion.div>
      </motion.div>

      {/* bottom section */}
      <div className="flex flex-col mt-auto">
        {/* social media icons */}
        <div className="h-fit mx-auto mt-auto flex gap-4 mb-4">
          <a href="#" className="hover:text-gray-600 transition">
            <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '24px' }} />
          </a>
          <a href="https://www.instagram.com/alioglu.group/" target="_blank" className="hover:text-gray-600 transition">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px' }} />
          </a>
          <a href="#" className="hover:text-gray-600 transition">
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px' }} />
          </a>
          <a href="https://github.com/rasulali/alioglu-dev" target="_blank" className="hover:text-gray-600 transition">
            <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px' }} />
          </a>
        </div>
        <h1 className="uppercase text-xs mx-auto mt-auto mb-2">© Copyrights AliOglu Group | All Rights Reserved</h1>
      </div>
    </main >
  )
}
export default Home
