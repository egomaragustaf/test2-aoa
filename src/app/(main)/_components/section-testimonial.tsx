"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IconStarFilled } from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonis = [
  {
    name: "Lionel Messi",
    city: "Indonesia",
    rating: "4.5",
    testimoni:
      "KaDe Tech is software transformed our daily tasks into a breeze. Their user-friendly solutions saved us time and boosted our efficiency. Highly recommended!",
  },
  {
    name: "Cristiano Ronaldo",
    city: "Indonesia",
    rating: "5",
    testimoni:
      "Thanks to KaDe Tech, we streamlined our processes and saw immediate improvements. Their team's expertise made the transition smooth, and now we can't imagine our workflow without their software.",
  },
  {
    name: "Neymar Junior",
    city: "Indonesia",
    rating: "4.5",
    testimoni:
      "KaDe Tech is software is a game-changer! It's simple, effective, and their support team is always there when we need them. Couldn't be happier with the results!",
  },
  {
    name: "Kylian Mbappe",
    city: "Indonesia",
    rating: "5",
    testimoni:
      "KaDe Tech is software is amazing! It's straightforward and gets the job done without any hassle. We're so glad we found them!",
  },
];

export function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={getScrollAnimation}
      aria-hidden="true"
      className="w-full mt-20 lg:mt-40 min-h-screen flex flex-row lg:flex-col items-center justify-center gap-4 pb-20 border-b shadow-lg">
      <div className="flex flex-col w-full items-center justify-center gap-4">
        <h1 className="p-2 leading-normal flex text-center text-3xl font-bold">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="max-w-2xl text-center">
          These are the stories of our customers who have joined us with great
          pleasure.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-64 lg:max-w-5xl">
          <CarouselContent>
            {testimonis.map((testimoni) => (
              <CarouselItem
                key={testimoni.name}
                className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-slate-300 hover:border-[#0366fd] transition duration-500">
                    <CardContent className="flex flex-col aspect-square items-center justify-center p-6 shadow-md gap-2">
                      <h1 className="text-xl font-semibold">
                        {testimoni.name}
                      </h1>
                      <h2 className="text-sm">{testimoni.city}</h2>
                      <span className="text-lg flex items-center justify-center gap-2 text-yellow-600">
                        <IconStarFilled />
                        {testimoni.rating}
                      </span>
                      <p className="text-center text-muted-foreground">
                        &quot;{testimoni.testimoni}&quot;
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex w-full items-center justify-center gap-6 my-4 lg:my-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </motion.div>
  );
}
