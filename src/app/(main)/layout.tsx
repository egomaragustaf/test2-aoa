import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { HeroBackground } from "./_components/hero-background";
import { About } from "./_components/section-about";
import { Pricing } from "./_components/section-pricing";
import { Contact } from "./_components/section-contact";
import { Testimonial } from "./_components/section-testimonial";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto flex min-h-screen flex-col px-2">
      <HeroBackground />
      <Header />
      <main className="w-full flex flex-col space-y-40 lg:space-y-20">
        {children}
        <About />
        <Pricing />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
