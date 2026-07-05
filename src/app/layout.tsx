import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/portfolio/providers/theme-provider";
import { SoundProvider } from "@/components/portfolio/providers/sound-provider";
import { CustomCursor } from "@/components/portfolio/cursor";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { KeyboardShortcuts } from "@/components/portfolio/keyboard-shortcuts";
import { CommandPalette } from "@/components/portfolio/command-palette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ammar Asad — Full Stack Developer",
  description:
    "Muhammad Ammar Asad is a Full Stack Developer and CS undergrad at FAST-NUCES Islamabad, building web apps and agentic systems with TypeScript, React, Next.js, Node.js, and Supabase. Currently seeking a full-stack internship.",
  keywords: [
    "Ammar Asad",
    "Muhammad Ammar Asad",
    "Full Stack Developer",
    "Islamabad",
    "Pakistan",
    "FAST-NUCES",
    "Agentic Systems",
    "TypeScript",
    "React",
    "Next.js",
    "Supabase",
    "MongoDB",
    "Chrome Extension",
  ],
  authors: [{ name: "Muhammad Ammar Asad" }],
  openGraph: {
    title: "Ammar Asad — Full Stack Developer",
    description:
      "Full Stack Developer building web apps and agentic systems in Islamabad. CS undergrad at FAST-NUCES. Currently seeking a full-stack internship.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ammar Asad — Full Stack Developer",
    description:
      "Full Stack Developer building web apps and agentic systems in Islamabad. CS undergrad at FAST-NUCES. Currently seeking a full-stack internship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SoundProvider>
            <CommandPalette>
              <a href="#main" className="skip-link">
                skip to content
              </a>
              <ScrollProgress />
              <CustomCursor />
              <KeyboardShortcuts />
              {children}
              <Toaster />
            </CommandPalette>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
