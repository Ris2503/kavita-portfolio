"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { DynamicIcon, Folder } from "@/components/ui/DynamicIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type TabId = "overview" | "workflow" | "tech" | "results";

const tabs: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "workflow", label: "Workflow" },
  { id: "tech", label: "Tech Stack" },
  { id: "results", label: "Results" },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const toggle = () => {
    setExpanded((prev) => !prev);
    if (expanded) setActiveTab("overview");
  };

  return (
    <motion.div
      layout
      className={cn(
        "glass rounded-2xl overflow-hidden glow-hover transition-shadow",
        expanded && "ring-1 ring-[var(--primary)]/20"
      )}
    >
      <div
        className="p-6 cursor-pointer"
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggle()}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 rounded-xl bg-[var(--primary)]/10 shrink-0">
              <DynamicIcon name={project.icon} fallback={Folder} className="w-6 h-6 text-[var(--primary)]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-foreground mb-1">
                {project.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {project.summary}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0"
          >
            <ChevronDown className="w-5 h-5 text-[var(--primary)]" />
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-[var(--card-border)]">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs rounded-md glass font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-slate-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-[var(--primary)]">
              {project.impact}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggle();
              }}
              className="text-sm font-medium text-[var(--primary)] hover:underline flex items-center gap-1"
            >
              View Details
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-[var(--card-border)]">
              <div className="flex gap-1 mt-4 mb-6 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(tab.id);
                    }}
                    className={cn(
                      "px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-colors",
                      activeTab === tab.id
                        ? "bg-[var(--primary)] text-white"
                        : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "overview" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Problem Statement</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Solution Approach</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Challenges Solved</h4>
                        <ul className="space-y-1">
                          {project.challenges.map((c) => (
                            <li
                              key={c}
                              className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                            >
                              <span className="text-[var(--primary)]">→</span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === "workflow" && (
                    <div>
                      <h4 className="text-sm font-semibold mb-4">Process Workflow</h4>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {project.workflow.map((step, i) => (
                          <div key={step} className="flex-1 relative">
                            <div className="glass rounded-xl p-4 text-center h-full">
                              <span className="inline-flex w-7 h-7 rounded-full bg-[var(--primary)] text-white text-xs font-bold items-center justify-center mb-2">
                                {i + 1}
                              </span>
                              <p className="text-sm font-medium">{step}</p>
                            </div>
                            {i < project.workflow.length - 1 && (
                              <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-0.5 bg-[var(--accent)]" />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 grid sm:grid-cols-2 gap-4">
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center border border-dashed border-[var(--card-border)]">
                          <p className="text-sm text-slate-500">Architecture Diagram</p>
                        </div>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 flex items-center justify-center border border-dashed border-[var(--card-border)]">
                          <p className="text-sm text-slate-500">Process Flow</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "tech" && (
                    <div>
                      <h4 className="text-sm font-semibold mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-xl glass font-medium text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center border border-dashed border-[var(--card-border)]">
                        <p className="text-sm text-slate-500">Screenshots Placeholder</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "results" && (
                    <div>
                      <h4 className="text-sm font-semibold mb-4">Business Impact</h4>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {project.businessImpact.map((impact) => (
                          <div
                            key={impact}
                            className="p-4 rounded-xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/5 border border-[var(--primary)]/10"
                          >
                            <p className="text-sm font-medium text-[var(--primary)]">
                              {impact}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 p-4 rounded-xl glass text-center">
                        <p className="text-2xl font-bold text-gradient">{project.impact}</p>
                        <p className="text-xs text-slate-500 mt-1">Primary Impact Metric</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Solutions"
          title="Solutions & Case Studies"
          subtitle="Enterprise-grade finance automation solutions with measurable business impact."
        />

        <div className="grid gap-6 max-w-5xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
