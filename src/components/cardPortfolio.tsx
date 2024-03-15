import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import { useState } from "react";
import { motion } from 'framer-motion'
import Link from "next/link";

interface CardProps {
  src: string | StaticImport;
  alt?: string
  name: string
  link: string
}
const Card: React.FC<CardProps> = ({ src, alt = "Lahiyə Fotosu", name, link }) => {
  return (
    <Link href={link}>
      <div
        className="relative max-w-[832px] lg:w-[832px] w-auto aspect-[4/3] bg-neutral-500
      lg:rounded-xl sm:rounded-lg rounded-md overflow-hidden"
      >
        <Image src={src} alt={alt} className="w-full h-full object-cover" />


        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t
      from-[#1d1d1d] via-transparent to-transparent transition-transform duration-100 flex
      flex-col" >
          <h1
            className="text-zinc-100 font-semibold lg:text-3xl text-lg mt-auto mb-6 ml-4">
            {name}
          </h1>
        </div>
      </div >
    </Link>
  )
}
export default Card
