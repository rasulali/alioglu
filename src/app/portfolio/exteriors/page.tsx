'use client'

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio"
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Exteriors = () => {

  return (
    <main
      className="w-screen relative bg-grayA">
      <BackNav />
      <section
        className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading animate={{ from: -20, to: 0, dir: 'y' }} variant="h2" text="Eksteryer Layihələri" />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
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
      </section>
      <Footer />
    </main>
  )
}
export default Exteriors;
