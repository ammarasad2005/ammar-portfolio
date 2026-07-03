"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative px-4 py-24 sm:px-6 md:px-8 md:py-32"
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
          <span>man about</span>
        </motion.div>

        <motion.h2
          id="about-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          <span className="sr-only">About Alex Rivera</span>
          <span aria-hidden="true">About</span>
        </motion.h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_auto]">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
            className="max-w-2xl space-y-6"
          >
            <p className="text-lg leading-relaxed text-fg-muted">
              {profile.aboutLead}
            </p>
            {profile.aboutBody.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-fg-muted">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Metadata grid */}
          <motion.dl
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
            className="grid min-w-[260px] grid-cols-2 gap-px border border-border bg-border md:grid-cols-1"
          >
            {profile.metadata.map((item) => (
              <div
                key={item.label}
                className="bg-bg-elevated p-4"
              >
                <dt className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm text-fg">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
