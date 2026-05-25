"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Experience"
          title="Professional Journey"
          subtitle="Building enterprise finance automation solutions and driving compliance transformation."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--primary)]/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 md:pl-20 pb-16 last:pb-0"
            >
              <div
                className={`absolute left-3 md:left-5 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center ${
                  exp.type === "current"
                    ? "bg-[var(--primary)]"
                    : "bg-slate-300 dark:bg-slate-600"
                }`}
              >
                {exp.type === "current" && (
                  <span className="absolute w-6 h-6 rounded-full bg-[var(--primary)] animate-ping opacity-30" />
                )}
              </div>

              <div className="glass rounded-2xl p-6 lg:p-8 glow-hover">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-[var(--primary)]" />
                      <span className="text-sm font-medium text-[var(--primary)]">
                        {exp.period}
                      </span>
                      {exp.type === "current" && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                      {exp.role}
                    </p>
                    {exp.location && (
                      <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                    >
                      <ChevronRight className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                {exp.impact && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Business Impact
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {exp.impact.map((item) => (
                        <div
                          key={item}
                          className="px-3 py-2 rounded-lg bg-[var(--primary)]/5 border border-[var(--primary)]/10 text-sm font-medium text-[var(--primary)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {exp.solutions && (
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      Solutions Developed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.solutions.map((sol) => (
                        <span
                          key={sol}
                          className="px-3 py-1 text-xs rounded-full glass font-medium"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
