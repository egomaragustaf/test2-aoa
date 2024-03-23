"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className={cn(
        "flex flex-col flex-wrap items-center justify-between gap-2 rounded-md bg-muted/30 p-4 sm:flex-row"
      )}>
      <p className="text-center text-sm sm:text-left">
        <span>&copy; {new Date().getFullYear()} </span>
        <Link href="https://github.com/egomaragustaf">Ego Maragustaf</Link>
      </p>
      <span>
        <Link
          href="https://github.com/egomaragustaf/test2-aoa"
          className="text-sm">
          Gtihub
        </Link>
      </span>
    </footer>
  );
}
