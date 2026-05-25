export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: string[];
  impact?: string[];
  solutions?: string[];
  type: "current" | "previous";
}

export const experiences: ExperienceItem[] = [
  {
    id: "ey",
    company: "Ernst & Young LLP",
    role: "Manager – Finance Automation & Business Analysis",
    period: "2022 – Present",
    location: "India",
    type: "current",
    responsibilities: [
      "Led Quick Automation team delivering enterprise finance automation solutions",
      "End-to-end business analysis for TDS automation programs",
      "Built analytics solutions using Alteryx & Power BI",
      "Designed scalable automation frameworks and rule engines",
      "Process analysis, solution design & UX workflow design",
      "Pilot testing & QA ownership across automation releases",
      "Cross-functional collaboration with technology, tax & operations teams",
    ],
    impact: [
      "90% reduction in manual effort",
      "Timeline reduction from 10 days to 1 day",
      "Scalable enterprise integrations",
      "High-volume processing: 2Cr+ records/hour",
    ],
    solutions: [
      "Rule Book Framework",
      "Auto Rule Creation Engine",
      "TDS Mismatch Analysis Engine",
      "Vendor Analytics Model",
      "Auto-Action Decision Engine",
      "Power BI Compliance Dashboard",
    ],
  },
  {
    id: "mr-sharma",
    company: "M R Sharma & Co.",
    role: "Assistant Manager → Article Assistant",
    period: "2018 – 2022",
    location: "Mumbai, India",
    type: "previous",
    responsibilities: [
      "Statutory audits for diverse client portfolios",
      "GST compliance & return filing",
      "TDS compliance & reconciliation",
      "Financial reporting & MIS preparation",
      "Appeals drafting & representation support",
      "Audit report preparation & review",
      "Taxation advisory & planning",
      "Bank & ledger reconciliation work",
    ],
  },
];
