"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

interface Job {
  company: string;
  date: string;
  role: string;
  impact: string;
  bullets?: string[];
  tags: string[];
}

const recent: Job[] = [
  {
    company: "Heartbeat AI (1KOMMA5°)",
    date: "Jul 2025 – Present",
    role: "Product Analyst (Working Student) · Berlin",
    impact:
      "Defined growth KPIs, built customer dashboards in SQL and Looker, evaluated AI agent accuracy across 4 European markets.",
    bullets: [
      "Defined 4 KPIs for the growth app. German referral data led leadership to expand the program into Sweden.",
      "Built the Active Paying Customers dashboard covering 22K German sites against a €10M ARR target.",
      "Cut customer data error rates from 35% to 18% across three European markets in five months.",
    ],
    tags: ["SQL", "Looker", "KPI Development", "Data Quality", "Amplitude"],
  },
  {
    company: "Meyer Werft (Disney Cruise)",
    date: "Feb – Mar 2025",
    role: "Project Management Intern · Wismar",
    impact:
      "Reduced decision cycle time by 20% across 20+ engineering & logistics teams.",
    bullets: [
      "Managed milestone tracking and structured reporting during a complex delivery phase.",
      "Proactively surfaced blockers before they became delays.",
    ],
    tags: ["Stakeholder Mgmt", "Delivery", "Cross-functional"],
  },
];

const earlier: Job[] = [
  {
    company: "Infosys · ULTA Beauty",
    date: "Nov 2021 – Sep 2024",
    role: "Product Analyst · Bengaluru",
    impact:
      "Client-engineering interface for a loyalty platform serving 40M+ customers — from requirements to release.",
    bullets: [
      "Translated customer pain points and behaviour data into product recommendations and sprint specs.",
      "Coordinated engineering and QA owned release quality and defect resolution.",
      "Automated reporting, eliminating 35% of manual analyst work.",
    ],
    tags: ["Requirements", "UAT", "Agile", "Customer Insights"],
  },
  {
    company: "Abacus Consultancy",
    date: "Oct 2020 – Sep 2021",
    role: "System Engineer · Indore",
    impact:
      "Translated client requirements into technical docs; reduced response time by 20%.",
    tags: [],
  },
];

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="transition-colors hover:border-indigo-500/40 hover:shadow-[0_2px_20px_rgba(99,102,241,0.08)]">
      <CardContent className="p-4">
        <div className="flex justify-between items-start gap-2 flex-wrap mb-0.5">
          <span className="text-[0.92rem] font-bold">{job.company}</span>
          <span className="text-[0.7rem] text-indigo-400 font-semibold uppercase tracking-wide whitespace-nowrap">
            {job.date}
          </span>
        </div>
        <p className="text-[0.78rem] text-muted-foreground mb-2">{job.role}</p>
        <p className="text-[0.82rem] font-semibold leading-relaxed mb-2.5">
          {job.impact}
        </p>
        {job.bullets && (
          <ul className="space-y-1 mb-2.5">
            {job.bullets.map((b, i) => (
              <li
                key={i}
                className="text-[0.78rem] text-muted-foreground leading-relaxed pl-3.5 relative before:content-[''] before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-indigo-500"
              >
                {b}
              </li>
            ))}
          </ul>
        )}
        {job.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {job.tags.map((t) => (
              <Badge
                key={t}
                className="bg-indigo-500/10 border-indigo-500/20 text-indigo-300 text-[0.65rem] font-semibold uppercase tracking-wide"
              >
                {t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function Experience() {
  const [showEarlier, setShowEarlier] = useState(false);

  return (
    <Section id="experience" label="Experience" first>
      <div className="flex flex-col gap-3">
        {recent.map((j) => (
          <JobCard key={j.company} job={j} />
        ))}

        <button
          onClick={() => setShowEarlier(!showEarlier)}
          className="mt-1 py-2 px-4 text-[0.78rem] font-semibold text-indigo-400 bg-card border border-dashed border-border rounded-lg w-full transition-colors hover:border-indigo-500 hover:bg-indigo-500/5"
        >
          {showEarlier
            ? "Hide earlier experience ↑"
            : "Show earlier experience ↓"}
        </button>

        {showEarlier && (
          <div className="flex flex-col gap-3 mt-1">
            {earlier.map((j) => (
              <JobCard key={j.company} job={j} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
