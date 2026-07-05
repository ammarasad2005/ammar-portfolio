"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";

/**
 * FaisalMosque — embeds the standalone faisal-mosque.html via iframe.
 *
 * The iframe has `pointer-events: none` so it never captures scroll events.
 * This is critical: during the hero's scroll-driven zoom, the iframe scales
 * up to cover the viewport. If it had pointer-events: auto, it would capture
 * all scroll/touch events and trap the user — they couldn't scroll past the
 * hero. With pointer-events: none, scroll passes through to the page.
 *
 * The pause button is in the React layer (outside the iframe) and controls
 * the mosque via postMessage. This way it works even though the iframe
 * itself doesn't receive pointer events.
 */
export function FaisalMosque() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [paused, setPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => setMounted(true), []);

  // Default to dark theme before mount to avoid hydration mismatch
  const theme = mounted && resolvedTheme ? resolvedTheme : "dark";

  // Iframe element bg matches page bg exactly (the 3D scene inside needs
  // an opaque dark background for depth/contrast).
  const bg = theme === "light" ? "#faf8f4" : "#13110e";

  // Send pause/play commands to the iframe via postMessage
  const togglePause = () => {
    const next = !paused;
    setPaused(next);
    const iframe = iframeRef.current;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage(
        { type: next ? "mosque-pause" : "mosque-play" },
        "*",
      );
    }
  };

  return (
    <>
      <iframe
        ref={iframeRef}
        src={`/faisal-mosque.html?theme=${theme}`}
        title="Faisal Mosque 3D model"
        className="h-full w-full border-0"
        style={{
          display: "block",
          pointerEvents: "none", // Critical: lets scroll pass through
          background: bg,
        }}
        loading="eager"
      />
      {/* Pause button — in the React layer so it works even though the
          iframe has pointer-events: none */}
      <button
        type="button"
        onClick={togglePause}
        title={paused ? "Play" : "Pause"}
        className="absolute bottom-2 right-2 z-10 rounded border border-fg-subtle/30 bg-bg/70 px-2 py-1 font-mono text-[8px] font-bold tracking-wider text-fg-subtle backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
        style={{ pointerEvents: "auto" }}
      >
        {paused ? "PLAY" : "PAUSE"}
      </button>
    </>
  );
}
