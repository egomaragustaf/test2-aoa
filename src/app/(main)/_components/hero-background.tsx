"use client";

import Image from "next/image";

export function HeroBackground() {
  return (
    <>
      <HeroBackgroundLarge />
      <HeroBackgroundSmall />
    </>
  );
}

function HeroBackgroundLarge() {
  return (
    <>
      <div className="absolute -z-10 top-0 left-0 w-full hidden lg:block">
        <Image
          src={"/landing-page/blob-top.png"}
          alt="blob-top"
          width={350}
          height={350}
        />
      </div>
      <div className="absolute -z-10 bottom-0 right-0 hidden lg:block">
        <Image
          src={"/landing-page/blob-bottom.png"}
          alt="blob-top"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}

function HeroBackgroundSmall() {
  return (
    <>
      <div className="absolute -z-10 top-0 left-0 w-full lg:hidden block">
        <Image
          src={"/landing-page/blob-top.png"}
          alt="blob-top"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute -z-10 bottom-0 right-0 lg:hidden block">
        <Image
          src={"/landing-page/blob-bottom.png"}
          alt="blob-top"
          width={250}
          height={250}
        />
      </div>
    </>
  );
}
