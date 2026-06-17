import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";

const groups = [
  {
    label: "Product",
    tools: ["Jira", "Linear", "Notion", "Figma", "Miro"],
  },
  {
    label: "Data & Analytics",
    tools: ["SQL", "BigQuery", "SQLMesh", "Power BI", "Looker", "Datadog"],
  },
  {
    label: "AI & Build",
    tools: ["Claude Code", "Cursor", "LLM Workflows", "Python", "GitHub"],
  },
];

export function Tools() {
  return (
    <Section id="tools" label="Tools & Stack">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="text-[0.65rem] font-bold uppercase tracking-widest text-indigo-400 mb-2.5 border-b border-border pb-1.5">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {g.tools.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="text-[0.72rem] text-muted-foreground font-normal hover:border-indigo-500 hover:text-foreground transition-colors"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
