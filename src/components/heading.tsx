import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from "react"
interface HeadingProps {
  text: string
  variant: string
  animate: {
    dir: 'x' | 'y'
    from: number
    to: number
    delay?: number
  }
}
const Heading: React.FC<HeadingProps> = ({ text, animate, variant }) => {
  const textRef = useRef(null)
  const textInView = useInView(textRef, { once: true })

  const textVariantX = {
    hidden: { opacity: 0, x: animate.from },
    visible: { opacity: 1, x: animate.to, transition: { duration: 0.5, delay: animate.delay } },
  }
  const textVariantY = {
    hidden: { opacity: 0, y: animate.from },
    visible: { opacity: 1, y: animate.to, transition: { duration: 0.5, delay: animate.delay } },
  }

  const textControls = useAnimation()

  useEffect(() => {
    if (textInView) {
      textControls.start("visible")
    }
  }, [textInView])
  return (
    <div>
      <motion.div
        ref={textRef}
        variants={
          animate.dir == 'x' ? textVariantX : textVariantY
        }
        initial="hidden"
        animate={textControls}
        className="flex items-center justify-center relative w-fit">
        {variant === 'h1' ?
          <h1
            className="lg:text-9xl sm:text-5xl text-4xl text-zinc-100 text-nowrap">
            {text}
          </h1>
          :
          <h2
            className="lg:text-7xl sm:text-3xl text-2xl text-zinc-100 text-nowrap">
            {text}
          </h2>
        }
      </motion.div>
    </div>
  )
}
export default Heading
