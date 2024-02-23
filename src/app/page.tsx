'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useState, useRef } from 'react'
import Logo from "@/components/logo"


const Home = () => {
  const TextStroke = {
    WebkitTextStroke: '4px rgb(248,250,252)',
  }

  const countowdn = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`03/08/${year}`) - +new Date();

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: JSON.stringify(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: JSON.stringify(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: JSON.stringify(Math.floor((difference / 1000 / 60) % 60)),
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
    <main className="flex flex-col min-h-screen relative bg-[url(../../public/bg.jpg)]">
      {/* logo */}
      <div className="mx-auto w-full absolute py-4 bg-gradient-to-b backdrop-blur from-slate-50/80 to-transparent flex items-center justify-center">
        <Logo />
      </div>
      {/* center text wrapper */}
      <div className="relative w-full mx-auto mt-auto">
        {/* countdown */}
        <div style={TextStroke} className="flex w-full mx-auto justify-center gap-8">
          {/* day */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold text-transparent">{timeLeft.days}</h1>
            <p className="text-[64px] font-bold mt-32">gün</p>
          </div>
          {/* hour */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold text-transparent">{timeLeft.hours}</h1>
            <p className="text-[64px] font-bold mt-32">saat</p>
          </div>
          {/* minute */}
          <div className="flex items-center justify-center relative h-fit">
            <h1 className="text-[240px] font-bold text-transparent">{timeLeft.minutes}</h1>
            <p className="text-7xl font-bold mt-32">dəq.</p>
          </div>
          {/* text */}
        </div>
        <div className="flex flex-col text-6xl font-bold text-yellow-400 drop-shadow-2xl absolute
      left-1/4 -bottom-8">
          <span>
            Tezlikə
          </span>
          <span>
            Xidmətinizdə.
          </span>
        </div>
      </div>

      {/* bottom section */}
      <div className="flex flex-col mt-auto bg-gradient-to-t py-4 backdrop-blur from-slate-50/30 to-transparentpy-4">
        {/* social media icons */}
        <div className="h-fit mx-auto mt-auto text-slate-50 flex gap-4 mb-4">
          <a href="#" className="hover:text-brandColor transition">
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
        <h1 className="uppercase text-xs text-slate-50 mx-auto mt-auto">© Copyrights AliOglu Group | All Rights Reserved</h1>
      </div>
    </main >
  )
}
export default Home
