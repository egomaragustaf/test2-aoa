"use client";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <nav className="sticky top-0 z-40 items-center justify-between gap-2 py-8 transition-colors lg:flex">
      <span className="flex items-center text-xl font-bold">HOME</span>
      <ul className="hidden lg:flex items-center gap-14">
        <li className="text-xl font-bold">ABOUT</li>
        <li className="text-xl font-bold">PRICING</li>
        <li className="text-xl font-bold">CONTACT</li>
        <li>
          <Button variant="outline" className="w-36">
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
}
