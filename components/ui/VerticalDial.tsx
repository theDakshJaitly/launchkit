"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    startTransition,
    CSSProperties,
} from "react";

interface Section {
    id: string;
    label: string;
}

interface VerticalDialProps {
    sections?: Section[];
    activeColor?: string;
    inactiveColor?: string;
    fadeDistance?: number;
    font?: CSSProperties;
    dialWidth?: number | string;
    itemSpacing?: number;
    alignment?: "left" | "center" | "right";
    className?: string;
    style?: CSSProperties;
}

export function VerticalDial({
    sections = [
        { id: "section-1", label: "Section 1" },
        { id: "section-2", label: "Section 2" },
        { id: "section-3", label: "Section 3" },
    ],
    activeColor = "#ffffff",
    inactiveColor = "#555",
    fadeDistance = 2,
    font = { fontSize: 13, fontWeight: 400 },
    dialWidth = 120,
    itemSpacing = 8,
    alignment = "right",
    className = "",
    style = {},
}: VerticalDialProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const ticking = useRef(false);

    // Listen for scroll and update activeIndex
    useEffect(() => {
        function onScroll() {
            if (ticking.current) return;
            ticking.current = true;
            requestAnimationFrame(() => {
                let found = 0;
                for (let i = 0; i < sections.length; i++) {
                    const el = document.getElementById(sections[i].id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= window.innerHeight * 0.4) {
                            found = i;
                        }
                    }
                }
                startTransition(() => setActiveIndex(found));
                ticking.current = false;
            });
        }

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", onScroll, { passive: true });
            onScroll();
            return () => window.removeEventListener("scroll", onScroll);
        }
    }, [sections]);

    // Scroll to section on click
    const handleClick = useCallback(
        (id: string, idx: number) => (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            const el = document.getElementById(id);
            if (el) {
                // Use window.scrollTo for precise control instead of scrollIntoView
                const top = el.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top, behavior: "smooth" });
                startTransition(() => setActiveIndex(idx));
            }
        },
        []
    );

    function getOpacity(idx: number) {
        const dist = Math.abs(idx - activeIndex);
        if (dist === 0) return 1;
        if (dist > fadeDistance) return 0.25;
        return 1 - (dist / (fadeDistance + 1)) * 0.75;
    }

    return (
        <nav
            className={className}
            style={{
                ...style,
                width: dialWidth,
                display: "flex",
                flexDirection: "column",
                alignItems:
                    alignment === "left"
                        ? "flex-start"
                        : alignment === "right"
                            ? "flex-end"
                            : "center",
                justifyContent: "center",
                gap: itemSpacing,
            }}
            aria-label="Section navigation"
        >
            {sections.map((section, idx) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={handleClick(section.id, idx)}
                    style={{
                        color: idx === activeIndex ? activeColor : inactiveColor,
                        ...font,
                        opacity: getOpacity(idx),
                        transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
                        textAlign: alignment,
                        cursor: "pointer",
                        userSelect: "none",
                        textDecoration: "none",
                        fontWeight: idx === activeIndex ? 500 : 400,
                        whiteSpace: "nowrap",
                    }}
                    aria-current={idx === activeIndex ? "true" : undefined}
                >
                    {section.label}
                </a>
            ))}
        </nav>
    );
}
