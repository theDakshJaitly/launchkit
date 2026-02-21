"use server";

import { resend } from "@/lib/resend/client";

const TOTAL_SPOTS = 100;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

let cachedResult: { spotsLeft: number; totalSignups: number } | null = null;
let cachedAt = 0;

export async function getWaitlistSpots() {
    // Return cached result if still fresh
    if (cachedResult && Date.now() - cachedAt < CACHE_TTL_MS) {
        return cachedResult;
    }

    try {
        const audienceId = process.env.RESEND_AUDIENCE_ID;
        if (!audienceId) {
            return { spotsLeft: TOTAL_SPOTS, totalSignups: 0 };
        }

        const { data, error } = await resend.contacts.list({
            audienceId,
        });

        if (error || !data) {
            console.error("Failed to fetch contacts:", error);
            // Return stale cache if available, otherwise fallback
            return cachedResult ?? { spotsLeft: TOTAL_SPOTS, totalSignups: 0 };
        }

        const totalSignups = data.data.length;
        const spotsLeft = Math.max(0, TOTAL_SPOTS - totalSignups);

        // Update cache
        cachedResult = { spotsLeft, totalSignups };
        cachedAt = Date.now();

        return cachedResult;
    } catch (err) {
        console.error("Error fetching waitlist spots:", err);
        return cachedResult ?? { spotsLeft: TOTAL_SPOTS, totalSignups: 0 };
    }
}
