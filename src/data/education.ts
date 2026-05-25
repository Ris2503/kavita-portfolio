export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
  score?: string;
}

export const education: EducationItem[] = [
  {
    id: "ca",
    degree: "Chartered Accountant (CA)",
    institution: "Institute of Chartered Accountants of India (ICAI)",
    period: "Completed",
    highlights: [
      "Comprehensive training in audit, taxation & financial reporting",
      "Strong foundation in statutory compliance & governance",
      "Articleship experience in diverse audit engagements",
    ],
    score: "Qualified",
  },
  {
    id: "mcom",
    degree: "Master of Commerce (M.Com)",
    institution: "Mumbai University",
    period: "Completed",
    highlights: [
      "Advanced studies in accounting, finance & business economics",
      "Research-oriented approach to financial analysis",
      "Strong academic performance in commerce disciplines",
    ],
  },
  {
    id: "bcom",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "Mumbai University",
    period: "Completed",
    highlights: [
      "Foundation in accounting, taxation & business law",
      "Consistent academic excellence",
      "Active participation in commerce-related activities",
    ],
  },
];
