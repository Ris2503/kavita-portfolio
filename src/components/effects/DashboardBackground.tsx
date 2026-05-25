"use client";

import { motion } from "framer-motion";

export function DashboardBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating chart bars */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-32 h-24 glass rounded-xl p-3 opacity-40"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-end gap-1 h-full">
          {[40, 65, 45, 80, 55, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-[var(--primary)] to-[var(--accent)]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-[8%] w-28 h-28 glass rounded-full opacity-30 flex items-center justify-center"
        animate={{ y: [0, 12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="8"
            strokeDasharray="120 220"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="8"
            strokeDasharray="80 220"
            strokeDashoffset="-120"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[25%] w-40 h-16 glass rounded-xl opacity-25 p-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg viewBox="0 0 160 40" className="w-full h-full">
          <polyline
            points="0,30 30,25 60,15 90,20 120,8 160,12"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[var(--primary)]/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[var(--accent)]/5 blur-3xl" />
    </div>
  );
}
