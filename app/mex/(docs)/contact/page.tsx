import { Mail, Github, Twitter } from "lucide-react";

export const metadata = {
  title: "Contact — mex",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-space font-medium tracking-tight mb-4" style={{ color: "var(--mex-text)" }}>
          Contact
        </h1>
        <p className="text-[16px] leading-relaxed" style={{ color: "var(--mex-text-muted)" }}>
          Have a question, feature request, or just want to say hi? Reach out using the links below.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <a 
          href="mailto:thedakshjaitly@gmail.com" 
          className="flex items-center gap-4 p-5 rounded-xl border transition-colors hover:bg-[var(--mex-bg-3)]"
          style={{ borderColor: "var(--mex-border)", color: "var(--mex-text)" }}
        >
          <div className="w-10 h-10 rounded-full bg-[var(--mex-primary)]/10 text-[var(--mex-primary)] flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[15px]">Email</div>
            <div className="text-[13px] text-[var(--mex-text-muted)]">thedakshjaitly@gmail.com</div>
          </div>
        </a>

        <a 
          href="https://github.com/theDakshJaitly/mex/discussions" 
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border transition-colors hover:bg-[var(--mex-bg-3)]"
          style={{ borderColor: "var(--mex-border)", color: "var(--mex-text)" }}
        >
          <div className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10">
            <Github className="w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[15px]">GitHub Discussions</div>
            <div className="text-[13px] text-[var(--mex-text-muted)]">Ask the community</div>
          </div>
        </a>

        <a 
          href="https://x.com/daksh_jaitly" 
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border transition-colors hover:bg-[var(--mex-bg-3)] sm:col-span-2"
          style={{ borderColor: "var(--mex-border)", color: "var(--mex-text)" }}
        >
          <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 text-[#1DA1F2] flex items-center justify-center">
            <Twitter className="w-5 h-5" />
          </div>
          <div>
            <div className="font-medium text-[15px]">Twitter / X</div>
            <div className="text-[13px] text-[var(--mex-text-muted)]">@daksh_jaitly</div>
          </div>
        </a>
      </div>
    </main>
  );
}
