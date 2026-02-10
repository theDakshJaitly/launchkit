"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "highlight";
}

export function Card({
  children,
  className = "",
  variant = "default",
}: CardProps) {
  const variants = {
    default: "bg-black",
    bordered: "bg-black border border-white",
    highlight: "bg-zinc-950 border-2 border-white",
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className={`p-6 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
