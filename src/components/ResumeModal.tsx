"use client";

import React, { useEffect } from "react";
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILLS_DATA, ALL_PROJECTS } from "@/data/portfolioData";
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2,
  FileText
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0b0d14] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto cursor-default max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Actions */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 sm:px-8 py-4 bg-[#0b0d14]/95 backdrop-blur-md border-b border-white/[0.08] no-print">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#00f59b]/10 text-[#00f59b]">
              <FileText className="w-4 h-4" />
            </div>
            <h2 id="resume-title" className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
              Curriculum Vitae • {PERSONAL_INFO.name}
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#00f59b] hover:bg-[#00d687] text-[#07080b] text-xs font-bold rounded-lg shadow transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/[0.08] transition-colors"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-6 sm:p-10 space-y-8 overflow-y-auto text-gray-200 print:bg-white print:text-black print:p-0">
          {/* Header & Contact Strip */}
          <div className="pb-6 border-b border-white/[0.1] print:border-gray-300 space-y-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-base sm:text-lg font-semibold text-[#00f59b] print:text-emerald-700 mt-0.5">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-300 print:text-gray-700 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#00f59b] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#00f59b] print:text-gray-600" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-[#00f59b] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00f59b] print:text-gray-600" />
                <span>{PERSONAL_INFO.phoneFormatted}</span>
              </a>

              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00f59b] print:text-gray-600" />
                <span>{PERSONAL_INFO.location}</span>
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00f59b] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#00f59b] print:text-gray-600" />
                <span>github.com/saliieey</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#00f59b] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#00f59b] print:text-gray-600" />
                <span>linkedin.com/in/mohamed-salih-ck</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b] print:text-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 print:text-gray-800 leading-relaxed">
              Full-Stack Software Developer with 2.5+ years of practical experience building scalable web applications using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Proven track record delivering production AI product platforms, enterprise MERN financial engines with automated daily ROI payouts and 5-level referral systems, and responsive client showcases with sub-second performance.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b] print:text-black">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 rounded-xl bg-white/[0.02] print:bg-transparent border border-white/[0.08] print:border-gray-300 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white print:text-black">
                        {exp.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#00f59b] print:text-emerald-800">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-gray-400 print:text-gray-600">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 print:text-gray-700 italic">
                    {exp.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-gray-300 print:text-gray-800 pl-4 list-disc">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.04] print:border print:border-gray-300 text-[10px] font-mono text-gray-300 print:text-gray-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Works */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b] print:text-black">
              Featured Production Projects
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ALL_PROJECTS.slice(0, 4).map((proj) => (
                <div
                  key={proj.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] print:border print:border-gray-300 border border-white/[0.06] space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-white print:text-black">
                      {proj.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#00f59b] print:text-gray-600">
                      {proj.type}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 print:text-gray-700 line-clamp-2">
                    {proj.description}
                  </p>
                  <div className="text-[10px] font-mono text-gray-500 pt-1">
                    Stack: {proj.technologies.slice(0, 4).join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f59b] print:text-black">
              Technical Stack & Disciplines
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs print:text-gray-800">
              {SKILLS_DATA.map((cat) => (
                <div key={cat.category} className="space-y-1">
                  <span className="font-bold text-white print:text-black block">
                    {cat.category}:
                  </span>
                  <p className="text-gray-400 print:text-gray-700 text-xs">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Sticky Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0b0d14]/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between no-print">
          <span className="text-xs font-mono text-gray-500">
            Mohamed Salih CK • CV Version 2026
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#00f59b] text-[#07080b] text-xs font-bold rounded-lg cursor-pointer hover:bg-[#00d687]"
            >
              Print / Save PDF
            </button>
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
