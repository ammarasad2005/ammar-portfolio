"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
          <span>cat experience/career.log</span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-fg-muted"
        >
          Two tiers: what I&apos;m doing now, and what I did before. No CV dump,
          no ten-entry timeline. The full history is on LinkedIn.
        </motion.p>

        <div className="mt-12 space-y-12">
          {experience.map((item, i) => (
            <motion.article
              key={`${item.company}-${item.dates}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.05 }}
              className="grid gap-4 border-t border-border pt-8 md:grid-cols-[200px_1fr]"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {"// {item.tier}"}
                </div>
                <div className="mt-2 font-mono text-xs text-fg-muted">
                  {item.dates}
                </div>
                <div
                  className={cn(
                    "mt-3 inline-flex items-center gap-1.5 rounded border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider",
                    item.status === "RUNNING"
                      ? "border-success/30 bg-success/10 text-success"
                      : "border-border text-fg-subtle",
                  )}
                >
                  <span
                    className={cn(
                      "h-1 w-1 rounded-full",
                      item.status === "RUNNING"
                        ? "bg-success"
                        : "bg-fg-subtle",
                    )}
                    aria-hidden="true"
                  />
                  {item.status}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-fg">
                  {item.role}{" "}
                  <span className="text-fg-muted">· {item.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
