import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mex — Persistent project memory for AI agents",
  description:
    "AI agents forget everything between sessions. mex gives them permanent, navigable project memory via a markdown scaffold with drift detection.",
  openGraph: {
    title: "mex — Persistent project memory for AI agents",
    description:
      "Structured markdown scaffold + CLI that keeps your AI agent's project knowledge honest.",
    siteName: "mex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mex — Persistent project memory for AI agents",
    description:
      "Structured markdown scaffold + CLI that keeps your AI agent's project knowledge honest.",
  },
};

import { MexNavbar } from "@/components/sections/mex";

export default function MexLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mex-page">
      <MexNavbar />
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}
