"use client";

import { motion } from "framer-motion";
import {
    Layers,
    FileCode2,
    Terminal,
    MessageSquareCode,
    RefreshCw,
    Users,
    Shield,
    FileText,
    Rocket,
} from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const heroFeatures = [
    {
        icon: Layers,
        title: "5 Production-Ready Templates",
        description:
            "AI Wrapper SaaS, Chrome Extension, Landing Page, Mobile App, and Dashboard — each with auth, payments, and database pre-configured.",
    },
    {
        icon: FileCode2,
        title: ".cursorrules That Teach AI Your Code",
        description:
            "100+ rules per template that give your AI assistant full context of your architecture. 80% fewer tokens wasted on every prompt.",
    },
    {
        icon: Terminal,
        title: "One-Command Setup",
        description:
            "Run npx cursorkit-setup — it auto-configures environment variables, connects services, and deploys to Vercel. Zero to live in 5 minutes.",
    },
];

const supportingFeatures = [
    {
        icon: MessageSquareCode,
        title: "200+ AI Prompts",
        description: "Copy-paste commands for auth, payments, and features that work first try.",
    },
    {
        icon: RefreshCw,
        title: "Live Context Updates",
        description: "Templates stay current when APIs change. No more deprecated code.",
    },
    {
        icon: Users,
        title: "Role-Specific Personas",
        description: "Frontend, backend, DevOps — AI knows exactly how to help.",
    },
    {
        icon: Shield,
        title: "Security Built In",
        description: "OWASP Top 10, STRIDE threat modeling, and security checklists baked in.",
    },
    {
        icon: FileText,
        title: "AI-Readable PRDs",
        description: "Product requirements always clear. Context never lost between prompts.",
    },
    {
        icon: Rocket,
        title: "Deploy Configs",
        description: "One-click deploy to Vercel, Railway, or Fly.io with env vars pre-mapped.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="mb-20"
                >
                    <h2 className="text-section mb-4">Everything you need to ship</h2>
                    <p className="text-zinc-500 max-w-lg text-[15px]">
                        Templates, AI rules, prompts, and deployment configs — all designed
                        to work together.
                    </p>
                </motion.div>

                {/* Hero features — large cards */}
                <div className="grid gap-4 mb-20">
                    {heroFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                            className="group rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center">
                                    <feature.icon
                                        size={20}
                                        strokeWidth={1.5}
                                        className="text-zinc-400"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium tracking-tight mb-2 text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-zinc-500 leading-relaxed max-w-xl">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Supporting features — 3-column grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {supportingFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                        >
                            <feature.icon
                                size={20}
                                strokeWidth={1.5}
                                className="text-zinc-500 mb-4"
                            />
                            <h3 className="text-[15px] font-medium tracking-tight mb-1.5 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-[14px] text-zinc-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
