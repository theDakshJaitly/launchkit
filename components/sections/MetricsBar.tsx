"use client";

import { motion } from "framer-motion";

const metrics = [
    "80% fewer AI tokens",
    "5 production templates",
    "200+ tested prompts",
    "5 min to deploy",
];

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function MetricsBar() {
    return (
        <section className="relative border-y border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease }}
                    className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3"
                >
                    {metrics.map((metric, i) => (
                        <span key={i} className="flex items-center gap-3">
                            <span className="text-[13px] text-zinc-500 tracking-wide">
                                {metric}
                            </span>
                            {i < metrics.length - 1 && (
                                <span className="hidden sm:inline text-zinc-700 text-[10px]">
                                    ·
                                </span>
                            )}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
