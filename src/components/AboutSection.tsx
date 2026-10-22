"use client";

import React from "react";
import { PERSONAL_INFO, PHILOSOPHY_PILLARS } from "@/data/portfolioData";
import { 
  Code2, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Sparkles, 
  MapPin, 
  CheckCircle2,
  Compass,
  Briefcase
} from "lucide-react";

interface AboutSectionProps {
  onOpenTerminal: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-[#00f59b]" />,
  Layers: <Layers className="w-5 h-5 text-[#38bdf8]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#a78bfa]" />,
  Zap: <Zap className="w-5 h-5 text-[#f59e0b]" />,
};

export default function AboutSection({ onOpenTerminal }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14 sm:mb-18 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[11px] font-mono font-bold uppercase tracking-widest text-[#00f59b]">
            <span>02 • Identity, Background & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering <span className="text-gradient-emerald">Mindset</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto sm:mx-0">
            A pragmatic approach to software development focused on clean abstractions, performance, and real-world business outcomes.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/30 flex items-center justify-center text-[#00f59b]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Full-Stack Software Developer
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#00f59b]" />
                    <span>Based in Kerala, India • Available Globally</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                {PERSONAL_INFO.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Target Roles & Collaboration */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#00f59b]/[0.04] border border-[#00f59b]/25 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#00f59b]">
                  <Briefcase className="w-4 h-4" />
                  <span>Target Roles & Availability</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {PERSONAL_INFO.targetRoles}
                </p>
              </div>

              {/* Dev Terminal Interactive Action */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">
                  Prefer a CLI interface?
                </span>
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f59b]/40 text-xs font-mono text-white transition-all cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#00f59b]" />
                  <span>Open Dev Terminal</span>
                  <Sparkles className="w-3 h-3 text-[#00f59b]" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Development Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 px-1">
              Development Philosophy & Standards
            </h3>

            <div className="space-y-3.5">
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/[0.08] space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]">
                      {ICON_MAP[pillar.iconName] || <Code2 className="w-4 h-4 text-[#00f59b]" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] font-mono text-gray-400">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed pl-11">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
