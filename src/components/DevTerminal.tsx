"use client";

import React, { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS, PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from "lucide-react";

interface DevTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string;
  timestamp: string;
}

export default function DevTerminal({ isOpen, onClose }: DevTerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "whoami",
      output: TERMINAL_COMMANDS.whoami,
      timestamp: "10:42:01",
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const time = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(new Date());

    const response =
      TERMINAL_COMMANDS[trimmed] ||
      `Command not found: "${trimmed}". Type 'help' for available commands.`;

    setHistory((prev) => [
      ...prev,
      {
        command: cmdStr,
        output: response,
        timestamp: time,
      },
    ]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Developer Interactive Terminal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isMaximized ? "max-w-6xl h-[90vh]" : "max-w-3xl h-[600px]"
        } bg-[#07080b] border border-white/[0.15] rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-200 cursor-default scanline`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d0f17] border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
              aria-label="Close terminal"
            />
            <button
              onClick={() => setHistory([])}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
              aria-label="Clear terminal"
              title="Clear terminal"
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
              aria-label="Maximize terminal"
            />
            <span className="text-xs font-mono text-gray-400 pl-3 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#00f59b]" />
              salih@portfolio:~ (zsh)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-gray-400 hover:text-white rounded"
              aria-label={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-white rounded"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-white/[0.02] border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto text-[11px] font-mono text-gray-400">
          <span className="text-[#00f59b] shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Quick:
          </span>
          {["whoami", "skills", "projects", "experience", "contact", "help", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-[#00f59b]/20 hover:text-[#00f59b] border border-white/[0.06] hover:border-[#00f59b]/40 transition-colors shrink-0 cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Console Output Area */}
        <div
          ref={scrollRef}
          className="flex-1 p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-4 text-gray-300"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="text-gray-500 text-xs">
            Antigravity OS v2.5.0 (x86_64-pc-none)
            <br />
            Type <span className="text-[#00f59b] font-bold">&apos;help&apos;</span> to explore commands. Click any quick command chip above.
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#00f59b] font-bold">salih@dev:~$</span>
                <span className="text-white font-semibold">{item.command}</span>
                <span className="text-[10px] text-gray-600 ml-auto">{item.timestamp}</span>
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 whitespace-pre-wrap leading-relaxed pl-2 border-l border-white/10 font-mono">
                {item.output}
              </pre>
            </div>
          ))}

          {/* Prompt Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
            <span className="text-[#00f59b] font-bold shrink-0">salih@dev:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'skills', 'projects', 'contact'..."
              className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-gray-600"
              autoFocus
            />
            <button
              type="submit"
              className="p-1 text-gray-500 hover:text-[#00f59b] transition-colors"
              aria-label="Submit command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Terminal Status Bar */}
        <div className="px-4 py-2 bg-[#0d0f17] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-500">
          <span>{PERSONAL_INFO.name} • {PERSONAL_INFO.title}</span>
          <span className="text-[#00f59b]">STATUS: 200 OK</span>
        </div>
      </div>
    </div>
  );
}
