"use client";

import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const BEFORE = `## Current Project State
<!-- What is working. What is not yet built.
     Known issues.
     Update this section whenever significant
     work is completed. -->`;

const AFTER = `## Current Project State

**Working:**
- Voice call pipeline (Twilio → STT → LLM → TTS → response)
- Multi-provider STT (ElevenLabs, Deepgram)
- RAG system with Supabase pgvector
- Streaming pipeline with barge-in support

**Not yet built:**
- Admin dashboard for call monitoring
- Automated test suite
- Multi-turn conversation memory across calls

**Known issues:**
- Sarvam AI STT bypass active — routing to
  ElevenLabs as fallback`;

const PATTERNS = `patterns/
├── add-api-client.md
├── add-language-support.md
├── debug-pipeline.md
└── add-rag-documents.md`;

export function MexBeforeAfter() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 max-w-2xl"
        >
          <h2
            className="text-section font-space mb-4"
            style={{ color: "var(--mex-text)" }}
          >
            Before &amp; after
          </h2>
          <p
            className="text-[16px] leading-relaxed"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Real output from running{" "}
            <code
              className="font-mono text-[14px] px-1.5 py-0.5 rounded"
              style={{
                background: "var(--mex-bg-3)",
                color: "var(--mex-primary)",
              }}
            >
              mex init
            </code>{" "}
            on a production Python/Flask project with Twilio, multi-provider AI
            pipeline.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="rounded-xl overflow-hidden"
            style={{
              background: "var(--mex-bg-3)",
              border: "1px solid var(--mex-border)",
            }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{ borderBottom: "1px solid var(--mex-border)" }}
            >
              <span
                className="text-[12px] font-medium font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(136, 136, 160, 0.1)",
                  color: "var(--mex-text-muted)",
                  border: "1px solid var(--mex-border)",
                }}
              >
                Before
              </span>
              <span
                className="text-[13px]"
                style={{ color: "var(--mex-text-muted)" }}
              >
                Scaffold after git clone
              </span>
            </div>
            <pre
              className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto"
              style={{ color: "var(--mex-text-muted)" }}
            >
              {BEFORE}
            </pre>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="rounded-xl overflow-hidden"
            style={{
              background: "var(--mex-bg-3)",
              border: "1px solid rgba(65, 105, 225, 0.25)",
            }}
          >
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{ borderBottom: "1px solid rgba(65, 105, 225, 0.15)" }}
            >
              <span
                className="text-[12px] font-medium font-mono px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(65, 105, 225, 0.1)",
                  color: "var(--mex-primary)",
                  border: "1px solid rgba(65, 105, 225, 0.3)",
                }}
              >
                After
              </span>
              <span
                className="text-[13px]"
                style={{ color: "var(--mex-text-muted)" }}
              >
                Scaffold after{" "}
                <code style={{ color: "var(--mex-primary)" }}>mex init</code>
              </span>
            </div>
            <pre
              className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto"
              style={{ color: "var(--mex-text)" }}
            >
              {AFTER}
            </pre>
          </motion.div>
        </div>

        {/* Patterns generated */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-6 rounded-xl p-5"
          style={{
            background: "var(--mex-bg-3)",
            border: "1px solid var(--mex-border)",
          }}
        >
          <p
            className="text-[13px] font-medium mb-3"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Patterns directory generated automatically:
          </p>
          <pre
            className="text-[13px] font-mono leading-relaxed"
            style={{ color: "var(--mex-accent)" }}
          >
            {PATTERNS}
          </pre>
        </motion.div>

        {/* Benchmark Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-6 space-y-4"
        >
          {/* Your Test */}
          <div 
            className="rounded-xl overflow-hidden"
            style={{
              background: "var(--mex-bg-3)",
              border: "1px solid var(--mex-border)",
            }}
          >
            <div className="px-5 py-3.5" style={{ borderBottom: "1px solid var(--mex-border)" }}>
              <p className="text-[14px] font-medium" style={{ color: "var(--mex-text)" }}>
                Your Test — Next.js SaaS project
              </p>
            </div>
            <div className="p-5 overflow-x-auto">
              <table className="w-full text-left border-collapse text-[13px] whitespace-nowrap">
                <thead>
                  <tr style={{ color: "var(--mex-text-muted)", borderBottom: "1px solid var(--mex-border)" }}>
                    <th className="pb-3 pr-4 font-normal">Scenario</th>
                    <th className="pb-3 pr-4 font-normal text-right">Standard Agent</th>
                    <th className="pb-3 pr-4 font-normal text-right">With mex Context</th>
                    <th className="pb-3 font-normal text-right">Token Reduction</th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--mex-text)" }}>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <td className="py-3 pr-4">Feature Refactor</td>
                    <td className="py-3 pr-4 font-mono text-right">~58,000</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~22,000</td>
                    <td className="py-3 font-mono text-right text-emerald-400">62%</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <td className="py-3 pr-4">Complex Bug Fix</td>
                    <td className="py-3 pr-4 font-mono text-right">~32,000</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~14,000</td>
                    <td className="py-3 font-mono text-right text-emerald-400">56%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Database Migration</td>
                    <td className="py-3 pr-4 font-mono text-right">~45,000</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~14,400</td>
                    <td className="py-3 font-mono text-right text-emerald-400">68%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Community Benchmark — OpenClaw */}
          <div 
            className="rounded-xl overflow-hidden"
            style={{
              background: "var(--mex-bg-3)",
              border: "1px solid var(--mex-border)",
            }}
          >
            <div className="px-5 py-3.5 flex items-center justify-between gap-4 flex-wrap" style={{ borderBottom: "1px solid var(--mex-border)" }}>
              <p className="text-[14px] font-medium" style={{ color: "var(--mex-text)" }}>
                Community Benchmark — OpenClaw <span className="text-[12px] font-normal ml-2 px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">independent</span>
              </p>
            </div>
            <div className="p-5 overflow-x-auto">
              <table className="w-full text-left border-collapse text-[13px] whitespace-nowrap">
                <thead>
                  <tr style={{ color: "var(--mex-text-muted)", borderBottom: "1px solid var(--mex-border)" }}>
                    <th className="pb-3 pr-4 font-normal">Scenario</th>
                    <th className="pb-3 pr-4 font-normal text-right">Before mex</th>
                    <th className="pb-3 pr-4 font-normal text-right">With mex</th>
                    <th className="pb-3 font-normal text-right">Savings</th>
                  </tr>
                </thead>
                <tbody style={{ color: "var(--mex-text)" }}>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <td className="py-3 pr-4">&quot;How does K8s work?&quot;</td>
                    <td className="py-3 pr-4 font-mono text-right">~3,300</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~1,450</td>
                    <td className="py-3 font-mono text-right text-emerald-400">56%</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <td className="py-3 pr-4">&quot;Open UFW port&quot;</td>
                    <td className="py-3 pr-4 font-mono text-right">~3,300</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~1,050</td>
                    <td className="py-3 font-mono text-right text-emerald-400">68%</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <td className="py-3 pr-4">&quot;Explain Docker&quot;</td>
                    <td className="py-3 pr-4 font-mono text-right">~3,300</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~1,100</td>
                    <td className="py-3 font-mono text-right text-emerald-400">67%</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Multi-context query</td>
                    <td className="py-3 pr-4 font-mono text-right">~3,300</td>
                    <td className="py-3 pr-4 font-mono text-right" style={{ color: "var(--mex-primary)" }}>~1,650</td>
                    <td className="py-3 font-mono text-right text-emerald-400">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-5 pb-4">
              <p className="text-[12px] leading-relaxed" style={{ color: "var(--mex-text-muted)" }}>
                Independently tested by a community member on OpenClaw across 10 structured scenarios. 10/10 passed, drift score 100/100. Ubuntu 24.04 homelab.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
