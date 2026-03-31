export const metadata = {
  title: "Contributing — mex",
};

export default function ContributingPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12 border-b border-[var(--mex-border)] pb-8">
        <h1 className="text-4xl font-space font-semibold tracking-tight mb-4 text-white">
          Contributing
        </h1>
        <p className="text-[16px] leading-relaxed text-[#a1a1aa] mb-4">
          The key difference from your existing CONTRIBUTING.md is this version leads with where to help and gives more context on the codebase for someone who's never seen it.
        </p>
      </div>

      <div className="space-y-16">
        
        {/* Why Contribute */}
        <section>
          <h2 className="text-2xl font-space font-medium text-white mb-6">Why Contribute</h2>
          <div className="prose prose-invert max-w-none prose-p:text-[#a1a1aa] prose-p:leading-relaxed">
            <p>
              <code className="text-white bg-[#111] px-1 py-0.5 rounded border border-[#333] text-[13px] font-mono">mex</code> is early-stage and open source. The core works — drift detection, sync, scaffold population — but there's a lot of surface area to improve. If you use AI coding tools and have opinions about how agents should understand codebases, this is a good place to put those opinions into code.
            </p>
          </div>
        </section>

        {/* Where to Start */}
        <section>
          <h2 className="text-2xl font-space font-medium text-white mb-6">Where to Start</h2>
          
          <div className="bg-[#09090b] border border-[#27272a] rounded-xl overflow-hidden mb-6">
            <div className="bg-[#0a0a0c] border-b border-[#27272a] px-5 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <h3 className="text-[14px] font-medium text-white uppercase tracking-wide">Good First Contributions</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-4 text-[14px] text-[#a1a1aa]">
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">New manifest support</strong> — the dependency and version checkers currently only read package.json. Adding support for pyproject.toml, go.mod, Cargo.toml, requirements.txt, or Gemfile is a self-contained task with clear test cases.</span></li>
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">Smarter claim extraction</strong> — the markdown parser that extracts path, command, and dependency claims has edge cases. If you run <code className="text-white text-[12px] bg-[#111] border border-[#27272a] px-1 rounded">mex check</code> on your project and get a false positive, fixing it is a great first PR.</span></li>
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">Scaffold templates</strong> — starter scaffolds for specific stacks (Next.js, FastAPI, Rails, etc.) that make setup faster for projects using those stacks.</span></li>
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">Bug fixes</strong> — check the <a href="https://github.com/theDakshJaitly/mex/issues" target="_blank" rel="noopener noreferrer" className="text-[var(--mex-primary)] hover:underline border-b border-transparent hover:border-[var(--mex-primary)] transition-colors">Issues</a> page for anything tagged with <span className="text-[11px] font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 py-0.5 rounded">bug</span>.</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#09090b] border border-[#27272a] rounded-xl overflow-hidden">
            <div className="bg-[#0a0a0c] border-b border-[#27272a] px-5 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
              <h3 className="text-[14px] font-medium text-white uppercase tracking-wide">Larger Contributions</h3>
            </div>
            <div className="p-5">
              <ul className="space-y-4 text-[14px] text-[#a1a1aa]">
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">New drift checkers</strong> — if you can think of a way the scaffold can drift from reality that isn't already caught by the 8 existing checkers.</span></li>
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">Improvements to the sync brief builder</strong> — better context for the AI means better fixes.</span></li>
                <li className="flex gap-3"><span className="text-[#555] mt-0.5">•</span><span className="leading-relaxed"><strong className="text-[#d4d4d8] font-medium">Support for additional AI tools</strong> beyond Claude Code, Cursor, Windsurf, and Copilot.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section>
          <h2 className="text-2xl font-space font-medium text-white mb-6">Setup</h2>
          
          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-5 mb-8 overflow-x-auto shadow-inner">
            <pre className="font-mono text-[13px] text-[#c0caf5] leading-loose flex flex-col">
              <span><span className="text-pink-400">git</span> clone https://github.com/theDakshJaitly/mex.git</span>
              <span><span className="text-cyan-400">cd</span> mex</span>
              <span><span className="text-blue-400">npm</span> install</span>
              <span><span className="text-blue-400">npm</span> run build</span>
            </pre>
          </div>

          <h3 className="text-lg font-space font-medium text-white mb-4">Development commands:</h3>
          <div className="overflow-x-auto border border-[#27272a] rounded-xl bg-[#09090b]">
            <table className="w-full text-left border-collapse text-[14px]">
              <thead>
                <tr className="bg-[#111] border-b border-[#27272a]">
                  <th className="px-5 py-3 text-white font-medium font-space">Command</th>
                  <th className="px-5 py-3 text-white font-medium font-space">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#27272a]">
                <tr className="hover:bg-[#1a1a1c]/50 transition-colors">
                  <td className="px-5 py-3 font-mono text-[12px] text-[#c0caf5] whitespace-nowrap">npm run dev</td>
                  <td className="px-5 py-3 text-[#a1a1aa]">Watch mode — rebuilds on every save</td>
                </tr>
                <tr className="hover:bg-[#1a1a1c]/50 transition-colors">
                  <td className="px-5 py-3 font-mono text-[12px] text-[#c0caf5] whitespace-nowrap">npm run test:watch</td>
                  <td className="px-5 py-3 text-[#a1a1aa]">Runs tests in watch mode</td>
                </tr>
                <tr className="hover:bg-[#1a1a1c]/50 transition-colors">
                  <td className="px-5 py-3 font-mono text-[12px] text-[#c0caf5] whitespace-nowrap">npm test</td>
                  <td className="px-5 py-3 text-[#a1a1aa]">Full test suite (Vitest, 78 tests)</td>
                </tr>
                <tr className="hover:bg-[#1a1a1c]/50 transition-colors">
                  <td className="px-5 py-3 font-mono text-[12px] text-[#c0caf5] whitespace-nowrap">npm run typecheck</td>
                  <td className="px-5 py-3 text-[#a1a1aa]">TypeScript type checking without emitting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Structure */}
        <section>
          <h2 className="text-2xl font-space font-medium text-white mb-6">Project Structure</h2>
          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-5 overflow-x-auto shadow-inner">
            <pre className="font-mono text-[13px] text-[#a1a1aa] leading-loose flex flex-col min-w-max">
              <span className="text-[#555] mb-2"># Source Directory</span>
              <span><span className="text-blue-400 font-bold">src/</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">cli.ts</span>              <span className="text-[#555]">— CLI entry point (commander)</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">config.ts</span>           <span className="text-[#555]">— project/scaffold root detection</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">types.ts</span>            <span className="text-[#555]">— shared TypeScript types</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">reporter.ts</span>         <span className="text-[#555]">— terminal output formatting</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">markdown.ts</span>         <span className="text-[#555]">— markdown parsing and frontmatter extraction</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">git.ts</span>              <span className="text-[#555]">— git operations (staleness, diffs)</span></span>
              <span>{"  "}<span className="text-[#c0caf5]">watch.ts</span>            <span className="text-[#555]">— post-commit hook management</span></span>
              <span className="h-2"></span>
              <span>{"  "}<span className="text-emerald-400 font-bold">drift/</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">index.ts</span>          <span className="text-[#555]">— drift check orchestrator</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">claims.ts</span>         <span className="text-[#555]">— extracts path/command/dependency claims from markdown</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">scoring.ts</span>        <span className="text-[#555]">— computes 0-100 drift score</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">frontmatter.ts</span>    <span className="text-[#555]">— reads YAML frontmatter from scaffold files</span></span>
              <span>{"    "}<span className="text-yellow-400 font-bold">checkers/</span>         <span className="text-[#555]">— one file per checker, each returns DriftIssue[]</span></span>
              <span className="h-2"></span>
              <span>{"  "}<span className="text-amber-400 font-bold">scanner/</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">index.ts</span>          <span className="text-[#555]">— pre-scanner orchestrator</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">manifest.ts</span>       <span className="text-[#555]">— reads package.json / manifest files</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">entry-points.ts</span>   <span className="text-[#555]">— detects main entry files</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">folder-tree.ts</span>    <span className="text-[#555]">— builds directory structure</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">tooling.ts</span>        <span className="text-[#555]">— detects build tools, linters, CI config</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">readme.ts</span>         <span className="text-[#555]">— reads existing README</span></span>
              <span className="h-2"></span>
              <span>{"  "}<span className="text-purple-400 font-bold">sync/</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">index.ts</span>          <span className="text-[#555]">— sync loop (check → fix → verify → repeat)</span></span>
              <span>{"    "}<span className="text-[#c0caf5]">brief-builder.ts</span>  <span className="text-[#555]">— builds targeted prompts with file content + context</span></span>
            </pre>
          </div>
        </section>

        {/* Adding a New Checker */}
        <section>
          <h2 className="text-2xl font-space font-medium text-white mb-6">Adding a New Checker</h2>
          <div className="prose prose-invert max-w-none prose-ol:text-[#a1a1aa] prose-li:leading-relaxed mb-6">
            <ol className="list-decimal list-outside ml-4 space-y-2 marker:text-[#555] marker:font-mono">
              <li>Create a new file in <code className="text-[#c0caf5] bg-[#111] px-1 rounded border border-[#27272a] text-[12px]">src/drift/checkers/</code> (e.g., <code className="text-[#c0caf5] bg-[#111] px-1 rounded border border-[#27272a] text-[12px]">my-checker.ts</code>)</li>
              <li>Export a function that takes claims or file paths and returns <code className="text-[#c0caf5] bg-[#111] px-1 rounded border border-[#27272a] text-[12px]">DriftIssue[]</code></li>
              <li>Each issue needs: <code className="text-white text-[12px]">code</code> (unique string), <code className="text-white text-[12px]">severity</code> (error/warning/info), <code className="text-white text-[12px]">file</code>, <code className="text-white text-[12px]">line</code> (or null), <code className="text-white text-[12px]">message</code></li>
              <li>Wire it into <code className="text-[#c0caf5] bg-[#111] px-1 rounded border border-[#27272a] text-[12px]">src/drift/index.ts</code></li>
              <li>Add tests in <code className="text-[#c0caf5] bg-[#111] px-1 rounded border border-[#27272a] text-[12px]">test/</code></li>
            </ol>
            <p className="mt-6 text-[#888] italic text-[14px]">
              Look at any existing checker for the pattern — they're all self-contained and follow the same shape.
            </p>
          </div>
        </section>

        {/* PR Guidelines */}
        <section className="bg-[var(--mex-bg-3)] border border-[var(--mex-border)] p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--mex-primary)]" />
          <h2 className="text-2xl font-space font-medium text-white mb-6">PR Guidelines</h2>
          <ul className="space-y-3 text-[15px] text-[#d4d4d8] mb-8">
            <li className="flex gap-3"><span className="text-[#555] mt-1 text-xs">●</span><span>One fix or feature per PR — keep changes focused</span></li>
            <li className="flex gap-3"><span className="text-[#555] mt-1 text-xs">●</span><span>Add tests for new checkers or bug fixes when possible</span></li>
            <li className="flex gap-3"><span className="text-[#555] mt-1 text-xs">●</span><span>Test locally with a real project — run <code className="text-white font-mono text-[12px] bg-[#000] px-1 rounded border border-[#333]">mex check</code> against an actual codebase, not just unit tests</span></li>
            <li className="flex gap-3"><span className="text-[#555] mt-1 text-xs">●</span><span>Don't refactor surrounding code unless that's the point of the PR</span></li>
          </ul>

          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-5 mb-6">
            <h4 className="text-[14px] font-medium text-white uppercase tracking-wider mb-4 border-b border-[#27272a] pb-2">Before Submitting</h4>
            <div className="font-mono text-[13px] text-[#c0caf5] bg-[#111] p-3 rounded-lg border border-[#333] mb-4">
              <span className="text-blue-400">npm</span> run typecheck <span className="text-pink-400">&&</span> <span className="text-blue-400">npm</span> test <span className="text-pink-400">&&</span> <span className="text-blue-400">npm</span> run build
            </div>
            <p className="text-[13px] text-[#888]">
              CI runs these across Node 18, 20, and 22 on every PR. PRs use a template — please fill in the What, Why, How to Test, and Checklist sections.
            </p>
          </div>
        </section>

        {/* Resources & Support (Bugs, Features, Sec, License) */}
        <section className="grid md:grid-cols-2 gap-6 pt-8 border-t border-[#27272a]">
          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#333] transition-colors">
            <h3 className="text-[16px] font-space font-medium text-red-400 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Reporting Bugs
            </h3>
            <p className="text-[13px] leading-relaxed text-[#a1a1aa] mb-4">
              Include the output of <code className="text-white text-[11px] font-mono bg-[#111] px-1 rounded border border-[#333]">mex check --json</code> if it's a drift detection issue.
            </p>
            <a href="https://github.com/theDakshJaitly/mex/issues/new?template=bug_report.md" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--mex-primary)] hover:text-white transition-colors flex items-center gap-1 font-medium">
              Open Bug Report <span>→</span>
            </a>
          </div>

          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#333] transition-colors">
            <h3 className="text-[16px] font-space font-medium text-emerald-400 mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Feature Requests
            </h3>
            <p className="text-[13px] leading-relaxed text-[#a1a1aa] mb-4">
              Describe the problem you're trying to solve, not just the solution you want.
            </p>
            <a href="https://github.com/theDakshJaitly/mex/issues/new?template=feature_request.md" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--mex-primary)] hover:text-white transition-colors flex items-center gap-1 font-medium">
              Request Feature <span>→</span>
            </a>
          </div>

          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#333] transition-colors">
            <h3 className="text-[16px] font-space font-medium text-white mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              Security
            </h3>
            <p className="text-[13px] leading-relaxed text-[#a1a1aa] mb-2">
              Don't open a public issue for security vulnerabilities. Email us with a description, reproduction steps, and potential impact. You'll get an acknowledgment within 48 hours.
            </p>
            <a href="mailto:thedakshjaitly@gmail.com" className="text-[13px] text-[#c0caf5] hover:text-white transition-colors underline decoration-[#333] hover:decoration-white underline-offset-2">
              thedakshjaitly@gmail.com
            </a>
          </div>

          <div className="bg-[#09090b] border border-[#27272a] rounded-xl p-6 group hover:border-[#333] transition-colors">
            <h3 className="text-[16px] font-space font-medium text-white mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#888]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              License
            </h3>
            <p className="text-[13px] leading-relaxed text-[#a1a1aa] mb-4">
              By contributing, your work is licensed under the standard MIT license governing the <code className="text-white text-[12px] bg-[#111] px-1 rounded border border-[#333] font-mono">mex</code> repository.
            </p>
            <a href="https://github.com/theDakshJaitly/mex/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[var(--mex-primary)] hover:text-white transition-colors flex items-center gap-1 font-medium">
              View License <span>→</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
