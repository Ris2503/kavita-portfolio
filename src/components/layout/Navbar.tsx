"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ChevronRight,
} from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Solutions" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Impact" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          aria-label="Go to home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">
            KT
          </div>
          <div className="hidden sm:block text-left">
            <p className="font-semibold text-sm text-foreground leading-tight">
              Kavita Tiwari
            </p>
            <p className="text-xs text-slate-500">CA · Finance Automation</p>
          </div>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={cn(
                "px-3 py-1.5 text-sm rounded-lg transition-all duration-200",
                activeSection === link.id
                  ? "text-[var(--primary)] font-semibold bg-[var(--primary)]/10"
                  : "text-slate-600 dark:text-slate-400 hover:text-[var(--primary)] hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg glass hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--primary)]" />
              )}
            </button>
          )}
          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-xl bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg glass"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-[var(--glass-border)] overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors",
                    activeSection === link.id
                      ? "bg-[var(--primary)]/10 text-[var(--primary)] font-semibold"
                      : "text-slate-600 dark:text-slate-400"
                  )}
                >
                  {link.label}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
