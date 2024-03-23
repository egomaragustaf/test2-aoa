import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { HeroBackground } from "./_components/hero-background";
import { About } from "./_components/section-about";
import { Pricing } from "./_components/section-pricing";
import { Contact } from "./_components/section-contact";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto flex min-h-screen flex-col px-2">
      <HeroBackground />
      <Header />
      <main className="flex-1">{children}</main>
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
