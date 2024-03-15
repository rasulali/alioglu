import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from "react"

interface LiveDivProps {
  children: React.ReactNode,
  animate: {
    dir: 'x' | 'y',
    from: number,
    to: number
  }
}

const LiveDiv: React.FC<LiveDivProps> = ({ children, animate }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const variantX = {
    hidden: { opacity: 0, x: animate.from },
    visible: { opacity: 1, x: animate.to, transition: { duration: 0.5, } },
  }
  const variantY = {
    hidden: { opacity: 0, y: animate.from },
    visible: { opacity: 1, y: animate.to, transition: { duration: 0.5, } },
  }

  const divControls = useAnimation()

  useEffect(() => {
    if (inView) {
      divControls.start("visible")
    }
  }, [inView])
  return (

    <motion.div
      ref={ref}
      variants={
        animate.dir == 'x' ? variantX : variantY
      }
      initial="hidden"
      animate={divControls}
      className="">
      {children}
    </motion.div>
  )
}
export default LiveDiv
