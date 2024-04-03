'use client'

import Footer from "@/components/footer";
import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import { motion } from 'framer-motion'
import Image from "next/image";
import Link from "next/link";

const Academy = () => {
  return (
    <main className="lg:pt-24 pt-12 lg:px-8 min-h-screen">
      <div>
        <span className="w-full flex justify-center lg:mb-12">
          <Heading animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" text="Akademiya" />
        </span>
        <div>
          {/* dotted bg */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              backgroundSize: `60px 60px`,
              backgroundImage: `radial-gradient(circle at 1px 1px, white 2px, transparent 0)`,
              backgroundPosition: 'center',
              transform: 'translateZ(-500px)',
              zIndex: '-1',
            }}
          />
          {/* dotted bg */}

          {/* 3ds max wrapper */}
          <div className="lg:w-2/3 lg:py-6">
            <div className="flex items-end">
              <div className="w-24 mr-4">
                <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.1 }}>
                  <Image
                    className="w-full h-full"
                    width={0}
                    height={0}
                    src="/logos/3dsmax.svg" alt="3DSmax-ın logosu" />
                </LiveDiv>
              </div>
              <span className="translate-y-2">
                <Heading animate={{ from: -20, to: 0, dir: 'x', delay: 0.2 }} variant="h2" text="3ds Max" />
              </span>
            </div>

            <LiveDiv animate={{ from: -20, to: 0, dir: 'x', delay: 0.3 }}>
              <h1 className="lg:text-4xl text-zinc-100 lg:mt-6">
                <span className="text-[#39a5cc] lg:mr-2 font-bold">3DS</span>
                Max is a industry standart 3D modelling software
              </h1>
            </LiveDiv>

            {/* cards wrapper */}
            <div className="w-full flex py-6">
              <motion.div
                className="lg:w-1/3 aspect-[3/5] lg:rounded-2xl
              lg:px-6 lg:py-8 lg:drop-shadow-[0_20px_13px_rgba(57,165,204,0.3)]
               bg-neutral-100 flex flex-col">
                <h1 className="text-grayA lg:text-2xl font-semibold">
                  Role in your career
                </h1>
                <div className="w-full flex-1 bg-neutral-400 lg:my-4 rounded-xl">
                </div>
                <p className="text-grayALight text-lg">
                  <span className="text-[#39a5cc]">3ds Max</span> is a highly sought-after skill in various industries.
                  Mastery of this software can open doors to careers in animation,
                  game design, visual effects, architectural visualization, and more.
                  It allows you to create stunning 3D models, animations,
                  and renderings that can bring your creative visions to life.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
export default Academy;
