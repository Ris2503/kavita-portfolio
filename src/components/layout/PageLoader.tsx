"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative w-16 h-16">
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[var(--primary)] border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20" />
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground font-[family-name:var(--font-poppins)]">
                Kavita Tiwari
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Finance Automation & Analytics
              </p>
            </div>
            <motion.div
              className="w-48 h-1 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
