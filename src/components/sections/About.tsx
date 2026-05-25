"use client";

import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  BarChart3,
  Cog,
  FileCheck,
  GitBranch,
  Users,
  Code,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const roles = [
  { icon: Award, label: "Chartered Accountant" },
  { icon: Cog, label: "Finance Automation Lead" },
  { icon: BarChart3, label: "Business Analyst" },
  { icon: Briefcase, label: "Automation Strategist" },
];

const expertise = [
  "TDS Automation",
  "Compliance Systems",
  "Rule Engine Design",
  "Analytics & Reporting",
  "Business Analysis",
  "BRD & User Stories",
  "DevOps Lifecycle",
  "Cross-functional Collaboration",
];

const badges = [
  { icon: FileCheck, label: "TDS Expert" },
  { icon: GitBranch, label: "Process Architect" },
  { icon: Users, label: "Team Leader" },
  { icon: Code, label: "Tech-Savvy CA" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          label="About Me"
          title="Transforming Finance Through Automation"
          subtitle="Bridging the gap between traditional finance expertise and cutting-edge automation technology."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden gradient-border">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex flex-col items-center justify-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-4xl font-bold mb-4 shadow-xl">
                  KT
                </div>
                <p className="text-lg font-semibold text-center">Kavita Tiwari</p>
                <p className="text-sm text-slate-500 text-center mt-1">
                  Chartered Accountant
                </p>
                <p className="text-xs text-slate-400 text-center mt-4">
                  Professional photo placeholder
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
              <AnimatedCounter end={7} suffix="+" label="Years Experience" />
              <AnimatedCounter end={9} suffix="+" label="Solutions Built" />
              <AnimatedCounter end={90} suffix="%" label="Efficiency Gain" />
              <AnimatedCounter
                end={2}
                suffix="Cr+"
                label="Records/Hour"
              />
            </div>
          </motion.div>

          <div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {roles.map((role, i) => (
                <GlassCard key={role.label} delay={i * 0.1} className="!p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--primary)]/10">
                      <role.icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <span className="text-sm font-medium">{role.label}</span>
                  </div>
                </GlassCard>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6"
            >
              As a Chartered Accountant with deep expertise in finance automation,
              I lead enterprise-scale TDS automation programs at Ernst & Young. My
              work spans business analysis, rule engine design, analytics
              development, and cross-functional solution delivery — transforming
              manual compliance processes into intelligent, scalable systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {expertise.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass"
                >
                  <badge.icon className="w-4 h-4 text-[var(--accent)]" />
                  <span className="text-sm font-medium">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
