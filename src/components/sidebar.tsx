import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

const kpis = [
  { num: "4", label: "European Markets" },
  { num: "4+", label: "Years Exp." },
  { num: "40M+", label: "Customers Analysed" },
  { num: "35%", label: "Work Eliminated" },
];

const certs = [
  "IBM AI Product Manager",
  "Google BI",
  "Google Data Analytics",
  "Agile Product Dev.",
  "PM Foundation",
  "AI Evaluations",
];

export function Sidebar() {
  return (
    <aside className="md:sticky md:top-[calc(52px+1.5rem)]">
      <div className="w-[88px] h-[88px] rounded-full p-[2.5px] bg-gradient-to-br from-amber-500 to-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.2)] mb-4">
        <Image
          src="/profile.png"
          alt="Uttam"
          width={88}
          height={88}
          className="rounded-full object-cover border-[3px] border-[#0d1117]"
          priority
        />
      </div>

      <h1 className="text-xl font-extrabold tracking-tight mb-0.5">
        Uttam Darekar
      </h1>
      <p className="text-[0.8rem] text-muted-foreground mb-0.5">
        Data Analyst · Energy &amp; B2C
      </p>
      <p className="text-[0.78rem] text-muted-foreground mb-4">
        📍 Berlin, Germany
      </p>

      <p className="text-[0.82rem] text-muted-foreground leading-relaxed mb-4 border-l-2 border-amber-500 pl-3">
        I find patterns in customer data, build dashboards that get used, and
        ship AI tools on the side.
      </p>

      <div className="flex gap-2 mb-5">
        <a href="#connect" className={buttonVariants({ size: "sm" })}>
          Get in Touch
        </a>
        <a
          href="#portfolio"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          View Work →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-5">
        {kpis.map((k) => (
          <div
            key={k.label}
            className="bg-card border border-border rounded-lg px-3 py-2.5 transition-colors hover:border-amber-500"
          >
            <div className="text-xl font-extrabold text-green-500">
              {k.num}
            </div>
            <div className="text-[0.63rem] text-muted-foreground font-medium uppercase tracking-wide">
              {k.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 mb-6">
        <a
          href="mailto:12uttamdarekar@gmail.com"
          className="flex items-center gap-2 text-[0.8rem] text-muted-foreground px-2.5 py-1.5 rounded-lg transition-colors hover:text-foreground hover:bg-card"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          12uttamdarekar@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/uttam-darekar/"
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 text-[0.8rem] text-muted-foreground px-2.5 py-1.5 rounded-lg transition-colors hover:text-foreground hover:bg-card"
        >
          <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 10.268h-3v-4.5c0-1.074-.021-2.455-1.496-2.455-1.498 0-1.727 1.17-1.727 2.378v4.577h-3v-9h2.881v1.233h.041c.401-.762 1.379-1.566 2.839-1.566 3.036 0 3.595 2 3.595 4.6v4.733z"/></svg>
          LinkedIn
        </a>
      </div>

      <div className="mb-6">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-amber-400 mb-2.5">
          Education
        </p>
        <div className="mb-2.5">
          <div className="text-[0.8rem] font-semibold">
            MBA &amp; Engineering
          </div>
          <div className="text-[0.75rem] text-muted-foreground">
            HTW Berlin
          </div>
          <div className="text-[0.7rem] text-muted-foreground">Jun 2026</div>
        </div>
        <div>
          <div className="text-[0.8rem] font-semibold">
            B.Eng. Electronics &amp; Comm.
          </div>
          <div className="text-[0.75rem] text-muted-foreground">
            Acropolis Technical Campus
          </div>
          <div className="text-[0.7rem] text-muted-foreground">
            2016 – 2020
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-[0.65rem] font-bold uppercase tracking-widest text-amber-400 mb-2">
          Certifications
        </p>
        <div className="flex flex-wrap gap-1.5">
          {certs.map((c) => (
            <Badge
              key={c}
              variant="outline"
              className="text-[0.7rem] text-muted-foreground font-normal hover:border-amber-500 hover:text-foreground transition-colors"
            >
              {c}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
}
