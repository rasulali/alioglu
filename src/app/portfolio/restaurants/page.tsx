'use client'

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Restaurants = () => {

  return (
    <main
      className="w-screen relative bg-grayA">
      <BackNav />
      <section
        className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading animate={{ from: -20, to: 0, dir: 'y' }} variant="h2" text="Restoran Layihələri" />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
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
      </section>
      <Footer />
    </main>
  )
}
export default Restaurants;
