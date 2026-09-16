"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { duration, easeEmphasized } from "@/lib/motion";

export function Section({
  id,
  label,
  children,
  className,
  description,
  compact = false,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
  compact?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={id}
      data-slide
      aria-labelledby={`${id}-heading`}
      className={cn(
        "flex snap-start flex-col justify-start overflow-y-auto scroll-mt-0 px-5 pb-8 pt-24 sm:px-8 sm:pt-28",
        compact ? "min-h-fit" : "h-dvh min-h-dvh",
        className,
      )}
    >
      <motion.div
        className="mx-auto w-full max-w-[1160px]"
        initial={reduceMotion ? undefined : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: duration.slow, ease: easeEmphasized }}
      >
        <div className="mb-4">
          <h2
            id={`${id}-heading`}
            className="font-heading text-lg font-semibold tracking-tight"
          >
            {label}
          </h2>
          {description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
