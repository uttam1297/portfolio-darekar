"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Work" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const scroller = document.getElementById("main-content");
    if (!scroller) return;
    let frame = 0;
    const update = () => {
      const current = links
        .filter(({ href }) => {
          const el = document.querySelector(href);
          return el && el.getBoundingClientRect().top <= 160;
        })
        .at(-1);
      const atBottom =
        scroller.scrollTop + scroller.clientHeight >=
        scroller.scrollHeight - 4;
      setActive(atBottom ? "#connect" : (current?.href ?? ""));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    onScroll();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 640px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-background/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Uttam Darekar, back to top"
          className="flex min-h-11 items-center text-lg font-bold tracking-tight"
        >
          UD<span className="text-brand">.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 sm:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "location" : undefined}
              className="flex min-h-11 items-center rounded-md px-4 text-xs font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground aria-[current=location]:bg-foreground/5 aria-[current=location]:text-brand"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          ref={toggleRef}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex size-11 items-center justify-center rounded-md hover:bg-card sm:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="border-b border-border bg-background px-5 py-3 shadow-xl sm:hidden"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            aria-current={active === l.href ? "location" : undefined}
            className="flex min-h-12 items-center rounded-md px-3 text-sm text-muted-foreground hover:bg-card hover:text-foreground aria-[current=location]:text-brand"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
