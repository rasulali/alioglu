'use client'
import Heading from "@/components/heading";
import ImageBox from "@/components/projectPageTemplate";
import placeholder from '@/../public/placeholder.jpg'
import LiveDiv from "@/components/liveDiv";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="w-full min-h-screen relative bg-grayA
    lg:px-16 sm:px-8 px-4 lg:pb-16 sm:pb-8 pb-4">

        <div className="flex justify-center w-full lg:mb-16 mb-8 lg:pt-4">
          <Heading animate={{ from: -50, to: 0, dir: 'y' }}
            variant="h2" text="Knyaz Otel" />
        </div>

        <div className="flex w-full">
          <div className="w-1/2">
            <ImageBox src={placeholder} />
          </div>
          <div className="w-2 bg-grayA h-full" />
          <div className="w-1/2 aspect-square grid gap-2 grid-cols-3">
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
            <ImageBox src={placeholder} />
          </div>
        </div>
        <LiveDiv animate={{ dir: 'x', from: -20, to: 0 }}>
          <p className="text-2xl text-zinc-100 w-1/2"
          >Discover the epitome of luxury at Knyazli Hotel.
            Merging contemporary design with natural beauty,
            its meticulously crafted architecture offers opulent interiors and sustainable practices.
            From majestic chandeliers to panoramic vistas,
            every detail invites unparalleled comfort and sophistication.
            Indulge in a world where elegance meets tranquility,
            creating unforgettable experiences amidst breathtaking landscapes.</p>
        </LiveDiv>
      </main>
      {children}
    </div>)
}
