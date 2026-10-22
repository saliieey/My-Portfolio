"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import DevTerminal from "@/components/DevTerminal";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07080b] text-[#f8fafc] selection:bg-[#00f59b] selection:text-[#07080b]">
      {/* Navigation Header */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Cinematic Hero */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Selected Work Showcase (All 9 Projects) */}
        <ProjectsShowcase />

        {/* Career Timeline */}
        <ExperienceSection />

        {/* Technical Architecture & Capabilities */}
        <SkillsSection />

        {/* Developer Mindset & Narrative */}
        <AboutSection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* Direct Contact & Final Impression */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals & Dialogs */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <DevTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
