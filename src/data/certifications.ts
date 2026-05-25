export type CertificationCategory =
  | "AI"
  | "Automation"
  | "Analytics"
  | "Finance"
  | "Compliance";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  categories: CertificationCategory[];
  certificateUrl: string;
  downloadUrl: string;
  verified: boolean;
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: "harvard-ai",
    title: "AI Usage & Data Driven Thinking",
    issuer: "Harvard Business Impact Education",
    date: "April 2026",
    skills: ["AI", "Analytics", "Business Intelligence", "Data-Driven Decision Making"],
    categories: ["AI", "Analytics"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
    credentialId: "HBI-AI-2026-XXXX",
  },
  {
    id: "ey-ai-engineering",
    title: "AI Engineering",
    issuer: "EY Badges",
    date: "2025",
    skills: ["AI Engineering", "Machine Learning Basics", "Enterprise AI"],
    categories: ["AI", "Automation"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
    credentialId: "EY-BADGE-AI-XXXX",
  },
  {
    id: "alteryx-bootcamp",
    title: "Alteryx Bootcamp",
    issuer: "Alteryx",
    date: "2024",
    skills: ["Alteryx Designer", "Data Prep", "Workflow Automation"],
    categories: ["Automation", "Analytics"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "ey-data-integration",
    title: "Data Integration",
    issuer: "EY Analytics",
    date: "2024",
    skills: ["ETL", "Data Integration", "Enterprise Analytics"],
    categories: ["Analytics", "Finance"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "alteryx-core",
    title: "Alteryx Designer Core Mega Bundle",
    issuer: "Alteryx",
    date: "2023",
    skills: ["Alteryx Core", "Spatial Analytics", "Reporting"],
    categories: ["Automation", "Analytics"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "office-automation",
    title: "Diploma in Office Automation",
    issuer: "Mumbai University Affiliated",
    date: "2015",
    skills: ["MS Office", "Automation Tools", "Productivity"],
    categories: ["Automation", "Finance"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
  },
  {
    id: "mscit",
    title: "MS-CIT",
    issuer: "MKCL",
    date: "2014",
    skills: ["Computer Literacy", "Digital Skills"],
    categories: ["Automation"],
    certificateUrl: "#",
    downloadUrl: "#",
    verified: true,
  },
];

export const certificationFilters: CertificationCategory[] = [
  "AI",
  "Automation",
  "Analytics",
  "Finance",
  "Compliance",
];
