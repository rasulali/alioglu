'use client'

import Heading from "@/components/heading";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer";

const Portfolio = () => {

  const [inView, setInView] = useState({
    int: false,
    ext: false,
    rest: false,
    hotel: false,
    obj: false,
    cons: false
  })

  const intRef = useRef(null)
  const intInView = useInView(intRef, { margin: '-50% 0% -50% 0%' });

  const extRef = useRef(null)
  const extInView = useInView(extRef, { margin: '-50% 0% -50% 0%' });

  const restRef = useRef(null)
  const restInView = useInView(restRef, { margin: '-50% 0% -50% 0%' });

  const hotelRef = useRef(null)
  const hotelInView = useInView(hotelRef, { margin: '-50% 0% -50% 0%' });

  const objRef = useRef(null)
  const objInView = useInView(objRef, { margin: '-50% 0% -50% 0%' });

  const consRef = useRef(null)
  const consInView = useInView(consRef, { margin: '-50% 0% -50% 0%' });

  useEffect(() => {
    setInView({
      int: intInView,
      ext: extInView,
      rest: restInView,
      hotel: hotelInView,
      obj: objInView,
      cons: consInView
    })
  }, [intInView, extInView, restInView, hotelInView, objInView, consInView])

  return (
    <main
      className="w-screen relative bg-grayA">
      <RightNav intInView={inView.int} extInView={inView.ext} restInView={inView.rest}
        hotelInView={inView.hotel} objInView={inView.obj} consInView={inView.cons} />
      <section
        className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="w-full relative">
          <span className="w-full flex justify-center">
            <Heading animate={{ from: -20, to: 0, dir: 'y' }} variant="h1" text="Portfolio" />
          </span>

          <div ref={intRef}>
            <div
              id="interior"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading
                animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="İnteryer" />
            </div>

            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/1/images/hero.jpg" name="Ağ Şəhər Layihəsi" text="240kv m²"
                link="/portfolio/interiors/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/2/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/3/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/4/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/4" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/5/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/5" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/6/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/6" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/7/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/7" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/8/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/8" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/9/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/9" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/10/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/10" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/11/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/11" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/12/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/12" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/13/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/13" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/14/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/14" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/15/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/15" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/16/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/16" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/17/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/17" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/18/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/18" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/19/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/19" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/20/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/20" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/21/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/21" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/22/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/22" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/23/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/23" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/24/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/24" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/25/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/25" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/26/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/26" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/27/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/27" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/28/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/28" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/29/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/29" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/30/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/30" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/31/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/31" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/32/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/32" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/33/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/33" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/interiors/34/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/34" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/interiors/35/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/35" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/interiors/36/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/36" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/interiors/37/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/37" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/interiors/38/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/38" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/interiors/39/images/hero.jpg" name="Layihə"
                link="/portfolio/interiors/39" />
            </div>

          </div>

          <div ref={extRef}>
            <div
              id="exterior"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Eksteryer" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/exteriors/1/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/exteriors/2/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/exteriors/3/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/exteriors/4/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/4" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/exteriors/5/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/5" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/exteriors/6/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/6" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/exteriors/7/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/7" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/exteriors/8/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/8" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/exteriors/9/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/9" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/exteriors/10/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/10" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/exteriors/11/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/11" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/exteriors/12/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/12" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/exteriors/13/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/13" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/exteriors/14/images/hero.jpg" name="Layihə"
                link="/portfolio/exteriors/14" />
            </div>
          </div>

          <div ref={restRef}>
            <div
              id="restaurants"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Restoranlar" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/restaurants/1/images/hero.jpg" name="Qara Qarayev" text="426 m²"
                link="/portfolio/restaurants/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/restaurants/2/images/hero.jpg" name="Chef Mood Baku" text="240 m²"
                link="/portfolio/restaurants/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/restaurants/3/images/hero.jpg" name="Antep Lahmacun" text="120 m²"
                link="/portfolio/restaurants/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/restaurants/5/images/hero.jpg" name="Layihə"
                link="/portfolio/restaurants/5" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/restaurants/6/images/hero.jpg" name="Arion Café" text="240 m²"
                link="/portfolio/restaurants/6" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/restaurants/7/images/hero.jpg" name="Kavun Restoran"
                link="/portfolio/restaurants/7" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/restaurants/8/images/hero.jpg" name="Ocakbaşı Restoran"
                link="/portfolio/restaurants/8" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/restaurants/4/images/hero.jpg" name="Layihə"
                link="/portfolio/restaurants/4" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/restaurants/9/images/hero.jpg" name="Layihə"
                link="/portfolio/restaurants/9" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/restaurants/10/images/hero.jpg" name="Şanlıurfa Restoran"
                link="/portfolio/restaurants/10" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/restaurants/11/images/hero.jpg" name="Xurma Restoran" text="600 m²"
                link="/portfolio/restaurants/11" />
            </div>
          </div>

          <div ref={hotelRef}>
            <div
              id="hotel"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Otellər" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/hotels/1/images/hero.jpg" name="Knyazlı Otel" text="Qəbələ 3000 m²"
                link="/portfolio/hotels/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/hotels/2/images/hero.jpg" name="Qazaxıstan" text="Almatı"
                link="/portfolio/hotels/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/hotels/3/images/hero.jpg" name="Moskva Brosko Otel"
                link="/portfolio/hotels/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/hotels/4/images/hero.jpg" name="Moskva Otel" text="VIP otaq 200 m²"
                link="/portfolio/hotels/4" />
            </div>

          </div>


          <div ref={objRef}>
            <div
              id="objects"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="İaşə Obyektləri" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/objects/1/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/objects/2/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/objects/3/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/objects/4/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/4" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/objects/5/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/5" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/objects/6/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/6" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/objects/7/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/7" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/objects/8/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/8" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/objects/9/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/9" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/objects/10/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/10" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/objects/11/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/11" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/objects/12/images/hero.jpg" name="Layihə"
                link="/portfolio/objects/12" />
            </div>
          </div>


          <div ref={consRef}>

            <div
              id="construction"
              className="lg:pb-8 pb-4 lg:pt-24 pt-16"
            >
              <Heading animate={{ from: -25, to: 0, dir: 'x' }}
                variant="h2" text="Təmir/Tikiniti" />
            </div>
            <div
              className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
            >
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.1 }}
                src="/constructions/1/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/1" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.2 }}
                src="/constructions/2/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/2" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.3 }}
                src="/constructions/3/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/3" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.4 }}
                src="/constructions/4/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/4" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.5 }}
                src="/constructions/5/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/5" />
              <Card animate={{ from: 20, to: 0, dir: 'x', delay: 0.6 }}
                src="/constructions/6/images/hero.jpg" name="Layihə"
                link="/portfolio/constructions/6" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
export default Portfolio;
