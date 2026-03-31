"use client";

import { motion } from "framer-motion";
import { Tree, Folder, File } from "@/components/ui/file-tree";
import { FileIcon } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const checkers = [
  { name: "path", catches: "Referenced file paths that don't exist on disk" },
  {
    name: "edges",
    catches: "YAML frontmatter edge targets pointing to missing files",
  },
  {
    name: "index-sync",
    catches: "patterns/INDEX.md out of sync with actual pattern files",
  },
  {
    name: "staleness",
    catches: "Scaffold files not updated in 30+ days or 50+ commits",
  },
  {
    name: "command",
    catches: "npm run X / make X referencing scripts that don't exist",
  },
  {
    name: "dependency",
    catches: "Claimed dependencies missing from package.json",
  },
  {
    name: "cross-file",
    catches: "Same dependency with different versions across files",
  },
  {
    name: "orphans",
    catches: "Context files not referenced in ROUTER.md or patterns",
  },
];

const commands = [
  { cmd: "mex check", desc: "Run all 8 checkers, output drift score and issues" },
  { cmd: "mex check --quiet", desc: "One-liner: mex: drift score 92/100 (1 warning)" },
  { cmd: "mex init", desc: "Pre-scan codebase, build structured brief for AI" },
  { cmd: "mex sync", desc: "Detect drift → build per-file prompts → AI fixes → verify" },
  { cmd: "mex sync --dry-run", desc: "Preview targeted prompts without executing" },
  { cmd: "mex watch", desc: "Install post-commit hook for automatic drift score" },
];

export function MexFeatures() {
  return (
    <section className="py-20 md:py-32" style={{ background: "var(--mex-bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* ── Drift Detection ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <h2
            className="text-section font-space mb-4"
            style={{ color: "var(--mex-text)" }}
          >
            Drift detection
          </h2>
          <p
            className="text-[16px] leading-relaxed mb-2"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Eight checkers validate your scaffold against the real codebase.
            Zero tokens. Zero AI.
          </p>
          <p
            className="text-[13px]"
            style={{ color: "var(--mex-text-muted)" }}
          >
            Scoring: starts at 100. Deducts −10 per error, −3 per warning, −1 per info.
          </p>
        </motion.div>

        {/* Checkers table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="rounded-xl overflow-hidden mb-20"
          style={{
            background: "var(--mex-bg-3)",
            border: "1px solid var(--mex-border)",
          }}
        >
          {checkers.map((checker, i) => (
            <div
              key={checker.name}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-5 py-3.5"
              style={{
                borderBottom:
                  i < checkers.length - 1
                    ? "1px solid var(--mex-border)"
                    : "none",
              }}
            >
              <span
                className="font-mono text-[14px] font-medium shrink-0 sm:w-28"
                style={{ color: "var(--mex-primary)" }}
              >
                {checker.name}
              </span>
              <span
                className="text-[14px]"
                style={{ color: "var(--mex-text-muted)" }}
              >
                {checker.catches}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Two-column: File structure + CLI commands ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Scaffold structure */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h3
              className="text-[20px] font-space font-medium mb-6"
              style={{ color: "var(--mex-text)" }}
            >
              Scaffold structure
            </h3>
            <div
              className="rounded-xl p-5"
              style={{
                background: "var(--mex-bg-3)",
                border: "1px solid var(--mex-border)",
              }}
            >
              <Tree
                initialExpandedItems={[
                  "project",
                  "mex",
                  "context",
                  "patterns",
                ]}
                className="text-[14px]"
                style={{ color: "var(--mex-text-muted)" }}
              >
                <Folder value="project" element="your-project/">
                  <File
                    value="claudemd"
                    fileIcon={
                      <FileIcon
                        className="size-4"
                        style={{ color: "var(--mex-text-muted)" }}
                      />
                    }
                  >
                    <span style={{ color: "var(--mex-text)" }}>CLAUDE.md</span>
                  </File>
                  <Folder value="mex" element=".mex/">
                    <File
                      value="router"
                      fileIcon={
                        <FileIcon
                          className="size-4"
                          style={{ color: "var(--mex-primary)" }}
                        />
                      }
                    >
                      <span style={{ color: "var(--mex-primary)" }}>
                        ROUTER.md
                      </span>
                    </File>
                    <File
                      value="agents"
                      fileIcon={
                        <FileIcon
                          className="size-4"
                          style={{ color: "var(--mex-primary)" }}
                        />
                      }
                    >
                      <span style={{ color: "var(--mex-primary)" }}>
                        AGENTS.md
                      </span>
                    </File>
                    <Folder value="context" element="context/">
                      <File value="arch">
                        <span style={{ color: "var(--mex-text)" }}>
                          architecture.md
                        </span>
                      </File>
                      <File value="stack">
                        <span style={{ color: "var(--mex-text)" }}>
                          stack.md
                        </span>
                      </File>
                      <File value="conventions">
                        <span style={{ color: "var(--mex-text)" }}>
                          conventions.md
                        </span>
                      </File>
                      <File value="decisions">
                        <span style={{ color: "var(--mex-text)" }}>
                          decisions.md
                        </span>
                      </File>
                      <File value="setup">
                        <span style={{ color: "var(--mex-text)" }}>
                          setup.md
                        </span>
                      </File>
                    </Folder>
                    <Folder value="patterns" element="patterns/">
                      <File value="index-pat">
                        <span style={{ color: "var(--mex-accent)" }}>
                          INDEX.md
                        </span>
                      </File>
                      <File value="wildcard">
                        <span style={{ color: "var(--mex-accent)" }}>
                          *.md
                        </span>
                      </File>
                    </Folder>
                    <File value="setup-sh">
                      <span style={{ color: "var(--mex-text-muted)" }}>
                        setup.sh
                      </span>
                    </File>
                    <File value="sync-sh">
                      <span style={{ color: "var(--mex-text-muted)" }}>
                        sync.sh
                      </span>
                    </File>
                    <File value="update-sh">
                      <span style={{ color: "var(--mex-text-muted)" }}>
                        update.sh
                      </span>
                    </File>
                  </Folder>
                  <Folder value="src" element="src/">
                    <File value="dots">
                      <span style={{ color: "var(--mex-text-muted)" }}>
                        ...
                      </span>
                    </File>
                  </Folder>
                </Folder>
              </Tree>
            </div>
          </motion.div>

          {/* CLI commands */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <h3
              className="text-[20px] font-space font-medium mb-6"
              style={{ color: "var(--mex-text)" }}
            >
              CLI commands
            </h3>
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "var(--mex-bg-3)",
                border: "1px solid var(--mex-border)",
              }}
            >
              {commands.map((item, i) => (
                <div
                  key={item.cmd}
                  className="px-5 py-3.5"
                  style={{
                    borderBottom:
                      i < commands.length - 1
                        ? "1px solid var(--mex-border)"
                        : "none",
                  }}
                >
                  <code
                    className="font-mono text-[14px] font-medium block mb-1"
                    style={{ color: "var(--mex-primary)" }}
                  >
                    {item.cmd}
                  </code>
                  <span
                    className="text-[13px]"
                    style={{ color: "var(--mex-text-muted)" }}
                  >
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
