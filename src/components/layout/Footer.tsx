"use client";

import { Link2, Mail, Phone, Download, Heart } from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kavita-tiwari",
    icon: Link2,
  },
  { label: "Email", href: "mailto:kavita.tiwari@example.com", icon: Mail },
  { label: "Phone", href: "tel:+919876543210", icon: Phone },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--card-border)] bg-muted/50">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-xs">
                KT
              </div>
              <span className="font-semibold text-foreground">Kavita Tiwari</span>
            </div>
            <p className="text-sm text-slate-500 flex items-center gap-1 justify-center md:justify-start">
              Built with precision
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              automation mindset
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2.5 rounded-xl glass glow-hover text-slate-600 dark:text-slate-400 hover:text-[var(--primary)] transition-colors"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-dark)] transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {year} Kavita Tiwari. All rights reserved.</p>
          <p>Chartered Accountant · Finance Automation Leader</p>
        </div>
      </div>
    </footer>
  );
}
