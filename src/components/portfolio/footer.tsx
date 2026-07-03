"use client";

import { useEffect, useState } from "react";
import { useLocalTime, useCurrentDate } from "@/hooks/use-local-time";
import { SoundToggle } from "./sound-toggle";
import { ThemeToggle } from "./theme-toggle";
import { useSound } from "./providers/sound-provider";
import { useCommandPalette } from "./command-palette";

export function Footer() {
  const time = useLocalTime("America/Los_Angeles");
  const date = useCurrentDate();
  const { playClick } = useSound();
  const { setOpen } = useCommandPalette();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <footer
      role="contentinfo"
      className="mt-auto border-t border-border bg-bg-elevated px-4 py-12 sm:px-6 md:px-8"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* System status panel */}
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              {"// system status"}
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-1.5 font-mono text-[11px] sm:grid-cols-2 md:grid-cols-[max-content_1fr]">
              <div className="contents">
                <dt className="text-fg-subtle">build:</dt>
                <dd className="text-fg-muted">v3.2.1 · abc1234</dd>
              </div>
              <div className="contents">
                <dt className="text-fg-subtle">deployed:</dt>
                <dd className="text-fg-muted">
                  {mounted && date ? `${date} 14:32 UTC` : "—"}
                </dd>
              </div>
              <div className="contents">
                <dt className="text-fg-subtle">local:</dt>
                <dd className="text-fg-muted">
                  {mounted && time ? (
                    <span>
                      {time} PST · San Francisco
                    </span>
                  ) : (
                    "—"
                  )}
                </dd>
              </div>
              <div className="contents">
                <dt className="text-fg-subtle">status:</dt>
                <dd className="text-fg-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="inline-flex h-1 w-1 animate-pulse rounded-full bg-success"
                      aria-hidden="true"
                    />
                    operational
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          {/* Toggles */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                playClick();
                setOpen(true);
              }}
              className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-3 font-mono text-[11px] text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
              <span>menu</span>
            </button>
            <SoundToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-[11px] text-fg-subtle">
            © {mounted ? new Date().getFullYear() : "2026"} Alex Rivera · Built
            with Next.js
          </div>
          <div className="font-mono text-[11px] text-fg-subtle">
            <span className="italic">Hand-coded with intention.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
