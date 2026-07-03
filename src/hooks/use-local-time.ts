"use client";

import { useState, useEffect } from "react";

/**
 * Returns a live-updating local time string for the given IANA timezone.
 * Updates every second. Returns null on the server (avoids hydration mismatch).
 */
export function useLocalTime(timeZone = "America/Los_Angeles") {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone,
        }).format(now);
        setTime(formatted);
      } catch {
        setTime(null);
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

/**
 * Returns the current date as a stable ISO date string (no hydration mismatch
 * because it only renders after mount).
 */
export function useCurrentDate() {
  const [date, setDate] = useState<string | null>(null);
  useEffect(() => {
    setDate(new Date().toISOString().split("T")[0] ?? null);
  }, []);
  return date;
}
