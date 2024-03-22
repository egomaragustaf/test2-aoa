"use client";

export function Footer() {
  return (
    <footer className="border-t bg-background/50 backdrop-blur-lg border-border font-display">
      <div className="py-4 container flex flex-col items-center gap-4 md:flex-row justify-between">
        <span className="text-sm leading-5 text-gray-500">
          &copy;{new Date().getFullYear()} Ego Maragustaf
        </span>
      </div>
    </footer>
  );
}
