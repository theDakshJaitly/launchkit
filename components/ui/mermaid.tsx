"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rendered, setRendered] = useState<string>("");

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeVariables: {
        primaryColor: "rgba(65, 105, 225, 0.05)", // subtle royal blue bg
        primaryBorderColor: "rgba(65, 105, 225, 0.4)", // border
        primaryTextColor: "#d4d4d8", // zinc-300
        lineColor: "rgba(65, 105, 225, 0.8)", // bright blue lines
        fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        fontSize: "14px",
      },
      flowchart: {
        curve: "basis",
        nodeSpacing: 40,
        rankSpacing: 40,
      },
      securityLevel: "loose",
    });

    const renderChart = async () => {
      if (ref.current) {
        try {
          const id = "mermaid-svg-" + Math.random().toString(36).substr(2, 9);
          const { svg } = await mermaid.render(id, chart);
          setRendered(svg);
        } catch (e) {
          console.error("Mermaid failed to render", e);
        }
      }
    };
    renderChart();
  }, [chart]);

  return (
    <div className="w-full flex justify-center pb-4 pt-6 overflow-x-auto overflow-y-hidden">
      <div 
        ref={ref} 
        dangerouslySetInnerHTML={{ __html: rendered }} 
        suppressHydrationWarning 
        className="min-w-[850px] lg:min-w-full flex justify-center mermaid-wrapper text-[14px]" 
      />
    </div>
  );
}
