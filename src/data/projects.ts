export interface ProjectTab {
  id: "overview" | "workflow" | "tech" | "results";
  label: string;
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  technologies: string[];
  impact: string;
  tags: string[];
  icon: string;
  problem: string;
  solution: string;
  workflow: string[];
  features: string[];
  businessImpact: string[];
  challenges: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "rule-book",
    name: "Rule Book (Rule Master) Framework",
    summary: "Scalable framework for dynamic TDS rule automation and validation.",
    technologies: ["Alteryx", "Power BI", "Python", "Excel VBA"],
    impact: "90% manual effort reduction",
    tags: ["TDS", "Automation", "Compliance"],
    icon: "BookOpen",
    problem:
      "Manual TDS validation processes were inefficient, error-prone, and lacked centralized rule governance across enterprise systems.",
    solution:
      "Developed a centralized rule management engine supporting scalable validation logic, dynamic automation, and version-controlled compliance workflows.",
    workflow: [
      "Rule intake & classification",
      "Dynamic rule creation & versioning",
      "Automated validation engine",
      "Compliance reporting & audit trail",
    ],
    features: [
      "Dynamic rule creation",
      "Auto validation",
      "Rule versioning",
      "Compliance workflows",
      "Audit-ready reporting",
    ],
    businessImpact: [
      "Reduced manual effort by 90%",
      "Improved compliance accuracy",
      "Increased scalability across entities",
    ],
    challenges: [
      "Complex multi-entity rule variations",
      "Legacy system integration",
      "Regulatory change management",
    ],
    techStack: ["Alteryx", "Power BI", "Python", "Excel VBA", "SQL"],
  },
  {
    id: "auto-rule-creation",
    name: "Auto Rule Creation Engine",
    summary: "Intelligent engine for automated TDS rule generation from business inputs.",
    technologies: ["Alteryx", "Python", "Rule Engine"],
    impact: "10 days → 1 day timeline",
    tags: ["Rule Engine", "AI-Assisted", "TDS"],
    icon: "Zap",
    problem:
      "Manual rule creation was time-intensive, inconsistent across teams, and prone to interpretation errors.",
    solution:
      "Built an auto rule creation engine that translates business requirements into validated, deployable TDS rules with built-in QA checks.",
    workflow: [
      "Business requirement capture",
      "Rule template mapping",
      "Automated rule generation",
      "Validation & deployment",
    ],
    features: [
      "Template-based rule generation",
      "Business logic parser",
      "Auto QA validation",
      "Bulk rule deployment",
    ],
    businessImpact: [
      "Reduced rule creation timeline from 10 days to 1 day",
      "Standardized rule quality",
      "Enabled rapid regulatory response",
    ],
    challenges: [
      "Ambiguous business requirements",
      "Edge case rule exceptions",
      "Cross-team alignment",
    ],
    techStack: ["Alteryx", "Python", "Custom Rule Engine", "Power BI"],
  },
  {
    id: "rule-validation",
    name: "Rule Validation Framework",
    summary: "Enterprise-grade validation layer ensuring TDS rule integrity before deployment.",
    technologies: ["Python", "Alteryx", "Excel VBA"],
    impact: "Reduced compliance risk",
    tags: ["Validation", "QA", "Compliance"],
    icon: "ShieldCheck",
    problem:
      "Deployed rules lacked systematic pre-deployment validation, causing downstream compliance failures.",
    solution:
      "Designed a multi-layer validation framework with automated test suites, regression checks, and compliance scoring.",
    workflow: [
      "Rule import",
      "Syntax & logic validation",
      "Regression testing",
      "Compliance score & sign-off",
    ],
    features: [
      "Multi-layer validation",
      "Regression test suites",
      "Compliance scoring",
      "Exception reporting",
    ],
    businessImpact: [
      "Reduced compliance risk significantly",
      "Prevented production rule failures",
      "Improved audit readiness",
    ],
    challenges: [
      "High-volume rule sets",
      "Complex inter-rule dependencies",
    ],
    techStack: ["Python", "Alteryx", "Excel VBA", "SQL"],
  },
  {
    id: "tds-mismatch",
    name: "TDS Mismatch Analysis Engine",
    summary: "Automated detection and resolution of TDS mismatches across enterprise data.",
    technologies: ["Alteryx", "Power BI", "Python"],
    impact: "2Cr+ records/hour processing",
    tags: ["TDS", "Analytics", "Reconciliation"],
    icon: "GitCompare",
    problem:
      "TDS mismatches were identified manually, causing delays in compliance resolution and financial exposure.",
    solution:
      "Engineered a high-throughput mismatch analysis engine processing 2Cr+ records/hour with intelligent categorization.",
    workflow: [
      "Data ingestion at scale",
      "Mismatch pattern detection",
      "Root cause categorization",
      "Resolution workflow routing",
    ],
    features: [
      "High-volume processing",
      "Pattern-based mismatch detection",
      "Auto categorization",
      "Resolution dashboards",
    ],
    businessImpact: [
      "2Cr+ records processed per hour",
      "Faster mismatch resolution",
      "Reduced financial exposure",
    ],
    challenges: [
      "Data volume at enterprise scale",
      "Multiple source system formats",
    ],
    techStack: ["Alteryx", "Power BI", "Python", "SQL Server"],
  },
  {
    id: "vendor-analytics",
    name: "360° Vendor Analytics Model",
    summary: "Comprehensive vendor intelligence model for TDS compliance and risk assessment.",
    technologies: ["Power BI", "Alteryx", "Python"],
    impact: "Enterprise-wide vendor visibility",
    tags: ["Analytics", "Vendor", "Risk"],
    icon: "Building2",
    problem:
      "Fragmented vendor data prevented holistic TDS compliance assessment and proactive risk management.",
    solution:
      "Built a 360° vendor analytics model aggregating transaction, compliance, and risk data into actionable dashboards.",
    workflow: [
      "Vendor data aggregation",
      "Compliance scoring",
      "Risk flagging",
      "Executive dashboards",
    ],
    features: [
      "360° vendor profiles",
      "Compliance scoring",
      "Risk heat maps",
      "Trend analytics",
    ],
    businessImpact: [
      "Unified vendor compliance view",
      "Proactive risk identification",
      "Improved vendor governance",
    ],
    challenges: [
      "Data silos across systems",
      "Vendor master data quality",
    ],
    techStack: ["Power BI", "Alteryx", "Python", "DAX"],
  },
  {
    id: "three-way-recon",
    name: "3-Way TDS Reconciliation Model",
    summary: "Automated three-way reconciliation across books, returns, and vendor data.",
    technologies: ["Alteryx", "Excel VBA", "Power BI"],
    impact: "End-to-end reconciliation automation",
    tags: ["Reconciliation", "TDS", "Compliance"],
    icon: "Layers",
    problem:
      "Manual three-way reconciliation was labor-intensive and error-prone across multiple data sources.",
    solution:
      "Automated three-way TDS reconciliation matching books, statutory returns, and vendor-level data with exception handling.",
    workflow: [
      "Multi-source data extraction",
      "Three-way matching logic",
      "Exception identification",
      "Resolution tracking",
    ],
    features: [
      "Automated three-way matching",
      "Exception workflows",
      "Variance analysis",
      "Audit trail",
    ],
    businessImpact: [
      "Eliminated manual reconciliation effort",
      "Improved accuracy and timeliness",
      "Enhanced audit readiness",
    ],
    challenges: [
      "Inconsistent data formats",
      "Timing differences across sources",
    ],
    techStack: ["Alteryx", "Excel VBA", "Power BI", "SQL"],
  },
  {
    id: "auto-action",
    name: "Auto-Action Decision Engine",
    summary: "Intelligent decision engine routing TDS exceptions to automated resolution actions.",
    technologies: ["Python", "Rule Engine", "Alteryx"],
    impact: "Intelligent exception routing",
    tags: ["Decision Engine", "Automation", "AI"],
    icon: "Brain",
    problem:
      "Exception handling required manual triage, causing bottlenecks in compliance resolution workflows.",
    solution:
      "Developed an auto-action decision engine that classifies exceptions and routes them to predefined automated or manual resolution paths.",
    workflow: [
      "Exception ingestion",
      "Decision tree evaluation",
      "Auto-action execution",
      "Escalation for unresolved cases",
    ],
    features: [
      "Decision tree engine",
      "Auto-action routing",
      "Escalation workflows",
      "Action audit logging",
    ],
    businessImpact: [
      "Reduced manual triage effort",
      "Faster exception resolution",
      "Consistent decision logic",
    ],
    challenges: [
      "Complex exception taxonomy",
      "Regulatory action constraints",
    ],
    techStack: ["Python", "Custom Rule Engine", "Alteryx", "API Integration"],
  },
  {
    id: "data-pipeline",
    name: "Data Transformation Automation Pipeline",
    summary: "End-to-end ETL pipeline for finance data transformation at enterprise scale.",
    technologies: ["Alteryx", "Python", "SQL"],
    impact: "Scalable data processing",
    tags: ["ETL", "Pipeline", "Data"],
    icon: "Workflow",
    problem:
      "Manual data transformation processes couldn't scale with growing transaction volumes and entity complexity.",
    solution:
      "Built an automated data transformation pipeline with scheduling, monitoring, and error recovery for enterprise finance data.",
    workflow: [
      "Source data extraction",
      "Transformation & enrichment",
      "Quality checks",
      "Target system loading",
    ],
    features: [
      "Scheduled ETL runs",
      "Data quality gates",
      "Error recovery",
      "Processing monitoring",
    ],
    businessImpact: [
      "Scalable data processing",
      "Reduced transformation errors",
      "Improved data freshness",
    ],
    challenges: [
      "Multiple source formats",
      "Peak load processing",
    ],
    techStack: ["Alteryx", "Python", "SQL", "Power BI"],
  },
  {
    id: "compliance-dashboard",
    name: "Power BI Compliance Dashboard",
    summary: "Executive compliance dashboard with real-time TDS governance metrics.",
    technologies: ["Power BI", "DAX", "SQL"],
    impact: "Real-time compliance visibility",
    tags: ["Dashboard", "Power BI", "Governance"],
    icon: "BarChart3",
    problem:
      "Leadership lacked real-time visibility into TDS compliance status, risks, and automation performance.",
    solution:
      "Designed an executive Power BI compliance dashboard with KPIs, trend analysis, and drill-through capabilities.",
    workflow: [
      "Data model design",
      "KPI definition",
      "Dashboard development",
      "Stakeholder rollout",
    ],
    features: [
      "Real-time KPIs",
      "Drill-through analytics",
      "Risk indicators",
      "Trend forecasting",
    ],
    businessImpact: [
      "Real-time compliance visibility",
      "Improved governance",
      "Data-driven decision making",
    ],
    challenges: [
      "Complex data model relationships",
      "Performance at scale",
    ],
    techStack: ["Power BI", "DAX", "SQL Server", "Alteryx"],
  },
];
