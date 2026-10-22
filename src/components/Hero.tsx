"use client";

import React, { useEffect, useRef, useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  ArrowDown, 
  FileText, 
  Mail, 
  MapPin, 
  Clock, 
  Layers, 
  Cpu, 
  Terminal,
  CodeXml,
  Sparkles,
  Copy,
  Check
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

const ROLES = [
  "Full-Stack Software Developer",
  "React & Next.js Specialist",
  "Node.js & Backend Architect",
  "MERN Stack Engineer",
  "High-Performance Web Craftsman",
];

export default function Hero({ onOpenResume, onOpenTerminal }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [localTime, setLocalTime] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Real-time IST clock
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic animated typewriter role switcher
  useEffect(() => {
    const fullText = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 28 : 55;
      timer = setTimeout(() => {
        const next = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
        setCurrentText(next);
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleCopySnippet = () => {
    const code = `export const engineer = {
  name: "${PERSONAL_INFO.name}",
  title: "${PERSONAL_INFO.title}",
  experience: "2.5+ Years Production",
  location: "Kerala, India",
  coreStack: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
  email: "${PERSONAL_INFO.email}",
  github: "${PERSONAL_INFO.github}",
  status: "Available for Hire"
};`;
    navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Lightweight 60fps ambient particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    const particleCount = Math.min(width < 768 ? 25 : 55, 60);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.35 + 0.1,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0) p1.x = width;
        if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        if (p1.y > height) p1.y = 0;

        // Mouse repelling/glow effect
        const dxMouse = mouseX - p1.x;
        const dyMouse = mouseY - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 100) {
          p1.x -= (dxMouse / distMouse) * 0.8;
          p1.y -= (dyMouse / distMouse) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 155, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 155, ${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-center pt-20 pb-8 sm:pt-24 sm:pb-14 overflow-hidden bg-radial-grid"
    >
      {/* Interactive Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-40 sm:opacity-60"
        aria-hidden="true"
      />

      {/* Ambient Gradient Highlights */}
      <div 
        className="absolute top-1/4 right-[5%] w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#00f59b]/[0.04] rounded-full filter blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-1/4 left-[5%] w-72 sm:w-[450px] h-72 sm:h-[450px] bg-[#38bdf8]/[0.04] rounded-full filter blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Name, Subtitle, Bio, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center sm:items-start text-center sm:text-left space-y-5 sm:space-y-6">
            {/* Top Status & Availability Pill */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-semibold text-gray-200 tracking-wider uppercase">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#00f59b]" />
                <span>Kerala, India</span>
                <span className="text-gray-600">|</span>
                <Clock className="w-3 h-3 text-gray-500" />
                <span suppressHydrationWarning>{localTime || "IST"}</span>
              </div>

              <div className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#00f59b]/[0.08] border border-[#00f59b]/20 text-xs font-mono text-[#00f59b]">
                <Sparkles className="w-3 h-3" />
                <span>Full-Stack Engineer</span>
              </div>
            </div>

            {/* Hero Typography */}
            <div className="space-y-2.5 sm:space-y-3 w-full relative">
              {/* Ambient glowing spotlight behind the name */}
              <div 
                className="absolute -top-10 -left-6 w-80 sm:w-96 h-60 bg-gradient-to-r from-[#00f59b]/25 via-[#38bdf8]/15 to-transparent rounded-full blur-[80px] pointer-events-none -z-10" 
                aria-hidden="true"
              />

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.4rem] xl:text-[5.2rem] font-black tracking-tight text-white leading-[1.08] text-balance">
                Mohamed{" "}
                <span className="text-name-gradient relative inline-block">
                  Salih CK
                </span>
              </h1>

              {/* Dynamic Animated Typewriter Role Switcher */}
              <div className="flex items-center justify-center sm:justify-start gap-2.5 min-h-[32px] sm:min-h-[38px]">
                <div className="flex items-center gap-1.5 text-[#00f59b] font-mono text-xs sm:text-sm font-semibold">
                  <span className="text-gray-500 font-normal">~/</span>
                  <span className="text-[#38bdf8]">role</span>
                  <span className="text-gray-600">:</span>
                </div>
                <div className="flex items-center">
                  <h2 className="text-base sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#00f59b] tracking-tight font-display">
                    {currentText || ROLES[0]}
                  </h2>
                  <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-[#00f59b] ml-1.5 animate-pulse rounded-sm shadow-[0_0_10px_#00f59b]" />
                </div>
              </div>
            </div>

            {/* Value Proposition Statement */}
            <p className="text-[15px] sm:text-lg text-gray-300/90 leading-relaxed max-w-xl sm:max-w-2xl font-normal mx-auto sm:mx-0">
              I engineer polished, high-performance web applications with React, Next.js, Node.js, and modern database architectures. Focused on clean code, intuitive UI/UX, and robust API design.
            </p>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-0.5">
              {["React 19", "Next.js 15", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] hover:border-[#00f59b]/30 text-gray-300 hover:text-white text-xs font-mono transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Button Row */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => scrollTo("#projects")}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-[#00f59b] hover:bg-[#00d687] text-[#07080b] font-bold text-sm rounded-xl shadow-lg shadow-[#00f59b]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 w-full sm:flex sm:w-auto">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm rounded-xl border border-white/[0.1] hover:border-white/[0.2] transition-all flex items-center justify-center cursor-pointer"
                >
                  Get In Touch
                </button>

                <button
                  onClick={onOpenResume}
                  className="w-full sm:w-auto px-5 py-3.5 bg-[#00f59b]/10 hover:bg-[#00f59b]/20 text-[#00f59b] font-semibold text-sm rounded-xl border border-[#00f59b]/30 hover:border-[#00f59b]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>

              <button
                onClick={onOpenTerminal}
                className="hidden xl:flex items-center gap-2 px-4 py-3.5 bg-white/[0.02] hover:bg-white/[0.06] text-gray-400 hover:text-[#00f59b] border border-white/[0.08] rounded-xl text-xs font-mono transition-all cursor-pointer"
                title="Recruiter interactive console"
              >
                <Terminal className="w-4 h-4 text-[#00f59b]" />
                <span>$ dev-console</span>
              </button>
            </div>

            {/* Social Profiles & Direct Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2.5 sm:gap-5 pt-1 text-gray-400">
              <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-gray-500">
                Verified Links:
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f59b]/40 text-gray-300 hover:text-white transition-all flex items-center gap-2 text-xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-[#00f59b]" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#38bdf8]/40 text-gray-300 hover:text-white transition-all flex items-center gap-2 text-xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#00f59b]/40 text-gray-300 hover:text-white transition-all flex items-center gap-2 text-xs"
                  aria-label="Email Mohamed Salih"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline font-mono">{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Code Card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Ambient card aura glow */}
            <div 
              className="absolute -inset-4 bg-gradient-to-r from-[#00f59b]/15 via-[#38bdf8]/10 to-[#a78bfa]/15 rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" 
              aria-hidden="true"
            />

            <div className="relative rounded-2xl bg-[#0c1017]/90 border border-white/[0.1] hover:border-[#00f59b]/40 shadow-2xl backdrop-blur-xl transition-all duration-300 overflow-hidden group">
              {/* Card Top Bar */}
              <div className="px-4 py-3 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]"></div>
                  <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-gray-400">
                    <Terminal className="w-3 h-3 text-[#00f59b]" />
                    <span>salih.config.ts</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCopySnippet}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-white px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer"
                  title="Copy configuration snippet"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00f59b]" />
                      <span className="text-[#00f59b] font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Block Content */}
              <div className="p-5 font-mono text-[13px] leading-relaxed text-gray-300 overflow-x-auto select-text">
                <div>
                  <span className="text-purple-400">export const</span>{" "}
                  <span className="text-yellow-300">engineer</span>{" "}
                  <span className="text-purple-400">=</span>{" "}
                  <span className="text-gray-400">&#123;</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">name</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-emerald-300">&quot;Mohamed Salih CK&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">role</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-emerald-300">&quot;Full-Stack Software Developer&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">experience</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-amber-300">&quot;2.5+ Years Shipped&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">location</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-emerald-300">&quot;Kerala, India&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">coreStack</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-gray-400">[</span>
                  <span className="text-cyan-300">&quot;React&quot;</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-cyan-300">&quot;Next.js&quot;</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-cyan-300">&quot;Node&quot;</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-cyan-300">&quot;PostgreSQL&quot;</span>
                  <span className="text-gray-400">]</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">status</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-[#00f59b] font-semibold">&quot;Available for Full-Time & Contract&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">philosophy</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-amber-300">&quot;Clean code, polished UI & scalable APIs&quot;</span>
                </div>
                <div>
                  <span className="text-gray-400">&#125;;</span>
                </div>
              </div>

              {/* Live Floating Status Footer */}
              <div className="px-5 py-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f59b] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f59b]"></span>
                  </span>
                  <span className="text-gray-300 font-medium">Ready to ship production code</span>
                </div>
                <span className="text-xs text-[#00f59b] font-bold">100% committed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Cards Strip */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-6">
          <div className="glass-panel glass-panel-hover p-2.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#00f59b]/10 border border-[#00f59b]/25 text-[#00f59b] flex-shrink-0">
              <CodeXml className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-2xl font-black text-white tracking-tight leading-tight">
                2.5+ Years
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight mt-0.5">
                <span className="sm:hidden">Experience</span>
                <span className="hidden sm:inline">Professional Software Experience</span>
              </div>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-2.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/25 text-[#38bdf8] flex-shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-2xl font-black text-white tracking-tight leading-tight">
                9+ Web Apps
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight mt-0.5">
                <span className="sm:hidden">Shipped</span>
                <span className="hidden sm:inline">Full-Stack & Client Work Shipped</span>
              </div>
            </div>
          </div>

          <div className="glass-panel glass-panel-hover p-2.5 sm:p-5 rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1.5 sm:gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#a78bfa]/10 border border-[#a78bfa]/25 text-[#a78bfa] flex-shrink-0">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs sm:text-2xl font-black text-white tracking-tight leading-tight">
                Full-Stack
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 font-medium leading-tight mt-0.5">
                <span className="sm:hidden">Architecture</span>
                <span className="hidden sm:inline">React, Next.js, Node & Databases</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
