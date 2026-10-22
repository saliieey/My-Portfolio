"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  FileText, 
  Menu, 
  X, 
  Terminal, 
  ArrowUpRight, 
  Sparkles,
  Mail
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

const NAV_LINKS = [
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume, onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection
      const scrollPos = window.scrollY + 200;
      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href) as HTMLElement | null;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#07080b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
            aria-label="Mohamed Salih CK - Homepage"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-[#00f59b]/50 transition-colors">
              <span className="font-mono text-sm font-bold text-white group-hover:text-[#00f59b] transition-colors">
                MS
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f59b]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-[#00f59b] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-gray-400">
                Full-Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all rounded-full ${
                    isActive
                      ? "text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/25 shadow-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Terminal & Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="px-3 py-1.5 text-xs font-mono text-gray-300 hover:text-[#00f59b] bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-[#00f59b]/30 rounded-lg transition-all flex items-center gap-2"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f59b]" />
              <span>Terminal</span>
            </button>

            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-semibold text-[#00f59b] bg-[#00f59b]/10 hover:bg-[#00f59b]/20 border border-[#00f59b]/30 hover:border-[#00f59b]/50 rounded-lg transition-all flex items-center gap-1.5 shadow-sm shadow-[#00f59b]/10"
              aria-label="View Curriculum Vitae"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Terminal Triggers */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 text-gray-300 hover:text-[#00f59b] bg-white/[0.04] border border-white/10 rounded-lg transition-colors"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4 text-[#00f59b]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/[0.04] border border-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00f59b]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#07080b]/98 backdrop-blur-xl flex flex-col p-6 md:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00f59b]/10 border border-[#00f59b]/30 flex items-center justify-center font-mono font-bold text-xs text-[#00f59b]">
                MS
              </div>
              <span className="font-bold text-white text-base">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 py-8 space-y-3 overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00f59b]/40 text-base font-semibold text-white tracking-wide transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#00f59b]" />
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-[#00f59b]/5 border border-[#00f59b]/20 text-base font-semibold text-[#00f59b] tracking-wide"
            >
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                Launch Dev Terminal
              </span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3.5 bg-[#00f59b] hover:bg-[#00d687] text-[#07080b] font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#00f59b]/20 transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View Curriculum Vitae</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-gray-400 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-center text-[11px] font-mono text-gray-500">
              © 2026 {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
