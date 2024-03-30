'use client'

import LiveDiv from "@/components/liveDiv"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import Zoom from "yet-another-react-lightbox/plugins/zoom";

import NextJsImage from '@/components/NextJsImage'
import NextJsThumbnail from '@/components/NextJsThumbnail'

import Image from "next/image"
import Heading from "@/components/heading"
import { useRef, useState, useEffect } from "react"
import Loading from "@/app/loading";
import { useScroll } from "@react-hooks-library/core";
import { notFound } from "next/navigation";

interface ImageProps {
  src: string
  alt: string
}
interface InfoProps {
  name: string
  description?: string
}

const Hotel = ({ params }: { params: { id: number } }) => {

  if (isNaN(params.id) || params.id < 1 || params.id > 14) {
    notFound();
  }

  const [imageArray, setImageArray] = useState<ImageProps[]>([]);
  const [info, setInfo] = useState<InfoProps>({
    name: 'Layihə',
    description: '',
  })

  const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width < height) {
        setWindowDimensions({ width: 1080, height: 1920 });
      }
      else {
        setWindowDimensions({ width: 1920, height: 1080 });
      }
    }
  }, [typeof window !== "undefined" && window.innerWidth]);

  const [imagesLoaded, setImagesLoaded] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const promises = []
        const res = await import(`../${params.id}.json`);
        setImageArray(res.images);
        setInfo(res.info)
        promises.push(res);

        await Promise.all([...promises,
        await new Promise(resolve => setTimeout(resolve, 0))
        ]);
        setImagesLoaded(true);

      } catch (error) {
        //
      }
    })();
  }, [params.id]);


  const imageContainer = useRef(null);
  const [imageScroll, setImageScroll] = useState({ x: 0, y: 0 })
  useScroll(imageContainer, ({ scrollX, scrollY }) => {
    setImageScroll({ x: scrollX, y: scrollY })
  })

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [index, setIndex] = useState(-1)
  const thumbnailsRef = useRef(null)

  const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
  const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

  function nextImageUrl(src: string, size: number) {
    return `/_next/image?url=${encodeURIComponent(`/hotels/${params.id}/images/${src}`)}&w=${size}&q=70`;
  }

  interface Slide {
    src: string;
    width?: number;
    height?: number;
    alt: string
  }
  const slides = imageArray.map(({ src, width = windowDimensions.width,
    height = windowDimensions.height, alt }: Slide) => ({
      width,
      height,
      src: nextImageUrl(src, width),
      srcSet: imageSizes
        .concat(...deviceSizes)
        .filter((size) => size <= width)
        .map((size) => ({
          src: nextImageUrl(src, size),
          width: size,
          height: Math.round((height / width) * size),
        })),
      alt: alt,
    }));

  return (
    <>
      {!imagesLoaded ? <Loading /> :
        <main className="bg-grayA">
          <div className="px-8 lg:pt-24 pt-12 lg:pb-12">
            <div className="w-full lg:mb-8 mb-2 flex items-end">
              <Heading animate={{ from: -20, to: 0, dir: 'x' }} variant="h2"
                text={info.name} />
              <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
                <p className="lg:text-xl ml-auto w-fit text-neutral-400">{info.description}</p>
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
                  padding: 2,
                  border: 0,
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
              slides={slides}
              render={{
                slide: NextJsImage,
                thumbnail: NextJsThumbnail as any
              }}
            />
            <div className="w-full flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full aspect-[4/3]">
                <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.2 }}>
                  <Image
                    onClick={() => {
                      setIndex(0)
                      setLightboxOpen(true)
                    }}
                    className="object-cover w-full h-full"
                    quality={70}
                    src={`/hotels/${params.id}/images/${imageArray[0]?.src}`}
                    width={windowDimensions.width}
                    height={0}
                    priority
                    alt="Layihə fotosu başlıq" />
                </LiveDiv>
              </div>
              <div
                ref={imageContainer}
                className="relative lg:w-1/2 w-full lg:aspect-[4/3] lg:h-auto flex flex-col
              lg:flex-row flex-wrap overflow-scroll gap-2 lg:pl-2 pt-2 lg:pt-0 h-48">
                {imageArray
                  .filter((_, index) => index !== 0)
                  .map((image, index) => (
                    <div key={index}
                      className="lg:w-[calc(33.3333%-8px)] w-1/2 lg:h-1/2 lg:aspect-auto aspect-[4/3]">
                      <LiveDiv animate={{ from: 0.9, to: 1, dir: 'z', delay: 0.1 }}>
                        <Image
                          onClick={() => {
                            setIndex(index + 1)
                            setLightboxOpen(true)
                          }}
                          priority
                          className="object-cover w-full h-full"
                          width={windowDimensions.width / 6}
                          height={0}
                          src={`/hotels/${params.id}/images/${image.src}`}
                          alt={image.alt}
                          quality={70}
                        />
                      </LiveDiv>
                    </div>
                  ))
                }
                <span
                  className="absolute sm:flex hidden items-center justify-center
                bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {imageScroll.y === 0 && imageArray.length > 6 && <ChevronDownIcon
                    className="opacity-0 lg:w-12 text-zinc-100/60 animate-down"
                  />}
                </span>
              </div>
            </div>
          </div>
        </main>
      }
    </>
  )
}
export default Hotel;
