"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { getScrollAnimation } from "@/hooks/use-scroll-animation";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={getScrollAnimation}
        aria-hidden="true"
        className="hidden text-center lg:grid lg:grid-cols-8 space-y-20">
        <div className="lg:col-span-3" />
        <p className="lg:col-span-4 lg:leading-loose font-semibold lg:font-normal text-xl lg:text-base">
          KeDA Tech is committed to helping revolutionize your business and
          providing the right technology to help you face business challenges in
          the digital age
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={getScrollAnimation}
        aria-hidden="true"
        className="flex flex-col text-center lg:hidden mt-32 gap-6">
        <h1 className="text-5xl font-extrabold bg-gradient-to-br from-[#0366fd] to-[#c394e2] bg-clip-text text-transparent">
          KeDA Tech
        </h1>
        <p className="text-lg">
          Committed to helping revolutionize your business and providing the
          right technology to help you face business challenges in the digital
          age
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={getScrollAnimation}
        aria-hidden="true"
        className="flex flex-col text-center lg:grid lg:grid-cols-8">
        <p className="lg:col-span-4 italic">
          &quot;We listen and understand your business needs.&quot;
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={getScrollAnimation}
        aria-hidden="true"
        className="flex items-center justify-start lg:ml-32">
        <Image src={"/assets/chart.svg"} alt="chart" width={200} height={200} />
      </motion.div>
    </>
  );
}
