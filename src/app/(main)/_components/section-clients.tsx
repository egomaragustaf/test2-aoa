"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { getScrollAnimation } from "@/hooks/use-scroll-animation";

const clients = [
  { src: "/clients/google.svg" },
  { src: "/clients/microsoft.svg" },
  { src: "/clients/fedex.svg" },
  { src: "/clients/amazon.svg" },
  { src: "/clients/airbnb.svg" },
];

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <section
      className="w-full mt-20 lg:mt-40 flex flex-row lg:flex-col items-center justify-center"
      id="pricing">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={getScrollAnimation}
        aria-hidden="true"
        className="flex lg:flex-row flex-col w-full items-center justify-center gap-20">
        {clients.map((client, index) => {
          return (
            <Image
              src={client.src}
              alt="client"
              key={index}
              width={120}
              height={120}
              className="grayscale hover:grayscale-0"
            />
          );
        })}
      </motion.div>
    </section>
  );
}
