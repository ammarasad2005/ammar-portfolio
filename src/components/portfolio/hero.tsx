"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { useLocalTime } from "@/hooks/use-local-time";
import { useSound } from "./providers/sound-provider";

const FaisalMosque = dynamic(
  () => import("./faisal-mosque").then((m) => m.FaisalMosque),
  {
    ssr: false,
    loading: () => null,
  },
);

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const time = useLocalTime("Asia/Karachi");
  const { playClick } = useSound();
  const containerRef = useRef<HTMLElement>(null);

  // Scroll progress through the hero section (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Mosque scale: 1.0 → 3.5 as you scroll (desktop), with smooth easing
  const mosqueScale = useTransform(scrollYProgress, [0, 0.6], [1, 3.5]);
  // Mosque opacity: fully visible until 50%, then fades out by 65%
  const mosqueOpacity = useTransform(scrollYProgress, [0, 0.5, 0.65], [1, 1, 0]);
  // Overlay text: fades out early (0 → 25%)
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const overlayY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  // Dev info: DELAYED — starts appearing only AFTER the mosque is mostly gone.
  // Mosque is fully gone at 0.65. Dev info starts at 0.6 (just before mosque
  // vanishes) and is fully visible at 0.85 — well after the mosque is gone.
  // This creates a clean separation: mosque disappears → brief gap → dev info
  // emerges from below, so there's a distinct frame where the mosque is gone
  // and the dev info is at its starting position.
  const devInfoOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 0.3, 1]);
  const devInfoY = useTransform(scrollYProgress, [0.6, 0.85], [80, 0]);
  // Dev info scale: slight zoom-in feel
  const devInfoScale = useTransform(scrollYProgress, [0.6, 0.85], [0.95, 1]);

  const scrollTo = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-labelledby="hero-heading"
      // 250vh gives scroll room for the cinematic zoom
      className="relative h-[250vh]"
    >
      {/* Sticky container — stays fixed while scrolling through the hero */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* === Layer 1: Dev info (above the gradient, revealed as mosque zooms away) === */}
        <motion.div
          style={{
            opacity: devInfoOpacity,
            y: devInfoY,
            scale: devInfoScale,
          }}
          className="absolute inset-0 z-30 flex items-center justify-center px-4 pb-16 pt-24 sm:px-6 md:px-8"
        >
          <div className="w-full max-w-[1200px]">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8 flex items-center gap-3 font-mono text-xs text-fg-subtle"
            >
              <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              <span>{"// blueprint_v3.2.1"}</span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">under architecture</span>
            </motion.div>

            {/* Name (h1) */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
              className="text-display text-fg"
            >
              <span className="sr-only">{profile.srOnlyH1Prefix}</span>
              <span aria-hidden="true">{profile.name}</span>
            </motion.h1>

            {/* Role line */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
              className="mt-3 text-xl text-fg-muted sm:text-2xl"
            >
              Full Stack{" "}
              <span className="text-accent">{profile.rolePhrase}</span>
              <span className="text-fg-subtle">.</span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Datasheet */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 border-t border-border pt-6 sm:grid-cols-[max-content_1fr]"
            >
              {profile.heroDatasheet.map((row) => (
                <div key={row.key} className="contents">
                  <dt className="font-mono text-xs text-fg-subtle">{row.key}:</dt>
                  <dd className="font-mono text-xs text-fg-muted">
                    {row.kind === "status" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                        <span>{row.value}</span>
                      </span>
                    ) : row.kind === "time" ? (
                      <span aria-live="polite">
                        {time ?? <span className="text-fg-subtle">--:--:--</span>}{" "}
                        <span className="text-fg-subtle">PKT</span>
                      </span>
                    ) : (
                      <span>{row.value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={() => scrollTo("work")}
                className="group inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-4 py-2 font-mono text-xs font-medium text-bg transition-all hover:translate-y-[-1px] hover:shadow-[0_8px_24px_-12px_var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                view work
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                <kbd className="ml-1 hidden font-mono text-[10px] opacity-70 sm:inline">⌘W</kbd>
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs font-medium text-fg-muted transition-all hover:translate-y-[-1px] hover:border-accent hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                get in touch
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                <kbd className="ml-1 hidden font-mono text-[10px] opacity-70 sm:inline">⌘C</kbd>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* === Layer 2: Mosque (scales up and fades out on scroll) === */}
        <motion.div
          style={{
            scale: mosqueScale,
            opacity: mosqueOpacity,
          }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          {/* Mosque container — sized to avoid collision with overlay text.
              Upward shift creates breathing room for the text below. */}
          <div className="aspect-square w-[50vh] max-w-[480px] -translate-y-[5vh] sm:w-[45vh] lg:w-[42vh]">
            <FaisalMosque />
          </div>
        </motion.div>

        {/* === Layer 3: Overlay text (name + Islamabad connection, fades on scroll) === */}
        <motion.div
          style={{
            opacity: overlayOpacity,
            y: overlayY,
          }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 flex flex-col items-center gap-2 px-4 pb-[6vh] text-center sm:pb-[8vh]"
        >
          <h1 className="text-2xl font-light tracking-tight text-fg sm:text-3xl">
            {profile.name}
          </h1>
          <p className="text-sm text-fg-muted sm:text-base">
            Full Stack Developer · Islamabad, Pakistan
          </p>
          {/* Relevance paragraph: hidden on mobile to prevent crowding,
              visible on sm+ where there's enough vertical space */}
          <p className="hidden max-w-md text-xs leading-relaxed text-fg-subtle sm:block sm:text-sm">
            Based where one of the world&apos;s most iconic mosques rises against
            the Margalla Hills — building software the way its architect designed it:
            structure before surface.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              scroll to explore
            </span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-fg-subtle to-transparent" />
          </motion.div>
        </motion.div>

        {/* === Layer 2.5: Dual-gradient mask (above mosque z-20, below text z-30) ===
            Radial vignette feathers the mosque's canvas edges into the bg.
            Linear bottom fade ensures overlay text remains legible. */}
        <div className="pointer-events-none absolute inset-0 z-25 select-none">
          {/* Radial mask — fades the mosque container edges */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle 50% 50% at 50% 45%, transparent 20%, var(--bg) 100%)",
            }}
          />
          {/* Linear bottom fade — shields text for high typographic contrast */}
          <div
            className="absolute inset-x-0 bottom-0 h-[35vh]"
            style={{
              background:
                "linear-gradient(to top, var(--bg) 20%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
