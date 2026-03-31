"use client";

import {
  MexHero,
  MexProblem,
  MexHowItWorks,
  MexFeatures,
  MexBeforeAfter,
  MexInstallation,
  MexWorksWith,
  MexFooter,
  MexNavbar,
  MexUpsell,
} from "@/components/sections/mex";

export default function MexPage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: "var(--mex-bg-1)",
        color: "var(--mex-text)",
      }}
    >
      <MexHero />
      <MexProblem />
      <MexHowItWorks />
      <MexFeatures />
      <MexBeforeAfter />
      <MexUpsell />
      <MexInstallation />
      <MexWorksWith />
      <MexFooter />
    </main>
  );
}
