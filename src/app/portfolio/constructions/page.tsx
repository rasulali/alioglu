"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Constructions = () => {
  return (
    <main className="w-screen relative bg-grayA">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text="Təmir/Tikiniti Layihələri"
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            src="/constructions/1/images/hero.jpg"
            name="Caspian"
            link="/portfolio/constructions/1"
          />
          <Card
            src="/constructions/2/images/hero.jpg"
            name="Thaddeus"
            link="/portfolio/constructions/2"
          />
          <Card
            src="/constructions/3/images/hero.jpg"
            name="Knyazlı Otel"
            link="/portfolio/constructions/3"
          />
          <Card
            src="/constructions/4/images/hero.jpg"
            name="Şanlıurfa Restoranı"
            link="/portfolio/constructions/4"
          />
          <Card
            src="/constructions/5/images/hero.jpg"
            name="Baku City Hospital"
            link="/portfolio/constructions/5"
          />
          <Card
            src="/constructions/6/images/hero.jpg"
            name="Layihə"
            link="/portfolio/constructions/6"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Constructions;
