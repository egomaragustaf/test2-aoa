"use client";

import Image from "next/image";
import { CircleCheck } from "lucide-react";

export function About() {
  return (
    <div className="w-full min-h-screen mt-40 h-96 flex flex-row lg:flex-col items-center justify-center space-y-20">
      <div className="max-w-7xl flex flex-col lg:flex-row items-center gap-4 lg:space-x-40">
        <blockquote className="max-w-lg space-y-4">
          <b className="p-2 leading-normal flex text-center text-3xl">
            Welcome to KeDa – your ultimate business companion!
          </b>
          <ul className="text-[#0C68FA] text-base space-y-2 font-semibold">
            <li className="flex gap-2">
              <CircleCheck className="h-6 w-6 text-green-600" />
              Simplify your entrepreneurial journey.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="h-6 w-6 text-green-600" /> Automated
              inventory management and profit tracking.
            </li>
            <li className="flex gap-2">
              <CircleCheck className="h-6 w-6 text-green-600" /> Effortlessly
              keeping tabs on every item and every dime.
            </li>
          </ul>
          <p className="text-base text-center">
            Let's make business management cool, simple, and downright awesome.
            Join us and let's rock the world of entrepreneurship together!
          </p>
        </blockquote>
        <Image
          src={"/landing-page/welcome.svg"}
          alt="chart"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
