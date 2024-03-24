"use client";

import Image from "next/image";

const goals = [
  "- Simplify your entrepreneurial journey.",
  "- Automated inventory management and profit tracking.",
  "- Effortlessly keeping tabs on every item and every dime.",
];

export function About() {
  return (
    <section
      className="w-full min-h-screen flex flex-row lg:flex-col items-center justify-center lg:space-y-20 bg-slate-100 py-20 lg:py-0"
      id="about">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center text-center lg:text-start gap-10 lg:gap-20">
        <blockquote className="max-w-lg space-y-6">
          <b className="leading-normal text-3xl">KeDa Tech</b>
          <p className="text-muted-foreground">
            Your ultimate business companion!
          </p>
          <p className="text-base">
            Starting from the dream of becoming an internationally standard
            software house, KeDA Tech emerged in 2018. Throughout its
            development, KeDA Tech believes that digital transformation will
            bring many changes in all aspects of life, especially in the
            business field of companies, communities, and society.
          </p>
          <ul className="text-[#0366fd] text-sm lg:text-base space-y-2 font-semibold">
            {goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </blockquote>
        <Image
          src={"/assets/welcome.svg"}
          alt="chart"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
