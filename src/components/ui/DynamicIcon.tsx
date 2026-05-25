"use client";

import {
  BookOpen,
  Zap,
  ShieldCheck,
  GitCompare,
  Building2,
  Layers,
  Brain,
  Workflow,
  BarChart3,
  Folder,
  Star,
  Circle,
  Target,
  Search,
  FileCheck,
  PieChart,
  Users,
  CheckSquare,
  GitBranch,
  Scale,
  Table,
  Code2,
  Globe,
  Plug,
  Sparkles,
  Bot,
  PenTool,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Zap,
  ShieldCheck,
  GitCompare,
  Building2,
  Layers,
  Brain,
  Workflow,
  BarChart3,
  Target,
  Search,
  FileCheck,
  PieChart,
  Users,
  CheckSquare,
  GitBranch,
  Scale,
  Table,
  Code2,
  Globe,
  Plug,
  Sparkles,
  Bot,
  PenTool,
};

interface DynamicIconProps {
  name: string;
  fallback?: LucideIcon;
  className?: string;
}

export function DynamicIcon({
  name,
  fallback = Circle,
  className = "w-5 h-5",
}: DynamicIconProps) {
  const Icon = iconMap[name] ?? fallback;
  return <Icon className={className} />;
}

export { Folder, Star };
