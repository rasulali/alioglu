"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Hotels = () => {
  return (
    <main className="w-screen relative bg-grayA">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text="Otel Layihələri"
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/hotels/1/images/hero.jpg"
            name="Knyazlı Otel"
            text="Qəbələ 3000 m²"
            link="/portfolio/hotels/1"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/hotels/2/images/hero.jpg"
            name="Qazaxıstan"
            text="Almatı"
            link="/portfolio/hotels/2"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/hotels/3/images/hero.jpg"
            name="Moskva Brosko Otel"
            link="/portfolio/hotels/3"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/hotels/4/images/hero.jpg"
            name="Moskva Otel"
            text="VIP otaq 200 m²"
            link="/portfolio/hotels/4"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Hotels;
