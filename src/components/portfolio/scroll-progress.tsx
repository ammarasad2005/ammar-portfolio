"use client";

import { useScrollProgress } from "@/hooks/use-scroll-progress";

/**
 * A 2px gradient bar at the top of the page that fills as the user scrolls.
 */
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 100,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          transform: `scaleX(${progress})`,
          transformOrigin: "left",
          background:
            "linear-gradient(90deg, var(--accent) 0%, var(--accent-2) 100%)",
          transition: "transform 0.05s linear",
        }}
      />
    </div>
  );
}
