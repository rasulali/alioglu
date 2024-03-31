'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRef, useEffect } from "react"

interface CardProps {
  delay: number;
  tag: string;
  src: string | StaticImport;
  href?: string
}

const Card: React.FC<CardProps> = ({ delay, tag, src, href = "" }) => {

  const cardsRef = useRef(null)
  const cardsInview = useInView(cardsRef, { once: true })

  const cardsVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  }
  const cardControls = useAnimation()
  useEffect(() => {
    if (cardsInview) {
      cardControls.start("visible")
    }
  }, [cardsInview])

  return (
    <a href={href}>
      <motion.div
        ref={cardsRef}
        variants={cardsVariants}
        initial="hidden"
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.1,
            ease: "easeOut",
          }
        }}
        whileTap={{
          scale: 0.99,
          transition: {
            duration: 0.1,
            ease: "easeIn",
          }
        }}
        className="relative group"
        animate={cardControls}>
        <div className="lg:rounded-xl sm:rounded-lg rounded-md overflow-hidden
          aspect-[4/3] w-[90vw] lg:max-w-[832px] lg:w-[832px]">
          <Image
            quality={70}
            className="object-cover w-full h-full"
            src={src} alt="Layihə Fotosu" width={1080} height={0} />
        </div>
        <div
          className="absolute lg:w-1/2 w-full lg:h-32 h-1/5 bg-accentColor/50 backdrop-blur
            left-0 bottom-0 lg:-translate-x-8 lg:translate-y-1/2 flex items-center
            lg:justify-start justify-center lg:rounded-xl sm:rounded-b-lg rounded-b-md
            group-hover:backdrop-blur-xl transition-all duration-200"
        >
          <h1
            className="lg:text-4xl sm:text-3xl text-2xl text-zinc-100 lg:pl-8"
          >
            {tag}
          </h1>
        </div>
      </motion.div>
    </a>
  )
}
export default Card
