import { buttonVariants } from "@/components/ui/button";
import { Section } from "@/components/section";

export function Connect() {
  return (
    <Section id="connect" label="Connect">
      <div className="bg-gradient-to-br from-amber-500/15 to-amber-500/5 border border-amber-500/25 rounded-lg p-6">
        <h3 className="text-base font-bold mb-1.5">
          Looking for Data Analyst roles in Germany.
        </h3>
        <p className="text-[0.82rem] text-muted-foreground leading-relaxed mb-4">
          If you need someone who digs into customer data and makes it useful for
          decisions, let&apos;s talk.
        </p>
        <div className="flex gap-2.5 flex-wrap">
          <a
            href="mailto:12uttamdarekar@gmail.com"
            className={buttonVariants({ size: "sm" })}
          >
            ✉ Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-darekar/"
            target="_blank"
            rel="noopener"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </Section>
  );
}
