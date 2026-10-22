"use client";

import React from "react";
import { WORK_EXPERIENCE } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-14 sm:mb-18 flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[11px] font-mono font-bold uppercase tracking-widest text-[#00f59b]">
            <span>03 • Career Timeline & Production Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Work <span className="text-gradient-emerald">Experience</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto sm:mx-0">
            2.5+ years of verified software development across AI enterprise platforms, high-traffic client websites, and full-stack SaaS engineering.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative space-y-8 sm:space-y-12 before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-px before:bg-gradient-to-b before:from-[#00f59b] before:via-white/[0.1] before:to-transparent">
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-16 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-[#00f59b] ring-4 ring-[#07080b] group-hover:scale-125 transition-transform" />

              <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/[0.08] space-y-5">
                {/* Header with Title, Company & Period */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/25">
                        {exp.type}
                      </div>
                      {exp.period.toLowerCase().includes("present") && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-[#00f59b] bg-[#00f59b]/15 border border-[#00f59b]/40 shadow-[0_0_12px_rgba(0,245,155,0.25)]">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
                          </span>
                          <span>Present</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#00f59b] transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#38bdf8] mt-1">
                      <Briefcase className="w-4 h-4 text-[#00f59b]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-gray-400 gap-1 shrink-0">
                    <span className="flex items-center gap-1.5 text-gray-200 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#00f59b]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400">
                      <MapPin className="w-3 h-3 text-gray-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#00f59b] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
