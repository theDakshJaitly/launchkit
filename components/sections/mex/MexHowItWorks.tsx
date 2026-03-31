"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const steps = [
  {
    label: "Session starts",
    detail: "Agent wakes up with zero context.",
  },
  {
    label: "Agent loads CLAUDE.md",
    detail: "Auto-loaded by the tool. ~120 tokens. Points to .mex/",
  },
  {
    label: "CLAUDE.md → ROUTER.md",
    detail: "Routing table that maps task types to the right context file.",
  },
  {
    label: "ROUTER.md → context file",
    detail:
      "Architecture, stack, conventions, decisions, setup — only what's relevant.",
  },
  {
    label: "Context → pattern file",
    detail:
      "Task-specific guides with gotchas, steps, and verify checklists.",
  },
  {
    label: "Agent executes",
    detail: "Full project context. Minimal token cost. No hallucination.",
  },
];

export function MexHowItWorks() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16 max-w-2xl"
        >
          <h2
            className="text-section font-space mb-4"
            style={{ color: "var(--mex-text)" }}
          >
            How it works
          </h2>
          <p
            className="text-[16px] leading-relaxed mb-6"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Navigate, don&apos;t dump. The agent loads only the context it needs
            for the current task.
          </p>
          <div className="inline-flex flex-wrap items-center gap-3">
             <span className="text-[12px] font-medium px-3 py-1 rounded-full text-emerald-400 border border-emerald-500/20" style={{ background: "rgba(16, 185, 129, 0.1)" }}>
               Independent Benchmark: 10/10 Tests Passed
             </span>
             <span className="text-[12px] font-medium px-3 py-1 rounded-full text-blue-400 border border-blue-500/20" style={{ background: "rgba(59, 130, 246, 0.1)" }}>
               100/100 Perfect Drift Score
             </span>
          </div>
        </motion.div>

        {/* Step flow */}
        <div className="relative max-w-xl">
          {/* Vertical connecting line */}
          <div
            className="absolute left-5 top-5 bottom-5 w-px"
            style={{ background: "rgba(65, 105, 225, 0.15)" }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="relative flex items-start gap-5 py-5"
              >
                {/* Numbered circle */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-mono font-medium relative z-10"
                  style={{
                    border: "2px solid var(--mex-primary)",
                    color: "var(--mex-primary)",
                    background: "var(--mex-bg-1)",
                  }}
                >
                  {i + 1}
                </div>

                {/* Text */}
                <div className="pt-1.5">
                  <p
                    className="text-[16px] font-medium font-space mb-1"
                    style={{ color: "var(--mex-text)" }}
                  >
                    {step.label}
                  </p>
                  <p
                    className="text-[14px] leading-relaxed"
                    style={{ color: "var(--mex-text-muted)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
