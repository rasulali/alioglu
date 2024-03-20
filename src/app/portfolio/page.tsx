'use client'

import Heading from "@/components/heading";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";

//images
import interior_1 from './interiors/home_1/assets/hero.jpg'
import balcony from './interiors/balcony/assets/hero.jpg'
import interior_2 from './interiors/home_2/assets/hero.jpg'
import interior_3 from './interiors/home_3/assets/hero.jpg'
import interior_4 from './interiors/home_4/assets/hero.jpg'
import interior_5 from './interiors/home_5/assets/hero.jpg'
import interior_6 from './interiors/home_6/assets/hero.jpg'
import interior_7 from './interiors/home_7/assets/hero.jpg'
import interior_8 from './interiors/home_8/assets/hero.jpg'
import interior_9 from './interiors/home_9/assets/hero.jpg'
import interior_10 from './interiors/home_10/assets/hero.jpg'
import interior_11 from './interiors/home_11/assets/hero.jpg'
import interior_12 from './interiors/home_12/assets/hero.jpg'
import interior_13 from './interiors/home_13/assets/hero.jpg'
import interior_14 from './interiors/home_14/assets/hero.jpg'
import interior_15 from './interiors/home_15/assets/hero.jpg'
import interior_16 from './interiors/home_16/assets/hero.jpg'
import interior_17 from './interiors/home_17/assets/hero.jpg'
import interior_18 from './interiors/home_18/assets/hero.jpg'
import interior_19 from './interiors/home_19/assets/hero.jpg'
import interior_20 from './interiors/home_20/assets/hero.jpg'
import interior_21 from './interiors/home_21/assets/hero.jpg'
import interior_22 from './interiors/home_22/assets/hero.jpg'
import interior_23 from './interiors/home_23/assets/hero.jpg'
import interior_24 from './interiors/home_24/assets/hero.jpg'
import interior_27 from './interiors/home_27/assets/hero.jpg'
import interior_28 from './interiors/home_28/assets/hero.jpg'
import interior_29 from './interiors/home_29/assets/hero.jpg'
import interior_30 from './interiors/home_30/assets/hero.jpg'
import interior_31 from './interiors/home_31/assets/hero.jpg'
import interior_32 from './interiors/home_32/assets/hero.jpg'
import interior_33 from './interiors/home_33/assets/hero.jpg'
import interior_34 from './interiors/home_34/assets/hero.jpg'
import interior_35 from './interiors/home_35/assets/hero.jpg'
import interior_36 from './interiors/home_36/assets/hero.jpg'
import sq_1 from './interiors/SQ/SQ_1/assets/hero.jpg'
import sq_2 from './interiors/SQ/SQ_2/assets/hero.jpg'
import sq_3 from './interiors/SQ/SQ_3/assets/hero.jpg'
import sq_4 from './interiors/SQ/SQ_4/assets/hero.jpg'
import sq_5 from './interiors/SQ/SQ_5/assets/hero.jpg'
//images

const portfolio = () => {

  return (
    <main
      className="w-screen relative bg-grayA">
      <RightNav />
      <BackNav href="/" />
      <section
        className="w-full min-h-screen py-16 lg:px-16 sm:px-8 px-4">
        <div className="w-full relative">
          <span className="w-full flex justify-center">
            <Heading animate={{ from: -50, to: 0, dir: 'y' }} variant="h1" text="Portfolio" />
          </span>

          <div id="interior"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12"
          >

            <div className="lg:mb-8 mb-4">
              <Heading
                animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="İnteryer" />
            </div>

            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_1} name="Ağ Şəhər Lahiyəsi" text="240kv m²"
                link="/portfolio/interiors/home_1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={balcony} name="Lahiyə" link="/portfolio/interiors/balcony" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_2} name="Lahiyə" link="/portfolio/interiors/home_2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_3} name="Lahiyə" link="/portfolio/interiors/home_3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_4} name="Lahiyə" link="/portfolio/interiors/home_4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={interior_5} name="Lahiyə" link="/portfolio/interiors/home_5" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_6} name="Lahiyə" link="/portfolio/interiors/home_6" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={interior_7} name="Lahiyə" link="/portfolio/interiors/home_7" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_8} name="Lahiyə" link="/portfolio/interiors/home_8" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_9} name="Lahiyə" link="/portfolio/interiors/home_9" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_10} name="Lahiyə" link="/portfolio/interiors/home_10" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={interior_11} name="Lahiyə" link="/portfolio/interiors/home_11" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_12} name="Lahiyə" link="/portfolio/interiors/home_12" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={interior_13} name="Lahiyə" link="/portfolio/interiors/home_13" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_14} name="Lahiyə" link="/portfolio/interiors/home_14" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_15} name="Lahiyə" link="/portfolio/interiors/home_15" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_16} name="Lahiyə" link="/portfolio/interiors/home_16" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={interior_17} name="Lahiyə" link="/portfolio/interiors/home_17" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_18} name="Lahiyə" link="/portfolio/interiors/home_18" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={interior_19} name="Lahiyə" link="/portfolio/interiors/home_19" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_20} name="Lahiyə" link="/portfolio/interiors/home_20" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_21} name="Lahiyə" link="/portfolio/interiors/home_21" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_22} name="Lahiyə" link="/portfolio/interiors/home_22" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={interior_23} name="Lahiyə" link="/portfolio/interiors/home_23" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_24} name="Lahiyə" link="/portfolio/interiors/home_24" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={interior_27} name="Lahiyə" link="/portfolio/interiors/home_27" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_28} name="Lahiyə" link="/portfolio/interiors/home_28" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_29} name="Lahiyə" link="/portfolio/interiors/home_29" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_30} name="Lahiyə" link="/portfolio/interiors/home_30" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={interior_31} name="Lahiyə" link="/portfolio/interiors/home_31" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={interior_32} name="Lahiyə" link="/portfolio/interiors/home_32" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={interior_33} name="Lahiyə" link="/portfolio/interiors/home_33" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={interior_34} name="Lahiyə" link="/portfolio/interiors/home_34" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={interior_35} name="Lahiyə" link="/portfolio/interiors/home_35" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={interior_36} name="Lahiyə" link="/portfolio/interiors/home_36" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={sq_1} name="Lahiyə" link="/portfolio/interiors/SQ/SQ_1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={sq_2} name="Lahiyə" link="/portfolio/interiors/SQ/SQ_2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={sq_3} name="Lahiyə" link="/portfolio/interiors/SQ/SQ_3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={sq_4} name="Lahiyə" link="/portfolio/interiors/SQ/SQ_4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={sq_5} name="Lahiyə" link="/portfolio/interiors/SQ/SQ_5" />
            </div>

          </div>

          <div id="exterior"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Eksteryer" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
            </div>
          </div>

          <div id="restaurants"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Restoranlar" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
            </div>
          </div>

          <div id="hotel"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Otellər" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
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
            </div>
          </div>


          <div id="construction"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Təmir/Tikiniti" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto"
            >
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
export default portfolio;
