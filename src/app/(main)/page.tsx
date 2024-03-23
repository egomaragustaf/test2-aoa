import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col text-center lg:grid lg:grid-cols-8 mt-20 mb-20">
        <div className="lg:col-span-3" />
        <p className="lg:col-span-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quam quidem explicabo at? Quae quas earum, illum tempora ab
          cupiditate?
        </p>
      </div>
      <div className="flex flex-col text-center lg:grid lg:grid-cols-8  mt-10 lg:mt-20">
        <p className="lg:col-span-4 italic">
          &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi,
          maiores.&quot;
        </p>
      </div>
      <Image
        src={"/assets/chart.svg"}
        alt="chart"
        width={200}
        height={200}
        className="mt-10 lg:mt-20 ml-8"
      />
    </>
  );
}
