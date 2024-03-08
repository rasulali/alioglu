'use client'
import { faWhatsapp, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AtSymbolIcon } from '@heroicons/react/20/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export const number = 994554149228
const Contact = () => {
  const [menuState, setMenuState] = useState(false)
  const handleMouseEnter = () => {
    setMenuState(true)
  }
  const handleMouseLeave = () => {
    setMenuState(false)
  }
  return (
    <motion.div
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      onClick={() => { setMenuState(!menuState) }}
    >

    </motion.div>
  )
}
export default Contact
