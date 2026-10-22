"use client";

import React, { useState } from "react";
import { SKILLS_DATA, SkillCategory } from "@/data/portfolioData";
import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Search, 
  CheckCircle2, 
  Sparkles,
  Layers
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export default function SkillsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = SKILLS_DATA.map((cat) => {
    const matchingSkills = cat.skills.filter(
      (s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.detail.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[11px] font-mono font-bold uppercase tracking-widest text-[#00f59b]">
              <span>04 • Core Capabilities & Technical Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Technical <span className="text-gradient-emerald">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto md:mx-0">
              Strictly verified technologies grouped by architectural discipline, grounded in real production implementation.
            </p>
          </div>

          {/* Interactive Skill Filter Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack (e.g. Next.js, JWT)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs font-mono placeholder:text-gray-500 focus:outline-none focus:border-[#00f59b] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/[0.08] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                  <div
                    className={`p-3 rounded-xl border ${category.accentClass}`}
                  >
                    {ICON_MAP[category.iconName] || <Layers className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.category}
                    </h3>
                    <span className="text-xs font-mono text-gray-400">
                      {category.skills.length} Verified Capabilities
                    </span>
                  </div>
                </div>

                {/* Skills List with Details */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors space-y-1"
                    >
                      <div className="flex items-center justify-between text-sm font-bold text-white">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b] shrink-0" />
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                          Production Ready
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed pl-5.5">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Discipline Badge */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-gray-500 border-t border-white/[0.04]">
                <span>No arbitrary percentage meters</span>
                <span className="text-[#00f59b]">100% Practical Implementation</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No matching technologies found for &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;React&rdquo;, &ldquo;Node&rdquo;, or &ldquo;PostgreSQL&rdquo;.
          </div>
        )}
      </div>
    </section>
  );
}
