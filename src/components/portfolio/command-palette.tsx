"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useSound } from "./providers/sound-provider";
import { profile, projects } from "@/lib/data";

type Cmd = {
  id: string;
  label: string;
  group: "PAGES" | "PROJECTS" | "ACTIONS" | "LINKS";
  hint?: string;
  keywords?: string;
  action: () => void | Promise<void>;
};

type CommandPaletteContextValue = {
  open: boolean;
  setOpen: (updater: (prev: boolean) => boolean) => void;
};

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(
  null,
);

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error(
      "useCommandPalette must be used within a CommandPaletteProvider",
    );
  }
  return ctx;
}

export function CommandPalette({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const { setTheme, resolvedTheme } = useTheme();
  const { toggle: toggleSound, playClick, playType, playOpen, playClose } =
    useSound();
  const router = useRouter();

  const commands = useMemo<Cmd[]>(() => {
    const scrollTo = (id: string) => () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const pages: Cmd[] = [
      { id: "p-about", label: "About", group: "PAGES", hint: "↑", action: scrollTo("about") },
      { id: "p-stack", label: "Stack", group: "PAGES", hint: "↑", action: scrollTo("stack") },
      { id: "p-work", label: "Work", group: "PAGES", hint: "↑", action: scrollTo("work") },
      { id: "p-experience", label: "Experience", group: "PAGES", hint: "↑", action: scrollTo("experience") },
      { id: "p-writing", label: "Writing", group: "PAGES", hint: "↑", action: scrollTo("writing") },
      { id: "p-contact", label: "Contact", group: "PAGES", hint: "↑", action: scrollTo("contact") },
    ];

    const projectCmds: Cmd[] = projects.map((p) => ({
      id: `proj-${p.id}`,
      label: p.name,
      group: "PROJECTS",
      hint: "↵",
      keywords: `${p.tagline} ${p.stack.join(" ")} ${p.role}`,
      action: () => {
        router.push(`#work-${p.id}`);
        const el = document.getElementById(`work-card-${p.id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          // Trigger case-study open after scroll
          setTimeout(() => {
            const btn = el.querySelector<HTMLButtonElement>(
              `[data-case-study="${p.id}"]`,
            );
            btn?.click();
          }, 500);
        }
      },
    }));

    const actions: Cmd[] = [
      {
        id: "a-theme",
        label: "Toggle theme",
        group: "ACTIONS",
        hint: "T",
        action: () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
      },
      {
        id: "a-sound",
        label: "Toggle sound",
        group: "ACTIONS",
        hint: "S",
        action: () => {
          toggleSound();
          playClick();
        },
      },
      {
        id: "a-copy-email",
        label: "Copy email address",
        group: "ACTIONS",
        hint: "C",
        action: () => void navigator.clipboard.writeText(profile.contact.email),
      },
      {
        id: "a-resume",
        label: "Download résumé",
        group: "ACTIONS",
        hint: "R",
        action: () => {
          // Placeholder — would link to actual résumé
          const a = document.createElement("a");
          a.href = "#";
          a.click();
        },
      },
    ];

    const links: Cmd[] = profile.contact.social.map((s) => ({
      id: `l-${s.key}`,
      label: s.label,
      group: "LINKS",
      hint: "↗",
      action: () => window.open(s.href, "_blank", "noopener,noreferrer"),
    }));

    return [...pages, ...projectCmds, ...actions, ...links];
  }, [setTheme, resolvedTheme, toggleSound, playClick, router]);

  const filtered = useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) =>
      `${c.label} ${c.group} ${c.keywords ?? ""}`
        .toLowerCase()
        .includes(q),
    );
  }, [query, commands]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (open) {
      playOpen();
      setQuery("");
      setActiveIndex(0);
    } else {
      playClose();
    }
  }, [open, playOpen, playClose]);

  // Reset activeIndex when filtered changes
  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(0);
  }, [filtered.length, activeIndex]);

  const grouped = useMemo(() => {
    const g: Record<Cmd["group"], Cmd[]> = {
      PAGES: [],
      PROJECTS: [],
      ACTIONS: [],
      LINKS: [],
    };
    for (const c of filtered) g[c.group].push(c);
    return g;
  }, [filtered]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      playType();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      playType();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const cmd = filtered[activeIndex];
      if (cmd) {
        playClick();
        setOpen(false);
        cmd.action();
      }
    }
  };

  // Track flat index for keyboard nav
  let flatIdx = -1;

  return (
    <CommandPaletteContext.Provider value={{ open, setOpen }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-xl gap-0 overflow-hidden border-border bg-bg-elevated p-0 sm:rounded-xl"
          onKeyDown={onKey}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>Command palette</DialogTitle>
            <DialogDescription>
              Search for pages, projects, actions, and links.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 border-b border-border px-4">
            <span className="font-mono text-xs text-fg-subtle">$</span>
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                playType();
              }}
              placeholder="type a command or search…"
              className="flex-1 bg-transparent py-4 font-mono text-sm text-fg placeholder:text-fg-subtle focus:outline-none"
              aria-label="Command input"
              autoComplete="off"
              spellCheck={false}
            />
            <kbd className="hidden rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[10px] text-fg-subtle sm:inline">
              ESC
            </kbd>
          </div>
          <div className="max-h-[60vh] overflow-y-auto py-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center font-mono text-xs text-fg-subtle">
                no commands found.
              </div>
            ) : (
              (Object.keys(grouped) as Cmd["group"][]).map((group) => {
                const items = grouped[group];
                if (items.length === 0) return null;
                return (
                  <div key={group} className="py-1">
                    <div className="px-4 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                      {"// {group}"}
                    </div>
                    {items.map((cmd) => {
                      flatIdx += 1;
                      const idx = flatIdx;
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={cmd.id}
                          type="button"
                          onMouseEnter={() => setActiveIndex(idx)}
                          onClick={() => {
                            playClick();
                            setOpen(false);
                            cmd.action();
                          }}
                          className={cn(
                            "flex w-full items-center justify-between px-4 py-2 text-left text-sm transition-colors",
                            isActive
                              ? "bg-bg-subtle text-fg"
                              : "text-fg-muted hover:bg-bg-subtle hover:text-fg",
                          )}
                        >
                          <span>{cmd.label}</span>
                          {cmd.hint && (
                            <kbd
                              className={cn(
                                "font-mono text-[10px]",
                                isActive ? "text-accent" : "text-fg-subtle",
                              )}
                            >
                              {cmd.hint}
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>
          <div className="flex items-center justify-between border-t border-border bg-bg px-4 py-2 font-mono text-[10px] text-fg-subtle">
            <span>
              ↑↓ navigate · ↵ select · esc close
            </span>
            <span>{filtered.length} commands</span>
          </div>
        </DialogContent>
      </Dialog>
    </CommandPaletteContext.Provider>
  );
}
