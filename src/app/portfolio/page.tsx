'use client'

import Heading from "@/components/heading";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";

//images
import int1 from "./interiors/1/assets/hero.jpg"
import int2 from "./interiors/2/assets/hero.jpg"
import int3 from "./interiors/3/assets/hero.jpg"
import int4 from "./interiors/4/assets/hero.jpg"
import int5 from "./interiors/5/assets/hero.jpg"
import int6 from "./interiors/6/assets/hero.jpg"
import int7 from "./interiors/7/assets/hero.jpg"
import int8 from "./interiors/8/assets/hero.jpg"
import int9 from "./interiors/9/assets/hero.jpg"
import int10 from "./interiors/10/assets/hero.jpg"
import int11 from "./interiors/11/assets/hero.jpg"
import int12 from "./interiors/12/assets/hero.jpg"
import int13 from "./interiors/13/assets/hero.jpg"
import int14 from "./interiors/14/assets/hero.jpg"
import int15 from "./interiors/15/assets/hero.jpg"
import int16 from "./interiors/16/assets/hero.jpg"
import int17 from "./interiors/17/assets/hero.jpg"
import int18 from "./interiors/18/assets/hero.jpg"
import int19 from "./interiors/19/assets/hero.jpg"
import int20 from "./interiors/20/assets/hero.jpg"
import int21 from "./interiors/21/assets/hero.jpg"
import int22 from "./interiors/22/assets/hero.jpg"
import int23 from "./interiors/23/assets/hero.jpg"
import int24 from "./interiors/24/assets/hero.jpg"
import int25 from "./interiors/25/assets/hero.jpg"
import int26 from "./interiors/26/assets/hero.jpg"
import int27 from "./interiors/27/assets/hero.jpg"
import int28 from "./interiors/28/assets/hero.jpg"
import int29 from "./interiors/29/assets/hero.jpg"
import int30 from "./interiors/30/assets/hero.jpg"
import int31 from "./interiors/31/assets/hero.jpg"
import int32 from "./interiors/32/assets/hero.jpg"
import int33 from "./interiors/33/assets/hero.jpg"
import int34 from "./interiors/34/assets/hero.jpg"
import int35 from "./interiors/35/assets/hero.jpg"
import int36 from "./interiors/36/assets/hero.jpg"
import int37 from "./interiors/37/assets/hero.jpg"
import int38 from "./interiors/38/assets/hero.jpg"
import int39 from "./interiors/39/assets/hero.jpg"

import ext1 from "./exteriors/1/assets/hero.jpg"
import ext2 from "./exteriors/2/assets/hero.jpg"
import ext3 from "./exteriors/3/assets/hero.jpg"
import ext4 from "./exteriors/4/assets/hero.jpg"
import ext5 from "./exteriors/5/assets/hero.jpg"
import ext6 from "./exteriors/6/assets/hero.jpg"
import ext7 from "./exteriors/7/assets/hero.jpg"
import ext8 from "./exteriors/8/assets/hero.jpg"
import ext9 from "./exteriors/9/assets/hero.jpg"
import ext10 from "./exteriors/10/assets/hero.jpg"
import ext11 from "./exteriors/11/assets/hero.jpg"
import ext12 from "./exteriors/12/assets/hero.jpg"
import ext13 from "./exteriors/13/assets/hero.jpg"
import ext14 from "./exteriors/14/assets/hero.jpg"

import res1 from "./restaurants/1/assets/hero.jpg"
import res2 from "./restaurants/2/assets/hero.jpg"
import res3 from "./restaurants/3/assets/hero.jpg"
import res4 from "./restaurants/4/assets/hero.jpg"
import res5 from "./restaurants/5/assets/hero.jpg"
import res6 from "./restaurants/6/assets/hero.jpg"
import res7 from "./restaurants/7/assets/hero.jpg"
import res8 from "./restaurants/8/assets/hero.jpg"
import res9 from "./restaurants/9/assets/hero.jpg"
import res10 from "./restaurants/10/assets/hero.jpg"
import res11 from "./restaurants/11/assets/hero.jpg"

