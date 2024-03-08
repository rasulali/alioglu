import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from "react"
interface HeadingProps {
  text: string
  direction: string
  variant: string
}
const Heading: React.FC<HeadingProps> = ({ text, direction, variant }) => {
  const textRef = useRef(null)
  const textInView = useInView(textRef, { once: true })

  const textVariantsX = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, } },
  }
  const textVariantsY = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, } },
  }

  const textControls = useAnimation()

  useEffect(() => {
    if (textInView) {
      textControls.start("visible")
    }
  }, [textInView])
  return (
    <motion.div
      ref={textRef}
      variants={
        direction == 'x' ? textVariantsX : textVariantsY
      }
      initial="hidden"
      animate={textControls}
      className="flex items-center justify-center relative w-fit">
      {variant === 'h1' ?
        <h1
          className="lg:text-9xl sm:text-5xl text-4xl font-poppins text-zinc-100">
          {text}
        </h1>
        :
        <h2
          className="lg:text-7xl sm:text-3xl text-2xl font-poppins text-zinc-100">
          {text}
        </h2>
      }
    </motion.div>
  )
}
export default Heading
