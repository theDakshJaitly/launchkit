"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function MexNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Docs", href: "/mex/docs" },
    { label: "Changelog", href: "/mex/changelog" },
    { label: "Roadmap", href: "/mex/roadmap" },
    { label: "Contributing", href: "/mex/contributing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--mex-border)] bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/mex" className="font-mono font-medium text-[var(--mex-primary)] hover:opacity-80 transition-opacity">
            mex
          </Link>
          <span className="text-[13px] text-[#555] select-none">/</span>
          <span className="text-[13px] text-[#a1a1aa] font-medium hidden sm:inline-block border border-[#27272a] bg-[#111] px-1.5 py-0.5 rounded cursor-default">
            v0.2.0
          </span>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[14px] font-medium transition-colors",
                  isActive
                    ? "text-[var(--mex-primary)]"
                    : "text-[#a1a1aa] hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/theDakshJaitly/mex"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[13px] text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Star className="w-4 h-4" />
            <span className="hidden lg:inline-block">Star on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
