"use client";

import { ArrowRight, ArrowUpRight, Code2, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Section } from "@/components/section";
import {
  projects,
  caseStudies,
  oneLiners,
  type CaseStudy,
} from "@/data/portfolio";
import { thesis } from "@/data/thesis";

function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <Card className="surface-card py-0">
      <CardContent className="flex h-full flex-col p-4">
        <Badge
          variant="outline"
          className="mb-2 h-auto w-fit rounded-md border-brand/20 px-2 py-1 text-[0.65rem] font-medium text-brand"
        >
          {cs.badge}
        </Badge>
        <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight">
          {cs.title}
        </h3>
        <dl className="mb-3 space-y-1 text-sm leading-6 text-muted-foreground">
          {[
            ["Problem", cs.problemShort],
            ["Approach", cs.approachShort],
          ].map(([label, text]) => (
            <div key={label}>
              <dt className="inline font-medium text-foreground/90">
                {label}:{" "}
              </dt>
              <dd className="inline">{text}</dd>
            </div>
          ))}
        </dl>
        <Dialog>
          <DialogTrigger className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded text-xs font-medium text-brand hover:text-brand/80">
            Read case study{" "}
            <ArrowRight aria-hidden="true" className="size-3.5" />
            <span className="sr-only">: {cs.title}</span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[620px]">
            <DialogHeader>
              <p className="eyebrow pr-10 text-brand">{cs.badge}</p>
              <DialogTitle className="pr-10 text-xl font-semibold leading-snug tracking-tight">
                {cs.title}
              </DialogTitle>
              <DialogDescription className="text-xs leading-6">
                {cs.note}
              </DialogDescription>
            </DialogHeader>
            <dl className="space-y-5 border-t border-border pt-5">
              {(
                [
                  ["Context", cs.context],
                  ["Problem", cs.problem],
                ] as const
              ).map(([label, text]) => (
                <div key={label}>
                  <dt className="eyebrow mb-1.5 text-brand">{label}</dt>
                  <dd className="text-sm leading-7 text-foreground/90">
                    {text}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow mb-1.5 text-brand">
                  Key decisions
                </dt>
                <dd>
                  <ul className="space-y-1.5 text-sm leading-7 text-foreground/90">
                    {cs.decisions.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span aria-hidden="true" className="text-brand">
                          •
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-brand">
                  Expected Impact
                </dt>
                <dd className="text-sm leading-7 text-foreground/90">
                  {cs.impact}
                </dd>
              </div>
            </dl>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

function ThesisCard() {
  return (
    <Card className="surface-card py-0">
      <CardContent className="flex h-full flex-col p-4">
        <Badge
          variant="outline"
          className="mb-2 h-auto w-fit rounded-md border-brand/20 px-2 py-1 text-[0.65rem] font-medium text-brand"
        >
          <GraduationCap aria-hidden="true" className="mr-1 size-3" />
          {thesis.type} · {thesis.status}
        </Badge>
        <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight">
          {thesis.shortTitle}
        </h3>
        <p className="mb-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {thesis.summary}
        </p>
        <Dialog>
          <DialogTrigger className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded text-xs font-medium text-brand hover:text-brand/80">
            Read about the thesis{" "}
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-[620px]">
            <DialogHeader>
              <p className="eyebrow pr-10 text-brand">
                {thesis.type} · {thesis.status}
              </p>
              <DialogTitle className="pr-10 text-xl font-semibold leading-snug tracking-tight">
                {thesis.title}
              </DialogTitle>
              <DialogDescription className="text-xs leading-6">
                {thesis.field}
              </DialogDescription>
            </DialogHeader>
            <dl className="space-y-5 border-t border-border pt-5">
              {(
                [
                  ["Summary", thesis.summary],
                  ["Problem", thesis.problem],
                  ["Research question", thesis.researchQuestion],
                  ["Core principle", thesis.corePrinciple],
                  ["Expected output", thesis.expectedOutput],
                ] as const
              ).map(([label, text]) => (
                <div key={label}>
                  <dt className="eyebrow mb-1.5 text-brand">{label}</dt>
                  <dd className="text-sm leading-7 text-foreground/90">
                    {text}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow mb-1.5 text-brand">
                  Methodology
                </dt>
                <dd className="text-sm leading-7 text-foreground/90">
                  {thesis.methodology.join(" · ")}
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1.5 text-brand">
                  Framework stages
                </dt>
                <dd className="text-sm leading-7 text-foreground/90">
                  {thesis.frameworkStages.join(" → ")}
                </dd>
              </div>
            </dl>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      label="Selected work"
      description="Problems I’ve explored, and things I’ve built."
    >
      <h3 className="eyebrow mb-3 text-brand">Case studies</h3>
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.title} cs={cs} />
        ))}
        <ThesisCard />
      </div>
      <h3 className="eyebrow mb-3 text-brand">Projects</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="surface-card py-0">
            <CardContent className="flex h-full flex-col p-4">
              <div className="mb-2 flex items-center justify-between gap-3">
                <Badge
                  variant="outline"
                  className="h-auto rounded-md border-brand/20 px-2 py-1 text-[0.65rem] font-medium text-brand"
                >
                  {p.badge}
                </Badge>
                {p.active ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-700">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-emerald-600"
                    />
                    Active
                  </span>
                ) : (
                  <Code2
                    aria-hidden="true"
                    className="size-4 text-muted-foreground"
                  />
                )}
              </div>
              <h3 className="mb-1.5 text-base font-semibold leading-snug tracking-tight">
                {p.title}
              </h3>
              <p className="mb-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {p.description}
              </p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded text-xs font-medium text-brand hover:text-brand/80"
              >
                {p.linkText.replace(" →", "")}{" "}
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      {oneLiners.length > 0 && (
        <div className="mt-5 space-y-1.5 border-t border-border pt-4">
          {oneLiners.map((o) => (
            <p
              key={o.title}
              className="text-xs leading-6 text-muted-foreground"
            >
              <span className="font-medium text-foreground/90">
                Also: {o.title}
              </span>{" "}
              — {o.note}
            </p>
          ))}
        </div>
      )}
    </Section>
  );
}
