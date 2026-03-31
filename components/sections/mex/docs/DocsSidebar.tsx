"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

  return (
    <aside className="w-64 shrink-0 hidden lg:block border-r py-0" style={{ borderColor: "var(--mex-border)" }}>
      <div className="sticky top-16 pt-10 pb-12 pr-6 max-h-[calc(100vh-4rem)] overflow-y-auto w-full">
        <h3 className="font-space font-medium text-[15px] mb-4 tracking-wide" style={{ color: "var(--mex-text)" }}>
          Documentation
        </h3>
        <nav className="space-y-1.5 flex flex-col pb-10">
          {sections.map((sec) => {
            const isSubActive = sec.subsections?.some(s => s.id === activeSection);
            const isParentActive = activeSection === sec.id || isSubActive;
            
            return (
              <div key={sec.id} className="flex flex-col">
                <Link
                  href={`#${sec.id}`}
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
    </aside>
  );
}
