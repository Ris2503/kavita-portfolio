"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Link2,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kavita.tiwari@example.com",
    href: "mailto:kavita.tiwari@example.com",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/kavita-tiwari",
    href: "https://linkedin.com/in/kavita-tiwari",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, Maharashtra, India",
    href: null,
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Interested in finance automation, consulting, or collaboration? Reach out."
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl glass glow-hover group"
                  >
                    <div className="p-3 rounded-xl bg-[var(--primary)]/10 group-hover:bg-[var(--primary)]/20 transition-colors">
                      <info.icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{info.label}</p>
                      <p className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl glass">
                    <div className="p-3 rounded-xl bg-[var(--primary)]/10">
                      <info.icon className="w-5 h-5 text-[var(--primary)]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">{info.label}</p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-2xl p-6 lg:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-6">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-xl bg-[var(--primary)] text-white text-sm font-medium"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                        errors.name
                          ? "border-red-400"
                          : "border-[var(--card-border)]"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                        errors.email
                          ? "border-red-400"
                          : "border-[var(--card-border)]"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-1.5 block">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 ${
                      errors.subject
                        ? "border-red-400"
                        : "border-[var(--card-border)]"
                    }`}
                    placeholder="How can I help?"
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1.5 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className={`w-full px-4 py-2.5 rounded-xl border bg-transparent text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 resize-none ${
                      errors.message
                        ? "border-red-400"
                        : "border-[var(--card-border)]"
                    }`}
                    placeholder="Tell me about your project or inquiry..."
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
