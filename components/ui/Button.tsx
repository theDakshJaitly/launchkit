"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "font-medium tracking-tight transition-all duration-200 ease-linear cursor-pointer";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 border border-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  };

  const sizes = {
    default: "px-6 py-3 text-base",
    large: "px-10 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1, ease: "linear" }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
