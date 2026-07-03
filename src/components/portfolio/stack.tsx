"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
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
          <span>ls stack/</span>
        </motion.div>

        <motion.h2
          id="stack-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          Stack
        </motion.h2>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          {stack.map((item, i) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.05 }}
              className="group relative bg-bg-elevated p-6 transition-colors hover:bg-bg-subtle md:p-8"
            >
              <div className="mb-4 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                  {"// "}{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-accent">
                  {item.category}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-fg-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
