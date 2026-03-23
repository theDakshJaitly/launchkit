"use client";

import { Star } from "lucide-react";

export function MexFooter() {
  return (
    <footer style={{ background: "var(--mex-bg-2)" }}>
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--mex-border)] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — branding */}
          <div className="flex items-center gap-2 text-[14px]">
            <span
              className="font-mono font-medium"
              style={{ color: "var(--mex-primary)" }}
            >
              mex
            </span>
            <span style={{ color: "var(--mex-text-muted)" }}>by</span>
            <a
              href="/"
              className="font-space font-medium hover:opacity-80 transition-opacity"
              style={{ color: "var(--mex-text)" }}
            >
              Launch<span className="text-emerald-400">X</span>
            </a>
          </div>

          {/* Center — license */}
          <span
            className="text-[13px]"
            style={{ color: "var(--mex-text-muted)" }}
          >
            MIT License
          </span>

          {/* Right — GitHub */}
          <a
            href="https://github.com/theDakshJaitly/mex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] transition-colors duration-200"
            style={{ color: "var(--mex-text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--mex-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--mex-text-muted)")
            }
          >
            <Star className="w-3.5 h-3.5" />
            Star on GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
