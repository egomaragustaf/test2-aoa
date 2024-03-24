"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navigation } from "@/configs/navigation";
import { Button } from "@/components/ui/button";

export function NavbarMenu() {
  const [open, setOpen] = useState(false);

  const handleCloseSheet = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <IconMenu2 className="w-8 h-8" />
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        <ul className="flex flex-col font-semibold text-xl items-end gap-6 mt-10">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                passHref
                onClick={() => {
                  handleCloseSheet();
                  window.location.href = item.href;
                }}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Button variant="outline" className="w-36 text-[#0366fd]" asChild>
              <Link href={"/login"}>LOGIN</Link>
            </Button>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
