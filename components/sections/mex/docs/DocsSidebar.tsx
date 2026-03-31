"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ListTree, X } from "lucide-react";

const sections = [
  { 
    id: "installation", 
    label: "1. Installation",
    subsections: [
      { id: "prerequisites", label: "Prerequisites" },
      { id: "setup", label: "Setup" },
      { id: "using-mex", label: "Using the mex command" },
      { id: "updating", label: "Updating mex" },
      { id: "contributors", label: "For contributors" },
    ]
  },
  { 
    id: "how-it-works", 
    label: "2. How It Works",
    subsections: [
      { id: "the-problem", label: "The Problem" },
      { id: "the-solution", label: "The Solution" },
      { id: "navigation-flow", label: "Navigation Flow" },
      { id: "scaffold-files", label: "The Scaffold Files" },
      { id: "behavioural-contract", label: "Behavioural Contract" },
      { id: "edge-system", label: "Edge System" },
      { id: "domain-context", label: "Domain Context" },
    ]
  },
  {
    id: "cli-commands",
    label: "3. CLI Commands",
    subsections: [
      { id: "cli-check", label: "mex check" },
      { id: "cli-sync", label: "mex sync" },
      { id: "cli-init", label: "mex init" },
      { id: "cli-watch", label: "watch & others" },
      { id: "cli-shell", label: "Shell Scripts" }
    ]
  },
  {
    id: "drift-detection",
    label: "4. Drift Detection",
    subsections: [
      { id: "what-is-drift", label: "What Is Drift" },
      { id: "drift-extraction", label: "1. Claim Extraction" },
      { id: "drift-checkers", label: "2. Checker Execution" },
      { id: "drift-scoring", label: "3. Scoring" },
      { id: "drift-contributors", label: "For Contributors" }
    ]
  },
  {
    id: "sync",
    label: "5. Sync",
    subsections: [
      { id: "what-sync-does", label: "What Sync Does" },
      { id: "sync-cli", label: "CLI Sync" },
      { id: "how-briefs-are-built", label: "How Briefs Are Built" },
      { id: "interactive-shell-script", label: "Interactive Shell Script" },
      { id: "sync-filtering-logic", label: "Filtering Logic" },
      { id: "sync-contributors", label: "For Contributors" }
    ]
  },
  {
    id: "shell-scripts",
    label: "6. Shell Scripts",
    subsections: [
      { id: "setup-sh", label: "setup.sh" },
      { id: "sync-sh", label: "sync.sh" },
      { id: "update-sh", label: "update.sh" },
      { id: "visualize-sh", label: "visualize.sh" }
    ]
  },
  {
    id: "multi-tool-setup",
    label: "7. Multi-Tool Setup",
    subsections: [
      { id: "multi-tool-how-it-works", label: "How It Works" },
      { id: "multi-tool-supported", label: "Supported Tools" },
      { id: "multi-tool-auto", label: "Automatic Setup" },
      { id: "multi-tool-manual", label: "Manual Setup" },
      { id: "multi-tool-unlisted", label: "Using a Tool Not Listed" },
      { id: "multi-tool-sync", label: "Keeping Config Files in Sync" }
    ]
  },
  {
    id: "scaffold-structure",
    label: "8. Scaffold Structure",
    subsections: [
      { id: "scaffold-yaml", label: "YAML Frontmatter" },
      { id: "scaffold-agents", label: "AGENTS.md" },
      { id: "scaffold-router", label: "ROUTER.md" },
      { id: "scaffold-context", label: "Context Files" },
      { id: "scaffold-domain", label: "Domain-Specific Context" },
      { id: "scaffold-infrastructure", label: "Infrastructure Files" }
    ]
  },
];

export function DocsSidebar() {
  const [activeSection, setActiveSection] = useState<string>("installation");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
      if (section.subsections) {
        section.subsections.forEach((sub) => {
          const subEl = document.getElementById(sub.id);
          if (subEl) observer.observe(subEl);
        });
      }
    });

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling when mobile sidebar is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={cn("w-full h-full pb-12", isMobile ? "px-6 pt-6" : "pt-10 pr-6 overflow-y-auto max-h-[calc(100vh-4rem)]")}>
      {isMobile && (
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#27272a]">
          <h3 className="font-space font-medium text-[16px] text-white">
            Documentation
          </h3>
          <button onClick={() => setIsMobileOpen(false)} className="text-[#a1a1aa] hover:text-white transition-colors p-2 bg-[#111] rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      {!isMobile && (
        <h3 className="font-space font-medium text-[15px] mb-4 tracking-wide" style={{ color: "var(--mex-text)" }}>
          Documentation
        </h3>
      )}
      <nav className="space-y-1.5 flex flex-col pb-10">
        {sections.map((sec) => {
          const isSubActive = sec.subsections?.some(s => s.id === activeSection);
          const isParentActive = activeSection === sec.id || isSubActive;
          
          return (
            <div key={sec.id} className="flex flex-col">
              <Link
                href={`#${sec.id}`}
                onClick={() => isMobile && setIsMobileOpen(false)}
                className={cn(
                  "text-[14px] px-3 py-1.5 rounded-md transition-colors w-full border border-transparent flex items-center gap-2",
                  isParentActive
                    ? "font-medium"
                    : "hover:bg-[var(--mex-bg-3)]"
                )}
                style={
                  isParentActive
                    ? {
                        background: "rgba(65, 105, 225, 0.1)",
                        color: "var(--mex-primary)",
                        borderColor: "rgba(65, 105, 225, 0.2)"
                      }
                    : {
                        color: "var(--mex-text-muted)"
                      }
                }
              >
                <div 
                  className={cn(
                    "w-1 h-3 rounded-full transition-colors",
                    isParentActive ? "bg-[var(--mex-primary)]" : "bg-transparent"
                  )}
                />
                {sec.label}
              </Link>
              
              {sec.subsections && (
                <div className="flex flex-col mt-1 mb-2 ml-[22px] border-l border-[var(--mex-border)] pl-3 space-y-1">
                  {sec.subsections.map((sub) => (
                    <Link
                      key={sub.id}
                      href={`#${sub.id}`}
                      onClick={() => isMobile && setIsMobileOpen(false)}
                      className={cn(
                        "text-[13px] py-1 px-2 rounded-md transition-colors w-full",
                        activeSection === sub.id
                          ? "text-[var(--mex-primary)] font-medium"
                          : "text-[var(--mex-text-muted)] hover:text-[var(--mex-text)] hover:bg-[var(--mex-bg-3)]"
                      )}
                      style={
                        activeSection === sub.id
                          ? { background: "rgba(65, 105, 225, 0.08)" }
                          : {}
                      }
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-64 shrink-0 hidden lg:block border-r py-0 sticky top-16" style={{ borderColor: "var(--mex-border)" }}>
        <SidebarContent />
      </aside>

      {/* Mobile Floating Action Button */}
      <button 
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-[var(--mex-primary)] text-white p-4 rounded-full shadow-lg shadow-[var(--mex-primary)]/25 flex items-center justify-center border border-[var(--mex-primary-light)]"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open Documentation Sidebar"
      >
        <ListTree className="w-6 h-6" />
      </button>

      {/* Mobile Side Sheet */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-[#000]/60 backdrop-blur-sm z-[110]"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 right-0 w-[85vw] sm:w-[350px] bg-[#050505] border-l border-[#27272a] shadow-2xl z-[120] overflow-y-auto"
            >
              <SidebarContent isMobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
