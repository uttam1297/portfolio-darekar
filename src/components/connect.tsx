import { ArrowUpRight, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/section";

export function Connect() {
  return (
    <Section id="connect" label="Connect" compact>
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border px-5 py-4">
        <p className="text-sm text-foreground/90">
          Looking for Product &amp; Data Analyst roles in Germany.
        </p>
        <div className="flex flex-wrap gap-2">
          <a
            href="mailto:12uttamdarekar@gmail.com"
            className={buttonVariants({ className: "min-h-11 px-4" })}
          >
            <Mail aria-hidden="true" />
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-darekar/"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "min-h-11 px-4",
            })}
          >
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Uttam Darekar · Berlin</p>
        <a
          href="#top"
          className="inline-flex min-h-11 items-center gap-2 hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </Section>
  );
}
