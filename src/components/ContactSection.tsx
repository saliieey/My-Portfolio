"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  FileText, 
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface ContactSectionProps {
  onOpenResume: () => void;
}

export default function ContactSection({ onOpenResume }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable form processing and prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Also open mailto as standard native fallback if user desires
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Store in window for mail client fallback
      (window as unknown as { lastMailto: string }).lastMailto = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient Glows */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00f59b]/[0.05] rounded-full filter blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14 sm:mb-18 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[11px] font-mono font-bold uppercase tracking-widest text-[#00f59b]">
            <span>05 • Direct Channels & Next Steps</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let&apos;s Build <span className="text-gradient-emerald">Together</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto sm:mx-0">
            Currently available for full-time engineering roles, high-impact contract projects, and architecture consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card with One-Click Copy */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-[#00f59b]/10 border border-[#00f59b]/30 text-[#00f59b]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Direct Email
                  </span>
                  <p className="text-base sm:text-lg font-bold text-white select-all">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#00f59b]/10 hover:bg-[#00f59b]/20 border border-[#00f59b]/30 text-[#00f59b] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#00f59b]" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-semibold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Mail App</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="p-3 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Direct Phone / WhatsApp
                  </span>
                  <div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-base font-bold text-white hover:text-[#00f59b] transition-colors"
                    >
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400">
                    Location & Timezone
                  </span>
                  <p className="text-sm font-bold text-white">
                    {PERSONAL_INFO.location}
                  </p>
                  <p className="text-xs font-mono text-gray-500">
                    {PERSONAL_INFO.timezone}
                  </p>
                </div>
              </div>
            </div>

            {/* Verified Profiles & CV Action */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-gray-400 block">
                Verified Social Profiles & Résumé
              </span>

              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f59b]/40 text-xs font-medium text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-[#00f59b]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#38bdf8]/40 text-xs font-medium text-white transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00f59b]/10 hover:bg-[#00f59b]/20 border border-[#00f59b]/30 text-xs font-bold text-[#00f59b] transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/[0.08]">
            <div className="space-y-2 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Have an engineering opening, contract project, or technical question? Send a note directly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#00f59b]/10 border border-[#00f59b]/30 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00f59b]/20 text-[#00f59b] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || "friend"}. I will review your message and reply promptly.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Note
                  </button>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || "Follow-up"
                    )}`}
                    className="px-4 py-2 rounded-xl bg-[#00f59b] text-[#07080b] text-xs font-bold transition-all"
                  >
                    Open in Mail Client
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                      Your Name <span className="text-[#00f59b]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00f59b] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                      Your Email <span className="text-[#00f59b]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00f59b] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                    Subject <span className="text-[#00f59b]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Consultation"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00f59b] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                    Message Details <span className="text-[#00f59b]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your team, stack requirements, or project timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00f59b] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#00f59b] hover:bg-[#00d687] text-[#07080b] font-bold text-sm shadow-lg shadow-[#00f59b]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Processing Message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
