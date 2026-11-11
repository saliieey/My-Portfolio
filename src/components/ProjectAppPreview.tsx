"use client";

import React from "react";
import { 
  Play, 
  SkipForward, 
  SkipBack, 
  Volume2, 
  Music, 
  DollarSign, 
  Users, 
  CheckCircle2, 
  Bot, 
  Wrench, 
  Calendar, 
  Star, 
  Video, 
  Globe, 
  Camera, 
  Layers, 
  Sparkles,
  Search,
  Zap
} from "lucide-react";

interface ProjectAppPreviewProps {
  projectId: string;
  className?: string;
  isCompact?: boolean;
}

export default function ProjectAppPreview({
  projectId,
  className = "",
  isCompact = false,
}: ProjectAppPreviewProps) {
  const combinedClass = `${isCompact ? "compact-preview" : ""} ${className}`.trim();

  switch (projectId) {
    case "musicflow":
      return <MusicFlowPreview className={combinedClass} />;
    case "maelstrom-frames":
      return <MaelstromFramesPreview className={combinedClass} />;
    case "investment-saas":
      return <InvestmentSaasPreview className={combinedClass} />;
    case "nicorai":
      return <NicorAiPreview className={combinedClass} />;
    case "simpex":
      return <SimpexPreview className={combinedClass} />;
    case "luxe-noir":
      return <LuxeNoirPreview className={combinedClass} />;
    case "podnest":
      return <PodnestPreview className={combinedClass} />;
    case "pikuboo":
      return <PikubooPreview className={combinedClass} />;
    case "maelstrom-website":
      return <MaelstromWebsitePreview className={combinedClass} />;
    default:
      return <DefaultAppPreview projectId={projectId} className={combinedClass} />;
  }
}

