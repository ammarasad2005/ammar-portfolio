"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { writing } from "@/lib/data";
import { useSound } from "./providers/sound-provider";

const EASE = [0.22, 1, 0.36, 1] as const;

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Writing() {
  const { playClick } = useSound();

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="relative border-t border-border px-4 py-24 sm:px-6 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-8 flex items-center gap-3 font-mono text-xs text-fg-subtle"
        >
          <span>$</span>
          <span>cat writing/</span>
        </motion.div>

        <motion.h2
          id="writing-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          Writing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-fg-muted"
        >
          Long-form essays on engineering culture, infrastructure, and
          developer experience. I write when I have something to say, not on a
          schedule.
        </motion.p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {writing.map((essay, i) => (
            <motion.li
              key={essay.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.15 + i * 0.05 }}
            >
              <a
                href={`#writing-${essay.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  playClick();
                  // Placeholder — would route to /writing/[slug]
                }}
                className="group grid items-center gap-2 py-5 transition-colors hover:bg-bg-subtle md:grid-cols-[140px_1fr_auto] md:gap-6 md:px-3"
              >
                <div className="flex items-center gap-2 font-mono text-[11px] text-fg-subtle">
                  <time dateTime={essay.date}>{formatDate(essay.date)}</time>
                  <span>·</span>
                  <span>{essay.minRead} min</span>
                </div>
                <div>
                  <h3 className="text-base font-medium text-fg transition-colors group-hover:text-accent">
                    {essay.title}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">
                    {essay.excerpt}
                  </p>
                </div>
                <div className="hidden items-center gap-3 md:flex">
                  <div className="flex gap-1.5">
                    {essay.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
