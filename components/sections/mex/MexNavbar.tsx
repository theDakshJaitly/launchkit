"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function MexNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Docs", href: "/mex/docs" },
    { label: "Changelog", href: "/mex/changelog" },
    { label: "Roadmap", href: "/mex/roadmap" },
    { label: "Contributing", href: "/mex/contributing" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-[var(--mex-border)] bg-[#050505]/80 backdrop-blur-md">
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

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
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

        {/* Right Actions & Mobile Toggle */}
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

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#a1a1aa] hover:text-white transition-colors p-1"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 h-[calc(100vh-4rem)] bg-[#050505] border-b border-[var(--mex-border)] md:hidden flex flex-col p-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-[18px] font-space font-medium transition-colors pb-4 border-b border-[#27272a]/50",
                      isActive
                        ? "text-[var(--mex-primary)]"
                        : "text-[#d4d4d8] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://github.com/theDakshJaitly/mex"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-[18px] font-space font-medium text-[#d4d4d8] hover:text-white pb-4 border-b border-[#27272a]/50"
              >
                <span>GitHub Repository</span>
                <Star className="w-5 h-5" />
              </a>
            </nav>
            
            <div className="mt-8">
              <span className="text-[13px] text-[#a1a1aa] font-medium inline-block border border-[#27272a] bg-[#111] px-2 py-1 rounded cursor-default">
                Version 0.2.0
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
