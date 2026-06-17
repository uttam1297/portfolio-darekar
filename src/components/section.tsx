"use client";

import { useEffect, useRef, useState } from "react";

export function Section({
  id,
  label,
  children,
  className = "",
  first = false,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  first?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "0px 0px 50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`py-9 ${first ? "" : "border-t border-border"} transition-all duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4"
      } ${className}`}
    >
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-indigo-400 mb-3.5">
        {label}
      </p>
      {children}
    </section>
  );
}