// 1. MusicFlow - Authentic Spotify-style Dark Music Player Interface
function MusicFlowPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#07090e] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      {/* Top Bar with Search & Jamendo API Indicator */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-[#00f59b] flex items-center justify-center text-[#07090e] shrink-0">
            <Music className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs sm:text-sm tracking-tight text-white truncate">MusicFlow</span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono text-[#00f59b] bg-[#00f59b]/10 border border-[#00f59b]/25 shrink-0">
            Jamendo API
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-gray-400">
            <Search className="w-3 h-3 text-gray-400" />
            <span>Search tracks & playlists...</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/25">
            PostgreSQL Drizzle
          </span>
        </div>
      </div>

      {/* Main Track Queue Grid - Responsive 2 items on mobile, 3 on desktop */}
      <div className="my-auto py-2 sm:py-3 space-y-1.5 sm:space-y-2">
        <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400 pb-0.5">
          <span>NOW PLAYING QUEUE</span>
          <span className="text-[#00f59b]">320kbps Lossless</span>
        </div>

        <div className="space-y-1.5">
          {[
            { title: "Midnight City Lights", artist: "Kochi Synthwave Collective", dur: "3:42", active: true, mobile: true },
            { title: "Kerala Monsoon Ambient", artist: "Deep Focus Sessions", dur: "4:15", active: false, mobile: true },
            { title: "Neon Cyber Groove", artist: "Jamendo Artist Showcase", dur: "2:58", active: false, mobile: false },
          ].map((track, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-2 rounded-xl border transition-all ${
                !track.mobile ? "hidden sm:flex" : ""
              } ${
                track.active
                  ? "bg-[#00f59b]/[0.08] border-[#00f59b]/40 text-white"
                  : "bg-white/[0.02] border-white/[0.05] text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  track.active ? "bg-[#00f59b] text-[#07080b]" : "bg-white/10 text-gray-400"
                }`}>
                  {track.active ? <Play className="w-3.5 h-3.5 fill-current" /> : <Music className="w-3.5 h-3.5" />}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate text-white leading-tight">{track.title}</p>
                  <p className="text-[10px] text-gray-400 truncate">{track.artist}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 text-xs font-mono">
                {track.active && (
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-full bg-[#00f59b] animate-pulse"></span>
                    <span className="w-0.5 h-2 bg-[#00f59b] animate-pulse delay-75"></span>
                    <span className="w-0.5 h-3 bg-[#00f59b] animate-pulse delay-150"></span>
                  </span>
                )}
                <span className="text-gray-400 text-[10px] sm:text-[11px]">{track.dur}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Audio Player Controls Bar */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between gap-2.5 sm:gap-3 bg-[#0a0d16]/90 -mx-3 -mb-3 sm:-mx-5 sm:-mb-5 p-2.5 sm:px-5">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#00f59b] to-[#38bdf8] flex items-center justify-center text-[#07080b] shrink-0 font-bold text-xs">
            MF
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate max-w-[90px] xs:max-w-[130px] sm:max-w-none">Midnight City</p>
            <p className="text-[9px] sm:text-[10px] text-[#00f59b] truncate hidden xs:block">Jamendo Audio</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-1 flex-1 max-w-[170px] sm:max-w-xs mx-auto">
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="text-gray-400 hover:text-white"><SkipBack className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></button>
            <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#00f59b] text-[#07080b] flex items-center justify-center shadow-lg shadow-[#00f59b]/25">
              <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" />
            </button>
            <button className="text-gray-400 hover:text-white"><SkipForward className="w-3 h-3 sm:w-3.5 sm:h-3.5" /></button>
          </div>
          <div className="w-full flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[9px] font-mono text-gray-400">
            <span>1:42</span>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-[#00f59b] rounded-full"></div>
            </div>
            <span>3:42</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-gray-400 shrink-0">
          <Volume2 className="w-3.5 h-3.5" />
          <div className="w-12 h-1 bg-white/10 rounded-full">
            <div className="w-8 h-full bg-[#00f59b] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Maelstrom Frames - Editorial Photography Showcase with Curated Masonry
function MaelstromFramesPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#07080b] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      {/* Top Editorial Chrome */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00f59b] shrink-0" />
          <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase text-white truncate">
            MAELSTROM FRAMES
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono text-gray-400 bg-white/[0.04] border border-white/10 shrink-0">
            35mm Archive
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00f59b] shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] animate-ping" />
          <span><span className="hidden sm:inline">GSAP Kinetic </span>SmoothScroll</span>
        </div>
      </div>

      {/* Visual Photography Masonry Tiles - Responsive 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 my-auto py-1.5 sm:py-2">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 h-32 sm:h-36 flex flex-col justify-between p-2.5 group">
          <div className="flex items-center justify-between text-[9px] font-mono text-gray-400">
            <span>#01 · FRAME</span>
            <span className="text-[#00f59b]">f/1.4</span>
          </div>
          <div className="w-full h-14 sm:h-12 bg-white/[0.04] rounded-lg border border-white/[0.06] flex items-center justify-center">
            <Camera className="w-6 h-6 sm:w-5 sm:h-5 text-gray-400 opacity-70" />
          </div>
          <div className="text-[10px] font-mono text-gray-300 truncate">Kochi Port Monolith</div>
        </div>

        <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#00f59b]/15 via-zinc-900 to-zinc-950 border border-[#00f59b]/35 h-32 sm:h-36 flex flex-col justify-between p-2.5 shadow-lg shadow-[#00f59b]/10">
          <div className="flex items-center justify-between text-[9px] font-mono text-[#00f59b]">
            <span>FEATURED</span>
            <span>1/1000s</span>
          </div>
          <div className="w-full h-14 sm:h-12 bg-[#00f59b]/10 rounded-lg border border-[#00f59b]/25 flex items-center justify-center">
            <Sparkles className="w-6 h-6 sm:w-5 sm:h-5 text-[#00f59b]" />
          </div>
          <div className="text-[10px] font-bold text-white truncate">Kinetic Motion Blur</div>
        </div>

        <div className="hidden sm:flex relative rounded-xl overflow-hidden bg-gradient-to-br from-cyan-950/40 via-zinc-900 to-zinc-950 border border-cyan-500/20 h-32 sm:h-36 flex-col justify-between p-2.5">
          <div className="flex items-center justify-between text-[9px] font-mono text-cyan-400">
            <span>#03 · 35mm</span>
            <span>ISO 200</span>
          </div>
          <div className="w-full h-14 sm:h-12 bg-cyan-400/[0.06] rounded-lg border border-cyan-400/20 flex items-center justify-center">
            <Layers className="w-6 h-6 sm:w-5 sm:h-5 text-cyan-400 opacity-60" />
          </div>
          <div className="text-[10px] font-mono text-gray-300 truncate">Vagamon Mist Horizon</div>
        </div>
      </div>

      {/* Bottom Technical Metadata Bar */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="flex items-center gap-1.5 min-w-0 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f59b] shrink-0"></span>
          <span className="truncate">Next.js 16 + React 19<span className="hidden sm:inline"> Masonry</span></span>
        </span>
        <span className="text-[#00f59b] font-bold shrink-0">60 FPS Hardware</span>
      </div>
    </div>
  );
}

// 3. Enterprise MERN Investment, ROI & Referral SaaS
function InvestmentSaasPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#070a12] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-[#00f59b] flex items-center justify-center shrink-0">
            <DollarSign className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs sm:text-sm text-white truncate">FinCore MERN Dashboard</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#00f59b]/10 border border-[#00f59b]/25 text-[10px] font-mono text-[#00f59b] shrink-0">
          <Zap className="w-3 h-3" />
          <span><span className="hidden sm:inline">Daily </span>Cron Active</span>
        </div>
      </div>

      {/* KPI Cards Strip - Responsive 2 cards on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 my-auto py-1.5 sm:py-2">
        <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[9px] font-mono text-gray-400 block truncate">WALLET BALANCE</span>
          <span className="text-sm sm:text-base font-black text-white">$48,250.00</span>
          <span className="text-[9px] text-[#00f59b] font-mono block mt-0.5">+14.2% yield</span>
        </div>
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#00f59b]/[0.05] border border-[#00f59b]/30">
          <span className="text-[9px] font-mono text-gray-300 block truncate">DAILY ROI YIELD</span>
          <span className="text-sm sm:text-base font-black text-[#00f59b]">+$386.00</span>
          <span className="text-[9px] text-gray-400 font-mono block mt-0.5">Automated Cron</span>
        </div>
        <div className="hidden sm:block p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
          <span className="text-[9px] font-mono text-gray-400 block truncate">5-LEVEL REFERRAL</span>
          <span className="text-xs sm:text-base font-black text-[#38bdf8]">$4,120.00</span>
          <span className="text-[9px] text-gray-400 font-mono block mt-0.5">5 Deep Tree</span>
        </div>
      </div>

      {/* Transaction Audit Ledger Rows */}
      <div className="space-y-1.5 py-1">
        <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-gray-200 min-w-0 truncate">
            <CheckCircle2 className="w-3 h-3 text-[#00f59b] shrink-0" />
            <span className="truncate">ROI Distribution Payout #1042</span>
          </span>
          <span className="text-[#00f59b] font-bold shrink-0 pl-2">+$128.50</span>
        </div>
        <div className="hidden sm:flex items-center justify-between p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] text-[10px] font-mono">
          <span className="flex items-center gap-1.5 text-gray-200 min-w-0 truncate">
            <Users className="w-3 h-3 text-[#38bdf8] shrink-0" />
            <span className="truncate">Level 2 Referral Commission</span>
          </span>
          <span className="text-[#38bdf8] font-bold shrink-0 pl-2">+$48.00</span>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="truncate">MongoDB Atlas · JWT + Bcrypt</span>
        <span className="text-[#00f59b] font-bold shrink-0">Immutable Ledger</span>
      </div>
    </div>
  );
}

// 4. NicorAI Platform - Enterprise AI RAG Interface
function NicorAiPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#080b14] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0">
            <Bot className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs sm:text-sm text-white truncate">NicorAI Enterprise RAG</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 shrink-0">
          AWS Deployed
        </span>
      </div>

      {/* Chat Thread */}
      <div className="my-auto py-2 space-y-2 text-xs">
        <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-300 max-w-[90%] sm:max-w-[85%] self-start">
          <p className="text-[10px] sm:text-[11px] text-gray-400 font-mono mb-0.5">User Prompt:</p>
          <p className="text-white text-[11px] sm:text-xs">Extract vector embeddings and summarize Q3 compliance.</p>
        </div>

        <div className="p-2 sm:p-2.5 rounded-xl bg-indigo-500/[0.08] border border-indigo-500/30 text-white max-w-[95%] self-end">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] font-mono text-indigo-400 mb-1">
            <Sparkles className="w-3 h-3 shrink-0" />
            <span className="truncate">RAG Context<span className="hidden sm:inline"> (4 Vector Sources)</span></span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-200 leading-relaxed">
            Enterprise compliance verified. Latency: 18ms, zero token loss.
          </p>
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="truncate">Next.js App Router · SSR</span>
        <span className="text-[#00f59b] font-semibold shrink-0">99.98% Uptime</span>
      </div>
    </div>
  );
}

// 5. Simpex Services - Appliance Repair Multi-Step Booking Drawer
function SimpexPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0d14] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
            <Wrench className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold text-xs sm:text-sm text-white truncate">Simpex Services</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/25 shrink-0">
          React 19 + SEO
        </span>
      </div>

      {/* Service Selection Cards - Responsive 2 columns on mobile, 3 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto py-2">
        {[
          { name: "AC Service", tag: "Gas Refill", active: true, mobile: true },
          { name: "Refrigerator", tag: "Compressor", active: false, mobile: true },
          { name: "Washer Care", tag: "Motor Check", active: false, mobile: false },
        ].map((s, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-xl border text-center transition-all ${
              !s.mobile ? "hidden sm:block" : ""
            } ${
              s.active
                ? "bg-amber-500/10 border-amber-500/40 text-white shadow-md shadow-amber-500/10"
                : "bg-white/[0.03] border-white/[0.06] text-gray-400"
            }`}
          >
            <p className="text-xs font-bold text-white truncate">{s.name}</p>
            <p className="text-[10px] font-mono text-amber-400 mt-0.5">{s.tag}</p>
          </div>
        ))}
      </div>

      {/* Multi-step Booking Drawer Preview */}
      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between text-xs font-mono">
        <span className="flex items-center gap-2 text-gray-200 min-w-0 truncate">
          <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">Booking Drawer · Step 2/3</span>
        </span>
        <span className="text-[#00f59b] font-bold shrink-0 pl-2">Slot Confirmed</span>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="flex items-center gap-1 text-amber-400">
          <Star className="w-3 h-3 fill-current" />
          <span>4.9 ★ Rating</span>
        </span>
        <span>LocalBusiness Schema</span>
      </div>
    </div>
  );
}

