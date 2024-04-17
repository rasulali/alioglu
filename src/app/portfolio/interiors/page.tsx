"use client";

import Heading from "@/components/heading";
import Card from "@/components/cardPortfolio";
import BackNav from "@/components/backNav";
import Footer from "@/components/footer";

const Interiors = () => {
  return (
    <main className="w-screen relative bg-grayA">
      <BackNav />
      <section className="w-full lg:pt-24 pt-12 lg:px-16 sm:px-8 px-4">
        <div className="flex justify-center lg:mb-8 mb-4">
          <Heading
            animate={{ from: -20, to: 0, dir: "y" }}
            variant="h2"
            text="İnteryer Layihələri"
          />
        </div>
        <div
          className="flex flex-wrap max-w-[calc(832px*3.5)] lg:gap-x-8
              lg:gap-y-8 gap-y-4 mx-auto justify-center overflow-hidden lg:p-4"
        >
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/1/images/hero.jpg"
            name="Ağ Şəhər Layihəsi"
            text="240kv m²"
            link="/portfolio/interiors/1"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/2/images/hero.jpg"
            name="Zest Layihəsi"
            link="/portfolio/interiors/2"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/3/images/hero.jpg"
            name="Slate Layihəsi"
            link="/portfolio/interiors/3"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/4/images/hero.jpg"
            name="Spark Layihəsi"
            link="/portfolio/interiors/4"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/5/images/hero.jpg"
            name="Quill Layihəsi"
            link="/portfolio/interiors/5"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/6/images/hero.jpg"
            name="Swift Layihəsi"
            link="/portfolio/interiors/6"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/7/images/hero.jpg"
            name="Prism Layihəsi"
            link="/portfolio/interiors/7"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/8/images/hero.jpg"
            name="Pivot Layihəsi"
            link="/portfolio/interiors/8"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/9/images/hero.jpg"
            name="Wisp Layihəsi"
            link="/portfolio/interiors/9"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/10/images/hero.jpg"
            name="Lumo Layihəsi"
            link="/portfolio/interiors/10"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/11/images/hero.jpg"
            name="Pinnacle Layihəsi"
            link="/portfolio/interiors/11"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/12/images/hero.jpg"
            name="Odyssey Layihəsi"
            link="/portfolio/interiors/12"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/13/images/hero.jpg"
            name="Evolve Layihəsi"
            link="/portfolio/interiors/13"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/14/images/hero.jpg"
            name="Mirage Layihəsi"
            link="/portfolio/interiors/14"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/15/images/hero.jpg"
            name="Sable Layihəsi"
            link="/portfolio/interiors/15"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/16/images/hero.jpg"
            name="Helix Layihəsi"
            link="/portfolio/interiors/16"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/17/images/hero.jpg"
            name="Peak Layihəsi"
            link="/portfolio/interiors/17"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/18/images/hero.jpg"
            name="Gleam Layihəsi"
            link="/portfolio/interiors/18"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/19/images/hero.jpg"
            name="Iris Layihəsi"
            link="/portfolio/interiors/19"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/20/images/hero.jpg"
            name="Crest Layihəsi"
            link="/portfolio/interiors/20"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/21/images/hero.jpg"
            name="Sway Layihəsi"
            link="/portfolio/interiors/21"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/22/images/hero.jpg"
            name="Axis Layihəsi"
            link="/portfolio/interiors/22"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/23/images/hero.jpg"
            name="Zephyr Layihəsi"
            link="/portfolio/interiors/23"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/24/images/hero.jpg"
            name="Nove Layihəsi"
            link="/portfolio/interiors/24"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/25/images/hero.jpg"
            name="Dusk Layihəsi"
            link="/portfolio/interiors/25"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/26/images/hero.jpg"
            name="Echo Layihəsi"
            link="/portfolio/interiors/26"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/27/images/hero.jpg"
            name="Grove Layihəsi"
            link="/portfolio/interiors/27"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/28/images/hero.jpg"
            name="Haven Layihəsi"
            link="/portfolio/interiors/28"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/29/images/hero.jpg"
            name="Vista Layihəsi"
            link="/portfolio/interiors/29"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/30/images/hero.jpg"
            name="Urban Layihəsi"
            link="/portfolio/interiors/30"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/31/images/hero.jpg"
            name="Flume Layihəsi"
            link="/portfolio/interiors/31"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/32/images/hero.jpg"
            name="Terre Layihəsi"
            link="/portfolio/interiors/32"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/33/images/hero.jpg"
            name="Luna Layihəsi"
            link="/portfolio/interiors/33"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.4 }}
            src="/interiors/34/images/hero.jpg"
            name="Oasis Layihəsi"
            link="/portfolio/interiors/34"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.5 }}
            src="/interiors/35/images/hero.jpg"
            name="Nest Layihəsi"
            link="/portfolio/interiors/35"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.6 }}
            src="/interiors/36/images/hero.jpg"
            name="Bliss Layihəsi"
            link="/portfolio/interiors/36"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.1 }}
            src="/interiors/37/images/hero.jpg"
            name="Aura Layihəsi"
            link="/portfolio/interiors/37"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.2 }}
            src="/interiors/38/images/hero.jpg"
            name="Forge Layihəsi"
            link="/portfolio/interiors/38"
          />
          <Card
            animate={{ from: 20, to: 0, dir: "x", delay: 0.3 }}
            src="/interiors/39/images/hero.jpg"
            name="Serene Layihəsi"
            link="/portfolio/interiors/39"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Interiors;
