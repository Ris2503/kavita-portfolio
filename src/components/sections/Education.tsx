"use client";

import { motion } from "framer-motion";
import { GraduationCap, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Education"
          title="Academic Foundation"
          subtitle="Strong academic credentials underpinning professional finance expertise."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((item, i) => (
            <GlassCard key={item.id} delay={i * 0.15} className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10">
                  <GraduationCap className="w-6 h-6 text-[var(--primary)]" />
                </div>
                {item.score && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    {item.score}
                  </span>
                )}
              </div>

              <h3 className="font-bold text-lg text-foreground mb-1">
                {item.degree}
              </h3>
              <p className="text-sm text-[var(--primary)] font-medium mb-1">
                {item.institution}
              </p>
              <p className="text-xs text-slate-500 mb-4">{item.period}</p>

              <ul className="space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <Star className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
