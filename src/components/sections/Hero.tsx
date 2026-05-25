"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  FolderKanban,
  TrendingDown,
  Zap,
  Building2,
  Brain,
  ArrowRight,
} from "lucide-react";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { DashboardBackground } from "@/components/effects/DashboardBackground";

const kpiCards = [
  {
    icon: TrendingDown,
    value: "90%",
    label: "Manual Effort Reduction",
    delay: 0,
  },
  {
    icon: Zap,
    value: "2Cr+",
    label: "Records/Hour Processing",
    delay: 0.2,
  },
  {
    icon: Building2,
    value: "Enterprise",
    label: "Automation Solutions",
    delay: 0.4,
  },
  {
    icon: Brain,
    value: "Rule Engine",
    label: "Specialist",
    delay: 0.6,
  },
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[var(--gradient-start)] to-[var(--gradient-end)]"
    >
      <DashboardBackground />
      <ParticleBackground />

      <div className="container-custom section-padding relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-[var(--primary)] mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Chartered Accountant · Finance Automation Lead
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">Finance Automation</span>
              <br />
              & Business Analysis
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"
            >
              Transforming finance functions into scalable, efficient, and
              insight-driven systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              className="text-slate-500 dark:text-slate-400 mb-8 max-w-xl"
            >
              I&apos;m <strong className="text-foreground">Kavita Tiwari</strong>
              , a Chartered Accountant and Finance Automation professional at
              Ernst & Young, specializing in TDS automation, rule engines,
              analytics, and enterprise compliance transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/25"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass font-medium text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              >
                <Mail className="w-4 h-4 text-[var(--primary)]" />
                Contact Me
              </button>
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--primary)]/30 text-[var(--primary)] font-medium hover:bg-[var(--primary)]/5 transition-all"
              >
                <FolderKanban className="w-4 h-4" />
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="relative"
            >
              {/* Profile card */}
              <div className="glass rounded-3xl p-8 gradient-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white text-2xl font-bold">
                    KT
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Kavita Tiwari</h3>
                    <p className="text-sm text-slate-500">CA · Manager, EY</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Experience", value: "7+ Years" },
                    { label: "Solutions", value: "9+ Built" },
                    { label: "Domain", value: "TDS & Tax" },
                    { label: "Focus", value: "Automation" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-[var(--primary)]/5 border border-[var(--glass-border)]"
                    >
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating KPI cards */}
              {kpiCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 2.5 + card.delay }}
                  className={`absolute glass rounded-xl p-3 shadow-lg ${
                    i === 0
                      ? "-top-6 -left-8"
                      : i === 1
                        ? "-top-4 -right-6"
                        : i === 2
                          ? "-bottom-6 -left-4"
                          : "-bottom-4 -right-8"
                  }`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[var(--primary)]/10">
                      <card.icon className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{card.value}</p>
                      <p className="text-xs text-slate-500 whitespace-nowrap">
                        {card.label}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile KPI strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12 lg:hidden"
        >
          {kpiCards.map((card) => (
            <div key={card.label} className="glass rounded-xl p-3 text-center">
              <card.icon className="w-5 h-5 text-[var(--primary)] mx-auto mb-1" />
              <p className="font-bold text-sm">{card.value}</p>
              <p className="text-xs text-slate-500">{card.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--primary)]/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-[var(--primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
