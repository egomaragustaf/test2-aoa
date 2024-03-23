import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

import { HeroBackground } from "./_components/hero-background";
import { About } from "./_components/section-about";
import { Pricing } from "./_components/section-pricing";

export default function MainLayout({
  className,
  children,
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className="max-w-screen-xl mx-auto flex min-h-screen flex-col px-2">
      <HeroBackground />
      <Header />
      <main className={cn("flex-1", className)}>{children}</main>
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}
