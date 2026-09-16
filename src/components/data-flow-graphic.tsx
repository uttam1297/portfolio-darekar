"use client";

import { motion, useReducedMotion } from "framer-motion";
import { duration, easeEmphasized } from "@/lib/motion";

/**
 * Abstract illustration: scattered, uneven data on the left resolving
 * through a few paths into a single decision on the right. Carries
 * meaning rather than decoration — no gradients, no floating shapes,
 * one accent colour (the site's brand token).
 *
 * Under reduced motion it renders its finished state with no animation.
 */

const dataPoints = [
  { cx: 20, cy: 30, r: 3, o: 0.85 },
  { cx: 44, cy: 20, r: 2, o: 0.4 },
  { cx: 70, cy: 44, r: 2.4, o: 0.6 },
  { cx: 26, cy: 62, r: 2.4, o: 0.7 },
  { cx: 54, cy: 72, r: 3.5, o: 0.9 },
  { cx: 86, cy: 26, r: 2, o: 0.45 },
  { cx: 16, cy: 96, r: 2.8, o: 0.75 },
  { cx: 44, cy: 112, r: 2, o: 0.5 },
  { cx: 78, cy: 90, r: 3, o: 0.8 },
  { cx: 102, cy: 66, r: 2.4, o: 0.55 },
];

const flowPaths = [
  "M 22 32 C 92 42, 154 74, 200 98",
  "M 18 96 C 84 98, 148 100, 200 100",
  "M 58 74 C 116 78, 162 90, 200 99",
  "M 92 20 C 138 46, 172 78, 200 97",
];

export function DataFlowGraphic({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const draw = reduceMotion
    ? { pathLength: 1, opacity: 0.55 }
    : { pathLength: [0, 1], opacity: [0, 0.55] };

  return (
    <svg
      viewBox="0 0 220 130"
      role="img"
      aria-label="Scattered data points converging into a single decision"
      className={className}
    >
      {[34, 62, 90].map((y) => (
        <line
          key={y}
          x1="12"
          y1={y}
          x2="118"
          y2={y}
          stroke="currentColor"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      <line
        x1="12"
        y1="112"
        x2="208"
        y2="112"
        stroke="currentColor"
        strokeOpacity="0.14"
        strokeWidth="1"
      />

      {flowPaths.map((d, index) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          animate={draw}
          transition={{
            duration: reduceMotion ? 0 : duration.slow + duration.fast,
            delay: reduceMotion ? 0 : 0.2 + index * 0.12,
            ease: easeEmphasized,
          }}
        />
      ))}

      {dataPoints.map((point, index) => (
        <motion.circle
          key={`${point.cx}-${point.cy}`}
          cx={point.cx}
          cy={point.cy}
          r={point.r}
          fill="currentColor"
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.6 }}
          animate={{ opacity: point.o, scale: 1 }}
          style={{ transformOrigin: `${point.cx}px ${point.cy}px` }}
          transition={{
            duration: reduceMotion ? 0 : duration.fast,
            delay: reduceMotion ? 0 : index * 0.05,
            ease: easeEmphasized,
          }}
        />
      ))}

      <motion.circle
        cx="212"
        cy="100"
        r="16"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.25"
        strokeOpacity="0.4"
        initial={reduceMotion ? undefined : { scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: "212px 100px" }}
        transition={{
          duration: reduceMotion ? 0 : duration.slow,
          delay: reduceMotion ? 0 : 0.95,
          ease: easeEmphasized,
        }}
      />
      <motion.circle
        cx="212"
        cy="100"
        r="6"
        fill="var(--brand)"
        initial={reduceMotion ? undefined : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ transformOrigin: "212px 100px" }}
        transition={{
          duration: reduceMotion ? 0 : duration.base,
          delay: reduceMotion ? 0 : 0.85,
          ease: easeEmphasized,
        }}
      />
    </svg>
  );
}
