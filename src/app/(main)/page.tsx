import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full flex flex-col justify-center gap-10 lg:gap-24 mb-40 lg:mb-20">
      <div className="flex flex-col text-center lg:grid lg:grid-cols-8 space-y-20">
        <div className="lg:col-span-3" />
        <p className="lg:col-span-4 lg:leading-loose font-semibold lg:font-normal text-xl lg:text-base">
          KeDA Tech is committed to helping revolutionize your business and
          providing the right technology to help you face business challenges in
          the digital age
        </p>
      </div>
      <div className="flex flex-col text-center lg:grid lg:grid-cols-8">
        <p className="lg:col-span-4 italic">
          &quot;We listen and understand your business needs.&quot;
        </p>
      </div>
      <Image
        src={"/assets/chart.svg"}
        alt="chart"
        width={225}
        height={225}
        className="lg:ml-20"
      />
    </section>
  );
}
