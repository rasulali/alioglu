'use client'

import Heading from "@/components/heading";
import LiveDiv from "@/components/liveDiv";
import placeholder from '@/../public/placeholder.jpg'
import Image from "next/image";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio"

const portfolio = () => {

  return (
    <main className="w-screen relative bg-grayA lg:pr-0 sm:pr-0 pr-0">
      <RightNav />
      <section
        className="w-full min-h-screen py-16">
        <div className="w-full relative">
          <span className="w-full flex justify-center">
            <Heading animate={{ from: -50, to: 0, dir: 'y' }} variant="h1" text="Portfolio" />
          </span>

          <div id="interior"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >

            <div className="lg:mb-8 mb-4">
              <Heading
                animate={{ from: -25, to: 0, dir: 'x', delay: 0.1 }}
                variant="h2" text="İnteryer" />
            </div>

            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center"
            >
              <Card src={placeholder} name="Knyaz Otel" alt="" link="/portfolio/interiors/knyaz" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>

          </div>

          <div id="exterior"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x', delay: 0.1 }}
                variant="h2" text="Eksteryer" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>
          </div>

          <div id="restaurants"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x', delay: 0.1 }}
                variant="h2" text="Restoranlar" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>
          </div>

          <div id="hotel"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x', delay: 0.1 }}
                variant="h2" text="Otellər" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>

          </div>


          <div id="objects"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Obyektlər" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>
          </div>


          <div id="construction"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x', delay: 0.1 }}
                variant="h2" text="Təmir/Tikiniti" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
              <Card src={placeholder} name="Lahiyə" link="" />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
export default portfolio;
