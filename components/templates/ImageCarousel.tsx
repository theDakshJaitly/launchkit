"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const themes = [
  { name: "Dark", image: "/dark.png" },
  { name: "Light", image: "/light.png" },
  { name: "Forest", image: "/forest.png" },
  { name: "Corporate", image: "/corporate.png" },
  { name: "Synthwave", image: "/synthwave.png" },
  { name: "Dracula", image: "/dracula.png" },
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + themes.length) % themes.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-950">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={themes[currentIndex].image}
              alt={`${themes[currentIndex].name} theme variant`}
              fill
              className="object-cover object-top"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/[0.1] flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer z-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/[0.1] flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer z-10"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Theme name overlay */}
        <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-white/[0.08] z-10">
          <span className="text-white text-[12px] font-medium">{themes[currentIndex].name}</span>
          <span className="text-zinc-500 text-[12px] ml-1.5">{currentIndex + 1}/{themes.length}</span>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {themes.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > currentIndex ? 1 : -1);
              setCurrentIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              i === currentIndex
                ? "w-6 bg-emerald-500"
                : "w-1.5 bg-white/[0.15] hover:bg-white/[0.3]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
