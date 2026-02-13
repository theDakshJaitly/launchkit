"use client";

import { useState } from "react";
import { Button } from "./Button";

interface EmailFormProps {
  className?: string;
  size?: "default" | "large";
  onSubmit?: (email: string) => void;
}

export function EmailForm({
  className = "",
  size = "default",
  onSubmit,
}: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call - replace with actual API
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      onSubmit?.(email);
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const inputSizes = {
    default: "px-4 py-3 text-base",
    large: "px-6 py-4 text-lg",
  };

  if (status === "success") {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-xl font-bold tracking-tight">You&apos;re in.</p>
        <p className="text-gray-400 mt-2">Check your email for confirmation.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 bg-black border-2 border-white text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors duration-200 ${inputSizes[size]}`}
      />
      <Button
        type="submit"
        variant="default"
        size={size === "large" ? "lg" : "default"}
        disabled={status === "loading"}
      >
        {status === "loading" ? "..." : "Get early access"}
      </Button>
    </form>
  );
}
