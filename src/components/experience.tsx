import { ArrowDownRight, ChevronDown, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { jobs, type Job } from "@/data/experience";
import { testimonials } from "@/data/testimonials";

function Achievements({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2">
      {bullets.map((bullet) => (
        <li
          key={bullet}
          className="flex gap-2.5 text-sm leading-6 text-muted-foreground"
        >
          <ArrowDownRight
            aria-hidden="true"
            className="mt-1 size-3.5 shrink-0 text-brand/70"
          />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function JobCard({ job }: { job: Job }) {
  const visibleBullets = job.bullets.slice(0, 2);
  const restBullets = [
    ...job.bullets.slice(2),
    ...(job.additionalBullets ?? []),
  ];
  const quotes = testimonials.filter((t) => t.roleId === job.id);

  return (
    <article id={job.id} aria-labelledby={`${job.id}-title`} className="scroll-mt-20">
      <Card
        className={`surface-card h-full py-0 ${job.current ? "border-brand/20" : ""}`}
      >
        <CardContent className="flex h-full flex-col p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-medium tracking-wide text-muted-foreground">
              {job.date}
            </p>
            {job.current && (
              <span className="flex items-center gap-1.5 text-[0.65rem] font-semibold uppercase tracking-widest text-brand">
                <span className="size-1.5 rounded-full bg-brand" />
                Current
              </span>
            )}
          </div>
          <h3
            id={`${job.id}-title`}
            className="text-base font-semibold tracking-tight"
          >
            {job.company}
          </h3>
          <p className="mt-0.5 text-sm text-foreground/90">{job.role}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {job.location}
          </p>
          {job.client && (
            <p className="mt-2 text-xs font-medium text-brand">
              {job.client}
            </p>
          )}
          {job.impact && (
            <p className="my-2.5 border-l-2 border-brand/50 pl-3 text-sm font-medium leading-6">
              {job.impact}
            </p>
          )}
          {visibleBullets.length > 0 && (
            <Achievements bullets={visibleBullets} />
          )}
          {restBullets.length > 0 && (
            <details className="group mt-1 border-t border-border pt-1">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 rounded text-xs font-medium text-brand [&::-webkit-details-marker]:hidden">
                Show more
                <ChevronDown
                  aria-hidden="true"
                  className="size-4 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="pb-1 pt-2">
                <Achievements bullets={restBullets} />
              </div>
            </details>
          )}
          {job.tags.length > 0 && (
            <div
              className="mt-3 flex flex-wrap gap-1.5 border-t border-border pt-3"
              aria-label="Tools used"
            >
              {job.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="h-auto max-w-full whitespace-normal rounded-md px-2 py-1 text-[0.65rem] font-normal text-muted-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          {quotes.map((t) => (
            <blockquote
              key={t.name}
              className="mt-3 flex gap-2 border-t border-border pt-3 text-xs italic leading-6 text-muted-foreground"
            >
              <Quote
                aria-hidden="true"
                className="mt-0.5 size-3.5 shrink-0 text-brand/70"
              />
              <p>
                “{t.quote}” <span className="not-italic">— {t.name}</span>
              </p>
            </blockquote>
          ))}
        </CardContent>
      </Card>
    </article>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      description="Customer data. Clear decisions. Measurable impact."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </Section>
  );
}
