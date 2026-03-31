"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ASCII_ROCKET = `       !
       !
       ^
      / \\
     /___\\
    |=   =|
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
    |     |
   /|##!##|\\
  / |##!##| \\
 /  |##!##|  \\
|  / ^ | ^ \\  |
| /  ( | )  \\ |
|/   ( | )   \\|
    ((   ))
   ((  :  ))
   ((  :  ))
    ((   ))
     (( ))
      ( )
       .
       .
       .`;

export function MexUpsell() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-[var(--mex-border)]" style={{ background: "var(--mex-bg-1)" }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="bg-[#09090b] border border-[#27272a] rounded-2xl overflow-hidden flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 lg:p-16 relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />

          {/* Left: Content */}
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
              <span className="text-[13px] font-mono font-medium text-emerald-400 tracking-wide uppercase">
                LaunchX Boilerplates
              </span>
            </div>
            
            <h2 className="text-3xl font-space font-medium text-white mb-5 leading-tight">
              Skip the setup.<br />Get <span className="text-[var(--mex-primary)] font-mono text-[28px]">mex</span> pre-configured.
            </h2>
            
            <p className="text-[15px] leading-relaxed text-[#a1a1aa] mb-4">
              Configuring the perfect <code className="font-mono text-[13px] px-1 bg-[#111] border border-[#27272a] rounded text-[#d4d4d8]">.mex/</code> context for a complex Next.js application takes hours of writing, testing, and fine-tuning. We built LaunchX so you don't have to.
            </p>
            
            <p className="text-[15px] leading-relaxed text-[#a1a1aa] mb-8">
              LaunchX is a collection of premium Next.js boilerplates (pre-built with Stripe, Auth, PostgreSQL, and Resend) that feature <strong>production-grade memory baked in from day one</strong>. 
              Your AI instantly understands your auth flows and database architecture without you writing a single prompt.
            </p>

            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 font-medium text-[14px] px-6 py-2.5 rounded-lg border border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-200"
            >
              Explore LaunchX Templates
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right: ASCII Art */}
          <div className="hidden lg:flex flex-col items-center justify-center opacity-40 shrink-0 pr-8">
            <motion.pre
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[10px] leading-tight font-mono text-emerald-500 select-none"
            >
              {ASCII_ROCKET}
            </motion.pre>
          </div>
        </div>

      </div>
    </section>
  );
}
