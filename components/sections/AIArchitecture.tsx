"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const ASCII_LOGO = `███╗   ███╗███████╗██╗  ██╗
████╗ ████║██╔════╝╚██╗██╔╝
██╔████╔██║█████╗   ╚███╔╝
██║╚██╔╝██║██╔══╝   ██╔██╗
██║ ╚═╝ ██║███████╗██╔╝ ██╗
╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝`;

const layers = [
    {
        id: 1,
        badge: "01",
        title: "Always knows your stack",
        description:
            "Your AI knows your stack and conventions on every request. .cursorrules and .windsurfrules give it permanent memory — zero setup, zero token waste.",
        stats: "~150 lines, <300 tokens, always in context",
    },
    {
        id: 2,
        badge: "02",
        title: "Loads context when it matters",
        description:
            "When you work on payments, auth, or database tasks, the AI loads exactly the context it needs. Self-directing domain files give it photographic memory of your architecture.",
        stats: "6 domain files, <5k tokens each, loaded per session",
    },
    {
        id: 3,
        badge: "03",
        title: "Never repeats the same mistake twice",
        description:
            "Every pattern has a Build, Verify, Debug prompt entry. The AI checks the library, loads the right conventions, and writes consistent code — no guessing, no hallucinations.",
        stats: "Multiple prompts, 12 categories, token-efficient",
    },
];

export function AIArchitecture() {
    const [activeLayer, setActiveLayer] = useState<number | null>(null);
    const [starCount, setStarCount] = useState<number | null>(null);

    useEffect(() => {
        fetch("https://api.github.com/repos/theDakshJaitly/mex")
            .then(res => res.json())
            .then(data => {
                if (data.stargazers_count !== undefined) {
                    setStarCount(data.stargazers_count);
                }
            })
            .catch(console.error);
    }, []);

    // Colors for circle layers (1, 2, 3)
    const rc = (id: number) => activeLayer === id ? "#4169E1" : "#a1a1aa";
    const tc = (id: number) => activeLayer === id ? "#4169E1" : "#e4e4e7";
    const sc = (id: number) => activeLayer === id ? "#4169E1" : "#a1a1aa";
    const ro = (id: number) => activeLayer === id ? 1 : activeLayer !== null ? 0.12 : 0.8;
    const to2 = (id: number) => activeLayer === id ? 1 : activeLayer !== null ? 0.1 : 0.85;
    const so = (id: number) => activeLayer === id ? 1 : activeLayer !== null ? 0.08 : 0.65;

    // Mex elements opacity (bottom strip)
    const mexOpacity = activeLayer === 0 ? 1 : activeLayer !== null ? 0.12 : 0.7;
    const mexColor = activeLayer === 0 ? "#4169E1" : "#a1a1aa";

    const t = "opacity 0.35s, fill 0.35s, stroke 0.35s, strokeWidth 0.35s, fillOpacity 0.35s";

    return (
        <section id="ai-architecture" className="py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

                {/* ═══ Section Header — MEX themed ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease }}
                    className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
                >
                    <p
                        className="text-[20px] font-mono mb-6 tracking-wide uppercase"
                        style={{ color: "#4169E1" }}
                    >
                        Meet MEX
                    </p>
                    <h2 className="text-[32px] md:text-[40px] font-medium tracking-tight text-white mb-6 leading-tight">
                        The open-source memory layer behind the <span className="text-emerald-400">LaunchX</span> templates.
                    </h2>
                    <p className="text-zinc-400 text-[16px] leading-relaxed">
                        The AI never forgets your stack, patterns, or conventions ever.
                    </p>
                </motion.div>

                {/* ═══ MEX Showcase Card (Layer 00) ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.05 }}
                    className="mb-12 md:mb-16"
                >
                    <div
                        className="relative rounded-2xl overflow-hidden p-6 md:p-8 transition-all duration-350"
                        style={{
                            background: "linear-gradient(135deg, rgba(65, 105, 225, 0.08) 0%, rgba(65, 105, 225, 0.03) 50%, rgba(0,0,0,0.4) 100%)",
                            border: "1px solid rgba(65, 105, 225, 0.2)",
                            boxShadow: activeLayer === 0 ? "0 0 40px rgba(65, 105, 225, 0.12)" : "none",
                        }}
                    >
                        {/* Subtle radial glow */}
                        <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            style={{
                                background: "radial-gradient(circle at 20% 50%, rgba(65, 105, 225, 0.06) 0%, transparent 60%)",
                            }}
                        />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0">
                            {/* Left — ASCII Logo + Badge + Description */}
                            <div className="flex-shrink-0">
                                <div className="flex items-center gap-3 mb-4">
                                    <span
                                        className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium"
                                        style={{
                                            background: "rgba(65, 105, 225, 0.15)",
                                            border: "1px solid rgba(65, 105, 225, 0.3)",
                                            color: "#4169E1",
                                        }}
                                    >
                                        00
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                                        The foundation
                                    </span>
                                </div>
                                <pre
                                    className="text-[8px] sm:text-[10px] md:text-[11px] leading-tight font-mono select-none mb-4"
                                    style={{ color: "#4169E1" }}
                                >
                                    {ASCII_LOGO}
                                </pre>
                                <p className="text-[13px] text-zinc-400 max-w-sm leading-relaxed">
                                    The 3 layers below run on MEX — persistent, navigable project memory with drift detection baked in.
                                </p>
                            </div>

                            {/* Center — Mascot */}
                            <div className="flex-1 flex justify-center">
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Image
                                        src="/mex-mascot.svg"
                                        alt="mex mascot — pixel-art hermit crab"
                                        width={150}
                                        height={150}
                                        className="select-none drop-shadow-lg"
                                    />
                                </motion.div>
                            </div>

                            {/* Right — CTAs stacked vertically */}
                            <div className="flex flex-col gap-3 flex-shrink-0 md:mr-8">
                                <a
                                    href="/mex"
                                    className="inline-flex items-center justify-center gap-2 font-medium text-[14px] px-6 py-2.5 rounded-full transition-all duration-200 text-white hover:opacity-90"
                                    style={{ background: "#4169E1" }}
                                >
                                    Explore MEX →
                                </a>
                                <a
                                    href="https://github.com/theDakshJaitly/mex"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 font-medium text-[14px] pl-6 pr-4 py-2 rounded-full transition-all duration-200 hover:border-[rgba(65,105,225,0.5)]"
                                    style={{
                                        color: "#4169E1",
                                        border: "1px solid rgba(65, 105, 225, 0.3)",
                                        background: "rgba(65, 105, 225, 0.05)",
                                    }}
                                >
                                    <span>GitHub</span>
                                    {starCount !== null ? (
                                        <div 
                                            className="flex items-center justify-center gap-1.5 px-2.5 py-0.5 rounded-full ml-1 border"
                                            style={{
                                                background: "rgba(65, 105, 225, 0.1)",
                                                borderColor: "rgba(65, 105, 225, 0.2)"
                                            }}
                                        >
                                            <Star className="w-3 h-3" fill="currentColor" />
                                            <span className="text-[12px] font-mono font-medium pt-[1px]">{starCount}</span>
                                        </div>
                                    ) : (
                                        <Star className="w-3.5 h-3.5 ml-1" />
                                    )}
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ═══ Architecture Split — Layers 01/02/03 + Diagram ═══ */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.1 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* Left Column — Text */}
                    <div>
                        <div className="space-y-0">
                            {layers.map((layer, i) => (
                                <div
                                    key={layer.id}
                                    className={`py-5 cursor-default transition-all duration-300 ${i < layers.length - 1 ? "border-b border-white/[0.08]" : ""} ${activeLayer === layer.id ? "opacity-100" : activeLayer !== null ? "opacity-50" : "opacity-100"}`}
                                    onMouseEnter={() => setActiveLayer(layer.id)}
                                    onMouseLeave={() => setActiveLayer(null)}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="px-2 py-0.5 rounded-md bg-[rgba(65,105,225,0.1)] border border-[rgba(65,105,225,0.2)] text-[11px] text-[#4169E1] font-mono font-medium">
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

                    {/* Right Column — Concentric Circles Diagram */}
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-white/[0.02] border border-white/[0.06] p-4 md:p-6 relative">

                        {/* ═══ Concentric Circles SVG ═══ */}
                        <svg
                            viewBox="0 0 600 660"
                            className="w-full"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* ═══════════ LAYER 3 — OUTER CIRCLE ═══════════ */}
                            <circle
                                cx="300" cy="260" r="240"
                                fill="none"
                                stroke={rc(3)}
                                strokeWidth={activeLayer === 3 ? 3 : 2}
                                opacity={ro(3)}
                                style={{ transition: t }}
                            />
                            <text
                                x="300" y="48"
                                fill={tc(3)}
                                fontSize="24" fontFamily="monospace" textAnchor="middle" fontWeight="700"
                                opacity={to2(3)}
                                style={{ transition: t }}
                            >
                                3
                            </text>
                            <text
                                x="300" y="76"
                                fill={tc(3)}
                                fontSize="18" fontFamily="monospace" textAnchor="middle" fontWeight="600"
                                opacity={to2(3)}
                                style={{ transition: t }}
                            >
                                Loaded per Task
                            </text>
                            <text
                                x="110" y="110"
                                fill={sc(3)}
                                fontSize="12" fontFamily="monospace" textAnchor="start"
                                opacity={so(3)}
                                style={{ transition: t }}
                            >
                                – Patterns
                            </text>
                            <text
                                x="110" y="130"
                                fill={sc(3)}
                                fontSize="12" fontFamily="monospace" textAnchor="start"
                                opacity={so(3)}
                                style={{ transition: t }}
                            >
                                & Executions
                            </text>
                            <text
                                x="420" y="100"
                                fill={sc(3)}
                                fontSize="12" fontFamily="monospace" textAnchor="start"
                                opacity={so(3)}
                                style={{ transition: t }}
                            >
                                – PROMPTS.md
                            </text>
                            <text
                                x="435" y="120"
                                fill={sc(3)}
                                fontSize="11" fontFamily="monospace" textAnchor="start"
                                opacity={so(3)}
                                style={{ transition: t }}
                            >
                                (Index)
                            </text>
                            <text
                                x="420" y="140"
                                fill={sc(3)}
                                fontSize="12" fontFamily="monospace" textAnchor="start"
                                opacity={so(3)}
                                style={{ transition: t }}
                            >
                                & category files
                            </text>

                            {/* ═══════════ LAYER 2 — MIDDLE CIRCLE ═══════════ */}
                            <circle
                                cx="300" cy="260" r="150"
                                fill="none"
                                stroke={rc(2)}
                                strokeWidth={activeLayer === 2 ? 3 : 2}
                                opacity={ro(2)}
                                style={{ transition: t }}
                            />
                            <text
                                x="300" y="135"
                                fill={tc(2)}
                                fontSize="22" fontFamily="monospace" textAnchor="middle" fontWeight="700"
                                opacity={to2(2)}
                                style={{ transition: t }}
                            >
                                2
                            </text>
                            <text
                                x="300" y="160"
                                fill={tc(2)}
                                fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="600"
                                opacity={to2(2)}
                                style={{ transition: t }}
                            >
                                Loaded per Session
                            </text>
                            <text
                                x="300" y="350"
                                fill={sc(2)}
                                fontSize="12" fontFamily="monospace" textAnchor="middle"
                                opacity={so(2)}
                                style={{ transition: t }}
                            >
                                – HANDOVER.md (the map)
                            </text>
                            <text
                                x="300" y="368"
                                fill={sc(2)}
                                fontSize="12" fontFamily="monospace" textAnchor="middle"
                                opacity={so(2)}
                                style={{ transition: t }}
                            >
                                {'& Domain Docs'}
                            </text>

                            {/* ═══════════ LAYER 1 — INNER CIRCLE ═══════════ */}
                            <circle
                                cx="300" cy="260" r="72"
                                fill="none"
                                stroke={rc(1)}
                                strokeWidth={activeLayer === 1 ? 3 : 2}
                                opacity={ro(1)}
                                style={{ transition: t }}
                            />
                            <text
                                x="300" y="244"
                                fill={tc(1)}
                                fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="700"
                                opacity={to2(1)}
                                style={{ transition: t }}
                            >
                                1 · Always
                            </text>
                            <text
                                x="300" y="270"
                                fill={sc(1)}
                                fontSize="13" fontFamily="monospace" textAnchor="middle"
                                opacity={so(1)}
                                style={{ transition: t }}
                            >
                                .cursorrules
                            </text>
                            <text
                                x="300" y="288"
                                fill={sc(1)}
                                fontSize="12" fontFamily="monospace" textAnchor="middle"
                                opacity={so(1)}
                                style={{ transition: t }}
                            >
                                type files
                            </text>

                            {/* ═══════════ SUPPORTING LAYER ═══════════ */}
                            <line
                                x1="300" y1="503" x2="300" y2="530"
                                stroke="#71717a" strokeWidth="1.5" strokeDasharray="2 4"
                                opacity={activeLayer !== null ? 0.12 : 0.5}
                                style={{ transition: "opacity 0.35s" }}
                            />
                            <rect
                                x="80" y="535" width="440" height="105" rx="16"
                                fill="none"
                                stroke={activeLayer === null ? "#52525b" : "#27272a"}
                                strokeWidth="1.5"
                                opacity={activeLayer !== null ? 0.12 : 0.5}
                                style={{ transition: "opacity 0.35s, stroke 0.35s" }}
                            />
                            <text
                                x="300" y="562"
                                fill={activeLayer === null ? "#a1a1aa" : "#3f3f46"}
                                fontSize="15" fontFamily="monospace" textAnchor="middle" fontWeight="600"
                                opacity={activeLayer !== null ? 0.12 : 0.7}
                                style={{ transition: "opacity 0.35s, fill 0.35s" }}
                            >
                                Supporting Layer
                            </text>
                            <rect
                                x="100" y="575" width="180" height="48" rx="24"
                                fill="none"
                                stroke={activeLayer === null ? "#71717a" : "#27272a"}
                                strokeWidth="1.5"
                                opacity={activeLayer !== null ? 0.1 : 0.5}
                                style={{ transition: "opacity 0.35s, stroke 0.35s" }}
                            />
                            <text
                                x="190" y="596"
                                fill={activeLayer === null ? "#e4e4e7" : "#3f3f46"}
                                fontSize="14" fontFamily="monospace" textAnchor="middle" fontWeight="600"
                                opacity={activeLayer !== null ? 0.1 : 0.75}
                                style={{ transition: "opacity 0.35s, fill 0.35s" }}
                            >
                                SKILLS
                            </text>
                            <text
                                x="190" y="614"
                                fill={activeLayer === null ? "#71717a" : "#3f3f46"}
                                fontSize="11" fontFamily="monospace" textAnchor="middle"
                                opacity={activeLayer !== null ? 0.1 : 0.5}
                                style={{ transition: "opacity 0.35s, fill 0.35s" }}
                            >
                                (Role Personas)
                            </text>
                            <rect
                                x="320" y="575" width="180" height="48" rx="24"
                                fill="none"
                                stroke={activeLayer === null ? "#71717a" : "#27272a"}
                                strokeWidth="1.5"
                                opacity={activeLayer !== null ? 0.1 : 0.5}
                                style={{ transition: "opacity 0.35s, stroke 0.35s" }}
                            />
                            <text
                                x="410" y="596"
                                fill={activeLayer === null ? "#e4e4e7" : "#3f3f46"}
                                fontSize="14" fontFamily="monospace" textAnchor="middle" fontWeight="600"
                                opacity={activeLayer !== null ? 0.1 : 0.75}
                                style={{ transition: "opacity 0.35s, fill 0.35s" }}
                            >
                                Security Files
                            </text>
                            <text
                                x="410" y="614"
                                fill={activeLayer === null ? "#71717a" : "#3f3f46"}
                                fontSize="11" fontFamily="monospace" textAnchor="middle"
                                opacity={activeLayer !== null ? 0.1 : 0.5}
                                style={{ transition: "opacity 0.35s, fill 0.35s" }}
                            >
                                (threat models)
                            </text>
                        </svg>

                        {/* ═══ Powered by MEX — bottom strip ═══ */}
                        <div
                            className="w-full mt-3 rounded-xl px-4 py-3 transition-all duration-350"
                            style={{
                                opacity: mexOpacity,
                                background: activeLayer === 0 ? "rgba(65, 105, 225, 0.06)" : "rgba(255, 255, 255, 0.02)",
                                border: activeLayer === 0 ? "1px solid rgba(65, 105, 225, 0.3)" : "1px solid rgba(255, 255, 255, 0.06)",
                                boxShadow: activeLayer === 0 ? "0 0 20px rgba(65, 105, 225, 0.1)" : "none",
                                transition: "opacity 0.35s, background 0.35s, border 0.35s, box-shadow 0.35s",
                            }}
                        >
                            <div className="flex items-center justify-center gap-2">
                                    <span
                                        className="text-[12px] font-mono transition-colors duration-350"
                                        style={{ color: mexColor }}
                                    >
                                        ✦
                                    </span>
                                    <span className="text-[13px] text-zinc-400">
                                        Powered by{" "}
                                        <a
                                            href="/mex"
                                            className="font-semibold transition-colors duration-200 hover:opacity-80"
                                            style={{ color: "#4169E1" }}
                                        >
                                            MEX
                                        </a>
                                        {" "}— the scaffold beneath every layer
                                    </span>
                                </div>
                        </div>
                    </div>
                </motion.div>


            </div >
        </section >
    );
}
