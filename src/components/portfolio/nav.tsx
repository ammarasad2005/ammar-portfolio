"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { useSound } from "./providers/sound-provider";
import { ThemeToggle } from "./theme-toggle";
import { Command, Menu } from "lucide-react";
import { useCommandPalette } from "./command-palette";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = ["hero", "about", "stack", "work", "experience", "writing", "contact"];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playClick } = useSound();
  const { setOpen } = useCommandPalette();
  const active = useScrollSpy(SECTION_IDS, 0.3);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      // Hide on scroll down, show on scroll up (only after 100px)
      if (y > 100 && y > lastY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        hidden && scrolled ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-border bg-bg-elevated/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg-elevated/60"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("hero")}
            className="group flex items-center gap-2"
            aria-label="Go to top"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded border border-border font-mono text-xs font-medium text-fg-muted transition-colors group-hover:border-accent group-hover:text-accent">
              AR.
            </span>
            <span className="hidden font-mono text-[11px] text-fg-subtle sm:inline">
              {"// "}{active || "home"}
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNav(link.id)}
                  className={cn(
                    "relative px-3 py-1.5 font-mono text-xs transition-colors",
                    isActive
                      ? "text-accent"
                      : "text-fg-muted hover:text-fg",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label.toLowerCase()}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-accent" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                playClick();
                setOpen(true);
              }}
              className="hidden h-9 gap-1.5 px-2.5 font-mono text-xs text-fg-muted hover:bg-bg-subtle hover:text-fg sm:flex"
              aria-label="Open command palette (⌘K)"
            >
              <Command className="h-3.5 w-3.5" aria-hidden="true" />
              <span>⌘K</span>
            </Button>
            <button
              type="button"
              onClick={() => {
                playClick();
                setOpen(true);
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg sm:hidden"
              aria-label="Open command palette"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
