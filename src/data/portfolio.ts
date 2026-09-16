export interface Project {
  badge: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  active?: boolean;
}

export interface CaseStudy {
  badge: string;
  title: string;
  contextShort: string;
  problemShort: string;
  approachShort: string;
  context: string;
  problem: string;
  decisions: string[];
  impact: string;
  note: string;
}

export const projects: Project[] = [
  {
    badge: "AI Writing Tool",
    title: "Humanly — AI Tone Checker",
    description:
      "Shipped on Vercel using Gemini API, serving 27 active users. Built a validation layer that catches common LLM output patterns and keeps the tone human. It detects inflated symbolism, passive voice and filler phrases based on Wikipedia’s Signs of AI Writing guide.",
    link: "https://humanly-tone.vercel.app/",
    linkText: "Try Humanly →",
    active: true,
  },
  {
    badge: "MBA Capstone",
    title: "KiSure — Anti-Locking System",
    description:
      "Validated a €500–600 market pain point for German rental tenants through 30 interviews and 104 surveys. Built a 5-year financial model and 5-tier pricing strategy. Professor-recommended.",
    link: "https://drive.google.com/drive/folders/1nPMwiAhx39AG0KmSJdHrSjrY9Ksczxr3",
    linkText: "View Project →",
  },
  {
    badge: "Data Analytics",
    title: "Customer Cohort Analysis",
    description:
      "Segmented subscription customers by value, usage and churn risk using Python, SQL and DuckDB-WASM. Built retention curves and value-tier breakdowns showing where and when customers drop off.",
    link: "https://customer-cohort-analysis.vercel.app/",
    linkText: "View Dashboard →",
  },
];

export interface OneLiner {
  title: string;
  note: string;
}

export const oneLiners: OneLiner[] = [
  {
    title: "DB App — AI Disruption Assistant",
    note: "Full PRD for an AI disruption-recovery feature: persona, v1 scope, success metrics, trade-offs and risk analysis.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    badge: "E-commerce",
    title: "Increasing AOV with Recommendations",
    contextShort: "Fashion brand — most customers buy once then churn.",
    problemShort: "Grow AOV without discounts.",
    approachShort: "Ship thin-slice recommendation MVP in 3–4 weeks, A/B test.",
    context:
      "Mid-size fashion brand where most customers buy a single item then churn, with no recommendation engine.",
    problem:
      "Increase average order value and repeat purchase rate without relying on discounts that erode margins.",
    decisions: [
      "Ship a thin-slice in-house MVP using co-occurrence rules within 3–4 weeks",
      "A/B test against a no-recommendation control group rather than rolling out directly",
    ],
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
    decisions: [
      "Compute dynamic promise times per micro-zone and time-of-day using 6 months of historical data",
      "A/B test dynamic vs static 15-min promise before full rollout",
    ],
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
    decisions: [
      "Design a cloud-native unified data platform with a minimal common data model",
      "Deliver dashboards covering production vs forecast, availability, and curtailment",
    ],
    impact:
      "Faster portfolio decisions, reduced manual reporting, and better regulatory compliance through a single source of truth.",
    note: "Scenario-based case study showing how I think about energy data products.",
  },
];
