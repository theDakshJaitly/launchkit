"use client";

import {
  Hero,
  Features,
  AIArchitecture,
  WhyLaunchX,
  Templates,
  HowItWorks,
  Pricing,
  FAQ,
  FinalCTA,
} from "@/components/sections";
import { Footer } from "@/components/layout/Footer";
import { VerticalDial } from "@/components/ui";

const dialSections = [
  { id: "hero", label: "Intro" },
  { id: "features", label: "Features" },
  { id: "ai-architecture", label: "MEX" },
  { id: "why-launchx", label: "Why LaunchX" },
  { id: "templates", label: "Templates" },
  { id: "how-it-works", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Fixed Vertical Dial — right side, visible on large screens */}
      <div className="hidden lg:flex fixed right-8 xl:right-12 top-1/2 -translate-y-1/2 z-50">
        <VerticalDial
          sections={dialSections}
          activeColor="#ffffff"
          inactiveColor="#555555"
          dialWidth={100}
          alignment="right"
          fadeDistance={2}
          itemSpacing={10}
          font={{
            fontSize: 13,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        />
      </div>

      <Hero />
      <Features />
      <AIArchitecture />
      <WhyLaunchX />
      <Templates />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <Footer />
    </main>
  );
}
