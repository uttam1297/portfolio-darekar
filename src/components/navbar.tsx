"use client";

import { useState } from "react";

const links = [
  { href: "#experience", label: "Work" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#capabilities", label: "About" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[52px] bg-[#0d1117]/80 backdrop-blur-xl border-b border-border">
      <div className="mx-auto max-w-[960px] h-full flex items-center justify-between px-5">
        <a
          href="#top"
          className="font-extrabold text-indigo-400 tracking-wide"
        >
          UD
        </a>

        <nav className="hidden sm:flex gap-0.5 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] font-medium text-muted-foreground px-3 py-1.5 rounded-full transition-colors hover:text-foreground hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="sm:hidden flex flex-col gap-1 p-1.5"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-5 h-0.5 bg-foreground rounded transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground rounded transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground rounded transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="sm:hidden bg-[#0d1117]/97 backdrop-blur-2xl border-b border-border px-5 py-3 flex flex-col gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground py-2.5 px-3 rounded-lg hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
