"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[var(--primary)] mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-500 dark:text-slate-400 text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
