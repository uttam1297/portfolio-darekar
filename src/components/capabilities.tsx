import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/section";

const caps = [
  {
    icon: "🔍",
    title: "Find the Real Problem",
    body: "I dig into data to find where users actually struggle not where stakeholders assume.",
  },
  {
    icon: "🗺️",
    title: "Structure the Solution",
    body: "User stories, acceptance criteria, scope boundaries. I make ambiguous problems buildable.",
  },
  {
    icon: "📊",
    title: "Measure What Matters",
    body: "I define success metrics with baselines and targets before building not after.",
  },
  {
    icon: "🤖",
    title: "AI as a Product Lever",
    body: "Shipped LLM workflows in production. Wrote PRDs for AI features grounded in real user problems.",
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" label="How I Think About Product">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {caps.map((c) => (
          <Card
            key={c.title}
            className="transition-all hover:border-indigo-500 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(99,102,241,0.2)] cursor-default"
          >
            <CardContent className="p-4">
              <div className="text-xl mb-2">{c.icon}</div>
              <div className="text-[0.88rem] font-bold mb-1">{c.title}</div>
              <p className="text-[0.78rem] text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
