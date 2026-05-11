"use client";

import { useEffect, useState, useTransition } from "react";
import { Github, Lock } from "lucide-react";

const BASE_PRICE = 149;
const ADD_ON_PRICE = 14.99;

export function CheckoutCard({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [addLaunchpadOS, setAddLaunchpadOS] = useState(false);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      try {
        const response = await fetch("/api/create-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            addLaunchpadOS,
            name,
            email,
            github: githubUsername,
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          setError(data?.error || "Failed to create checkout session.");
          return;
        }

        const data = await response.json();
        if (data?.checkoutUrl) {
          window.location.href = data.checkoutUrl;
          return;
        }

        setError("Failed to create checkout session.");
      } catch (err) {
        console.error("Checkout error:", err);
        setError("Failed to create payment. Please try again.");
      }
    });
  };

  useEffect(() => {
    const handleAdd = () => setAddLaunchpadOS(true);
    window.addEventListener("launchpad:add", handleAdd);
    return () => window.removeEventListener("launchpad:add", handleAdd);
  }, []);

  const totalPrice = addLaunchpadOS ? (BASE_PRICE + ADD_ON_PRICE).toFixed(2) : BASE_PRICE.toFixed(0);
  const buttonLabel = pending ? "Processing..." : `Proceed to checkout — $${totalPrice}`;

  const inputClasses =
    "w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-3.5 py-2.5 text-white text-[13px] placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/40 focus:bg-white/[0.05] transition-all duration-200";

  return (
    <div
      className={`rounded-2xl border border-white/[0.08] p-4 backdrop-blur-xl ${className}`}
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.6) 100%)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-zinc-400 text-[12px] font-medium uppercase tracking-wider">One-time purchase</span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-medium uppercase tracking-wider">
          50% off
        </span>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-zinc-600 line-through text-[15px]">$300</span>
        <span className="text-[30px] font-semibold text-white tracking-tight">$149</span>
        <span className="text-zinc-600 text-[12px]">/lifetime</span>
      </div>

      <div className="h-px bg-white/[0.06] mb-4" />

      <form onSubmit={handleSubmit} className="space-y-2">
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

      <div className="h-px bg-white/[0.06] my-3" />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-wider">🎁 Bonus</span>
        </div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[13px] text-zinc-200">LaunchPad OS — Indie Founder Workspace</p>
            <p className="text-[11px] text-zinc-500">Notion workspace for indie founders.</p>
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById("launchpad-os");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="inline-flex items-center gap-1 text-[12px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-2"
            >
              Learn more
              <span aria-hidden="true">↓</span>
            </button>
          </div>
          <span className="text-[12px] text-zinc-300">$14.99</span>
        </div>

        <label className="inline-flex items-center gap-2 text-[12px] text-zinc-300 select-none">
          <input
            type="checkbox"
            checked={addLaunchpadOS}
            onChange={(e) => setAddLaunchpadOS(e.target.checked)}
            className="h-3.5 w-3.5 rounded border border-white/20 bg-transparent text-emerald-500 focus:ring-emerald-500/30"
          />
          Add to my order
        </label>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Instant access after purchase
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Lifetime updates to all your templates
        </div>
        <div className="flex items-center gap-2 text-[11px] text-zinc-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500" />
          Commercial license for unlimited projects
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-2.5 rounded-lg bg-white text-black text-[13px] font-semibold hover:bg-zinc-200 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-3"
      >
        {buttonLabel}
      </button>

      <div className="flex items-center justify-center gap-1.5 mt-2.5">
        <Lock className="w-3 h-3 text-zinc-600" />
        <span className="text-zinc-600 text-[11px]">Secure checkout via DodoPayments</span>
      </div>
      </form>

      <p className="text-zinc-700 text-[10px] mt-3 text-center">
        By purchasing you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2 hover:text-zinc-500 transition-colors">Terms</a>
        {" & "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-zinc-500 transition-colors">Privacy</a>.
      </p>
    </div>
  );
}
