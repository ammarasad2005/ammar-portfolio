"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

type SoundContextValue = {
  enabled: boolean;
  toggle: () => void;
  playClick: () => void;
  playType: () => void;
  playOpen: () => void;
  playClose: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("terminal-atelier-sound");
    if (stored === "on") setEnabled(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("terminal-atelier-sound", enabled ? "on" : "off");
  }, [enabled, mounted]);

  const getCtx = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!ctxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!Ctor) return null;
      ctxRef.current = new Ctor();
    }
    if (ctxRef.current.state === "suspended") {
      void ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const playTone = useCallback(
    (
      freq: number,
      duration: number,
      type: OscillatorType = "sine",
      gainValue = 0.04,
    ) => {
      if (!enabled) return;
      const ctx = getCtx();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + 0.005);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + duration,
      );
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    },
    [enabled, getCtx],
  );

  const playClick = useCallback(() => playTone(880, 0.08, "sine", 0.05), [playTone]);
  const playType = useCallback(() => playTone(620, 0.04, "triangle", 0.03), [playTone]);
  const playOpen = useCallback(() => playTone(523, 0.12, "sine", 0.05), [playTone]);
  const playClose = useCallback(() => playTone(392, 0.12, "sine", 0.05), [playTone]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) {
        // Initialize audio context on user gesture
        const ctx = getCtx();
        if (ctx && ctx.state === "suspended") void ctx.resume();
      }
      return next;
    });
  }, [getCtx]);

  return (
    <SoundContext.Provider
      value={{ enabled, toggle, playClick, playType, playOpen, playClose }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return ctx;
}
