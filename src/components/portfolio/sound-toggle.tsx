"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "./providers/sound-provider";
import { cn } from "@/lib/utils";

export function SoundToggle({ className }: { className?: string }) {
  const { enabled, toggle, playClick } = useSound();

  return (
    <button
      type="button"
      aria-label={`${enabled ? "Mute" : "Enable"} sound effects (press S)`}
      title={`${enabled ? "Mute" : "Enable"} sound (S)`}
      onClick={() => {
        toggle();
        if (!enabled) playClick();
      }}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      {enabled ? (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      ) : (
        <VolumeX className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
