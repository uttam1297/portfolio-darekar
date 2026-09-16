import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, MapPin, Quote } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { kpis } from "@/data/profile";
import { testimonials } from "@/data/testimonials";
import { KpiCounter } from "@/components/kpi-counter";
import { DataFlowGraphic } from "@/components/data-flow-graphic";

const peerQuotes = testimonials.filter((t) => !t.roleId);

export function Sidebar() {
  return (
    <aside
      className="profile-sidebar lg:grid lg:grid-cols-[1fr_320px] lg:items-center lg:gap-16"
      aria-label="Profile"
    >
      <div className="min-w-0">
        <div className="mb-4">
          <div className="rounded-full border border-border p-1 w-fit">
            <Image
              src="/profile.png"
              alt="Uttam Darekar"
              width={72}
              height={72}
              className="size-[72px] rounded-full object-cover"
              priority
            />
          </div>
        </div>
        <p className="eyebrow mb-2 text-brand">
          Product &amp; Data Analyst, AI Solutions
        </p>
        <h1 className="font-heading text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[3.2rem]">
          Uttam Darekar<span className="text-brand">.</span>
        </h1>
        <p className="mb-3 mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin aria-hidden="true" className="size-3.5" />
          Berlin, Germany
        </p>
        <p className="max-w-md text-[0.94rem] leading-7 text-muted-foreground">
          I find patterns in customer data, build dashboards that get used,
          and ship AI tools on the side.
        </p>
        <div className="mb-6 mt-4 flex flex-wrap gap-2">
          <a
            href="#connect"
            className={buttonVariants({ className: "min-h-11 px-4" })}
          >
            Get in touch <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className={buttonVariants({
              variant: "outline",
              className: "min-h-11 px-4",
            })}
          >
            View work <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
        <DataFlowGraphic className="mb-6 h-auto w-full max-w-[220px] text-muted-foreground/70 lg:hidden" />
        <p className="mb-4 flex flex-wrap gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
          {kpis.map((k, i) => (
            <span key={k.label} className="whitespace-nowrap">
              <span className="font-medium text-foreground/90">
                <KpiCounter value={k.num} />
              </span>{" "}
              {k.label}
              {i < kpis.length - 1 && <span className="ml-1.5">·</span>}
            </span>
          ))}
        </p>
        <div className="grid gap-x-8 gap-y-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground sm:grid-cols-2">
          <p>
            <span className="font-medium text-foreground/90">
              MBA &amp; Engineering
            </span>{" "}
            — HTW Berlin, expected Sep. 2026
          </p>
          <p>
            <span className="font-medium text-foreground/90">
              B.Eng. Electronics &amp; Comm.
            </span>{" "}
            — Acropolis Technical Campus, 2016–2020
          </p>
        </div>
        {peerQuotes.length > 0 && (
          <div className="mt-4 grid gap-x-8 gap-y-2 border-t border-border pt-4 sm:grid-cols-2">
            {peerQuotes.map((t) => (
              <p
                key={t.name}
                className="flex gap-1.5 text-xs italic leading-6 text-muted-foreground"
              >
                <Quote
                  aria-hidden="true"
                  className="mt-0.5 size-3 shrink-0 text-brand/70"
                />
                <span>
                  “{t.quote}”{" "}
                  <span className="not-italic">
                    — {t.name}, {t.meta}
                  </span>
                </span>
              </p>
            ))}
          </div>
        )}
      </div>
      <DataFlowGraphic className="hidden h-auto w-full text-muted-foreground/70 lg:block" />
    </aside>
  );
}
