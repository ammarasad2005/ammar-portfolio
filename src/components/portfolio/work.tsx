"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { useSound } from "./providers/sound-provider";
import { CaseStudyDialog } from "./case-study";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Work() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { playClick, playOpen } = useSound();

  const openCase = (project: Project) => {
    playOpen();
    setSelected(project);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
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
          <span>ls work/ --details</span>
        </motion.div>

        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-fg-muted"
        >
          Three selected projects. Each is a real piece of work, with a real
          challenge, real approach, and real outcome. No logo soup.
        </motion.p>

        <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.li
              key={project.id}
              id={`work-card-${project.id}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.05 }}
              className="bg-bg-elevated"
            >
              <button
                type="button"
                data-case-study={project.id}
                onClick={() => openCase(project)}
                className="group relative flex h-full w-full flex-col p-6 text-left transition-colors hover:bg-bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-8"
                aria-label={`Read case study: ${project.name}`}
              >
                {/* Index */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-3xl font-light text-fg-subtle transition-colors group-hover:text-accent">
                    {project.index}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    <span
                      className={cn(
                        "h-1 w-1 rounded-full",
                        project.status === "active" && "bg-success",
                        project.status === "shipped" && "bg-accent",
                        project.status === "archived" && "bg-fg-subtle",
                      )}
                      aria-hidden="true"
                    />
                    {project.status}
                  </span>
                </div>

                {/* Project name + codename */}
                <div className="mb-2 flex items-baseline gap-2">
                  <h3 className="text-2xl font-semibold text-fg transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <span className="font-mono text-[10px] text-fg-subtle">
                    [{project.codename}]
                  </span>
                </div>

                {/* Year + role */}
                <div className="mb-4 font-mono text-[11px] text-fg-subtle">
                  {project.year} · {project.role}
                </div>

                {/* Tagline */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-fg-muted">
                  {project.tagline}
                </p>

                {/* Stack */}
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 font-mono text-xs text-fg-muted transition-colors group-hover:text-accent">
                  <span>read case study</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <CaseStudyDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
