'use client'

import Footer from "@/components/footer";
import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import Image from "next/image";

const Academy = () => {
  return (
    <main className="lg:pt-24 pt-12">
      {/* 3ds max wrapper */}
      <div className="lg:w-full lg:px-12 px-4">
        <div className="w-full mt-6">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/3dsmax.svg" alt="3DSmax-ın logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#7fc5de] via-[#39a5cc] to-[#36687f]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                3ds Max
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:mt-0 mt-2 min-w-full">
                is a best in class 3D modelling software
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">3D models goes here</h1>
          </div>
        </div>
      </div>

      {/* Autocad Wrapper */}
      <div className="lg:w-full lg:px-12 px-4">
        <div className="w-full mt-6">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/autocad.svg" alt="Autocad-ın logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#f4548b] via-[#d52654] to-[#b11538]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                Autocad
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:mt-0 mt-2 min-w-full">
                is a
                <span
                  className="relative pl-3"
                >
                  <span className="lg:text-lg font-bold text-neutral-400 absolute
            cursor-default group top-0 -right-4">&#9432;
                    <span className="hidden absolute bg-grayALight text-base lg:px-2
                    lg:py-1 lg:rounded-xl text-nowrap group-hover:inline-block bottom-4">
                      Computer-Aided Design
                    </span>
                  </span>
                  CAD
                </span> software used for creating precise 2D and 3D drawings and models.

              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">3D models goes here</h1>
          </div>
        </div>
      </div>

      {/* Photoshop Wrapper */}
      <div className="lg:w-full lg:px-12 px-4">
        <div className="w-full mt-6">
          <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
            <div className="flex items-end flex-wrap">
              <Image
                className="lg:w-24 lg:mr-4 sm:w-16 w-10 mr-2"
                width={0}
                height={0}
                src="/logos/photoshop.svg" alt="Photoshop-un logosu" />
              <h1
                className="lg:text-9xl sm:text-7xl text-3xl bg-clip-text
                text-transparent
                bg-gradient-to-br from-[#31a8ff]  to-[#001e36]
                lg:translate-y-4 translate-y-2 text-nowrap mr-4 ">
                Photoshop
              </h1>
              <h1 className="lg:text-5xl sm:text-3xl text-base text-zinc-100
                lg:translate-y-1 font-semibold lg:mt-0 mt-2 min-w-full">
                is a Adobe's image editing software for professionals.
              </h1>
            </div>
          </LiveDiv>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square overflow-y-scroll">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">Cards goes here</h1>
          </div>
          <div className="lg:w-1/2 w-full lg:aspect-[4/3] aspect-square">
            <h1 className="text-center align-middle h-full flex items-center text-5xl font-semibold justify-center text-grayALight">3D models goes here</h1>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}
export default Academy;
