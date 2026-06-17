"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";

const testimonials = [
  {
    quote:
      "Uttam is always the first to step up — he anticipates needs and acts before being asked. That's rare.",
    name: "Ann Merin Varghese",
    meta: "IT Operations Engineer · Infosys",
  },
  {
    quote:
      "Analytical ability and commitment to excellence. His research skills and critical thinking were particularly impressive.",
    name: "Maitri Mishra",
    meta: "Academic Peer",
  },
  {
    quote:
      "Uttam sees the bigger picture and translates technical insights into strategic decisions — passion and precision together.",
    name: "Anshdha Sharma",
    meta: "Werkstudent @ CARIAD · MBA Peer",
  },
  {
    quote:
      "He handles conflicting priorities in high-pressure situations without losing his cool. I recommend him without hesitation.",
    name: "Mohammad Shadman",
    meta: "Senior System Engineer · Infosys",
  },
];

export function Testimonials() {
  const [cur, setCur] = useState(0);

  const next = useCallback(
    () => setCur((c) => (c + 1) % testimonials.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[cur];

  return (
    <Section id="testimonials" label="What People Say">
      <Card>
        <CardContent className="p-5">
          <p className="text-[0.85rem] text-muted-foreground leading-relaxed italic mb-2.5">
            &ldquo;{t.quote}&rdquo;
          </p>
          <p className="text-[0.82rem] font-bold">{t.name}</p>
          <p className="text-[0.72rem] text-muted-foreground">{t.meta}</p>
        </CardContent>
      </Card>
      <div className="flex gap-1.5 mt-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCur(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === cur
                ? "bg-amber-500 scale-150"
                : "bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </Section>
  );
}
