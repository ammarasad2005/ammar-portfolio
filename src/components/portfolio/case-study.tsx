"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { type Project } from "@/lib/data";
import { useSound } from "./providers/sound-provider";

export function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { playClose } = useSound();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      playClose();
      onClose();
    }
  };

  // Lock body scroll when open
  useEffect(() => {
    if (project) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-border bg-bg-elevated p-0 sm:max-w-3xl sm:rounded-xl">
        <DialogHeader className="border-b border-border p-6 sm:p-8">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-fg-subtle">
            <span>work</span>
            <span>/</span>
            <span>{project.id}</span>
            <span className="ml-auto">{project.year}</span>
          </div>
          <DialogTitle className="text-3xl font-semibold text-fg sm:text-4xl">
            {project.name}
          </DialogTitle>
          <DialogDescription className="mt-2 text-base text-fg-muted">
            {project.caseStudy.context}
          </DialogDescription>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-fg-subtle">
              {project.role}
            </span>
            <span className="text-fg-subtle">·</span>
            <span className="font-mono text-[11px] text-fg-subtle">
              {project.codename}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-fg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </DialogHeader>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-px border-b border-border bg-border sm:grid-cols-4">
          {project.caseStudy.metrics.map((metric) => (
            <div key={metric.label} className="bg-bg p-4 sm:p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                {metric.label}
              </div>
              <div className="mt-1 text-lg font-semibold text-accent sm:text-xl">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-10 p-6 sm:p-8">
          {project.caseStudy.sections.map((section, i) => (
            <article key={section.heading}>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                <span>§ {String(i + 1).padStart(2, "0")}</span>
                <span>·</span>
                <span>{section.heading.toLowerCase()}</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-fg">
                {section.heading}
              </h3>
              <div className="space-y-4">
                {section.body.map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="text-sm leading-relaxed text-fg-muted"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Tags */}
        <div className="border-t border-border p-6 sm:p-8">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
            {"// tags"}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-fg-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
