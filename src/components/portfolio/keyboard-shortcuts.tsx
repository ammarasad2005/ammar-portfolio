"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useSound } from "./providers/sound-provider";
import { useCommandPalette } from "./command-palette";

/**
 * Global keyboard shortcuts:
 *  - ⌘K / Ctrl+K / / → open command palette
 *  - t → toggle theme
 *  - s → toggle sound
 *  - c → copy email
 *  - r → download résumé (placeholder)
 *  - Esc → close command palette (handled by Dialog)
 *
 * Shortcuts are disabled while typing in an input/textarea/select/contenteditable.
 */
export function KeyboardShortcuts() {
  const { setTheme, resolvedTheme } = useTheme();
  const { toggle: toggleSound, playClick } = useSound();
  const { setOpen } = useCommandPalette();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable ||
          target.getAttribute("role") === "combobox");

      // ⌘K / Ctrl+K — always available
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setOpen((o) => !o);
        return;
      }

      if (isTyping) return;

      // / — open command palette
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setOpen(true);
        return;
      }

      // t — toggle theme
      if (e.key === "t" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
        return;
      }

      // s — toggle sound
      if (e.key === "s" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        toggleSound();
        playClick();
        return;
      }

      // c — copy email
      if (e.key === "c" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        void navigator.clipboard.writeText("hello@alexrivera.dev").then(() => {
          // Toast handled elsewhere if needed
        });
        return;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setTheme, resolvedTheme, toggleSound, playClick, setOpen]);

  return null;
}
