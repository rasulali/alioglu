import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from "react"
interface HeadingProps {
  text: string
}
const Heading: React.FC<HeadingProps> = ({ text }) => {
  const textRef = useRef(null)
  const textInView = useInView(textRef, { once: true })

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, } },
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
      variants={textVariants}
      initial="hidden"
      animate={textControls}
      className="flex items-center justify-center relative w-fit">
      <h1
        className="lg:text-9xl sm:text-5xl text-4xl font-poppins text-zinc-100">
        {text}
      </h1>
    </motion.div>
  )
}
export default Heading
