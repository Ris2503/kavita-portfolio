"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Download,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import {
  certifications,
  certificationFilters,
  type CertificationCategory,
} from "@/data/certifications";
import { cn } from "@/lib/utils";

export function Certifications() {
  const [activeFilter, setActiveFilter] = useState<CertificationCategory | "All">("All");

  const filtered =
    activeFilter === "All"
      ? certifications
      : certifications.filter((c) => c.categories.includes(activeFilter));

  return (
    <section id="certifications" className="section-padding bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          label="Certifications"
          title="Professional Credentials"
          subtitle="Continuous learning across AI, automation, analytics, and finance domains."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter("All")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeFilter === "All"
                ? "bg-[var(--primary)] text-white"
                : "glass text-slate-600 dark:text-slate-400"
            )}
          >
            All
          </button>
          {certificationFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-[var(--primary)] text-white"
                  : "glass text-slate-600 dark:text-slate-400 hover:text-[var(--primary)]"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, i) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <GlassCard className="h-full flex flex-col !p-6 relative overflow-hidden group">
                  {cert.verified && (
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BadgeCheck className="w-5 h-5 text-emerald-500" />
                      </motion.div>
                    </div>
                  )}

                  <div className="p-3 rounded-xl bg-[var(--primary)]/10 w-fit mb-4">
                    <Award className="w-6 h-6 text-[var(--primary)]" />
                  </div>

                  <h3 className="font-bold text-foreground mb-1 pr-8">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[var(--primary)] font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 mb-4">{cert.date}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-slate-400 mb-4 font-mono">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  <div className="flex gap-2 mt-auto pt-4 border-t border-[var(--card-border)]">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--primary)] text-white text-xs font-medium hover:bg-[var(--primary-dark)] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Certificate
                    </a>
                    <a
                      href={cert.downloadUrl}
                      download
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </a>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--accent)]/0 group-hover:from-[var(--primary)]/5 group-hover:to-[var(--accent)]/5 transition-all duration-500 pointer-events-none rounded-2xl" />
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
