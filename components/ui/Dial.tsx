"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Dial({ className }: { className?: string }) {
    return (
        <div className={`relative w-64 h-64 md:w-96 md:h-96 ${className}`}>
            {/* Container for the dial visual */}
            <motion.div
                className="relative w-full h-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src="/ref-2.png" // Assuming this is the dial image
                    alt="Dial Visual"
                    fill
                    className="object-contain opacity-80 mix-blend-screen"
                />
            </motion.div>

            {/* Center piece or overlay if needed */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-4 h-4 bg-white rounded-full opacity-50 blur-[2px]" />
            </div>
        </div>
    );
}
