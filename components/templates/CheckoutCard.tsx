"use client";

import { useState, useTransition } from "react";
import { createPayment } from "@/actions/create-payment";
import { Github, Lock } from "lucide-react";

const PRODUCT_ID = process.env.NEXT_PUBLIC_DODO_PRODUCT_ID || "";

export function CheckoutCard({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      const result = await createPayment({
        name,
        email,
        githubUsername,
        productId: PRODUCT_ID,
      });

      if ("error" in result && result.error) {
        setError(result.error);
        return;
      }

      if ("checkout_url" in result && result.checkout_url) {
        window.location.href = result.checkout_url;
      }
    });
  };

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2.5 text-white text-[13px] placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <div
      className={`rounded-2xl border border-white/[0.08] p-5 backdrop-blur-xl ${className}`}
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.6) 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-zinc-400 text-[12px] font-medium uppercase tracking-wider">One-time purchase</span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium uppercase tracking-wider">
          50% off
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-5">
        <span className="text-zinc-600 line-through text-[15px]">$300</span>
        <span className="text-[30px] font-semibold text-white tracking-tight">$149</span>
        <span className="text-zinc-600 text-[12px]">/lifetime</span>
      </div>

      <div className="h-px bg-white/[0.06] mb-5" />

      <form onSubmit={handleSubmit} className="space-y-2.5">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClasses}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={inputClasses}
        />
        <div className="relative">
          <Github className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
          <input
            type="text"
            placeholder="GitHub username"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            required
            className={`${inputClasses} pl-9`}
          />
        </div>

        {error && (
          <p className="text-red-400 text-[12px] px-1">{error}</p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full py-2.5 rounded-lg bg-white text-black text-[13px] font-semibold hover:bg-zinc-200 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-1"
        >
          {pending ? "Processing..." : "Get Template — $149"}
        </button>
      </form>

      <div className="flex items-center justify-center gap-1.5 mt-3.5">
        <Lock className="w-3 h-3 text-zinc-600" />
        <span className="text-zinc-600 text-[11px]">Secure checkout via DodoPayments</span>
      </div>

      <div className="h-px bg-white/[0.06] my-4" />

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Instant GitHub repo access after payment
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Lifetime updates included
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Commercial license for unlimited projects
        </div>
      </div>

      <p className="text-zinc-700 text-[10px] mt-4 text-center">
        By purchasing you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2 hover:text-zinc-500 transition-colors">Terms</a>
        {" & "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-500 transition-colors">Privacy</a>.
      </p>
    </div>
  );
}
