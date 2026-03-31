export const metadata = {
  title: "Roadmap — mex",
};

export default function RoadmapPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12 border-b border-[var(--mex-border)] pb-8">
        <h1 className="text-4xl font-space font-semibold tracking-tight mb-4 text-white">
          Roadmap
        </h1>
        <p className="text-[16px] leading-relaxed text-[#a1a1aa] mb-4">
          Short, directional, no timelines. Reads as "here's where we're headed" not "here's our backlog."
        </p>
      </div>

      <div className="space-y-16">
        
        {/* NOW */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)] animate-pulse" />
            <h2 className="text-2xl font-space font-medium text-white">Now</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors">
              <h3 className="text-[15px] font-medium text-white mb-2">Universal stack support</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                mex works with any stack today, but the CLI's dependency and version checking only reads package.json. Expanding to pyproject.toml, go.mod, Cargo.toml, requirements.txt, and Gemfile so drift detection is equally strong regardless of language.
              </p>
            </div>
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors">
              <h3 className="text-[15px] font-medium text-white mb-2">Stronger scaffold growth</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                The GROW step is where mex compounds over time. Making it harder to skip and more consistent across tools so the scaffold reliably gets smarter after every task.
              </p>
            </div>
          </div>
        </section>

        {/* NEXT */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
            <h2 className="text-2xl font-space font-medium text-white">Next</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors">
              <h3 className="text-[15px] font-medium text-white mb-2">CI as a guardrail</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                Drift score as a first-class CI check. A GitHub Action that blocks merges when the scaffold falls out of sync with the codebase, the same way linting or tests block broken code.
              </p>
            </div>
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors">
              <h3 className="text-[15px] font-medium text-white mb-2">Stack-aware setup</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                Pre-built starter scaffolds for common stacks (Next.js, FastAPI, Rails, Go, etc.) so the AI starts from a scaffold that already understands the idioms of your stack, not a blank template.
              </p>
            </div>
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors">
              <h3 className="text-[15px] font-medium text-white mb-2">mex diff</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                A focused view of what changed in the scaffold since last commit. Makes it easy to review what the GROW step produced and catch low-quality updates before they stick.
              </p>
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
            <h2 className="text-2xl font-space font-medium text-white">Future</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors opacity-80 hover:opacity-100">
              <h3 className="text-[15px] font-medium text-white mb-2">Team scaffolds</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                mex today is single-developer. The vision is scaffolds that work across teams — multiple people contributing patterns, updating context, and resolving conflicts naturally. The scaffold becomes shared institutional knowledge, not one person's notes.
              </p>
            </div>
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors opacity-80 hover:opacity-100">
              <h3 className="text-[15px] font-medium text-white mb-2">Cross-session learning</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                Right now the scaffold grows within sessions through the GROW step. The next level is the scaffold learning across sessions — identifying which patterns get used most, which context files drift fastest, and surfacing that to developers so they know where to invest attention.
              </p>
            </div>
            <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#3f3f46] transition-colors opacity-80 hover:opacity-100">
              <h3 className="text-[15px] font-medium text-white mb-2">Agent-native workflows</h3>
              <p className="text-[14px] leading-relaxed text-[#a1a1aa]">
                As AI agents become more autonomous, mex becomes the persistent memory layer they operate on. Agents that can run mex check themselves, trigger sync when they detect drift during a task, and grow the scaffold without being told to. The scaffold stops being something the developer manages and becomes something the agent maintains.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
