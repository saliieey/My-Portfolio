"use client";

import React, { useState } from "react";
import { ALL_PROJECTS, Project } from "@/data/portfolioData";
import CaseStudyModal from "./CaseStudyModal";
import { 
  ExternalLink, 
  ArrowRight, 
  Eye, 
  ChevronDown, 
  CheckCircle2,
  Radio,
  Image as ImageIcon
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import ProjectAppPreview from "./ProjectAppPreview";

type CategoryFilter = "all" | "featured" | "saas" | "client" | "interactive";

const getSafeHostname = (url?: string) => {
  if (!url) return "preview.local";
  try {
    return new URL(url).hostname;
  } catch {
    return "preview.local";
  }
};

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [showAllSupporting, setShowAllSupporting] = useState(false);
  
  // Track which projects have Live Interactive App mode active in their browser frame
  const [liveActiveMap, setLiveActiveMap] = useState<Record<string, boolean>>({});

  const toggleLiveActive = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiveActiveMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter logic
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return p.isFeatured;
    if (activeCategory === "saas") return p.category === "saas";
    if (activeCategory === "client") return p.category === "client";
    if (activeCategory === "interactive") return p.category === "interactive" || p.category === "web-app";
    return true;
  });

  const featuredProjects = filteredProjects.filter((p) => p.isFeatured);
  const supportingProjects = filteredProjects.filter((p) => !p.isFeatured);

  // Clean supporting project slice to eliminate awkward CSS max-height cutoff on mobile
  const displayedSupporting = showAllSupporting ? supportingProjects : supportingProjects.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-white/[0.08] overflow-hidden">
      {/* Ambient Glows optimized for mobile GPUs */}
      <div 
        className="ambient-glow absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#00f59b]/[0.03] rounded-full filter blur-[70px] sm:blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="ambient-glow absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#38bdf8]/[0.03] rounded-full filter blur-[70px] sm:blur-[150px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[11px] font-mono font-bold uppercase tracking-widest text-[#00f59b]">
              <span>01 • Selected Works & Engineering Artifacts</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-gradient-emerald">Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto md:mx-0">
              Curated selection of full-stack web applications, SaaS systems, and production client platforms. Every project represents verified shipped code.
            </p>
          </div>

          {/* Filter Segmented Control: One-Line Responsive Across All Mobile & Desktop */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="flex items-center justify-between w-full max-w-md sm:w-auto gap-1 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex-1 sm:flex-initial flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#00f59b] text-[#07080b] shadow-sm shadow-[#00f59b]/25 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span>All ({ALL_PROJECTS.length})</span>
              </button>
              <button
                onClick={() => setActiveCategory("featured")}
                className={`flex-1 sm:flex-initial flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "featured"
                    ? "bg-[#00f59b] text-[#07080b] shadow-sm shadow-[#00f59b]/25 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span className="hidden sm:inline">Featured ({ALL_PROJECTS.filter((p) => p.isFeatured).length})</span>
                <span className="sm:hidden">Featured</span>
              </button>
              <button
                onClick={() => setActiveCategory("saas")}
                className={`flex-1 sm:flex-initial flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "saas"
                    ? "bg-[#00f59b] text-[#07080b] shadow-sm shadow-[#00f59b]/25 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span className="hidden sm:inline">Full-Stack SaaS</span>
                <span className="sm:hidden">SaaS</span>
              </button>
              <button
                onClick={() => setActiveCategory("client")}
                className={`flex-1 sm:flex-initial flex items-center justify-center px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === "client"
                    ? "bg-[#00f59b] text-[#07080b] shadow-sm shadow-[#00f59b]/25 font-bold"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <span className="hidden sm:inline">Client Platforms</span>
                <span className="sm:hidden">Client</span>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Editorial Projects (Large Format) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              const isLiveActive = !!liveActiveMap[project.id];

              return (
                <div
                  key={project.id}
                  className="glass-panel rounded-3xl border border-white/[0.08] hover:border-[#00f59b]/35 transition-all duration-300 overflow-hidden group shadow-xl"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Visual Media Mockup Side with Live Interactive Feature */}
                    <div
                      className={`lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] h-[320px] sm:h-[400px] lg:h-auto bg-[#07080b] overflow-hidden ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {/* Browser Mockup Chrome Header */}
                      <div className="absolute top-0 left-0 right-0 z-30 px-3.5 sm:px-4 py-2.5 bg-[#0d0f17]/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          </div>
                          <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 pl-1.5 truncate">
                            {getSafeHostname(project.live)}
                          </span>
                        </div>

                        {/* Interactive Toggle Button: Live Preview vs Snapshot */}
                        <div className="flex items-center gap-2 shrink-0">
                          {project.live && (
                            <button
                              type="button"
                              onClick={(e) => toggleLiveActive(project.id, e)}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                isLiveActive
                                  ? "bg-[#00f59b] text-[#07080b] shadow-sm shadow-[#00f59b]/30"
                                  : "bg-white/[0.06] hover:bg-white/[0.12] text-gray-300 hover:text-[#00f59b] border border-white/10 hover:border-[#00f59b]/30"
                              }`}
                              title={isLiveActive ? "Switch to snapshot preview" : "Load live deployed web app inside frame"}
                            >
                              {isLiveActive ? (
                                <>
                                  <ImageIcon className="w-3 h-3" />
                                  <span className="hidden sm:inline">Snapshot View</span>
                                  <span className="sm:hidden">Snapshot</span>
                                </>
                              ) : (
                                <>
                                  <Radio className="w-3 h-3 text-[#00f59b] animate-pulse" />
                                  <span className="hidden sm:inline">Live Interactive App</span>
                                  <span className="sm:hidden">Live App</span>
                                </>
                              )}
                            </button>
                          )}

                          <span className="hidden sm:inline-block whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/20">
                            {project.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content Area: Live Interactive iframe OR Clean Snapshot Media */}
                      {isLiveActive && project.live ? (
                        <div className="absolute inset-0 pt-10 bg-[#07080b]">
                          <iframe
                            src={project.live}
                            title={`${project.title} live preview`}
                            className="w-full h-full border-0 bg-[#07080b]"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div 
                          className="absolute inset-0 pt-10 cursor-pointer overflow-hidden group/preview"
                          onClick={() => setSelectedCaseStudy(project)}
                        >
                          <ProjectAppPreview
                            projectId={project.id}
                            className="w-full h-full group-hover/preview:scale-[1.01] transition-transform duration-300"
                          />

                          {/* Desktop hover indicator to view full case study (hidden on mobile to prevent overlay clutter) */}
                          <div className="hidden sm:block absolute bottom-3 right-3 z-20 opacity-0 group-hover/preview:opacity-100 transition-all duration-200 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#07080b]/90 border border-[#00f59b]/40 text-[#00f59b] font-bold text-xs backdrop-blur-md shadow-lg shadow-black/80">
                              <Eye className="w-3.5 h-3.5" />
                              <span>Inspect Case Study</span>
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Editorial Side */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-[#00f59b]">
                          <span className="uppercase tracking-wider">{project.type}</span>
                          <span>•</span>
                          <span className="text-gray-400">Production Shipped</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#00f59b] transition-colors leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-semibold text-[#38bdf8]">
                          {project.subtitle}
                        </p>

                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Verified Architecture Highlights */}
                        <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                            Key Architectural Highlights:
                          </span>
                          <div className="space-y-1.5">
                            {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#00f59b] shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technology Stack Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions Footer */}
                      <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedCaseStudy(project)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#00f59b] hover:text-[#00d687] transition-colors cursor-pointer group/link"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-gray-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] rounded-lg border border-white/[0.08] transition-colors"
                              aria-label={`GitHub repository for ${project.title}`}
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.12] rounded-lg border border-white/[0.1] hover:border-[#00f59b]/40 transition-colors"
                              aria-label={`Live demo for ${project.title}`}
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3.5 h-3.5 text-[#00f59b]" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Supporting Projects Grid */}
        {supportingProjects.length > 0 && (
          <div className="mt-16 sm:mt-24 space-y-8">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {featuredProjects.length === 0 ? "Production Works & Showcases" : "Additional Production Works & Showcases"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Headless CMS systems, interactive GSAP showcases, and specialized web platforms.
                </p>
              </div>

              {supportingProjects.length > 3 && (
                <button
                  onClick={() => setShowAllSupporting(!showAllSupporting)}
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
                >
                  <span>{showAllSupporting ? "Collapse Grid" : `View All (${supportingProjects.length})`}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAllSupporting ? "rotate-180" : ""}`} />
                </button>
              )}
            </div>

            {/* Grid rendering without cutoffs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedSupporting.map((project) => (
                <div
                  key={project.id}
                  className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] flex flex-col justify-between overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedCaseStudy(project)}
                >
                  <div>
                    {/* Media Thumbnail with authentic ProjectAppPreview */}
                    <div className="relative h-44 overflow-hidden bg-[#07090e]">
                      <ProjectAppPreview
                        projectId={project.id}
                        isCompact
                        className="w-full h-full group-hover:scale-[1.02] transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-[#00f59b] bg-black/80 border border-white/10 backdrop-blur-md">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-[#00f59b] transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#38bdf8] mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-[10px] font-mono text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="p-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="text-[#00f59b] font-semibold text-[11px] group-hover:underline flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>

                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-white/10"
                          aria-label={`GitHub for ${project.title}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 text-gray-400 hover:text-[#00f59b] rounded hover:bg-white/10 flex items-center gap-1"
                          aria-label={`Live site for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle Button for mobile/tablet with exact remaining count */}
            {supportingProjects.length > 3 && (
              <div className="text-center pt-2">
                <button
                  onClick={() => setShowAllSupporting(!showAllSupporting)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-[#00f59b]/15 hover:border-[#00f59b]/40 border border-white/10 text-xs font-semibold text-white hover:text-[#00f59b] transition-all cursor-pointer shadow-lg"
                >
                  <span>
                    {showAllSupporting 
                      ? "Hide Additional Projects" 
                      : `View All Supporting Projects (+${supportingProjects.length - 3} more)`}
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllSupporting ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