// 6. LUXE NOIR - Luxury Timepiece Showcase
function LuxeNoirPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#050608] text-white flex flex-col justify-between overflow-hidden select-none p-3.5 sm:p-5 border border-amber-500/20 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
        <span className="font-display font-black text-xs sm:text-sm tracking-widest text-amber-400 uppercase">
          LUXE NOIR
        </span>
        <span className="text-[10px] font-mono text-amber-300/80">GENÈVE · 1888</span>
      </div>

      <div className="text-center my-auto py-2 space-y-1">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent mx-auto flex items-center justify-center shadow-xl shadow-amber-500/10">
          <div className="w-8 h-8 rounded-full border border-amber-300/60 flex items-center justify-center text-amber-300 text-[10px] font-mono">
            XII
          </div>
        </div>
        <p className="font-display text-sm sm:text-base font-bold text-amber-100 tracking-wide">CHRONOGRAPHE AUTOMATIQUE</p>
        <p className="text-[10px] font-mono text-amber-400/70">GSAP ScrollTrigger Reveal Sequence</p>
      </div>

      <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[10px] font-mono text-amber-400/80">
        <span>Zero-Dependency Bundle</span>
        <span className="text-amber-300">Precision Horology</span>
      </div>
    </div>
  );
}

// 7. Podnest YouTube Agent
function PodnestPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0d14] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Video className="w-4 h-4 text-red-500 shrink-0" />
          <span className="font-bold text-xs sm:text-sm text-white truncate">Podnest Creator Hub</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-red-400 bg-red-500/10 border border-red-500/25 shrink-0">
          Workflow
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto py-2">
        <div className="p-2 sm:p-2.5 rounded-xl bg-red-500/[0.08] border border-red-500/30">
          <span className="text-[9px] font-mono text-red-400 block truncate">EDITING</span>
          <span className="text-xs sm:text-sm font-bold text-white block mt-1">2 in Render</span>
        </div>
        <div className="p-2 sm:p-2.5 rounded-xl bg-[#00f59b]/[0.08] border border-[#00f59b]/30">
          <span className="text-[9px] font-mono text-[#00f59b] block truncate">PUBLISHED</span>
          <span className="text-xs sm:text-sm font-bold text-white block mt-1">12 Shipped</span>
        </div>
        <div className="hidden sm:block p-2 sm:p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[9px] font-mono text-gray-400 block truncate">IDEATION</span>
          <span className="text-xs sm:text-sm font-bold text-white block mt-1">4 Episodes</span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="truncate">Next.js + TypeScript</span>
        <span className="text-[#00f59b] shrink-0 font-bold">Workflow Engine</span>
      </div>
    </div>
  );
}

