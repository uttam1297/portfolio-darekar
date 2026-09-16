export interface Job {
  id: string;
  company: string;
  date: string;
  role: string;
  location: string;
  current?: boolean;
  client?: string;
  impact?: string;
  bullets: string[];
  additionalBullets?: string[];
  tags: string[];
}

// Verified content supplied by Uttam. Preserve the complete achievement pool.
// Primary bullets are visible by default; supporting work uses native details.
export const jobs: Job[] = [
  {
    id: "heartbeat",
    company: "Heartbeat AI (1KOMMA5°)",
    date: "Jul 2025 – Present",
    role: "Product Analyst (Working Student)",
    location: "Berlin",
    current: true,
    impact:
      "Customer analytics and AI workflows across 4 European markets: Germany, Netherlands, Denmark, Sweden.",
    bullets: [
      "Found systematic errors corrupting 120K+ customer records. Built BigQuery validation pipelines to catch anomalies automatically, restoring dashboard accuracy for roadmap and revenue decisions. Markets covered: Germany, Netherlands, Denmark, Sweden.",
      "Reduced data error rate from 35% to 18% across three markets in five months by adding validation checks across four systems (app, CRM, payment, customer care).",
      "Designed a Looker subscription dashboard for 22K+ accounts tracking active rate, booked pipeline and booking-to-activation time against a €10M ARR target. Adopted weekly by leadership for budget decisions.",
      "Evaluated an internal AI agent using a Python faithfulness scoring framework (0.8 threshold, 40+ daily users) against a golden dataset. Findings drove one production feature release.",
      "Shipped an LLM-assisted incident workflow that automated summaries, ownership attribution and action points during live incidents. Replaced manual documentation entirely.",
    ],
    additionalBullets: [
      "Architected 20+ SQLMesh models across raw, mart and transform layers, projecting data quality metrics into Datadog. Four teams adopted it as the shared source of truth.",
      "Surfaced a 3% subscriber drop-off at onboarding through Amplitude cohort analysis. Challenged the assumption that the flow was working. The product team redesigned the subscription entry point.",
      "Built Python churn models on 22K+ user behavioural records. Improved high-value segment prediction accuracy by 15%, informing proactive retention strategy for the CRM team.",
      "Diagnosed AI agent tool overuse and redesigned skill specifications with event-triggered syncing. Cut internal response time from 25 seconds to under 10 seconds.",
    ],
    tags: [
      "BigQuery",
      "SQL",
      "SQLMesh",
      "Datadog",
      "Looker",
      "Amplitude",
      "Python",
      "Notion",
      "Jira",
      "Linear",
    ],
  },
  {
    id: "meyer-werft",
    company: "Meyer Werft (Disney Cruise)",
    date: "Feb – Jun 2025",
    role: "Project Management Intern",
    location: "Wismar",
    impact:
      "Reduced decision cycle time by 20% across 12 engineering and logistics teams.",
    bullets: [
      "Managed milestone tracking and structured reporting during a complex delivery phase.",
      "Proactively surfaced blockers before they became delays.",
    ],
    tags: ["Stakeholder Mgmt", "Delivery", "Cross-functional"],
  },
  {
    id: "infosys",
    company: "Infosys Ltd",
    date: "Nov 2021 – Sep 2024",
    role: "Technology Analyst",
    location: "Bengaluru, India",
    client: "Client: ULTA Beauty · Retail · 40 million customers",
    impact: "Automated reporting, eliminating 35% of manual analyst work.",
    bullets: [
      "Lifted redemption rate 15% on lapsed customers by rebuilding the segmentation model from recency-only to value-based targeting using spend tiers and purchase frequency.",
      "Caught an $80K audience targeting error two days before Black Friday launch by cross-validating conversion rates across segments. The check became a standard pre-launch quality gate.",
      "Cut a 4-hour weekly reporting cycle to 30 minutes for 8 stakeholders by automating KPI delivery in Power BI (DAX, Power Query) across 5 source systems.",
      "Built Dynatrace pipeline monitoring dashboards for peak retail season. Two teams used them to detect and resolve data quality issues in real time.",
    ],
    additionalBullets: [
      "Analysed purchase patterns, loyalty tier behaviour and point redemption rates across a 40 million customer base. Delivered campaign insights to the marketing technology team ahead of peak seasons.",
      "Led a 3-person Agile team during peak season. Converted high-volume customer issue patterns into user stories, acceptance criteria and structured product recommendations.",
    ],
    tags: [
      "Power BI (DAX, Power Query)",
      "Dynatrace",
      "SQL",
      "Python",
      "Jira",
      "Confluence",
      "Agile/Scrum",
    ],
  },
  {
    id: "abacus",
    company: "Abacus Consultancy Services",
    date: "Oct 2020 – Oct 2021",
    role: "System Engineer",
    location: "Indore, India",
    bullets: [],
    tags: [],
  },
];
