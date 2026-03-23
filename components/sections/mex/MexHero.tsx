"use client";

import { motion } from "framer-motion";
import { Star, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ASCII_LOGO = `███╗   ███╗███████╗██╗  ██╗
████╗ ████║██╔════╝╚██╗██╔╝
██╔████╔██║█████╗   ╚███╔╝
██║╚██╔╝██║██╔══╝   ██╔██╗
██║ ╚═╝ ██║███████╗██╔╝ ██╗
╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝`;

const INSTALL_CMD = "git clone https://github.com/theDakshJaitly/mex.git .mex";

export function MexHero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(65,105,225,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            {/* ASCII Logo */}
            <motion.pre
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-[9px] sm:text-[11px] md:text-[13px] leading-tight font-mono mb-8 select-none"
              style={{ color: "var(--mex-primary)" }}
              aria-label="mex"
            >
              {ASCII_LOGO}
            </motion.pre>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="mb-6"
            >
              <span
                className="inline-flex items-center gap-2 text-[13px] rounded-full px-4 py-1.5"
                style={{
                  color: "var(--mex-text-muted)",
                  border: "1px solid var(--mex-border)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "var(--mex-primary)" }}
                />
                Open source · MIT license
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="text-heading font-space mb-5"
              style={{ color: "var(--mex-text)" }}
            >
              AI agents forget everything
              <br />
              between sessions.
              <br />
              <span style={{ color: "var(--mex-primary)" }}>mex fixes that.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-[16px] max-w-md mb-8 leading-relaxed"
              style={{ color: "var(--mex-text-muted)" }}
            >
              Persistent, navigable project memory via a structured markdown
              scaffold. A CLI that detects when docs drift from reality — and
              fixes them.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Star on GitHub */}
              <a
                href="https://github.com/theDakshJaitly/mex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-medium text-[15px] px-7 py-3 rounded-full transition-colors duration-200 text-white"
                style={{
                  background: "var(--mex-primary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--mex-primary-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--mex-primary)")
                }
              >
                <Star className="w-4 h-4" />
                Star on GitHub
              </a>

              {/* Install command */}
              <button
                onClick={handleCopy}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-3 rounded-full font-mono text-[13px] transition-all duration-200 cursor-pointer",
                  "hover:border-[var(--mex-primary)]/40"
                )}
                style={{
                  background: "var(--mex-bg-3)",
                  border: "1px solid var(--mex-border)",
                  color: "var(--mex-text-muted)",
                }}
                title="Copy install command"
              >
                <span className="truncate max-w-[280px] sm:max-w-none">
                  {INSTALL_CMD}
                </span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--mex-primary)" }} />
                ) : (
                  <Copy className="w-3.5 h-3.5 shrink-0 opacity-50" />
                )}
              </button>
            </motion.div>
          </div>

          {/* Right column — Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.img
              src="/mex-mascot.svg"
              alt="mex mascot — pixel-art hermit crab with glasses carrying a map"
              className="w-48 md:w-56 lg:w-72 drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