// 8. Pikuboo
function PikubooPreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#080d1a] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-black text-xs shrink-0">
            P
          </div>
          <span className="font-bold text-xs sm:text-sm text-white truncate">Pikuboo App</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 shrink-0">
          Vite &bull; &lt;50kb
        </span>
      </div>

      <div className="text-center my-auto py-2 space-y-1">
        <p className="text-xs font-mono text-cyan-300">Lightweight Component Runtime</p>
        <p className="text-xs text-gray-400 max-w-xs mx-auto">Sub-second boot with zero framework overhead.</p>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span>React + TypeScript</span>
        <span className="text-[#00f59b] font-bold">Ultra-Fast Paint</span>
      </div>
    </div>
  );
}

// 9. Maelstrom Global Corporate Platform
function MaelstromWebsitePreview({ className }: { className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#060911] text-white flex flex-col justify-between overflow-hidden select-none p-3 sm:p-5 ${className}`}>
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <Globe className="w-4 h-4 text-[#38bdf8] shrink-0" />
          <span className="font-bold text-xs sm:text-sm text-white truncate">Maelstrom Global Pvt Ltd</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/25 shrink-0">
          Headless CMS
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 my-auto py-2">
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="text-[10px] font-mono text-gray-400 block truncate">CMS REST API</span>
          <span className="text-xs font-bold text-white block mt-1 truncate">WordPress Ingestion</span>
        </div>
        <div className="p-2.5 rounded-xl bg-[#38bdf8]/[0.08] border border-[#38bdf8]/30">
          <span className="text-[10px] font-mono text-[#38bdf8] block truncate">FRONTEND</span>
          <span className="text-xs font-bold text-white block mt-1 truncate">Next.js + GSAP</span>
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-gray-400">
        <span className="truncate">Responsive Layout</span>
        <span className="text-[#00f59b] font-bold shrink-0">Client Platform</span>
      </div>
    </div>
  );
}

function DefaultAppPreview({ projectId, className }: { projectId: string; className?: string }) {
  return (
    <div className={`relative w-full h-full bg-[#0a0d14] text-white flex flex-col justify-between p-4 ${className}`}>
      <div className="flex items-center gap-2 text-xs font-mono text-[#00f59b]">
        <Layers className="w-4 h-4" />
        <span>Shipped Web Application</span>
      </div>
      <div className="text-center my-auto">
        <h4 className="text-base font-bold text-white">{projectId}</h4>
        <p className="text-xs text-gray-400 mt-1">Verified production release</p>
      </div>
      <div className="text-[10px] font-mono text-gray-500">React + Next.js + Node</div>
    </div>
  );
}
