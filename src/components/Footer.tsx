"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050608] py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/[0.08]">
          {/* Identity & Wordmark */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/30 flex items-center justify-center font-mono font-bold text-xs text-[#00f59b]">
                MS
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Full-Stack Software Developer specializing in building high-performance web applications with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse"></span>
                <span>Open for Engineering Roles</span>
              </span>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Career Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Stack
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Mindset
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b]">
              Connect
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-gray-400" />
                  <span>GitHub (@saliieey)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-gray-400" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-gray-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 {PERSONAL_INFO.name}. Crafted with precision & performance.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-gray-300 hover:text-white transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f59b]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
