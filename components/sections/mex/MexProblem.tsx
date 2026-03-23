"use client";

import { motion } from "framer-motion";
import { Brain, Flame, GitBranch } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const problems = [
  {
    icon: Brain,
    title: "Cold starts",
    description:
      "Every session starts cold. The agent has no idea what it built yesterday, what conventions you agreed on, or what broke last week.",
  },
  {
    icon: Flame,
    title: "Context flooding",
    description:
      "Developers compensate by stuffing everything into CLAUDE.md — flooding the context window, burning tokens, and degrading attention.",
  },
  {
    icon: GitBranch,
    title: "Doc drift",
    description:
      "The project changes and nobody updates the docs. The agent's understanding drifts from reality. Silently.",
  },
];

export function MexProblem() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-2)" }}>
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
            The problem is amnesia
          </h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Your AI agent is brilliant — for exactly one session. Then it forgets
            everything and you start over.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="rounded-xl p-6 transition-colors duration-300"
              style={{
                background: "var(--mex-bg-3)",
                border: "1px solid var(--mex-border)",
              }}
            >
              <problem.icon
                className="w-6 h-6 mb-4"
                style={{ color: "var(--mex-accent)" }}
              />
              <h3
                className="text-[17px] font-medium font-space mb-2"
                style={{ color: "var(--mex-text)" }}
              >
                {problem.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "var(--mex-text-muted)" }}
              >
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-16 rounded-xl p-8 md:p-10"
          style={{
            background: "rgba(65, 105, 225, 0.05)",
            border: "1px solid rgba(65, 105, 225, 0.15)",
          }}
        >
          <p
            className="text-[17px] leading-relaxed max-w-3xl"
            style={{ color: "var(--mex-text)" }}
          >
            <span className="font-medium" style={{ color: "var(--mex-primary)" }}>
              mex
            </span>{" "}
            is a structured markdown scaffold with a CLI that keeps it honest.
            The scaffold gives agents persistent project knowledge through
            navigable files — architecture, conventions, decisions, patterns. The
            CLI detects when those files drift from the actual codebase, and
            targets AI to fix only what&apos;s broken.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
