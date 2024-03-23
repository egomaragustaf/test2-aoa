"use client";

import Link from "next/link";
import { IconCodeCircle2 } from "@tabler/icons-react";

import useScroll from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import { navigation } from "@/configs/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const scrolled = useScroll(20);

  return (
    <nav
      className={cn(
        "sticky top-0 z-40 items-center justify-between gap-2 py-6 transition-colors lg:flex",
        { "bg-background/75 backdrop-blur-lg": scrolled }
      )}>
      <Link href="/">
        <span
          className={cn(
            "flex gap-2 items-center text-xl font-bold text-white",
            {
              "text-black": scrolled,
            }
          )}>
          <IconCodeCircle2 className="w-8 h-8" />
          Home
        </span>
      </Link>
      <ul className="hidden lg:flex items-center gap-14">
        {navigation.map((item) => (
          <li key={item.name} className="text-xl font-bold">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li>
          <Button variant="outline" className="w-36">
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
}
