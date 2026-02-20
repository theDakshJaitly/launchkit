"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const layers = [
    {
        id: 1,
        badge: "01",
        title: "Always Loaded — The Foundation",
        description:
            "Your AI knows your stack and conventions on every request. .cursorrules and .windsurfrules give it permanent memory — zero setup, zero token waste.",
        stats: "~150 lines, <300 tokens, always in context",
    },
    {
        id: 2,
        badge: "02",
        title: "Loaded On Demand — Domain Context",
        description:
            "When you work on payments, auth, or database tasks, the AI loads exactly the context it needs. Self-directing domain files give it photographic memory of your architecture.",
        stats: "6 domain files, <5k tokens each, loaded per session",
    },
    {
        id: 3,
        badge: "03",
        title: "Loaded Per Task — The Prompt Library",
        description:
            "Every pattern has a Build, Verify, Debug prompt entry. The AI checks the library, loads the right conventions, and writes consistent code — no guessing, no hallucinations.",
        stats: "200+ prompts, 12 categories, token-efficient",
    },
];

export function AIArchitecture() {
    const [activeLayer, setActiveLayer] = useState<number | null>(null);

    // Grayscale palette
    const defaultStroke = "#525252";   // zinc-600
    const hoverStroke = "#e4e4e7";     // zinc-200
    const defaultFill = "#27272a";     // zinc-800
    const hoverFill = "#3f3f46";       // zinc-700
    const defaultTextFill = "#71717a"; // zinc-500
    const hoverTextFill = "#fafafa";   // zinc-50

    return (
        <section id="ai-architecture" className="py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column — Text */}
                    <div>
                        <p className="text-[13px] font-mono text-emerald-400 mb-4 tracking-wide">
                            THE AI LAYER
                        </p>
                        <h2 className="text-[28px] md:text-[32px] font-medium tracking-tight text-white mb-4 leading-tight">
                            We built a skill graph for your codebase.
                        </h2>
                        <p className="text-zinc-400 text-[16px] leading-relaxed mb-8 max-w-md">
                            Most templates give you code. We give your AI the knowledge to
                            maintain it.
                        </p>

                        {/* Layer descriptions */}
                        <div className="space-y-0">
                            {layers.map((layer, i) => (
                                <div
                                    key={layer.id}
                                    className={`py-5 cursor-default transition-all duration-300 ${i < layers.length - 1
                                        ? "border-b border-white/[0.08]"
                                        : ""
                                        } ${activeLayer === layer.id
                                            ? "opacity-100"
                                            : activeLayer !== null
                                                ? "opacity-50"
                                                : "opacity-100"
                                        }`}
                                    onMouseEnter={() =>
                                        setActiveLayer(layer.id)
                                    }
                                    onMouseLeave={() => setActiveLayer(null)}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono font-medium">
                                            {layer.badge}
                                        </span>
                                        <h3 className="text-[15px] font-medium text-white">
                                            {layer.title}
                                        </h3>
                                    </div>
                                    <p className="text-[13px] text-zinc-500 leading-relaxed mb-2">
                                        {layer.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-[12px] text-zinc-600">
                                        {layer.stats}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Concentric Circles Visual */}
                    <div className="flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12 min-h-[400px]">
                        <svg
                            viewBox="0 0 400 400"
                            className="w-full max-w-[360px]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                {/* Glow filter for hover */}
                                <filter id="glow-hover" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="4" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Outermost circle — Layer 3 */}
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="170"
                                fill="none"
                                stroke={activeLayer === 3 ? hoverStroke : defaultStroke}
                                strokeWidth={activeLayer === 3 ? 2.5 : 1.5}
                                opacity={
                                    activeLayer === 3
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.15
                                            : 0.7
                                }
                                filter={activeLayer === 3 || activeLayer === null ? "url(#glow-hover)" : undefined}
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: activeLayer === 3 ? 1 : activeLayer !== null ? 0.15 : 0.7 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, ease, delay: 0.6 }}
                                style={{ transition: "opacity 0.3s, stroke-width 0.3s, stroke 0.3s" }}
                            />
                            {/* Number 3 — centered on the right edge of the circle */}
                            <motion.text
                                x="370"
                                y="200"
                                fill={activeLayer === 3 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="13"
                                fontFamily="monospace"
                                textAnchor="middle"
                                dominantBaseline="central"
                                opacity={
                                    activeLayer === 3
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.15
                                            : 0.8
                                }
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 3 ? 1 : activeLayer !== null ? 0.15 : 0.8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                3
                            </motion.text>

                            {/* Middle circle — Layer 2 */}
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="110"
                                fill="none"
                                stroke={activeLayer === 2 ? hoverStroke : defaultStroke}
                                strokeWidth={activeLayer === 2 ? 2.5 : 1.5}
                                opacity={
                                    activeLayer === 2
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.15
                                            : 0.7
                                }
                                filter={activeLayer === 2 || activeLayer === null ? "url(#glow-hover)" : undefined}
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: activeLayer === 2 ? 1 : activeLayer !== null ? 0.15 : 0.7 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease, delay: 0.35 }}
                                style={{ transition: "opacity 0.3s, stroke-width 0.3s, stroke 0.3s" }}
                            />
                            {/* Number 2 — centered on the right edge of the circle */}
                            <motion.text
                                x="310"
                                y="200"
                                fill={activeLayer === 2 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="13"
                                fontFamily="monospace"
                                textAnchor="middle"
                                dominantBaseline="central"
                                opacity={
                                    activeLayer === 2
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.15
                                            : 0.8
                                }
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 2 ? 1 : activeLayer !== null ? 0.15 : 0.8 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.55 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                2
                            </motion.text>

                            {/* Inner circle — Layer 1 (filled) */}
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="45"
                                fill={activeLayer === 1 || activeLayer === null ? hoverFill : defaultFill}
                                fillOpacity={
                                    activeLayer === 1
                                        ? 0.6
                                        : activeLayer !== null
                                            ? 0.05
                                            : 0.4
                                }
                                stroke={activeLayer === 1 ? hoverStroke : defaultStroke}
                                strokeWidth={activeLayer === 1 ? 2.5 : 1.5}
                                opacity={
                                    activeLayer === 1
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.2
                                            : 0.85
                                }
                                filter={activeLayer === 1 || activeLayer === null ? "url(#glow-hover)" : undefined}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: activeLayer === 1 ? 1 : activeLayer !== null ? 0.2 : 0.85 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease, delay: 0.1 }}
                                style={{ transformOrigin: "200px 200px", transition: "opacity 0.3s, fill-opacity 0.3s, stroke-width 0.3s, stroke 0.3s, fill 0.3s" }}
                            />
                            {/* Number 1 — centered in the inner circle */}
                            <motion.text
                                x="200"
                                y="200"
                                fill={activeLayer === 1 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="13"
                                fontFamily="monospace"
                                textAnchor="middle"
                                dominantBaseline="central"
                                opacity={
                                    activeLayer === 1
                                        ? 1
                                        : activeLayer !== null
                                            ? 0.15
                                            : 0.9
                                }
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 1 ? 1 : activeLayer !== null ? 0.15 : 0.9 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                1
                            </motion.text>

                            {/* Ring labels — small descriptive text */}
                            <motion.text
                                x="200"
                                y="50"
                                fill={activeLayer === 3 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="10"
                                fontFamily="monospace"
                                textAnchor="middle"
                                opacity={activeLayer === 3 ? 1 : activeLayer !== null ? 0.1 : 0.6}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 3 ? 1 : activeLayer !== null ? 0.1 : 0.6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                PER TASK
                            </motion.text>
                            <motion.text
                                x="200"
                                y="108"
                                fill={activeLayer === 2 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="10"
                                fontFamily="monospace"
                                textAnchor="middle"
                                opacity={activeLayer === 2 ? 1 : activeLayer !== null ? 0.1 : 0.6}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 2 ? 1 : activeLayer !== null ? 0.1 : 0.6 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.65 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                ON DEMAND
                            </motion.text>
                            <motion.text
                                x="200"
                                y="170"
                                fill={activeLayer === 1 || activeLayer === null ? hoverTextFill : defaultTextFill}
                                fontSize="10"
                                fontFamily="monospace"
                                textAnchor="middle"
                                opacity={activeLayer === 1 ? 1 : activeLayer !== null ? 0.1 : 0.7}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: activeLayer === 1 ? 1 : activeLayer !== null ? 0.1 : 0.7 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                style={{ transition: "opacity 0.3s, fill 0.3s" }}
                            >
                                ALWAYS LOADED
                            </motion.text>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
