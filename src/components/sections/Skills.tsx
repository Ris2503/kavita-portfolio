"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DynamicIcon, Star } from "@/components/ui/DynamicIcon";
import { GlassCard } from "@/components/ui/GlassCard";
import { professionalSkills, technicalSkills } from "@/data/skills";

type Tab = "professional" | "technical";

function SkillCard({
  name,
  level,
  icon,
  index,
}: {
  name: string;
  level: number;
  icon: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <GlassCard
      delay={index * 0.05}
      className="!p-5"
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[var(--primary)]/10">
              <DynamicIcon name={icon} fallback={Star} className="w-5 h-5 text-[var(--primary)]" />
            </div>
            <span className="font-medium text-sm">{name}</span>
          </div>
          <span className="text-sm font-bold text-[var(--primary)]">
            {level}%
          </span>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          />
        </div>
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-slate-500 mt-2"
            >
              {level >= 90
                ? "Expert level proficiency"
                : level >= 80
                  ? "Advanced proficiency"
                  : "Proficient"}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </GlassCard>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<Tab>("professional");
  const skills =
    activeTab === "professional" ? professionalSkills : technicalSkills;

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          label="Skills"
          title="Professional & Technical Expertise"
          subtitle="A unique blend of finance domain knowledge and automation technology skills."
        />

        <div className="flex justify-center gap-2 mb-10">
          {(["professional", "technical"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/25"
                  : "glass text-slate-600 dark:text-slate-400 hover:text-[var(--primary)]"
              }`}
            >
              {tab === "professional" ? "Professional Skills" : "Technical Skills"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
