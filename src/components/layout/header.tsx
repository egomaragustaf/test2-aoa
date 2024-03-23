"use client";

import { IconCodeCircle2 } from "@tabler/icons-react";
import Link from "next/link";

import useScroll from "@/hooks/use-scroll-position";
import { Button } from "@/components/ui/button";
import { navigation } from "@/configs/navigation";
import { cn } from "@/lib/utils";
import { NavbarMenu } from "../shared/navbar-menu";

export function Header() {
  return (
    <>
      <HeaderLarge />
    </>
  );
}

function HeaderLarge() {
  const scrolled = useScroll(20);
  return (
    <nav
      className={cn(
        "sticky top-0 z-40 items-center justify-between gap-2 py-6 transition-colors flex",
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
      <HeaderSmall />
    </nav>
  );
}

function HeaderSmall() {
  return (
    <nav className="sticky top-0 z-20 flex items-center justify-between gap-2 p-2 transition-colors lg:hidden">
      <NavbarMenu />
    </nav>
  );
}
