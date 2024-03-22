"use client";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full">
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex items-center justify-between py-3 sm:py-6">
        <span className="flex items-center">Home</span>
        <ul className="flex items-center gap-10">
          <li>About</li>
          <li>Contact</li>
          <li>Pricing</li>
          <li>
            <Button variant="outline" className="w-36">
              Login
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
