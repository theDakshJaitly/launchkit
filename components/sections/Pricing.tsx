"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";

const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const pricingTiers = [
  {
    name: "Starter",
    price: 149,
    originalPrice: 199,
    features: [
      "Any 3 templates",
      "All features included",
      "Discord community access",
      "1 year of updates",
    ],
    popular: false,
  },
  {
    name: "All-In",
    price: 199,
    originalPrice: 299,
    features: [
      "All 5 templates",
      "Priority support",
      "Early access to new templates",
      "Lifetime updates",
    ],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-20"
        >
          <h2 className="text-section mb-4">Simple pricing</h2>
          <p className="text-zinc-500 max-w-md text-[15px]">
            One payment. Unlimited projects. No subscriptions.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className={`rounded-2xl p-8 md:p-10 transition-all duration-300 ${tier.popular
                ? "bg-white/[0.04] border border-white/[0.15] shadow-[0_0_40px_rgba(255,255,255,0.04)]"
                : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.03]"
                }`}
            >
              {tier.popular && (
                <span className="inline-block text-[11px] font-medium tracking-widest text-zinc-400 uppercase mb-5">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-medium tracking-tight mb-5 text-white">
                {tier.name}
              </h3>

              <div className="mb-8">
                <span className="text-4xl font-medium tracking-tight text-white">
                  ${tier.price}
                </span>
                <span className="text-zinc-600 line-through ml-3 text-sm">
                  ${tier.originalPrice}
                </span>
              </div>

              <ul className="space-y-3 mb-10">
                {tier.features.map((feature, fi) => (
                  <li
                    key={fi}
                    className="flex items-center gap-3 text-[14px] text-zinc-400"
                  >
                    <span className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <span className="text-[10px] text-zinc-300">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="/waitlist" className="block">
                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full rounded-full"
                >
                  Join Waitlist
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Supporting text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-[13px] text-zinc-600">
            No payment today. We&apos;ll email you when we launch with your
            discount code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
