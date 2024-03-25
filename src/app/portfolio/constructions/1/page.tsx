'use client'

import LiveDiv from "@/components/liveDiv"
import { ArrowLongDownIcon } from "@heroicons/react/24/outline"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import NextJsImage from '@/components/NextJsImage'

import Image from "next/image"
import Heading from "@/components/heading"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { useRef, useState } from "react"

const Construction = () => {
  const imageFiles = require.context('./assets', true);
  const images = imageFiles.keys().map((key) => {
    const image = imageFiles(key);
    return { src: image.default, alt: key };
  });


  const hero = images.find((image) => image.alt.includes('hero'));
  const heroIndex = images.findIndex((image) => image.alt.includes('hero'));

  const imagesRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: imagesRef });
  const [scrollY, setScrollY] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollY(latest)
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const thumbnailsRef = useRef(null)

  return (
    <main className="bg-grayA">
      <div className="px-8 lg:pt-24 pt-12 lg:pb-12">
        <div className="w-full lg:mb-8 mb-2 flex items-end">
          <Heading animate={{ from: -20, to: 0, dir: 'x' }} variant="h2"
            text="Layihə" />
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <p className="lg:text-xl ml-auto w-fit text-neutral-400"></p>
          </LiveDiv>
        </div>
        <Lightbox
          plugins={[Counter, Fullscreen, Thumbnails, Zoom]}
          thumbnails={
            {
              ref: thumbnailsRef,
              position: "bottom",
              width: 200,
              height: 150,
              border: 0,
              borderColor: '#303030',
              borderRadius: 0,
              gap: 0,
              imageFit: "cover",
              vignette: false,
            }
          }
          zoom={{
            scrollToZoom: true,
          }}
          on={{
            entering: () => {
              if (window.innerWidth < 640) {
                (thumbnailsRef.current as any)?.hide()
              }
              else {
                (thumbnailsRef.current as any)?.show()
              }
            }
          }}
          open={lightboxOpen}
          index={index}
          close={() => setLightboxOpen(false)}
          slides={images.map((image) => image.src)}
          render={{
            slide: NextJsImage,
          }}
        />
        <div className="w-full flex lg:flex-row flex-col">
          <div className="lg:w-1/2 aspect-[4/3]">
            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.2 }}>
              <Image
                onClick={() => {
                  setIndex(heroIndex)
                  setLightboxOpen(true)
                }}
                className="object-cover w-full h-full"
                quality={100}
                src={hero?.src}
                alt="Layihə fotosu başlıq" />
            </LiveDiv>
          </div>
          <div
            ref={imagesRef}
            className="relative lg:w-1/2 w-full lg:aspect-[4/3] lg:h-auto flex flex-col
              lg:flex-row flex-wrap overflow-scroll gap-2 lg:pl-2 pt-2 lg:pt-0 h-48">

            {images
              .filter((_, index) => index !== heroIndex)
              .map((image, index) => (
                <div key={index}
                  className="lg:w-[calc(33.3333%-8px)] w-1/2 lg:h-1/2 lg:aspect-auto aspect-[4/3]">
                  <LiveDiv animate={{ from: 0.9, to: 1, dir: 'z', delay: index * 0.05 }}>
                    <Image
                      onClick={() => {
                        setIndex(index)
                        setLightboxOpen(true)
                      }}
                      className="object-cover w-full h-full"
                      src={image.src}
                      alt={image.alt}
                      quality={100}
                    />
                  </LiveDiv>
                </div>
              ))
            }
            <span
              className="absolute sm:flex hidden items-center justify-center
                bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {scrollY === 0 && <ArrowLongDownIcon
                className="opacity-0 lg:w-12 text-zinc-100/60 animate-down"
              />}
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Construction