import hot1 from "./hotels/1/assets/hero.jpg"
import hot2 from "./hotels/2/assets/hero.jpg"
import hot3 from "./hotels/3/assets/hero.jpg"
import hot4 from "./hotels/4/assets/hero.jpg"

import obj1 from "./objects/1/assets/hero.jpg"
import obj2 from "./objects/2/assets/hero.jpg"
import obj3 from "./objects/3/assets/hero.jpg"
import obj4 from "./objects/4/assets/hero.jpg"
import obj5 from "./objects/5/assets/hero.jpg"
import obj6 from "./objects/6/assets/hero.jpg"
import obj7 from "./objects/7/assets/hero.jpg"
import obj8 from "./objects/8/assets/hero.jpg"
import obj9 from "./objects/9/assets/hero.jpg"
import obj10 from "./objects/10/assets/hero.jpg"
import obj11 from "./objects/11/assets/hero.jpg"
import obj12 from "./objects/12/assets/hero.jpg"

import const1 from "./constructions/1/assets/hero.jpg"
import const2 from "./constructions/2/assets/hero.jpg"
import const3 from "./constructions/3/assets/hero.jpg"
import const4 from "./constructions/4/assets/hero.jpg"

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
                src={int1} name="Ağ Şəhər Lahiyəsi" text="240kv m²"
                link="/portfolio/interiors/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int2} name="Lahiyə"
                link="/portfolio/interiors/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int3} name="Lahiyə"
                link="/portfolio/interiors/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int4} name="Lahiyə"
                link="/portfolio/interiors/4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int5} name="Lahiyə"
                link="/portfolio/interiors/5" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int6} name="Lahiyə"
                link="/portfolio/interiors/6" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int7} name="Lahiyə"
                link="/portfolio/interiors/7" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int8} name="Lahiyə"
                link="/portfolio/interiors/8" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int9} name="Lahiyə"
                link="/portfolio/interiors/9" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int10} name="Lahiyə"
                link="/portfolio/interiors/10" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int11} name="Lahiyə"
                link="/portfolio/interiors/11" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int12} name="Lahiyə"
                link="/portfolio/interiors/12" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int13} name="Lahiyə"
                link="/portfolio/interiors/13" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int14} name="Lahiyə"
                link="/portfolio/interiors/14" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int15} name="Lahiyə"
                link="/portfolio/interiors/15" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int16} name="Lahiyə"
                link="/portfolio/interiors/16" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int17} name="Lahiyə"
                link="/portfolio/interiors/17" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int18} name="Lahiyə"
                link="/portfolio/interiors/18" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int19} name="Lahiyə"
                link="/portfolio/interiors/19" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int20} name="Lahiyə"
                link="/portfolio/interiors/20" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int21} name="Lahiyə"
                link="/portfolio/interiors/21" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int22} name="Lahiyə"
                link="/portfolio/interiors/22" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int23} name="Lahiyə"
                link="/portfolio/interiors/23" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int24} name="Lahiyə"
                link="/portfolio/interiors/24" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int25} name="Lahiyə"
                link="/portfolio/interiors/25" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int26} name="Lahiyə"
                link="/portfolio/interiors/26" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int27} name="Lahiyə"
                link="/portfolio/interiors/27" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int28} name="Lahiyə"
                link="/portfolio/interiors/28" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int29} name="Lahiyə"
                link="/portfolio/interiors/29" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int30} name="Lahiyə"
                link="/portfolio/interiors/30" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int31} name="Lahiyə"
                link="/portfolio/interiors/31" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int32} name="Lahiyə"
                link="/portfolio/interiors/32" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int33} name="Lahiyə"
                link="/portfolio/interiors/33" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={int34} name="Lahiyə"
                link="/portfolio/interiors/34" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={int35} name="Lahiyə"
                link="/portfolio/interiors/35" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={int36} name="Lahiyə"
                link="/portfolio/interiors/36" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={int37} name="Lahiyə"
                link="/portfolio/interiors/37" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={int38} name="Lahiyə"
                link="/portfolio/interiors/38" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={int39} name="Lahiyə"
                link="/portfolio/interiors/39" />
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={ext1} name="Lahiyə"
                link="/portfolio/exteriors/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={ext2} name="Lahiyə"
                link="/portfolio/exteriors/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={ext3} name="Lahiyə"
                link="/portfolio/exteriors/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={ext4} name="Lahiyə"
                link="/portfolio/exteriors/4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={ext5} name="Lahiyə"
                link="/portfolio/exteriors/5" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={ext6} name="Lahiyə"
                link="/portfolio/exteriors/6" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={ext7} name="Lahiyə"
                link="/portfolio/exteriors/7" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={ext8} name="Lahiyə"
                link="/portfolio/exteriors/8" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={ext9} name="Lahiyə"
                link="/portfolio/exteriors/9" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={ext10} name="Lahiyə"
                link="/portfolio/exteriors/10" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={ext11} name="Lahiyə"
                link="/portfolio/exteriors/11" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={ext12} name="Lahiyə"
                link="/portfolio/exteriors/12" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={ext13} name="Lahiyə"
                link="/portfolio/exteriors/13" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={ext14} name="Lahiyə"
                link="/portfolio/exteriors/14" />
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={res1} name="Qara Qarayev" text="426 m²"
                link="/portfolio/restaurants/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={res2} name="Chef Mood Baku" text="240 m²"
                link="/portfolio/restaurants/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={res3} name="Antep Lahmacun" text="120 m²"
                link="/portfolio/restaurants/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={res5} name="Lahiyə"
                link="/portfolio/restaurants/5" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={res6} name="Arion Café" text="240 m²"
                link="/portfolio/restaurants/6" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={res7} name="Kavun Restoran"
                link="/portfolio/restaurants/7" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={res8} name="Ocakbaşı Restoran"
                link="/portfolio/restaurants/8" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={res4} name="Lahiyə"
                link="/portfolio/restaurants/4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={res9} name="Lahiyə"
                link="/portfolio/restaurants/9" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={res10} name="Şanlıurfa Restoran"
                link="/portfolio/restaurants/10" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={res11} name="Xurma Restoran" text="600 m²"
                link="/portfolio/restaurants/11" />
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={hot2} name="Knyazlı Otel" text="Qəbələ 3000 m²"
                link="/portfolio/hotels/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={hot1} name="Qazaxıstan" text="Almatı"
                link="/portfolio/hotels/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={hot3} name="Moskva Brosko Otel"
                link="/portfolio/hotels/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={hot4} name="Moskva Otel" text="VIP otaq 200 m²"
                link="/portfolio/hotels/4" />
            </div>

          </div>


          <div id="objects"
            className="min-h-screen w-full lg:pt-24 sm:pt-16 pt-12 lg:pl-8 pl-4"
          >
            <div
              className="lg:mb-24 sm:mb-16 mb-12 lg:ml-8 ml-4"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="İaişə Obyektləri" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={obj1} name="Lahiyə"
                link="/portfolio/objects/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={obj2} name="Lahiyə"
                link="/portfolio/objects/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={obj3} name="Lahiyə"
                link="/portfolio/objects/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={obj4} name="Lahiyə"
                link="/portfolio/objects/4" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={obj5} name="Lahiyə"
                link="/portfolio/objects/5" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={obj6} name="Lahiyə"
                link="/portfolio/objects/6" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={obj7} name="Lahiyə"
                link="/portfolio/objects/7" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={obj8} name="Lahiyə"
                link="/portfolio/objects/8" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={obj9} name="Lahiyə"
                link="/portfolio/objects/9" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={obj10} name="Lahiyə"
                link="/portfolio/objects/10" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                src={obj11} name="Lahiyə"
                link="/portfolio/objects/11" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                src={obj12} name="Lahiyə"
                link="/portfolio/objects/12" />
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden"
            >
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                src={const1} name="Lahiyə"
                link="/portfolio/constructions/1" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                src={const2} name="Lahiyə"
                link="/portfolio/constructions/2" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                src={const3} name="Lahiyə"
                link="/portfolio/constructions/3" />
              <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                src={const4} name="Lahiyə"
                link="/portfolio/constructions/4" />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
export default portfolio;
