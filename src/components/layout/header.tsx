"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navigation } from "@/configs/navigation";

export function Header() {
  return (
    <nav className="sticky top-0 z-40 items-center justify-between gap-2 py-8 transition-colors lg:flex">
      <span className="flex items-center text-xl font-bold">HOME</span>
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
