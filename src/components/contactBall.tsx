import { faWhatsapp, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AtSymbolIcon } from '@heroicons/react/20/solid'
import { PhoneIcon } from '@heroicons/react/24/outline'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const Contact = () => {
  const [isHover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const number = 994554149228
  return (
    <motion.div
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      animate={isHover ? { height: '368px' } : { height: '96px' }}
      initial={{ height: '96px' }}
      className="w-24 rounded-full flex items-end justify-center
        right-4 bottom-4 fixed z-50 overflow-hidden
        bg-gray-400/50 backdrop-blur-lg border-2 border-grayA/50"
    >
      <div>
      </div>
      <div className="w-64 flex flex-col gap-8 pb-4 items-center justify-center">
        <Link href="mailto:alioglu.design@gmail.com" target="_blank" className="h-[60px] mx-8">
          <AtSymbolIcon className="w-[67px] text-zinc-100" />
        </Link>
        <Link href="https://www.instagram.com/alioglu.group/" target="_blank" className="h-[60px] mx-8">
          <FontAwesomeIcon
            className="text-6xl text-zinc-100"
            icon={faInstagram} />
        </Link>
        <Link href="https://www.x.com" target="_blank"
          className="h-[60px] mx-8">
          <FontAwesomeIcon
            className="text-6xl text-zinc-100"
            icon={faXTwitter} />
        </Link>
        <Link href={`https://api.whatsapp.com/send?phone=${number}`} target="_blank"
          className="h-[60px] mx-8">
          {isHover ?
            <FontAwesomeIcon
              className="text-6xl text-zinc-100"
              icon={faWhatsapp} />
            : <PhoneIcon
              onClick={() => { setHover(true) }}
              className="h-[60px] text-zinc-100"
            />}
        </Link>
      </div>
    </motion.div>
  )
}
export default Contact
