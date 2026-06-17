"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Section } from "@/components/section";

interface CaseStudy {
  badge: string;
  title: string;
  contextShort: string;
  problemShort: string;
  approachShort: string;
  context: string;
  problem: string;
  approach: string;
  impact: string;
  note: string;
}

const projects = [
  {
    badge: "AI Writing Tool",
    title: "Humanly — AI Tone Checker",
    description:
      "Shipped on Vercel using Gemini API, serving 27 active users. Built a validation layer that catches common LLM output patterns and keeps the tone human.",
    link: "https://humanly-tone.vercel.app/",
    linkText: "Try Humanly →",
    active: true,
  },
  {
    badge: "Capstone",
    title: "KiSure — Anti-Locking System",
    description:
      "Led end-to-end product lifecycle. User research, UAT, 5-year GTM strategy. Professor-recommended.",
    link: "https://drive.google.com/drive/folders/1nPMwiAhx39AG0KmSJdHrSjrY9Ksczxr3",
    linkText: "View Project →",
  },
  {
    badge: "Data Analytics",
    title: "Customer Cohort Analysis",
    description:
      "Interactive cohort analysis dashboard for visualising customer retention and behaviour patterns over time.",
    link: "https://customer-cohort-analysis.vercel.app/",
    linkText: "View Dashboard →",
  },
];

const caseStudies: CaseStudy[] = [
  {
    badge: "Full PRD · AI Feature",
    title: "DB App — AI Disruption Assistant",
    contextShort:
      "Passengers with cancelled trains have no fast way to find alternatives.",
    problemShort: "Researched the problem, defined the user, scoped v1.",
    approachShort: "Full PRD with persona, scope, metrics, trade-offs, risks.",
    context:
      "Deutsche Bahn passengers face cancellations with no fast alternative route discovery.",
    problem:
      "No AI-assisted disruption recovery in the DB app — passengers are left manually searching.",
    approach:
      "Wrote a complete PRD: user persona, v1 scope, success metrics, trade-offs, and risk analysis.",
    impact:
      "Full PM artefact ready for engineering handoff. Persona · Scope · Metrics · Trade-offs · Risks.",
    note: "Full PRD showcasing end-to-end product thinking for an AI feature.",
  },
  {
    badge: "E-commerce",
    title: "Increasing AOV with Recommendations",
    contextShort: "Fashion brand — most customers buy once then churn.",
    problemShort: "Grow AOV without discounts.",
    approachShort:
      "Ship thin-slice recommendation MVP in 3–4 weeks, A/B test.",
    context:
      "Mid-size fashion brand where most customers buy a single item then churn, with no recommendation engine.",
    problem:
      "Increase average order value and repeat purchase rate without relying on discounts that erode margins.",
    approach:
      "Ship a thin-slice in-house MVP using co-occurrence rules in 3–4 weeks. A/B test against a no-recommendation control group.",
    impact:
      "Target +10–20% AOV uplift and +10–15% repeat purchase rate over 3 months. Secondary: own the data pipeline for future personalisation.",
    note: "Scenario-based case study showing how I think about e-commerce product strategy.",
  },
  {
    badge: "Quick Commerce",
    title: "Promise Time vs Profitability",
    contextShort:
      "Player promising 10–15 min grocery delivery in a large metro.",
    problemShort:
      "Aggressive promises hurt profitability when delivery is late.",
    approachShort:
      "Dynamic promise times per micro-zone using historical data.",
    context:
      "Quick commerce player promising 10–15 min grocery delivery. Refunds and SLA misses are rising as volume scales.",
    problem:
      "Flat promise times drive conversion but hurt profitability and trust when late deliveries spike during peak hours.",
    approach:
      "Use 6 months of historical data to compute dynamic promise times per micro-zone and time-of-day. A/B test dynamic vs static 15-min promise.",
    impact:
      "Higher on-time delivery, fewer refunds, clearer levers for dark store placement and rider allocation.",
    note: "Scenario-based case study showing how I balance customer experience and unit economics.",
  },
  {
    badge: "Energy Tech",
    title: "Unifying Energy Data for Decisions",
    contextShort:
      "Renewable energy developer with fragmented SCADA/market data.",
    problemShort:
      "Leadership lacks a unified portfolio-level view of performance.",
    approachShort:
      "Cloud-native unified data platform with a common data model.",
    context:
      "Renewable energy developer with solar & wind assets across regions. Data lives in multiple SCADA systems and market feeds with no unified layer.",
    problem:
      "Leadership lacks a portfolio-level view of performance and risk. Manual reporting is inconsistent and slow.",
    approach:
      "Design a cloud-native unified data platform with a minimal common data model. Deliver dashboards covering production vs forecast, availability, and curtailment.",
    impact:
      "Faster portfolio decisions, reduced manual reporting, and better regulatory compliance through a single source of truth.",
    note: "Scenario-based case study showing how I think about energy data products.",
  },
];

