"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/ui/terminal";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function MexInstallation() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2
              className="text-section font-space mb-6"
              style={{ color: "var(--mex-text)" }}
            >
              Get started in
              <br />
              <span style={{ color: "var(--mex-primary)" }}>5 minutes</span>
            </h2>

            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Clone mex into .mex",
                  desc: "Clone the repo as a hidden directory in your project root.",
                },
                {
                  step: "2",
                  title: "Run setup.sh",
                  desc: "Auto-builds the CLI, pre-scans your codebase, and populates the scaffold.",
                },
                {
                  step: "3",
                  title: "Start building",
                  desc: "Your AI agent now has persistent project memory. Every session.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-mono font-medium"
                    style={{
                      border: "1.5px solid var(--mex-primary)",
                      color: "var(--mex-primary)",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <p
                      className="text-[15px] font-medium mb-0.5"
                      style={{ color: "var(--mex-text)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-[14px]"
                      style={{ color: "var(--mex-text-muted)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-8 text-[13px] leading-relaxed"
              style={{ color: "var(--mex-text-muted)" }}
            >
              Works with any codebase. JavaScript, Python, Go, Rust — if it has
              files, mex can scaffold it.
            </p>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="flex justify-center"
          >
            <Terminal className="w-full max-w-lg bg-[var(--mex-bg-3)] border-[var(--mex-border)]">
              <TypingAnimation className="font-mono">
                {"> git clone https://github.com/theDakshJaitly/mex.git .mex"}
              </TypingAnimation>

              <AnimatedSpan style={{ color: "var(--mex-text-muted)" }}>
                Cloning into &apos;.mex&apos;...
              </AnimatedSpan>

              <TypingAnimation className="font-mono">
                {"> bash .mex/setup.sh"}
              </TypingAnimation>

              <AnimatedSpan style={{ color: "var(--mex-text-muted)" }}>
                ◌ Building CLI...
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ CLI built
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-text-muted)" }}>
                ◌ Scanning codebase...
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ Detected: Next.js, TypeScript, Tailwind
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-text-muted)" }}>
                ◌ Populating scaffold...
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ context/architecture.md populated
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ context/stack.md populated
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ context/conventions.md populated
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ patterns/INDEX.md created
              </AnimatedSpan>

              <AnimatedSpan style={{ color: "var(--mex-primary)" }}>
                ✔ ROUTER.md configured
              </AnimatedSpan>

              <AnimatedSpan className="mt-1" style={{ color: "var(--mex-text)" }}>
                mex: drift score 100/100
              </AnimatedSpan>

              <TypingAnimation
                className="font-mono"
                style={{ color: "var(--mex-text-muted)" }}
              >
                Your scaffold is ready.
              </TypingAnimation>
            </Terminal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
