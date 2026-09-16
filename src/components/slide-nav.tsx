"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const slides = [
  { id: "top", label: "Home" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
];

export function SlideNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = slides
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const idx = els.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: [0.5] },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    document
      .getElementById(slides[clamped].id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        aria-label="Page sections"
        className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex"
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            type="button"
            aria-label={`Go to ${s.label}`}
            aria-current={active === i ? "true" : undefined}
            onClick={() => goTo(i)}
            className="group flex size-8 items-center justify-center"
          >
            <span
              aria-hidden="true"
              className={`rounded-full transition-all ${
                active === i
                  ? "size-2.5 bg-brand"
                  : "size-2 bg-muted-foreground/40 group-hover:bg-muted-foreground/70"
              }`}
            />
          </button>
        ))}
      </nav>
      <div className="fixed bottom-5 right-4 z-30 flex flex-col gap-2">
        <button
          type="button"
          aria-label="Previous section"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur-xl transition-opacity hover:bg-card disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowUp aria-hidden="true" className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next section"
          disabled={active === slides.length - 1}
          onClick={() => goTo(active + 1)}
          className="flex size-10 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur-xl transition-opacity hover:bg-card disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowDown aria-hidden="true" className="size-4" />
        </button>
      </div>
    </>
  );
}