function CaseStudyCard({
  cs,
  onOpen,
}: {
  cs: CaseStudy;
  onOpen: () => void;
}) {
  return (
    <Card className="transition-all hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-lg">
      <CardContent className="p-4">
        <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 text-[0.63rem] font-bold uppercase tracking-wider mb-2">
          {cs.badge}
        </Badge>
        <h3 className="text-[0.88rem] font-bold mb-1.5">{cs.title}</h3>
        <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
          <strong>Context:</strong> {cs.contextShort}
        </p>
        <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
          <strong>Problem:</strong> {cs.problemShort}
        </p>
        <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
          <strong>Approach:</strong> {cs.approachShort}
        </p>
        <button
          onClick={onOpen}
          className="text-indigo-400 text-[0.75rem] font-semibold underline mt-2 hover:opacity-75 transition-opacity"
        >
          View full case study →
        </button>
      </CardContent>
    </Card>
  );
}

export function Portfolio() {
  const [tab, setTab] = useState<"projects" | "case-studies">("projects");
  const [openCS, setOpenCS] = useState<CaseStudy | null>(null);

  return (
    <Section id="portfolio" label="Portfolio">
      <div className="flex gap-1 mb-4">
        {(["projects", "case-studies"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-[0.78rem] font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
              tab === t
                ? "bg-indigo-500 border-indigo-500 text-white"
                : "border-border text-muted-foreground hover:border-indigo-500/40 hover:text-foreground"
            }`}
          >
            {t === "projects" ? "Projects" : "Case Studies"}
          </button>
        ))}
      </div>

      {tab === "projects" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((p) => (
            <Card
              key={p.title}
              className="transition-all hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardContent className="p-4">
                <Badge className="bg-indigo-500/10 border-indigo-500/20 text-indigo-400 text-[0.63rem] font-bold uppercase tracking-wider mb-2">
                  {p.badge}
                </Badge>
                <h3 className="text-[0.88rem] font-bold mb-1.5">{p.title}</h3>
                <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                {p.active && (
                  <div className="flex items-center gap-1.5 text-[0.72rem] text-green-500 font-semibold mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Active
                  </div>
                )}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1 text-[0.75rem] font-semibold text-indigo-400 mt-2 hover:underline"
                >
                  {p.linkText}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {tab === "case-studies" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.title}
              cs={cs}
              onOpen={() => setOpenCS(cs)}
            />
          ))}
        </div>
      )}

      <Dialog open={!!openCS} onOpenChange={() => setOpenCS(null)}>
        <DialogContent className="bg-card border-border max-w-[540px]">
          <DialogHeader>
            <DialogTitle className="text-base font-bold pr-6">
              {openCS?.title}
            </DialogTitle>
          </DialogHeader>
          {openCS && (
            <dl className="space-y-3.5 mt-2">
              {(
                [
                  ["Context", openCS.context],
                  ["Problem", openCS.problem],
                  ["Approach", openCS.approach],
                  ["Expected Impact", openCS.impact],
                ] as const
              ).map(([label, text]) => (
                <div key={label}>
                  <dt className="text-[0.65rem] uppercase tracking-wider text-indigo-400 font-bold mb-0.5">
                    {label}
                  </dt>
                  <dd className="text-[0.85rem] leading-relaxed">{text}</dd>
                </div>
              ))}
            </dl>
          )}
          {openCS?.note && (
            <p className="mt-4 text-[0.72rem] text-muted-foreground italic">
              {openCS.note}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
