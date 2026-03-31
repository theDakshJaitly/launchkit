"use client";

import { Star } from "lucide-react";
import Link from "next/link";

export function MexFooter() {
  return (
    <footer style={{ background: "var(--mex-bg-2)", borderTop: "1px solid var(--mex-border)" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & Copyright */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 text-[14px] mb-4">
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
            <p className="text-[14px] text-[#71717a] max-w-sm leading-relaxed mb-6">
              Persistent, navigable project memory via a structured markdown scaffold. The essential AI coding framework.
            </p>
            <div className="text-[13px] text-[#52525b]">
              MIT License &copy; {new Date().getFullYear()} LaunchX
            </div>
          </div>

          {/* Product */}
          <div className="col-span-1">
            <h4 className="text-[14px] font-space font-medium text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mex/docs" className="text-[13px] text-[#a1a1aa] hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link href="/mex/roadmap" className="text-[13px] text-[#a1a1aa] hover:text-white transition-colors">Roadmap</Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-span-1">
            <h4 className="text-[14px] font-space font-medium text-white mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/mex/changelog" className="text-[13px] text-[#a1a1aa] hover:text-white transition-colors">Changelog</Link>
              </li>
              <li>
                <Link href="/mex/contributing" className="text-[13px] text-[#a1a1aa] hover:text-white transition-colors">Contributing</Link>
              </li>
              <li>
                <a 
                  href="https://github.com/theDakshJaitly/mex"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[13px] text-[#a1a1aa] hover:text-white transition-colors"
                >
                  GitHub <Star className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
