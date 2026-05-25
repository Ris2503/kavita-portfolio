export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export const professionalSkills: Skill[] = [
  { name: "Automation Strategy", level: 95, icon: "Target" },
  { name: "Business Analysis", level: 92, icon: "Search" },
  { name: "TDS Compliance", level: 94, icon: "FileCheck" },
  { name: "Financial Reporting", level: 90, icon: "PieChart" },
  { name: "Team Leadership", level: 88, icon: "Users" },
  { name: "UAT Management", level: 87, icon: "CheckSquare" },
  { name: "Process Design", level: 91, icon: "GitBranch" },
  { name: "Audit & Taxation", level: 89, icon: "Scale" },
];

export const technicalSkills: Skill[] = [
  { name: "Alteryx", level: 93, icon: "Workflow" },
  { name: "Power BI", level: 90, icon: "BarChart3" },
  { name: "Advanced Excel (VBA)", level: 92, icon: "Table" },
  { name: "Python", level: 78, icon: "Code2" },
  { name: "HTML", level: 75, icon: "Globe" },
  { name: "API Basics", level: 72, icon: "Plug" },
  { name: "Prompt Engineering", level: 85, icon: "Sparkles" },
  { name: "Copilot Agent Creation", level: 82, icon: "Bot" },
  { name: "Figma", level: 70, icon: "PenTool" },
];
