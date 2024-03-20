'use client'
import { motion, useAnimation, useInView } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
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
        whileHover={{ scale: 1.03 }}
        className="relative"
        animate={cardControls}>
        <div className="lg:rounded-xl sm:rounded-lg rounded-md overflow-hidden">
          <Image
            className="object-cover aspect-[4/3]
      w-[90vw] max-w-[832px] lg:w-[832px] lg:h-[624px]"
            src={src} alt="Lahiyə Fotosu" width={0} height={0} />
        </div>
        <div
          className="absolute lg:w-1/2 w-full lg:h-32 h-1/5 bg-accentColor/50 backdrop-blur
            left-0 bottom-0 lg:-translate-x-8 lg:translate-y-1/2 flex items-center
            lg:justify-start justify-center lg:rounded-xl sm:rounded-b-lg rounded-b-md
            ">
          <h1 className="lg:text-4xl sm:text-3xl text-2xl text-zinc-100 lg:pl-8">{tag}</h1>
        </div>
      </motion.div>
    </a>
  )
}
export default Card
