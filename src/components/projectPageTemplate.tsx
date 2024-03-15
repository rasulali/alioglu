'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { useState } from "react"

interface ImageBoxProps {
  src: StaticImport | string
  alt?: string
}
const ImageBox: React.FC<ImageBoxProps> = ({ src, alt = "Lahiyə Fotosu" }) => {
  return (
    <div
      className="w-full"
    >
      <Image
        className="aspect-square object-cover"
        src={src} width={0} height={0} alt={alt} />
    </div>
  )
}
export default ImageBox
