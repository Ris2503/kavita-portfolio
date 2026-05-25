"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Shield,
  Building2,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const kpis = [
  {
    icon: TrendingUp,
    end: 90,
    suffix: "%",
    label: "Efficiency Improvement",
    description: "Reduction in manual TDS compliance effort",
  },
  {
    icon: Zap,
    end: 2,
    suffix: "Cr+",
    label: "Records/Hour",
    description: "High-volume enterprise data processing",
  },
  {
    icon: Shield,
    end: 100,
    suffix: "%",
    label: "Compliance Focus",
    description: "Reduced compliance risk through automation",
  },
  {
    icon: Building2,
    end: 9,
    suffix: "+",
    label: "Enterprise Solutions",
    description: "Scalable automation frameworks delivered",
  },
  {
    icon: BarChart3,
    end: 10,
    suffix: "x",
    label: "Faster Processing",
    description: "Timeline reduced from 10 days to 1 day",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative">
        <SectionHeading
          label="Impact"
          title="Measurable Business Impact"
          subtitle="Key performance indicators from enterprise finance automation initiatives."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center glow-hover"
            >
              <div className="inline-flex p-3 rounded-xl bg-[var(--primary)]/10 mb-4">
                <kpi.icon className="w-6 h-6 text-[var(--primary)]" />
              </div>
              <AnimatedCounter
                end={kpi.end}
                suffix={kpi.suffix}
                label={kpi.label}
              />
              <p className="text-xs text-slate-500 mt-3">{kpi.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 lg:p-12 gradient-border"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Enterprise Finance Transformation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Led end-to-end automation programs that transformed manual TDS
                compliance into intelligent, scalable systems — delivering
                measurable efficiency gains, improved governance, and
                enterprise-wide analytics capabilities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Manual Effort", before: "100%", after: "10%" },
                { label: "Processing Time", before: "10 days", after: "1 day" },
                { label: "Data Volume", before: "Limited", after: "2Cr+/hr" },
                { label: "Compliance Risk", before: "High", after: "Low" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/10"
                >
                  <p className="text-xs text-slate-500 mb-2">{metric.label}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-red-400 line-through">{metric.before}</span>
                    <span className="text-slate-400">→</span>
                    <span className="font-bold text-emerald-500">{metric.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
