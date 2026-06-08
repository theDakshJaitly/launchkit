import Link from "next/link";
import { Terminal } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Confirmed - LaunchX",
  robots: { index: false, follow: false }
};

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 selection:bg-zinc-800">
      <div className="w-full max-w-lg bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-[#18181b] px-4 py-3 border-b border-zinc-800 flex items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/90"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/90"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/90"></div>
          </div>
          <span className="ml-auto text-zinc-500 font-mono text-[13px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            launchx — bash
          </span>
        </div>

        {/* Content */}
        <div className="p-8 sm:p-10">
          <p className="font-mono text-sm text-green-500 mb-6">
            &gt; payment.confirmed
          </p>

          <h1 className="text-3xl font-semibold text-white mb-3 tracking-tight">
            Thank you for your purchase!
          </h1>
          
          <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
            Your order is confirmed. Check your inbox — we've sent you everything you need to get started.
          </p>

          {/* Dark Card */}
          <div className="bg-[#18181b] border border-zinc-800/80 rounded-lg p-5 mb-8">
            <p className="text-zinc-400 text-[14px] leading-relaxed">
              Can't find the emails? Check your spam folder or contact us at{" "}
              <a href="mailto:launchxofficial@gmail.com" className="text-green-500 hover:text-green-400 transition-colors">
                launchxofficial@gmail.com
              </a>
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-zinc-800/80 pt-8 mt-2">
            <Link 
              href="/templates/general-saas"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-black text-sm font-medium transition-colors hover:bg-zinc-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
