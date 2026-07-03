"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";
import { useSound } from "./providers/sound-provider";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  const { playClick } = useSound();
  const [form, setForm] = useState({ name: "", email: "", challenge: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    playClick();
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setForm({ name: "", email: "", challenge: "" });
    toast.success("Message sent.", {
      description: "I read every message — I'll be in touch shortly.",
    });
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
          <span>ping contact</span>
        </motion.div>

        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl md:text-5xl"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
          className="mt-4 max-w-2xl text-sm text-fg-muted"
        >
          I read every message. Tell me who you are and what you&apos;re
          building — three questions is all it takes.
        </motion.p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_320px]">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle"
              >
                01. Who are you?
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full border-b border-border bg-transparent py-2 text-base text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle"
              >
                02. Where do I reply?
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="you@somewhere.com"
                className="w-full border-b border-border bg-transparent py-2 text-base text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="contact-challenge"
                className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-fg-subtle"
              >
                03. The challenge?
              </label>
              <textarea
                id="contact-challenge"
                required
                rows={5}
                value={form.challenge}
                onChange={(e) =>
                  setForm({ ...form, challenge: e.target.value })
                }
                placeholder="What are you building? What's the interesting problem?"
                className="w-full resize-none border-b border-border bg-transparent py-2 text-base text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-5 py-2.5 font-mono text-xs font-medium text-bg transition-all hover:translate-y-[-1px] hover:shadow-[0_8px_24px_-12px_var(--accent)] disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {submitting ? "sending…" : "send message"}
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </button>
          </motion.form>

          {/* Plain-text fallback */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.25 }}
            className="space-y-6 border-l border-border pl-6"
          >
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                {"// prefer email?"}
              </div>
              <button
                type="button"
                onClick={() => {
                  playClick();
                  void navigator.clipboard.writeText(profile.contact.email);
                  toast.success("Email copied to clipboard.");
                }}
                className="group font-mono text-sm text-fg transition-colors hover:text-accent"
              >
                {profile.contact.email}
              </button>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                {"// location"}
              </div>
              <p className="font-mono text-sm text-fg-muted">
                San Francisco, CA
                <br />
                Open to remote
              </p>
            </div>
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                {"// elsewhere"}
              </div>
              <ul className="space-y-1.5">
                {profile.contact.social.map((s) => (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={() => playClick()}
                      className="group inline-flex items-center gap-1.5 font-mono text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      <span>{s.label.toLowerCase()}</span>
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
