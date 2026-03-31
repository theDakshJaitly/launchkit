"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Docs", href: "/mex/docs" },
  { name: "Changelog", href: "/mex/changelog" },
  { name: "Roadmap", href: "/mex/roadmap" },
  { name: "Contributing", href: "/mex/contributing" },
  { name: "Contact", href: "/mex/contact" },
];

export function DocsNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ background: "rgba(0, 0, 0, 0.6)", borderColor: "var(--mex-border)" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/mex" className="flex items-center gap-3 active:scale-95 transition-transform">
          <img src="/mex-mascot.svg" alt="mex mascot" className="w-8 h-8 rounded-full" />
          <span className="font-space font-medium tracking-tight text-[16px]" style={{ color: "var(--mex-text)" }}>
            mex
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[14px] font-medium transition-colors rounded-full",
                  isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full z-[-1]"
                    style={{ background: "rgba(65, 105, 225, 0.15)", border: "1px solid rgba(65, 105, 225, 0.3)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
