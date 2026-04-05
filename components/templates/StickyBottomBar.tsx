"use client";

import { useEffect, useState, useRef } from "react";

export function StickyBottomBar({ targetRef }: { targetRef: React.RefObject<HTMLDivElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef]);

  const scrollToForm = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 xl:hidden transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-black/90 backdrop-blur-lg border-t border-white/[0.06] px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-white font-medium text-[15px]">General SaaS Template</p>
            <div className="flex items-baseline gap-1.5">
              <span className="text-zinc-600 line-through text-[13px]">$300</span>
              <span className="text-emerald-400 font-semibold text-[18px]">$149</span>
              <span className="text-zinc-500 text-[12px]">/lifetime</span>
            </div>
          </div>
          <button
            onClick={scrollToForm}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 text-black text-[14px] font-semibold hover:bg-emerald-400 transition-colors duration-200 cursor-pointer"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
