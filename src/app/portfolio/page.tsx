'use client'

import Heading from "@/components/heading";
import RightNav from "@/components/rightNav";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";
import { Suspense, useEffect, useState } from "react";

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
import const5 from "./constructions/5/assets/hero.jpg"
import const6 from "./constructions/6/assets/hero.jpg"
import Loading from "../loading";
//images

interface HeroImagesInterior {
  [key: number]: string;
}

interface HeroImagesExterior {
  [key: number]: string;
}


const portfolio = () => {
  const [heroImagesInterior, setHeroImagesInterior] = useState<HeroImagesInterior>({});
  const [heroImagesExterior, setHeroImagesExterior] = useState<HeroImagesExterior>({});

  const loadImages = async () => {
    const loadedImagesInt: { [key: number]: string } = {};
    const loadedImagesExt: { [key: number]: string } = {};
    const promises: Promise<any>[] = [];

    try {
      for (let i = 1; i <= 39; i++) {
        const promise = import(`@/../public/interiors/${i}/images/hero.jpg`)
          .then((imageModule) => {
            loadedImagesInt[i] = imageModule.default;
          });
        promises.push(promise);
      }
      for (let i = 1; i <= 14; i++) {
        const promise = import(`@/../public/exteriors/${i}/images/hero.jpg`)
          .then((imageModule) => {
            loadedImagesExt[i] = imageModule.default;
          });
        promises.push(promise);
      }

      await Promise.all(promises);

      setHeroImagesInterior(loadedImagesInt);
      setHeroImagesExterior(loadedImagesExt);
    } catch (error) {
      console.error("Error prefetching images:", error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);



  return (
    <Suspense fallback={<Loading />}>
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
              lg:gap-y-8 gap-y-4 mx-auto overflow-hidden lg:p-4"
              >
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[1]} name="Ağ Şəhər Layihəsi" text="240kv m²"
                  link="/portfolio/interiors/1" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[2]} name="Layihə"
                  link="/portfolio/interiors/2" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[3]} name="Layihə"
                  link="/portfolio/interiors/3" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[4]} name="Layihə"
                  link="/portfolio/interiors/4" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[5]} name="Layihə"
                  link="/portfolio/interiors/5" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[6]} name="Layihə"
                  link="/portfolio/interiors/6" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[7]} name="Layihə"
                  link="/portfolio/interiors/7" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[8]} name="Layihə"
                  link="/portfolio/interiors/8" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[9]} name="Layihə"
                  link="/portfolio/interiors/9" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[10]} name="Layihə"
                  link="/portfolio/interiors/10" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[11]} name="Layihə"
                  link="/portfolio/interiors/11" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[12]} name="Layihə"
                  link="/portfolio/interiors/12" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[13]} name="Layihə"
                  link="/portfolio/interiors/13" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[14]} name="Layihə"
                  link="/portfolio/interiors/14" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[15]} name="Layihə"
                  link="/portfolio/interiors/15" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[16]} name="Layihə"
                  link="/portfolio/interiors/16" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[17]} name="Layihə"
                  link="/portfolio/interiors/17" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[18]} name="Layihə"
                  link="/portfolio/interiors/18" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[19]} name="Layihə"
                  link="/portfolio/interiors/19" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[20]} name="Layihə"
                  link="/portfolio/interiors/20" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[21]} name="Layihə"
                  link="/portfolio/interiors/21" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[22]} name="Layihə"
                  link="/portfolio/interiors/22" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[23]} name="Layihə"
                  link="/portfolio/interiors/23" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[24]} name="Layihə"
                  link="/portfolio/interiors/24" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[25]} name="Layihə"
                  link="/portfolio/interiors/25" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[26]} name="Layihə"
                  link="/portfolio/interiors/26" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[27]} name="Layihə"
                  link="/portfolio/interiors/27" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[28]} name="Layihə"
                  link="/portfolio/interiors/28" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[29]} name="Layihə"
                  link="/portfolio/interiors/29" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[30]} name="Layihə"
                  link="/portfolio/interiors/30" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[31]} name="Layihə"
                  link="/portfolio/interiors/31" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[32]} name="Layihə"
                  link="/portfolio/interiors/32" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[33]} name="Layihə"
                  link="/portfolio/interiors/33" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesInterior[34]} name="Layihə"
                  link="/portfolio/interiors/34" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesInterior[35]} name="Layihə"
                  link="/portfolio/interiors/35" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesInterior[36]} name="Layihə"
                  link="/portfolio/interiors/36" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesInterior[37]} name="Layihə"
                  link="/portfolio/interiors/37" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesInterior[38]} name="Layihə"
                  link="/portfolio/interiors/38" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesInterior[39]} name="Layihə"
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
              >
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesExterior[1]} name="Layihə"
                  link="/portfolio/exteriors/1" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesExterior[2]} name="Layihə"
                  link="/portfolio/exteriors/2" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesExterior[3]} name="Layihə"
                  link="/portfolio/exteriors/3" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesExterior[4]} name="Layihə"
                  link="/portfolio/exteriors/4" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesExterior[5]} name="Layihə"
                  link="/portfolio/exteriors/5" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesExterior[6]} name="Layihə"
                  link="/portfolio/exteriors/6" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesExterior[7]} name="Layihə"
                  link="/portfolio/exteriors/7" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesExterior[8]} name="Layihə"
                  link="/portfolio/exteriors/8" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={heroImagesExterior[9]} name="Layihə"
                  link="/portfolio/exteriors/9" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={heroImagesExterior[10]} name="Layihə"
                  link="/portfolio/exteriors/10" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={heroImagesExterior[11]} name="Layihə"
                  link="/portfolio/exteriors/11" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={heroImagesExterior[12]} name="Layihə"
                  link="/portfolio/exteriors/12" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={heroImagesExterior[13]} name="Layihə"
                  link="/portfolio/exteriors/13" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={heroImagesExterior[14]} name="Layihə"
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
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
                  src={res5} name="Layihə"
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
                  src={res4} name="Layihə"
                  link="/portfolio/restaurants/4" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={res9} name="Layihə"
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
              >
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={obj1} name="Layihə"
                  link="/portfolio/objects/1" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={obj2} name="Layihə"
                  link="/portfolio/objects/2" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={obj3} name="Layihə"
                  link="/portfolio/objects/3" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={obj4} name="Layihə"
                  link="/portfolio/objects/4" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={obj5} name="Layihə"
                  link="/portfolio/objects/5" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={obj6} name="Layihə"
                  link="/portfolio/objects/6" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={obj7} name="Layihə"
                  link="/portfolio/objects/7" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={obj8} name="Layihə"
                  link="/portfolio/objects/8" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={obj9} name="Layihə"
                  link="/portfolio/objects/9" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={obj10} name="Layihə"
                  link="/portfolio/objects/10" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={obj11} name="Layihə"
                  link="/portfolio/objects/11" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={obj12} name="Layihə"
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
              lg:gap-y-12 gap-y-4 justify-center mx-auto overflow-hidden lg:p-4"
              >
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.1 }}
                  src={const1} name="Layihə"
                  link="/portfolio/constructions/1" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.2 }}
                  src={const2} name="Layihə"
                  link="/portfolio/constructions/2" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.3 }}
                  src={const3} name="Layihə"
                  link="/portfolio/constructions/3" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.4 }}
                  src={const4} name="Layihə"
                  link="/portfolio/constructions/4" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.5 }}
                  src={const5} name="Layihə"
                  link="/portfolio/constructions/5" />
                <Card animate={{ from: 50, to: 0, dir: 'x', delay: 0.6 }}
                  src={const6} name="Layihə"
                  link="/portfolio/constructions/6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Suspense>
  )
}
export default portfolio;
