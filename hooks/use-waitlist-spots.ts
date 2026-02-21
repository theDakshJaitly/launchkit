"use client";

import { useState, useEffect } from "react";
import { getWaitlistSpots } from "@/actions/get-waitlist-spots";

export function useWaitlistSpots() {
    const [spotsLeft, setSpotsLeft] = useState<number | null>(null);
    const [totalSignups, setTotalSignups] = useState<number | null>(null);

    useEffect(() => {
        getWaitlistSpots().then(({ spotsLeft, totalSignups }) => {
            setSpotsLeft(spotsLeft);
            setTotalSignups(totalSignups);
        });
    }, []);

    return { spotsLeft, totalSignups };
}
