"use client";

import { motion } from "framer-motion";
import { Wind } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const tools = [
  {
    name: "Claude Code",
    config: "CLAUDE.md",
    icon: (
      <img
        src="https://cdn.simpleicons.org/claude/white"
        alt="Claude"
        className="h-5 w-5 opacity-80"
      />
    ),
  },
  {
    name: "Cursor",
    config: ".cursorrules",
    icon: (
      <img
        src="https://cdn.simpleicons.org/cursor/white"
        alt="Cursor"
        className="h-5 w-5 opacity-80"
      />
    ),
  },
  {
    name: "Windsurf",
    config: ".windsurfrules",
    icon: <Wind className="h-5 w-5 opacity-80" style={{ color: "var(--mex-text)" }} />,
  },
  {
    name: "GitHub Copilot",
    config: "copilot-instructions.md",
    icon: (
      <img
        src="https://cdn.simpleicons.org/githubcopilot/white"
        alt="GitHub Copilot"
        className="h-5 w-5 opacity-80"
      />
    ),
  },
];

export function MexWorksWith() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-12"
        >
          <h2
            className="text-section font-space mb-4"
            style={{ color: "var(--mex-text)" }}
          >
            Works with your tools
          </h2>
          <p
            className="text-[16px]"
            style={{ color: "var(--mex-text-muted)" }}
          >
            All config files contain identical content.{" "}
            <code
              className="font-mono text-[14px] px-1.5 py-0.5 rounded"
              style={{
                background: "var(--mex-bg-3)",
                color: "var(--mex-primary)",
              }}
            >
              setup.sh
            </code>{" "}
            asks which tool you use.
          </p>
        </motion.div>

        {/* Tool cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="rounded-xl px-5 py-5 flex flex-col items-center gap-3 text-center transition-colors duration-300"
              style={{
                background: "var(--mex-bg-3)",
                border: "1px solid var(--mex-border)",
              }}
            >
              {tool.icon}
              <div>
                <p
                  className="text-[14px] font-medium mb-1"
                  style={{ color: "var(--mex-text)" }}
                >
                  {tool.name}
                </p>
                <p
                  className="text-[12px] font-mono"
                  style={{ color: "var(--mex-text-muted)" }}
                >
                  {tool.config}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
