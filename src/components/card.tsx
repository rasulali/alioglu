import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image';
import { useRef, useEffect } from "react"

interface CardProps {
  delay: number;
  tag: string;
  src: string;
}

const Card: React.FC<CardProps> = ({ delay, tag, src }) => {

  const cardsRef = useRef(null)
  const cardsInview = useInView(cardsRef, { once: true })

  const cardsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay } },
  }
  const cardControls = useAnimation()
  useEffect(() => {
    if (cardsInview) {
      cardControls.start("visible")
    }
  }, [cardsInview])
  return (
    <>
      <motion.div
        ref={cardsRef}
        variants={cardsVariants}
        initial="hidden"
        whileHover={{ scale: 1.03 }}
        animate={cardControls}
        className="flex items-center justify-center bg-gray-100 relative
          rounded-xl  w-2/3 min-w-[832px] min-h-[624px] aspect-[4/3]
          ">
        <Image
          className="w-[808px] h-[600px]"
          src={src} alt="Lahiyə Fotosu" width={0} height={0} />
        <div
          className="absolute w-1/2 h-32 bg-accentColor/50 backdrop-blur-lg
            left-0 bottom-0 -translate-x-8 translate-y-8 flex items-center
            justify-start rounded-xl
            ">
          <h1 className="text-4xl font-poppins pl-8">{tag}</h1>
        </div>
      </motion.div>
    </>
  )
}
export default Card
