"use client";

import { useActionState } from "react";
import { joinWaitlist } from "@/actions/join-waitlist";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export default function WaitlistPage() {
    const [state, action, isPending] = useActionState(joinWaitlist, null);

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-50 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-full max-w-md relative z-10"
            >
                {/* Urgency Badge */}
                {!state?.success && (
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center gap-2 text-[13px] text-zinc-400 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                            8 spots left
                            <span className="text-zinc-600 mx-1">·</span>
                            <span className="text-emerald-400">50% off for first 100</span>
                        </span>
                    </div>
                )}

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-medium tracking-tight text-white mb-3">
                        Join the waitlist
                    </h1>
                    <p className="text-zinc-400">
                        Get early access to LaunchX.
                    </p>
                    {!state?.success && (
                        <p className="text-xs text-zinc-500 mt-2">
                            Sign up and we will send you the 50% off code.
                        </p>
                    )}
                </div>

                {/* Success State */}
                {state?.success ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 text-center"
                    >
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">🎉</span>
                        </div>
                        <h3 className="text-white font-medium mb-2">You're on the list!</h3>
                        <p className="text-zinc-400 text-sm mb-6">
                            Help us make LaunchX better by answering a few quick questions.
                        </p>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="default"
                                className="w-full bg-white text-black hover:bg-zinc-200 h-11 rounded-xl text-[15px] font-medium mb-3"
                            >
                                Help us improve {'->'}
                            </Button>
                        </a>

                        <Button
                            variant="default"
                            className="w-full bg-transparent border border-white/10 text-zinc-400 hover:bg-white/5 hover:text-white h-11 rounded-xl text-[14px]"
                            onClick={() => (window.location.href = "/")}
                        >
                            Back to home
                        </Button>
                    </motion.div>
                ) : (
                    /* Form */
                    <form action={action} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-sm font-medium text-zinc-300">
                                    First Name
                                </label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/20 focus:ring-0 rounded-xl h-11"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-sm font-medium text-zinc-300">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/20 focus:ring-0 rounded-xl h-11"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                                Email address
                            </label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                className="bg-white/5 border-white/10 text-white placeholder:text-zinc-600 focus:border-white/20 focus:ring-0 rounded-xl h-11"
                            />
                        </div>

                        {state?.error && (
                            <p className="text-red-400 text-sm text-center">{state.error}</p>
                        )}

                        <Button
                            type="submit"
                            disabled={isPending}
                            variant="default"
                            className="w-full bg-white text-black hover:bg-zinc-200 h-11 rounded-xl text-[15px] font-medium"
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                    Joining...
                                </>
                            ) : (
                                "Join waitlist ->"
                            )}
                        </Button>

                        <p className="text-center text-xs text-zinc-600 pt-4">
                            No spam. Unsubscribe anytime.
                        </p>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
