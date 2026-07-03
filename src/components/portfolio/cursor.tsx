"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Dual-element custom cursor.
 * - Instant dot (6px, accent color, mix-blend-difference)
 * - Eased ring (32px, border, lerps toward cursor)
 *
 * Disabled on touch devices and reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reducedMotion) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x - 3}px, ${
          mouse.y - 3
        }px, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
      );
      setHovering(Boolean(interactive));
    };

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        const size = hovering ? 56 : 32;
        ringRef.current.style.transform = `translate3d(${ring.x - size / 2}px, ${
          ring.y - size / 2
        }px, 0)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [hovering]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "9999px",
          background: "var(--accent)",
          mixBlendMode: "difference",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "32px",
          height: "32px",
          borderRadius: "9999px",
          border: "1px solid var(--fg-muted)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform, width, height",
          transition: "border-color 0.15s ease, background-color 0.15s ease",
          borderColor: hovering ? "var(--accent)" : "var(--fg-muted)",
          backgroundColor: hovering ? "color-mix(in oklch, var(--accent) 8%, transparent)" : "transparent",
        }}
      />
    </>
  );
}
