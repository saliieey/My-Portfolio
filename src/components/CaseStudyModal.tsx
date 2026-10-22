"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Sparkles,
  Server,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0b0d14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto cursor-default max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 bg-[#0b0d14]/95 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="px-2.5 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/30 rounded-md shrink-0">
              {project.badge}
            </span>
            <h2 id="case-study-title" className="text-base sm:text-lg font-bold text-white truncate">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-8 space-y-8 overflow-y-auto">
          {/* Hero Banner with Preview */}
          <div className="relative w-full h-56 sm:h-72 md:h-84 rounded-xl overflow-hidden border border-white/10 bg-black/60 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/40 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#00f59b]">
                  {project.type}
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-0.5">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00f59b] hover:bg-[#00d687] text-[#07080b] text-xs sm:text-sm font-bold rounded-lg shadow-lg shadow-[#00f59b]/20 transition-all transform hover:scale-105"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium rounded-lg border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Metrics Row (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                  <div className="text-xs font-mono text-gray-400">{metric.label}</div>
                  <div className="text-lg font-bold text-[#00f59b] mt-0.5">{metric.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Product Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#00f59b]" />
              <span>Full Product Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {project.problem && (
                <div className="p-5 rounded-xl bg-amber-500/[0.04] border border-amber-500/20 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>The Engineering Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div className="p-5 rounded-xl bg-[#00f59b]/[0.04] border border-[#00f59b]/25 space-y-2.5">
                  <div className="flex items-center gap-2 text-[#00f59b] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>The Architectural Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Architecture Breakdown (if provided) */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Server className="w-4 h-4 text-[#38bdf8]" />
                <span>Architecture & Implementation Stack</span>
              </h4>
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] space-y-2">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300 font-mono">
                    <span className="text-[#00f59b] font-bold shrink-0">›</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#a78bfa]" />
                <span>Key Features & Verified Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    <CheckCircle2 className="w-4 h-4 text-[#00f59b] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technology Badges */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/[0.04] border border-white/10 hover:border-[#00f59b]/40 rounded-lg text-xs font-mono font-medium text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 px-5 sm:px-8 py-4 bg-[#0b0d14]/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
          <div className="text-xs font-mono text-gray-500">
            Case Study • Verified Implementation
          </div>

          <div className="flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00f59b] hover:underline"
              >
                <span>Live Preview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
