"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { useLocalTime } from "@/hooks/use-local-time";
import { useSound } from "./providers/sound-provider";
import { cn } from "@/lib/utils";

const ThreeScene = dynamic(() => import("./three-scene").then((m) => m.ThreeScene), {
  ssr: false,
  loading: () => null,
});

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const time = useLocalTime("America/Los_Angeles");
  const { playClick } = useSound();

  const scrollTo = (id: string) => {
    playClick();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-24 pt-32 sm:px-6 md:px-8"
    >
      <ThreeScene />

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 flex items-center gap-3 font-mono text-xs text-fg-subtle"
        >
          <span className="inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
          <span>{"// portfolio_v3.2.1"}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">last_commit: 2026-07-03</span>
        </motion.div>

        {/* Name (h1) with sr-only SEO prefix */}
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
            <div
              key={row.key}
              className="contents"
            >
              <dt className="font-mono text-xs text-fg-subtle">{row.key}:</dt>
              <dd className="font-mono text-xs text-fg-muted">
                {row.kind === "status" ? (
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-flex h-1.5 w-1.5 rounded-full bg-success"
                      aria-hidden="true"
                    />
                    <span>{row.value}</span>
                  </span>
                ) : row.kind === "time" ? (
                  <span aria-live="polite">
                    {time ?? <span className="text-fg-subtle">--:--:--</span>}{" "}
                    <span className="text-fg-subtle">PST</span>
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
            <ArrowDown
              className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
            <kbd className="ml-1 hidden font-mono text-[10px] opacity-70 sm:inline">⌘W</kbd>
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs font-medium text-fg-muted transition-all hover:translate-y-[-1px] hover:border-accent hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            get in touch
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
            <kbd className="ml-1 hidden font-mono text-[10px] opacity-70 sm:inline">⌘C</kbd>
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
          scroll
        </span>
        <div className="h-8 w-px animate-pulse bg-gradient-to-b from-fg-subtle to-transparent" />
      </motion.div>
    </section>
  );
}
